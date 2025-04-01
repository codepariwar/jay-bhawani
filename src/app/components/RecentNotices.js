"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';

const RecentNotices = () => {
  const { t } = useLocale();
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  

  const notices = [
    { 
      id: 1, 
      title: t.notice1, 
      excerpt: "Applications are now open for the 2025 academic year. Limited seats available.",
      date: "2025-03-30",
      slug: "2025-admissions-open" 
    },
    { 
      id: 2, 
      title: t.notice2, 
      excerpt: "Nursery admission results have been published. Check online using your registration number.",
      date: "2025-03-28",
      slug: "nursery-results-published" 
    },
    { 
      id: 3, 
      title: t.notice3, 
      excerpt: "The annual sports week will begin on April 15. All students are required to participate.",
      date: "2025-03-25",
      slug: "annual-sports-week" 
    },
    { 
      id: 4, 
      title: t.notice4, 
      excerpt: "Parent-Teacher meeting is scheduled for April 10. Please confirm your attendance.",
      date: "2025-03-22",
      slug: "parent-teacher-meeting" 
    },
    { 
      id: 5, 
      title: t.notice5, 
      excerpt: "Scholarship exam registration is now open for grades 5, 8, and 10.",
      date: "2025-03-20",
      slug: "scholarship-exam-registration" 
    },
  ];
  
  const loopedNotices = [...notices, ...notices];
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isHovered) return;
    
    let animationId;
    let startTime;
    const duration = 25000; 
    
    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const singleSetWidth = scrollContainer.scrollWidth / 2;
      
      const scrollPosition = (elapsed % duration) / duration * singleSetWidth;
      scrollContainer.scrollLeft = scrollPosition;
      
      if (scrollPosition >= singleSetWidth - 10) {
        startTime = timestamp;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered]);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-4 border-y border-indigo-500 hidden md:block relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center">
          <div className="flex items-center mr-8 shrink-0">
            <div className="bg-white p-2 rounded-full text-indigo-600 mr-3 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white font-quicksand tracking-wide">{t.recentNotices}</h3>
          </div>
          
          <div 
            className="relative flex-1 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              ref={scrollRef}
              className="flex space-x-8 overflow-x-auto scrollbar-hide py-3"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {loopedNotices.map((notice, index) => (
                <Link 
                  key={`${notice.id}-${index}`} 
                  href={`/notices/${notice.slug}`}
                  className="flex items-center shrink-0 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg border border-white/20 shadow-lg hover:bg-white/20 transition-colors duration-300 group"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                      <span className="text-white whitespace-nowrap font-quicksand font-medium group-hover:text-white/90 transition-colors">{notice.title}</span>
                    </div>
                    <span className="text-white/70 text-xs ml-5 mt-1 font-quicksand">{formatDate(notice.date)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            href="/notices" 
            className="ml-8 px-5 py-2.5 bg-white text-indigo-700 rounded-md hover:bg-indigo-50 transition-colors duration-300 text-sm font-quicksand font-medium shrink-0 shadow-md hover:shadow-lg flex items-center group"
          >
            <span>{t.viewAllNotices}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentNotices;
