/**
 * Service Helper untuk pemanggilan langsung Langflow REST API.
 * Digunakan sebagai alternatif / fallback dari embedded chat widget.
 */

export interface LangflowRunPayload {
  inputValue: string;
  inputType?: 'chat' | 'text';
  outputType?: 'chat' | 'text';
  tweaks?: Record<string, unknown>;
  stream?: boolean;
}

export interface LangflowResponse {
  sessionId?: string;
  outputs?: Array<{
    inputs?: Record<string, unknown>;
    outputs?: Array<{
      results?: {
        message?: {
          text?: string;
          data?: Record<string, unknown>;
        };
      };
      artifacts?: Record<string, unknown>;
      messages?: Array<{
        message?: string;
        type?: string;
      }>;
    }>;
  }>;
  result?: string;
  detail?: string;
}

class LangflowService {
  private baseUrl: string;
  private flowId: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = (import.meta.env.VITE_LANGFLOW_BASE_URL || 'http://127.0.0.1:7860').replace(/\/$/, '');
    this.flowId = import.meta.env.VITE_LANGFLOW_FLOW_ID || 'd7581259-102b-4c0f-ae58-43f2086a9268';
    this.apiKey = import.meta.env.VITE_LANGFLOW_API_KEY || '';
  }

  /**
   * Menjalankan Flow Langflow via HTTP POST endpoint
   */
  async runFlow(payload: LangflowRunPayload): Promise<{ text: string; raw: LangflowResponse }> {
    const endpoint = `${this.baseUrl}/api/v1/run/${this.flowId}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    // Tambahkan autentikasi x-api-key jika API Key disediakan
    if (this.apiKey) {
      headers['x-api-key'] = this.apiKey;
    }

    const body = {
      input_value: payload.inputValue,
      input_type: payload.inputType || 'chat',
      output_type: payload.outputType || 'chat',
      tweaks: payload.tweaks || {},
      stream: payload.stream || false,
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        let errorDetails = '';
        try {
          const errJson = await response.json();
          errorDetails = errJson.detail || JSON.stringify(errJson);
        } catch {
          errorDetails = response.statusText;
        }

        if (response.status === 403) {
          throw new Error(
            `Error 403 Forbidden: API Key Langflow tidak valid atau tidak memiliki izin akses flow "${this.flowId}". Pastikan VITE_LANGFLOW_API_KEY terisi di .env.`
          );
        }

        throw new Error(`Langflow API Error (${response.status}): ${errorDetails}`);
      }

      const data: LangflowResponse = await response.json();
      const extractedText = this.extractMessageText(data);

      return {
        text: extractedText,
        raw: data,
      };
    } catch (error) {
      console.error('[LangflowService] Request failed:', error);
      throw error;
    }
  }

  /**
   * Mengekstrak teks balasan dari struktur JSON response Langflow
   */
  private extractMessageText(data: LangflowResponse): string {
    try {
      const outputObj = data?.outputs?.[0]?.outputs?.[0];
      if (outputObj?.results?.message?.text) {
        return outputObj.results.message.text;
      }
      if (outputObj?.messages?.[0]?.message) {
        return outputObj.messages[0].message;
      }
      if (typeof data?.result === 'string') {
        return data.result;
      }
      return 'Respons diterima dari model tanpa format teks langsung.';
    } catch {
      return 'Gagal mengurai respons dari server Langflow.';
    }
  }
}

export const langflowService = new LangflowService();
