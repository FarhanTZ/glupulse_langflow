import React, { useEffect } from 'react';
import { ArrowDownRight } from 'lucide-react';

export const LangflowChatWidget: React.FC = () => {
  const baseUrl = import.meta.env.VITE_LANGFLOW_BASE_URL || 'http://127.0.0.1:7860';
  const flowId = import.meta.env.VITE_LANGFLOW_FLOW_ID || 'd7581259-102b-4c0f-ae58-43f2086a9268';
  const apiKey = import.meta.env.VITE_LANGFLOW_API_KEY || '';

  useEffect(() => {
    // Load script bundle langflow embedded chat jika belum dimuat
    const scriptId = 'langflow-chat-bundle';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.jsdelivr.net/gh/langflow-ai/langflow-embedded-chat@v1.0.8/dist/build/static/js/bundle.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Floating Helper Hint */}
      <div className="fixed bottom-24 right-6 z-40 hidden sm:flex items-center gap-2 bg-slate-900/95 text-white text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-2xl border border-cyan-500/40 backdrop-blur-xl animate-bounce">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
          Buka AI Chat di sini
        </span>
        <ArrowDownRight className="w-4 h-4 text-cyan-400" />
      </div>

      {/* Embedded Langflow Custom Web Component */}
      <langflow-chat
        window_title="GluPulse AI Clinical Support"
        flow_id={flowId}
        host_url={baseUrl}
        api_key={apiKey}
      />
    </>
  );
};
