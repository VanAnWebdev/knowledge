"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";

import { ROADMAPS } from "./data";

export default function LearnPage() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState(ROADMAPS[0].id);

  useEffect(() => {
    const saved = localStorage.getItem("roadmap-progress");
    if (saved) {
      try {
        setCompleted(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse roadmap progress", e);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("roadmap-progress", JSON.stringify(completed));
    }
  }, [completed, mounted]);

  const toggleTopic = (trackId: string, topicId: string) => {
    const key = `${trackId}-${topicId}`;
    setCompleted((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!mounted) return null;

  const activeTrack = ROADMAPS.find(t => t.id === activeTrackId) || ROADMAPS[0];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">Developer Roadmaps</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Step-by-step guides and paths to learn different technologies.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-16 pb-6 border-b-2 border-dashed border-zinc-200 dark:border-zinc-800">
        {ROADMAPS.map(track => {
          const isActive = activeTrackId === track.id;
          return (
            <button
              key={track.id}
              onClick={() => setActiveTrackId(track.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all border-2 ${
                isActive 
                  ? 'bg-zinc-900 text-zinc-50 border-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-zinc-100 dark:text-zinc-900 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5] -translate-y-1'
                  : 'bg-white dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 hover:text-zinc-900 dark:hover:border-zinc-100 dark:hover:text-zinc-100 hover:shadow-[4px_4px_0px_0px_#18181b] dark:hover:shadow-[4px_4px_0px_0px_#f4f4f5] hover:-translate-y-1'
              }`}
            >
              {track.title}
            </button>
          );
        })}
      </div>

      {/* Flowchart */}
      <div className="relative w-full max-w-5xl mx-auto pb-20">
        {/* Vertical Center Line (Spine) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 border-l-4 border-dashed border-zinc-300 dark:border-zinc-700 md:-translate-x-1/2 z-0" />
        
        <div className="flex flex-col gap-12 md:gap-8 w-full relative z-10">
          {activeTrack.topics.map((topic, index) => {
            const isLeft = index % 2 === 0;
            const isCompleted = completed[`${activeTrack.id}-${topic.id}`];
            const hasSubTopics = topic.subTopics && topic.subTopics.length > 0;

            return (
              <div key={topic.id} className="relative w-full">
                
                {/* --- DESKTOP LAYOUT --- */}
                <div className="hidden md:flex w-full">
                  {isLeft ? (
                    // LEFT SIDE
                    <div className="flex w-1/2 pr-8 justify-end items-center">
                      
                      {hasSubTopics && (
                        <div className="flex flex-col gap-3 relative mr-8">
                          {/* Vertical line for sub-topics */}
                          <div className="absolute -right-4 top-[24px] bottom-[24px] border-r-4 border-dashed border-zinc-300 dark:border-zinc-700"></div>
                          {/* Horizontal line to Main Node */}
                          <div className="absolute -right-8 top-1/2 w-4 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700"></div>
                          
                          {topic.subTopics!.map(sub => {
                            const isSubCompleted = completed[`${activeTrack.id}-${sub.id}`];
                            return (
                              <div key={sub.id} className="relative flex items-center justify-end">
                                <button
                                  onClick={() => toggleTopic(activeTrack.id, sub.id)}
                                  className={`group w-48 p-2.5 flex items-center justify-between text-left font-bold rounded-lg border-2 transition-all 
                                    hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#18181b] dark:hover:shadow-[3px_3px_0px_0px_#f4f4f5]
                                    active:translate-x-0.5 active:translate-y-0.5 active:shadow-none dark:active:shadow-none
                                    ${isSubCompleted 
                                      ? 'bg-green-300 border-zinc-900 text-zinc-900 shadow-[2px_2px_0px_0px_#18181b] dark:bg-green-400 dark:border-zinc-100 dark:shadow-[2px_2px_0px_0px_#f4f4f5]' 
                                      : 'bg-yellow-300 border-zinc-900 text-zinc-900 shadow-[2px_2px_0px_0px_#18181b] dark:bg-yellow-400 dark:border-zinc-100 dark:shadow-[2px_2px_0px_0px_#f4f4f5]'
                                    }
                                  `}
                                >
                                  <span className="truncate pr-2 text-xs leading-tight">{sub.name}</span>
                                  {isSubCompleted ? (
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-zinc-900" />
                                  ) : (
                                    <Circle className="w-4 h-4 shrink-0 text-zinc-900/30 group-hover:text-zinc-900/60 transition-colors" />
                                  )}
                                </button>
                                {/* Horizontal line to vertical spine */}
                                <div className="w-4 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700"></div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Main Node */}
                      <div className="relative z-10 w-56 shrink-0">
                        {/* Horizontal line to center spine */}
                        <div className="absolute -right-8 top-1/2 w-8 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700 -z-10"></div>
                        
                        <button 
                          onClick={() => toggleTopic(activeTrack.id, topic.id)}
                          className={`group w-full p-4 flex items-center justify-between text-left font-bold rounded-xl border-2 transition-all 
                            hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#18181b] dark:hover:shadow-[6px_6px_0px_0px_#f4f4f5]
                            active:translate-x-1 active:translate-y-1 active:shadow-none dark:active:shadow-none
                            ${isCompleted 
                              ? 'bg-green-400 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-green-500 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5]' 
                              : 'bg-yellow-300 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-yellow-400 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5]'
                            }
                          `}
                        >
                          <span className="truncate pr-3 text-[15px]">{topic.name}</span>
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-zinc-900" />
                          ) : (
                            <Circle className="w-6 h-6 shrink-0 text-zinc-900/30 group-hover:text-zinc-900/60 transition-colors" />
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    // RIGHT SIDE
                    <div className="flex w-1/2 pl-8 justify-start items-center ml-auto">
                      
                      {/* Main Node */}
                      <div className="relative z-10 w-56 shrink-0">
                        {/* Horizontal line to center spine */}
                        <div className="absolute -left-8 top-1/2 w-8 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700 -z-10"></div>
                        
                        <button 
                          onClick={() => toggleTopic(activeTrack.id, topic.id)}
                          className={`group w-full p-4 flex items-center justify-between text-left font-bold rounded-xl border-2 transition-all 
                            hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#18181b] dark:hover:shadow-[6px_6px_0px_0px_#f4f4f5]
                            active:translate-x-1 active:translate-y-1 active:shadow-none dark:active:shadow-none
                            ${isCompleted 
                              ? 'bg-green-400 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-green-500 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5]' 
                              : 'bg-yellow-300 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-yellow-400 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5]'
                            }
                          `}
                        >
                          <span className="truncate pr-3 text-[15px]">{topic.name}</span>
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 shrink-0 text-zinc-900" />
                          ) : (
                            <Circle className="w-6 h-6 shrink-0 text-zinc-900/30 group-hover:text-zinc-900/60 transition-colors" />
                          )}
                        </button>
                      </div>

                      {hasSubTopics && (
                        <div className="flex flex-col gap-3 relative ml-8">
                          {/* Vertical line for sub-topics */}
                          <div className="absolute -left-4 top-[24px] bottom-[24px] border-l-4 border-dashed border-zinc-300 dark:border-zinc-700"></div>
                          {/* Horizontal line to Main Node */}
                          <div className="absolute -left-8 top-1/2 w-4 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700"></div>
                          
                          {topic.subTopics!.map(sub => {
                            const isSubCompleted = completed[`${activeTrack.id}-${sub.id}`];
                            return (
                              <div key={sub.id} className="relative flex items-center justify-start">
                                {/* Horizontal line to vertical spine */}
                                <div className="w-4 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700"></div>
                                <button
                                  onClick={() => toggleTopic(activeTrack.id, sub.id)}
                                  className={`group w-48 p-2.5 flex items-center justify-between text-left font-bold rounded-lg border-2 transition-all 
                                    hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#18181b] dark:hover:shadow-[3px_3px_0px_0px_#f4f4f5]
                                    active:translate-x-0.5 active:translate-y-0.5 active:shadow-none dark:active:shadow-none
                                    ${isSubCompleted 
                                      ? 'bg-green-300 border-zinc-900 text-zinc-900 shadow-[2px_2px_0px_0px_#18181b] dark:bg-green-400 dark:border-zinc-100 dark:shadow-[2px_2px_0px_0px_#f4f4f5]' 
                                      : 'bg-yellow-100 border-zinc-900 text-zinc-900 shadow-[2px_2px_0px_0px_#18181b] dark:bg-yellow-200 dark:border-zinc-100 dark:shadow-[2px_2px_0px_0px_#f4f4f5]'
                                    }
                                  `}
                                >
                                  <span className="truncate pr-2 text-xs leading-tight">{sub.name}</span>
                                  {isSubCompleted ? (
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-zinc-900" />
                                  ) : (
                                    <Circle className="w-4 h-4 shrink-0 text-zinc-900/30 group-hover:text-zinc-900/60 transition-colors" />
                                  )}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* --- MOBILE LAYOUT --- */}
                <div className="md:hidden flex flex-col w-full pl-12 pr-4 relative">
                  
                  {/* Main Node */}
                  <div className="relative z-10 w-full max-w-[280px] mb-4">
                    {/* Horizontal line to center spine (which is at left-4, so gap is 12px) */}
                    <div className="absolute -left-8 top-1/2 w-8 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700 -z-10"></div>
                    
                    <button 
                      onClick={() => toggleTopic(activeTrack.id, topic.id)}
                      className={`group w-full p-4 flex items-center justify-between text-left font-bold rounded-xl border-2 transition-all active:translate-x-1 active:translate-y-1 active:shadow-none dark:active:shadow-none ${
                        isCompleted 
                          ? 'bg-green-400 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-green-500 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5]' 
                          : 'bg-yellow-300 border-zinc-900 text-zinc-900 shadow-[4px_4px_0px_0px_#18181b] dark:bg-yellow-400 dark:border-zinc-100 dark:shadow-[4px_4px_0px_0px_#f4f4f5]'
                      }`}
                    >
                      <span className="truncate pr-3 text-[15px]">{topic.name}</span>
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 shrink-0 text-zinc-900" />
                      ) : (
                        <Circle className="w-6 h-6 shrink-0 text-zinc-900/30 transition-colors" />
                      )}
                    </button>
                  </div>

                  {/* Sub Topics */}
                  {hasSubTopics && (
                    <div className="flex flex-col gap-3 relative ml-4 mb-4">
                      {/* Vertical line that goes UP to the main node */}
                      <div className="absolute -left-4 top-[-36px] bottom-[24px] border-l-4 border-dashed border-zinc-300 dark:border-zinc-700 -z-10"></div>
                      
                      {topic.subTopics!.map(sub => {
                        const isSubCompleted = completed[`${activeTrack.id}-${sub.id}`];
                        return (
                          <div key={sub.id} className="relative flex items-center justify-start max-w-[240px]">
                            {/* Horizontal line to vertical spine */}
                            <div className="w-4 border-t-4 border-dashed border-zinc-300 dark:border-zinc-700 -z-10"></div>
                            <button
                              onClick={() => toggleTopic(activeTrack.id, sub.id)}
                              className={`group w-full p-2.5 flex items-center justify-between text-left font-bold rounded-lg border-2 transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none dark:active:shadow-none ${
                                isSubCompleted 
                                  ? 'bg-green-300 border-zinc-900 text-zinc-900 shadow-[2px_2px_0px_0px_#18181b] dark:bg-green-400 dark:border-zinc-100 dark:shadow-[2px_2px_0px_0px_#f4f4f5]' 
                                  : 'bg-yellow-100 border-zinc-900 text-zinc-900 shadow-[2px_2px_0px_0px_#18181b] dark:bg-yellow-200 dark:border-zinc-100 dark:shadow-[2px_2px_0px_0px_#f4f4f5]'
                              }`}
                            >
                              <span className="truncate pr-2 text-xs leading-tight">{sub.name}</span>
                              {isSubCompleted ? (
                                <CheckCircle2 className="w-4 h-4 shrink-0 text-zinc-900" />
                              ) : (
                                <Circle className="w-4 h-4 shrink-0 text-zinc-900/30 transition-colors" />
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
