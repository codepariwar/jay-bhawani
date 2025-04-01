"use client";
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';

const PhilosophyBanner = () => {
  const { t } = useLocale();
  
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-indigo-900">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-900 opacity-90"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0 md:max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-quicksand leading-tight">
              {t.bannerTitle}
            </h2>
            <p className="text-indigo-100 text-lg mb-8 font-quicksand">
              {t.bannerSubtitle}
            </p>
            <Link 
              href="/philosophy"
              className="inline-flex items-center bg-white text-indigo-700 px-8 py-4 rounded-md hover:bg-indigo-50 transition-colors duration-300 font-bold font-quicksand shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.bannerCta}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="relative w-full md:w-auto">
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <div className="w-36 h-36 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40">
                    <div className="text-white text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="font-quicksand font-bold tracking-widest">EST. 1994</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-400 rounded-full mix-blend-screen animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-indigo-300 rounded-full mix-blend-screen animate-float-delay"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-300 rounded-full mix-blend-screen animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyBanner;
