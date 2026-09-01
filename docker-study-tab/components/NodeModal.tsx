"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, Circle, Save } from "lucide-react";

interface NodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  nodeName: string;
  nodeId: string;
  trackId: string;
  isCompleted: boolean;
  onToggleCompleted: () => void;
}

export default function NodeModal({
  isOpen,
  onClose,
  nodeName,
  nodeId,
  trackId,
  isCompleted,
  onToggleCompleted,
}: NodeModalProps) {
  const [note, setNote] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Load note when modal opens or node changes
  useEffect(() => {
    if (isOpen) {
      const savedNote = localStorage.getItem(`roadmap-notes-${trackId}-${nodeId}`);
      if (savedNote) {
        setNote(savedNote);
      } else {
        setNote("");
      }
    }
  }, [isOpen, trackId, nodeId]);

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem(`roadmap-notes-${trackId}-${nodeId}`, note);
    setTimeout(() => setIsSaving(false), 300); // UI feedback
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 rounded-xl shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] dark:shadow-[8px_8px_0px_0px_rgba(244,244,245,0.1)] flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-zinc-900 dark:border-zinc-700 bg-yellow-300 dark:bg-zinc-800 rounded-t-xl">
          <h2 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-100 pr-8 truncate">
            {nodeName}
          </h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-zinc-900 dark:text-zinc-100" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 overflow-y-auto flex flex-col gap-4">
          <div className="flex flex-col gap-2 h-full min-h-[250px]">
            <label className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
              Tài liệu / Ghi chú (Documents & Notes)
            </label>
            <textarea
              className="flex-1 w-full p-4 border-2 border-zinc-900 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 font-mono text-sm"
              placeholder="Dán link tài liệu, code snippet, hoặc ghi chú của bạn vào đây..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t-2 border-zinc-900 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 rounded-b-xl flex items-center justify-between gap-4">
          
          <button
            onClick={onToggleCompleted}
            className={`flex items-center gap-2 px-4 py-2 font-bold rounded-lg border-2 transition-all ${
              isCompleted 
                ? 'bg-green-400 border-zinc-900 text-zinc-900 dark:bg-green-500 dark:border-zinc-100' 
                : 'bg-zinc-200 border-zinc-900 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-700'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Đã hoàn thành (Done)
              </>
            ) : (
              <>
                <Circle className="w-5 h-5" />
                Đánh dấu Done
              </>
            )}
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 border-2 border-zinc-900 text-zinc-900 font-bold rounded-lg transition-all active:translate-y-1"
          >
            <Save className="w-5 h-5" />
            {isSaving ? "Đã lưu!" : "Lưu ghi chú"}
          </button>

        </div>
      </div>
    </div>
  );
}
