import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden bg-gray-900 dark:bg-gray-950">
      {language && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 dark:bg-gray-900/50 text-gray-400 text-sm">
          <span>{language}</span>
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1.5 px-2 py-1 rounded hover:bg-gray-700/50",
              copied && "text-green-400"
            )}
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span className="text-xs">
              {copied ? "Copié !" : "Copier"}
            </span>
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300">{code}</code>
      </pre>
    </div>
  );
};