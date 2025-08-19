"use client";

import { useEffect, useRef, useState } from "react";

export default function Videos({ vids }: { vids: { url: string }[] }) {
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setIsMuted(modalVideoRef.current.muted);
    }
  };

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.src = "";
    }
    setModalSrc(null);
  };

  useEffect(() => {
    if (modalSrc && modalVideoRef.current) {
      modalVideoRef.current.src = modalSrc;
      modalVideoRef.current.muted = isMuted;
      modalVideoRef.current.play();
    }
  }, [modalSrc]);

  return (
    <>
      <div className="video-grid-advice mt-[85px] ">
        {vids?.map((video: any, index: number) => (
          <div className="video-container" key={index}>
            <div className="video-card group relative">
              <div className="play-btn group-hover:hidden">
                <PlayIcon />
              </div>

              <video
                muted
                loop
                playsInline
                preload="metadata"
                autoPlay
                onClick={() => setModalSrc(video.url)}
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
                className="video-preview"
              >
                <source src={video.url} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>

      {modalSrc && (
        <div
          id="video-modal"
          className="fixed z-[9999] top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="relative max-w-[330px] w-full">
            <video
              ref={modalVideoRef}
              className="modal-video w-full rounded-xl"
              autoPlay
              loop
              playsInline
              muted={isMuted}
            />
            <button
              onClick={toggleMute}
              className="absolute bottom-5 left-5 bg-transparent border-none"
            >
              {isMuted ? <MutedIcon /> : <UnmutedIcon />}
            </button>
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-white text-xl uppercase font-sans"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const MutedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
  </svg>
);

const UnmutedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
  </svg>
);

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    data-slot="icon"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
      clip-rule="evenodd"
    ></path>
  </svg>
);
