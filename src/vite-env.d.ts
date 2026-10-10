/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LANGFLOW_BASE_URL: string;
  readonly VITE_LANGFLOW_FLOW_ID: string;
  readonly VITE_LANGFLOW_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace JSX {
  interface IntrinsicElements {
    'langflow-chat': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      window_title?: string;
      flow_id?: string;
      host_url?: string;
      api_key?: string;
      chat_inputs?: string;
      chat_input_field?: string;
      tweaks?: string;
      online?: boolean;
    };
  }
}
