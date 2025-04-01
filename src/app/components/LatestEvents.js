"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';

const LatestEvents = () => {
  const { t } = useLocale();
  
  const events = [
    {
      id: 1,
      title: t.event1Title,
      date: t.event1Date,
      description: t.event1Desc,
      image: '/events/bookdistribution.jpg',
      slug: 'book-distribution-ceremony'
    },
    {
      id: 2,
      title: t.event2Title,
      date: t.event2Date,
      description: t.event2Desc,
      image: '/events/exhibition.jpg',
      slug: 'science-exhibition'
    },
    {
      id: 3,
      title: t.event3Title,
      date: t.event3Date,
      description: t.event3Desc,
      image: '/events/holiceleb.jpeg',
      slug: 'holi-celebration'
    },
    {
      id: 4,
      title: t.event4Title,
      date: t.event4Date,
      description: t.event4Desc,
      image: '/events/musicprogram.webp',
      slug: 'music-program'
    },
    {
      id: 5,
      title: t.event5Title,
      date: t.event5Date,
      description: t.event5Desc,
      image: '/events/speech.webp',
      slug: 'speech-competition'
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider font-quicksand">School Activities</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2 font-quicksand relative">
              {t.latestEvents}
              <div className="absolute -bottom-4 left-0 w-1/3 h-1 bg-indigo-600"></div>
            </h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-8 font-quicksand">
            Stay updated with all the exciting events happening at our school. Join us to celebrate learning, culture, and achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <p className="text-indigo-600 text-sm font-medium mb-2 font-quicksand">
                  {event.date}
                </p>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-quicksand group-hover:text-indigo-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 font-quicksand line-clamp-2">
                  {event.description}
                </p>
                <Link 
                  href={`/events/${event.slug}`}
                  className="inline-flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors font-quicksand group-hover:underline"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/events"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300 font-medium font-quicksand shadow-md hover:shadow-lg"
          >
            <span>{t.viewAllEvents}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;
