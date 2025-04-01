"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '../context/LocaleContext';

const BlogsSection = () => {
  const { t } = useLocale();
  
  const blogs = [
    {
      id: 1,
      title: t.blog1Title,
      date: t.blog1Date,
      excerpt: t.blog1Excerpt,
      author: t.blog1Author,
      image: '/blogs/blog1.jpg',
      slug: 'importance-of-extracurricular-activities'
    },
    {
      id: 2,
      title: t.blog2Title,
      date: t.blog2Date,
      excerpt: t.blog2Excerpt,
      author: t.blog2Author,
      image: '/blogs/blog2.jpg',
      slug: 'celebrating-cultural-diversity'
    },
    {
      id: 3,
      title: t.blog3Title,
      date: t.blog3Date,
      excerpt: t.blog3Excerpt,
      author: t.blog3Author,
      image: '/blogs/blog3.jpg',
      slug: 'technology-integration-classrooms'
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-quicksand">
            {t.blogsTitle}
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto font-quicksand">
            {t.blogsSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3">
                  <span className="text-indigo-600 text-sm font-medium font-quicksand">
                    {blog.date}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-600 text-sm font-quicksand">
                    {blog.author}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-quicksand line-clamp-2 hover:text-indigo-600 transition-colors duration-300">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 font-quicksand line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors font-quicksand mt-auto"
                >
                  {t.readMore}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-md transition-colors duration-300 font-medium font-quicksand"
          >
            <span>{t.viewAllBlogs}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
