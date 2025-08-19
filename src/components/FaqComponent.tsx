"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Faq } from "@/sanity/lib/type";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function FaqComponent({ data }: { data: Faq }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-2/3 ">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {data.questions.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={item.question + idx.toString()}
                  className="bg-white shadow-md rounded-2xl overflow-hidden border-none max-w-[500px]"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 px-6 hover:no-underline border-none text-left">
                    <span className="text-base font-medium">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 border-none">
                    <p className="text-base text-gray-600 leading-relaxed">
                      {item.response}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="md:w-1/3">
            <div
              className="relative bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer"
              onClick={togglePlay}
              style={{ width: "400px", height: "700px" }}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              >
                <source src={data.video} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>

              {/* Overlay avec bouton play/pause - visible seulement quand la vidéo ne joue pas */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-opacity hover:bg-opacity-30">
                  <div className="bg-white bg-opacity-90 rounded-full p-3 transition-transform hover:scale-110">
                    <Play className="w-6 h-6 text-gray-800 ml-0.5" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
