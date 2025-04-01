"use client";
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from './components/Hero';
import RecentNotices from './components/RecentNotices';
import About from './components/About';
import LatestEvents from './components/LatestEvents';
import PhilosophyBanner from './components/AdmissionBanner';
import BlogsSection from './components/BlogsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jay Bhawani Secondary School - Where Learning Meets Joy</title>
        <meta name="description" content="Jay Bhawani Secondary School - A premier educational institution committed to excellence in education." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Navbar />
        <Hero/>
        <RecentNotices />
        <About/>
        <LatestEvents />
        <PhilosophyBanner />
        <BlogsSection />
        <Footer />
      </main>
    </div>
  );
}