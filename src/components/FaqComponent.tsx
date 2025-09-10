"use client";

import { Faq } from "@/sanity/lib/type";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

export default function FaqComponent({ data }: { data: Faq }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* FAQ Section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Questions fréquentes
            </h2>

            {data.questions.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white pr-4">
                      {item.question}
                    </h3>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M7 14.5834L12.0008 10L17 14.5834"
                        stroke="currentColor"
                        strokeOpacity="0.6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.response}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

					{
						data.video && (

          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="sticky top-8">
              <div
                className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group w-full lg:w-[400px] h-[700px]"
                onClick={togglePlay}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src={data.video} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                {/* Play/Pause Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isPlaying
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-100"
                  } bg-black bg-opacity-20`}
                >
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-4 transform transition-all duration-300 hover:scale-110 hover:bg-opacity-100">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-gray-800" />
                    ) : (
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
						)
					}
        </div>
      </div>
    </section>
  );
}
