"use client";
import Head from 'next/head';
import { useLocale } from '../context/LocaleContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import managementData from '../data/management.json';

const ManagementPage = () => {
  const { locale, t } = useLocale();
  
  const data = managementData[locale];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Management Team - Jay Bhawani Secondary School</title>
        <meta name="description" content="Meet the management team of Jay Bhawani Secondary School who oversee the governance of our institution." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />
      
      <div className="pt-40 bg-gradient-to-b from-indigo-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-quicksand">
            {t.managementTitle}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            {t.managementSubtitle}
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-quicksand">
              {t.managementCommitteeHeading}
            </h2>
            <p className="text-indigo-600 font-medium">
              {t.managementCommitteeFormationDate}: {data.formationDate}
            </p>
          </div>
          
          <div className="overflow-hidden shadow-sm rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                      {t.serialNumber}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.name}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.position}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.address}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.selectionProcess}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.committee.map((member, index) => (
                    <tr key={member.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                          {member.position}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {member.address}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {member.selectionProcess}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Land Donors Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-quicksand">
              {t.landDonorsHeading}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t.landDonorsSubtitle}
            </p>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.landDonors.map((donor) => (
                <div key={donor.id} className="flex items-center p-3 rounded-md hover:bg-gray-50">
                  <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold">
                    {donor.id}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{donor.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-quicksand">
              {t.principalsHeading}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t.principalsSubtitle}
            </p>
          </div>
          
          <div className="overflow-hidden shadow-sm rounded-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                      {t.serialNumber}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.name}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.from}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.to}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.principals.map((principal, index) => (
                    <tr key={principal.id} className={principal.to === "Present" || principal.to === "हालसम्म" ? "bg-indigo-50 hover:bg-indigo-100" : "hover:bg-gray-50"}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{principal.name}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {principal.from}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {principal.to === "Present" || principal.to === "हालसम्म" ? (
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {principal.to}
                          </span>
                        ) : principal.to}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-quicksand">
              {t.chairpersonsHeading}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t.chairpersonsSubtitle}
            </p>
          </div>
          
          <div className="overflow-hidden shadow-sm rounded-lg border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                      {t.serialNumber}
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.name}
                    </th>
                    <th scope="col" colSpan="2" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.tenure}
                    </th>
                  </tr>
                  <tr className="bg-gray-50">
                    <th scope="col" className="px-4 py-1"></th>
                    <th scope="col" className="px-4 py-1"></th>
                    <th scope="col" className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.from}
                    </th>
                    <th scope="col" className="px-4 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t.to}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.chairpersons.map((chairperson, index) => (
                    <tr key={chairperson.id} className={chairperson.to === "Present" || chairperson.to === "हालसम्म" ? "bg-indigo-50 hover:bg-indigo-100" : "hover:bg-gray-50"}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{chairperson.name}</div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {chairperson.from}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {chairperson.to === "Present" || chairperson.to === "हालसम्म" ? (
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {chairperson.to}
                          </span>
                        ) : chairperson.to}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ManagementPage;
