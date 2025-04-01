"use client";
import { useLocale } from '../context/LocaleContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Head from 'next/head';

const AboutUsPage = () => {
  const { t } = useLocale();

  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>{t.aboutUsTitle} - Jay Bhawani Secondary School</title>
        <meta name="description" content="Learn about the history, mission, and values of Jay Bhawani Secondary School" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      
      {/* Header */}
      <div className="pt-40 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-quicksand text-center">
            {t.aboutUsTitle}
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
        </div>
      </div>
      
      {/* History Section with Image */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/school-building.jpg"
                alt="Jay Bhawani Secondary School Building"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-quicksand">
                {t.aboutUsHistory}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t.aboutUsHistoryContent}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t.aboutUsNamingContent}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founders Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-quicksand">
            {t.aboutUsFounders}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            {t.aboutUsFoundersContent}
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t.aboutUsGrowth}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t.aboutUsGrowthContent}
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-quicksand">
                {t.aboutUsVision}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.aboutUsVisionContent}
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-quicksand">
                {t.aboutUsMission}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t.aboutUsMissionContent}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section - Simple List */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 font-quicksand">
            {t.aboutUsValues}
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 text-indigo-600 font-bold">01</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.aboutUsValuesExcellence}</h3>
                <p className="text-gray-700">{t.aboutUsValuesExcellenceContent}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-indigo-600 font-bold">02</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.aboutUsValuesIntegrity}</h3>
                <p className="text-gray-700">{t.aboutUsValuesIntegrityContent}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-indigo-600 font-bold">03</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.aboutUsValuesRespect}</h3>
                <p className="text-gray-700">{t.aboutUsValuesRespectContent}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-indigo-600 font-bold">04</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.aboutUsValuesInnovation}</h3>
                <p className="text-gray-700">{t.aboutUsValuesInnovationContent}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 text-indigo-600 font-bold">05</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.aboutUsValuesCommunity}</h3>
                <p className="text-gray-700">{t.aboutUsValuesCommunityContent}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
