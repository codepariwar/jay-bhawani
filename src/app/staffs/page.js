"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useLocale } from '../context/LocaleContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import staffsData from '../data/staffs.json';
//ss
const StaffsPage = () => {
  const { locale, t } = useLocale();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768 && viewMode === 'table') {
        setViewMode('grid');
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [viewMode]);
  
  const staffMembers = staffsData[locale];
  const labels = staffsData.labels[locale];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Our Staff - Jay Bhawani Secondary School</title>
        <meta name="description" content="Meet the dedicated staff of Jay Bhawani Secondary School who make our institution exceptional." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      
      <div className="pt-40 bg-gradient-to-b from-indigo-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-quicksand">
            {t.staffsTitle}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {t.staffsSubtitle}
          </p>
          
          {!isMobile && (
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button 
                  type="button" 
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${viewMode === 'grid' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Grid View
                </button>
                <button 
                  type="button" 
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${viewMode === 'table' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setViewMode('table')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Table View
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="flex flex-wrap justify-center gap-y-8 md:gap-y-14 max-w-3xl mx-auto lg:max-w-full">
              {staffMembers.map((staff) => (
                <div key={staff.id} className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full px-2 md:px-4 mb-4">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 md:p-6 h-full">
                    <div className="relative mb-5">
                      <div className="w-20 h-20 md:w-28 md:h-28 mx-auto relative overflow-hidden rounded-full border-4 border-indigo-100 group-hover:border-indigo-200 transition-all">
                        <Image 
                          src="/avatar.webp"
                          alt={`${staff.name}`}
                          width={112}
                          height={112}
                          className="object-cover transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                        {staff.appointmentType}
                      </div>
                    </div>
                    <h4 className="text-lg md:text-xl text-gray-900 font-semibold text-center mb-1 transition-all duration-500 group-hover:text-indigo-600 font-quicksand line-clamp-1">
                      {staff.name}
                    </h4>
                    <p className="text-indigo-600 font-medium text-sm mb-2">
                      {staff.subject}
                    </p>
                    <div className="text-gray-500 text-xs space-y-1">
                      <p><span className="font-medium text-gray-600">Qualification:</span> {staff.qualification || '-'}</p>
                      <p><span className="font-medium text-gray-600">Level:</span> {staff.levelAndGrade || '-'}</p>
                      <p><span className="font-medium text-gray-600">Since:</span> {staff.appointmentDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow-sm rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed md:table-auto">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                          {labels.serialNumber}
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {labels.name}
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {labels.appointmentType}
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {labels.appointmentDate}
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {labels.levelAndGrade}
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {labels.subject}
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {labels.qualification}
                        </th>
                        <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {labels.training}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {staffMembers.map((staff, index) => (
                        <tr key={staff.id} className="hover:bg-gray-50">
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {index + 1}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 relative">
                                <Image
                                  src="/avatar.webp"
                                  alt={staff.name}
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                />
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                              {staff.appointmentType}
                            </span>
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {staff.appointmentDate}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {staff.levelAndGrade || '-'}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {staff.subject || '-'}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {staff.qualification || '-'}
                          </td>
                          <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {staff.training.duration && staff.training.subject ? 
                              `${staff.training.duration} - ${staff.training.subject}` : 
                              "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StaffsPage;
