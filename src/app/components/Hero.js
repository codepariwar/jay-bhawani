"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';

const Hero = () => {
  const { t } = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: '/slider/slider1.jpg',
      title: t.sliderTitle1,
      subtitle: t.sliderSubtitle1,
      buttonText: t.sliderCta1
    },
    {
      id: 2,
      image: '/slider/slider2.jpg',
      title: t.sliderTitle2,
      subtitle: t.sliderSubtitle2,
      buttonText: t.sliderCta2
    },
    {
      id: 3,
      image: '/slider/slider3.jpg',
      title: t.sliderTitle3,
      subtitle: t.sliderSubtitle3,
      buttonText: t.sliderCta3
    }
  ];

  const getNextSlideIndex = useCallback(() => {
    return currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  }, [currentSlide, slides.length]);

  const getPrevSlideIndex = useCallback(() => {
    return currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(getNextSlideIndex());
    }, 5000);
    
    return () => clearInterval(interval);
  }, [getNextSlideIndex]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(getNextSlideIndex());
  };

  const prevSlide = () => {
    setCurrentSlide(getPrevSlideIndex());
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={index === 0}
              quality={90}
              className="transition-transform duration-10000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-transparent" />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn opacity-0 font-quicksand drop-shadow-lg" 
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards', textShadow: '0 4px 6px rgba(0,0,0,0.5)' }}>
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeIn opacity-0 font-quicksand drop-shadow-md" 
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                {slide.subtitle}
              </p>
              <Link href="#about">
                <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-md transition duration-300 animate-fadeIn opacity-0 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-quicksand" 
                  style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="relative w-24 h-16 rounded-md overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-110" onClick={prevSlide}>
          <Image
            src={slides[getPrevSlideIndex()].image}
            alt="Previous slide"
            fill
            sizes="96px"
            style={{ objectFit: 'cover' }}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <div className="relative w-24 h-16 rounded-md overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-110" onClick={nextSlide}>
          <Image
            src={slides[getNextSlideIndex()].image}
            alt="Next slide"
            fill
            sizes="96px"
            style={{ objectFit: 'cover' }}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:shadow-xl md:hidden"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10 shadow-lg hover:shadow-xl md:hidden"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8 scale-100 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <div 
          className="h-full bg-indigo-600 transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Hero;