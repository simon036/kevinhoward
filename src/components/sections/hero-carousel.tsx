"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/02902681-dea1-42c2-ade2-86f858d61c7c-kevinhowardcpa-com/assets/images/aw-shared-slider-007-1.jpg",
    alt: "",
    caption: "We are not just your accountants...we are your trusted advisors",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/02902681-dea1-42c2-ade2-86f858d61c7c-kevinhowardcpa-com/assets/images/aw-shared-slider-008-2.jpg",
    alt: "",
    caption: "We excel in managing complexity",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/02902681-dea1-42c2-ade2-86f858d61c7c-kevinhowardcpa-com/assets/images/aw-shared-slider-009-3.jpg",
    alt: "",
    caption: "Experienced guidance, proactive analysis...to maximize your financial success",
  },
];

const HeroCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current, Fade()]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect(); // Set initial index

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative group/carousel">
      <div className="overflow-hidden relative h-[450px]" ref={emblaRef}>
        <div className="flex h-full"> 
          {slides.map((slide, index) => (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              <Image 
                src={slide.src} 
                alt={slide.alt} 
                fill 
                style={{ objectFit: 'cover' }} 
                priority={index === 0} 
                sizes="(max-width: 1200px) 100vw, 1140px" 
              />
              <div className="absolute inset-x-0 bottom-16 flex justify-center px-4">
                <div className="bg-carousel-caption-background px-4 py-3">
                  <p className="text-white text-xl text-center leading-[1.5] [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                    {slide.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              index === selectedIndex ? 'bg-white' : 'border border-white bg-transparent'
            }`}
          />
        ))}
      </div>

       <button
        onClick={scrollPrev}
        className="absolute left-[15px] top-1/2 -translate-y-1/2 z-10 p-2 text-white opacity-70 group-hover/carousel:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-[15px] top-1/2 -translate-y-1/2 z-10 p-2 text-white opacity-70 group-hover/carousel:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};
export default HeroCarousel;