"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';

const About = () => {
  const { t } = useLocale();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl shadow-xl">
              <Image 
                src="/slider/slider1.jpg"
                alt="Babylon National School"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats Box */}
            <div className="absolute -bottom-6 -right-6 bg-indigo-600 text-white font-quicksand px-6 py-4 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm uppercase tracking-wider">{t.yearsOfExcellence}</p>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="text-left">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-12 bg-indigo-600 mr-4"></div>
                <h3 className="text-indigo-600 font-quicksand font-medium uppercase tracking-wider text-sm">{t.aboutWelcome}</h3>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-quicksand leading-tight">
                {t.aboutSchoolName}
              </h2>
              
              <div className="prose prose-lg text-gray-600 mb-8 font-quicksand">
                <p className="mb-4">
                  {t.aboutHistory}
                </p>
                <p className="mb-4">
                  {t.aboutMission}
                </p>
                <p>
                  {t.aboutVision}
                </p>
              </div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: t.featureTitle1, desc: t.featureDesc1 },
                  { title: t.featureTitle2, desc: t.featureDesc2 },
                  { title: t.featureTitle3, desc: t.featureDesc3 },
                  { title: t.featureTitle4, desc: t.featureDesc4 }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-indigo-100 p-2 rounded-full text-indigo-600 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 font-quicksand">{feature.title}</h4>
                      <p className="text-sm text-gray-600 font-quicksand">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Link href="#contact">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-quicksand font-medium py-3 px-8 rounded-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  {t.readMore}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;