"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '../context/LocaleContext';

const TopBar = () => {
  const { locale, t, changeLocale } = useLocale();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-800 to-indigo-700 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-sm">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-2 sm:mb-0">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.phone}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.email}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <button 
                className="flex items-center hover:text-indigo-200 transition-colors"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {t.language}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-50">
                  <div className="py-1">
                    <button
                      className={`flex items-center w-full px-4 py-2 text-sm ${locale === 'en' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => {
                        changeLocale('en');
                        setIsLangMenuOpen(false);
                      }}
                    >
                      {t.english}
                    </button>
                    <button
                      className={`flex items-center w-full px-4 py-2 text-sm ${locale === 'np' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => {
                        changeLocale('np');
                        setIsLangMenuOpen(false);
                      }}
                    >
                      {t.nepali}
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/login" className="flex items-center hover:text-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              {t.login}
            </Link>
            <Link href="/register" className="flex items-center hover:text-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              {t.register}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: t.home, href: "/" },
    { 
      title: t.about, 
      href: "#about", 
      submenu: [
        { title: t.aboutUs, href: "/about-us" },
        { title: t.missionVision, href: "#mission" },
        { title: t.ourTeam, href: "#team" },
        { title: t.ourStaffs, href: "/staffs" },
        { title: t.managementTeam, href: "/management" },
      ]
    },
    { title: t.gallery, href: "#gallery" },
    { 
      title: t.information, 
      href: "#information", 
      submenu: [
        { title: t.notices, href: "#notices" },
        { title: t.events, href: "#events" },
        { title: t.calendar, href: "#calendar" },
      ]
    },
    
    { title: t.parents, href: "#parents-portal" },
  ];

  return (
    <>
      <TopBar />
      
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2 top-[41px] sm:top-10' 
          : 'bg-white py-3 top-[41px] sm:top-10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="min-w-[48px] w-[48px] h-[48px] relative">
                <Image 
                  src="/core/logo.png" 
                  alt="Babylon School Logo" 
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-indigo-700 tracking-tight font-quicksand">
                जय भवानी माध्यमिक विद्यालय
                </h1>
                <p className="text-base text-gray-500 uppercase tracking-wider font-quicksand font-light">
                  Jai Bhawani Madhyamik Bidhyalaya
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link 
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium text-base transition-colors duration-200 flex items-center gap-1 font-quicksand relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.title}
                    {item.submenu && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 mt-0 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                      {item.submenu.map((subItem) => (
                        <Link 
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-3 text-base text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 first:rounded-t-lg last:rounded-b-lg transition-colors font-quicksand"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-[80vh] overflow-y-auto opacity-100 translate-y-0' : 'max-h-0 overflow-hidden opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 last:border-0">
                <div className="flex items-center justify-between py-4">
                  <Link 
                    href={item.href}
                    className="text-gray-700 hover:text-indigo-600 font-medium text-lg font-quicksand"
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.submenu && (
                    <button
                      className="p-2 focus:outline-none"
                      onClick={(e) => {
                        e.preventDefault();
                        const submenu = e.currentTarget.nextElementSibling;
                        submenu.classList.toggle('hidden');
                      }}
                    >
                      <svg className="w-5 h-5 text-gray-600 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.submenu && (
                  <div className="hidden pl-6 pb-3 space-y-3">
                    {item.submenu.map((subItem) => (
                      <Link 
                        key={subItem.title}
                        href={subItem.href}
                        className="block text-gray-600 hover:text-indigo-600 text-base py-2 font-quicksand"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;