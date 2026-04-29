"use client";

import { useEffect, type ReactNode } from "react";

type MassTortLegalModalProps = {
  id: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function MassTortLegalModal({
  id,
  title,
  isOpen,
  onClose,
  children,
}: MassTortLegalModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id={id} className="modal landbot-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" aria-hidden={!isOpen} onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby={`${id}-label`} className="modal-dialog modal-dialog-centered modal-dialog-scrollable w-full max-w-[1000px]" onClick={(event) => event.stopPropagation()}>
        <div className="modal-content flex max-h-[90vh] flex-col overflow-hidden border-0 bg-white shadow-2xl">
          <div className="modal-header flex items-center justify-between border-b border-gray-200 px-6 py-5">
            <span id={`${id}-label`} className="modal-title h4 text-2xl font-semibold text-[#1c302a]">{title}</span>
            <button type="button" onClick={onClose} className="btn-close text-gray-500 transition-colors hover:text-black" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="modal-body overflow-y-auto px-6 py-6 md:px-10">
            <div className="prose prose-slate max-w-none text-gray-700 [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-serif [&_h2]:text-[#1c302a] [&_p]:mb-6 [&_p]:text-base [&_p]:leading-relaxed [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2">
              {children}
            </div>
          </div>

          <div className="modal-footer flex justify-end border-t border-gray-200 px-6 py-5">
            <button type="button" onClick={onClose} className="btn btn-secondary border border-[#c5e68b] bg-[#d9f99d] px-8 py-2 text-sm font-bold uppercase text-[#1c302a] transition-colors hover:bg-[#c5e68b]">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
