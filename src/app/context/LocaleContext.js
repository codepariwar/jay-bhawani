"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const LocaleContext = createContext();

export const translations = {
  en: {
    phone: "+123-456-7890",
    email: "info@outschool.com",
    login: "Login",
    register: "Register",
    
    home: "Home",
    about: "About",
    aboutUs: "About Us",
    missionVision: "Mission & Vision",
    ourTeam: "Our Team",
    ourStaffs: "Our Staffs",
    managementTeam: "Management Team",
    gallery: "Gallery",
    information: "Information",
    babylonBuds: "Babylon Buds",
    parents: "Parents",
    
    aboutUs: "About Us",
    missionVision: "Mission & Vision",
    ourTeam: "Our Team",
    managementTeam: "Management Team",
    
    notices: "Notices",
    events: "Events",
    calendar: "Calendar",
    
    activities: "Activities",
    achievements: "Achievements",
    
    language: "Language",
    english: "English",
    nepali: "नेपाली",
    
    sliderTitle1: "Welcome to Jay Bhawani Secondary School",
    sliderSubtitle1: "Nurturing minds, shaping futures",
    sliderCta1: "Learn More",
    
    sliderTitle2: "Excellence in Education",
    sliderSubtitle2: "Providing quality education since 2005",
    sliderCta2: "Explore Programs",
    
    sliderTitle3: "Join Our Community",
    sliderSubtitle3: "A place where every student matters",
    sliderCta3: "Apply Now",
    
    aboutWelcome: "Welcome To",
    aboutSchoolName: "Jay Bhawani Secondary School",
    aboutHistory: "Established in 1994, Jay Bhawani Secondary School is located in Ward No. 7 of Hilihang Rural Municipality in Panchthar District, Koshi Province. The school was founded through the collective efforts of local parents who recognized the importance of education and worked together to create a learning institution in an accessible location.",
    aboutMission: "Our team of experienced teachers works tirelessly to inspire and motivate students to achieve their full potential. We strive to create a welcoming and inclusive school culture that fosters a love of learning, creativity, and collaboration.",
    aboutVision: "We are committed to empowering students to become lifelong learners who are equipped with the 21st-century skills and knowledge they need to succeed in a rapidly changing world.",
    
    featureTitle1: "Experienced Faculty",
    featureDesc1: "Highly qualified teachers",
    featureTitle2: "Modern Facilities",
    featureDesc2: "State-of-the-art infrastructure",
    featureTitle3: "Holistic Development",
    featureDesc3: "Academic, physical & moral growth",
    featureTitle4: "Individual Attention",
    featureDesc4: "Personalized learning approach",
    
      readMore: "Read More",
    applyNow: "Apply Now!",
    yearsOfExcellence: "Years of Excellence",
    
    recentNotices: "Recent Notices",
    notice1: "2025 Admission Open for All Classes",
    notice2: "Nursery Results Published - Check Online",
    notice3: "Annual Sports Week Starting from April 15",
    notice4: "Parent-Teacher Meeting Scheduled for April 10",
    notice5: "Scholarship Exam Registration Open",
    viewAllNotices: "View All Notices",
    
      // Latest Events section
    latestEvents: "Latest Events",
    viewAllEvents: "View All Events",
    event1Title: "Book Distribution Ceremony",
    event1Date: "March 15, 2025",
    event1Desc: "Annual book distribution ceremony for outstanding students",
    
    event2Title: "Science Exhibition",
    event2Date: "February 28, 2025",
    event2Desc: "Students showcasing innovative science projects and experiments",
    
    event3Title: "Holi Celebration",
    event3Date: "February 15, 2025",
    event3Desc: "Colorful Holi festival celebration with cultural performances",
    
    event4Title: "Music Program",
    event4Date: "January 25, 2025",
    event4Desc: "Annual music program featuring talented student performances",
    
    event5Title: "Speech Competition",
    event5Date: "January 10, 2025",
    event5Desc: "Inter-class speech competition on various contemporary topics",
    
    bannerTitle: "Education for Character Development",
    bannerSubtitle: "Building knowledge, values, and skills for a brighter future",
    bannerCta: "Learn More",
    
    blogsTitle: "Latest from Our Blog",
    blogsSubtitle: "Insights, updates, and stories from our school community",
    viewAllBlogs: "View All Articles",
    readMore: "Read More",
    
    blog1Title: "The Importance of Extracurricular Activities",
    blog1Date: "March 25, 2025",
    blog1Excerpt: "Discover how participation in extracurricular activities contributes to holistic development and future success.",
    blog1Author: "Principal Sharma",
    
    blog2Title: "Celebrating Cultural Diversity in Education",
    blog2Date: "March 15, 2025",
    blog2Excerpt: "How our multicultural approach to education helps students develop global perspectives and cultural sensitivity.",
    blog2Author: "Rajesh Thapa",
    
    blog3Title: "Technology Integration in Classrooms",
    blog3Date: "March 5, 2025",
    blog3Excerpt: "Exploring innovative ways we're using technology to enhance learning experiences for our students.",
    blog3Author: "Sunita Rai",
    
    // Staff page
    staffsTitle: "Meet Our Staff",
    staffsSubtitle: "The dedicated educators and professionals who make our school exceptional",
    
    // Management Team page
    managementTitle: "School Management Committee",
    managementSubtitle: "The dedicated team responsible for the governance and management of our school",
    managementCommitteeHeading: "Current Management Committee",
    managementCommitteeFormationDate: "Formation Date",
    landDonorsHeading: "Land Donors",
    landDonorsSubtitle: "Generous individuals who donated land to Jay Bhawani Secondary School",
    principalsHeading: "Former Principals",
    principalsSubtitle: "Leaders who have guided our institution through the years",
    chairpersonsHeading: "Former Chairpersons",
    chairpersonsSubtitle: "Past leaders of our School Management Committee",
    serialNumber: "S.N.",
    name: "Name",
    position: "Position",
    address: "Address",
    selectionProcess: "Selection Process",
    from: "From",
    to: "To",
    tenure: "Tenure",
    present: "Present",
    
    // Footer section
    footerAboutTitle: "About Jay Bhawani",
    footerAboutText: "Jay Bhawani Secondary School is committed to providing quality education that develops character, knowledge, and skills for a brighter future.",
    footerContactTitle: "Contact Information",
    footerAddress: "Itahari-8, Sunsari, Nepal",
    footerPhone: "+977 025-587654",
    footerEmail: "info@jaybhawani.edu.np",
    footerLinksTitle: "Quick Links",
    footerLink1: "Home",
    footerLink2: "About Us",
    footerLink3: "Academics",
    footerLink4: "Admissions",
    footerLink5: "Events",
    footerLink6: "Blog",
    footerLink7: "Contact",
    footerLink8: "Gallery",
    footerNewsletterTitle: "Subscribe to Newsletter",
    footerNewsletterText: "Stay updated with our latest news and announcements",
    footerNewsletterPlaceholder: "Your email address",
    footerNewsletterButton: "Subscribe",
    footerCopyright: " 2025 Jay Bhawani Secondary School. All rights reserved.",
    footerPrivacyPolicy: "Privacy Policy",
    footerTerms: "Terms of Service",
    
    // About Us page
    aboutUsTitle: "About Jay Bhawani Secondary School",
    aboutUsSubtitle: "A Journey of Excellence in Education",
    aboutUsHistory: "History",
    aboutUsHistoryContent: "Jay Bhawani Secondary School was established in 2044 BS (1987 AD) in Ward No. 7 of Hilihang Rural Municipality, Panchthar District, Koshi Province. During the establishment of the school, local guardians understood the importance of education and cleared the bushy, sloping land to create a suitable location for the school. The school was operated with the active participation of all guardians.",
    aboutUsFounders: "Founders",
    aboutUsFoundersContent: "The school was established under the leadership of local guardians including Chakra Bahadur Rai, Tankanath Timsina, Chhatra Bahadur Ektinhang, Padamlal Rijal, Jivanath Rijal, Purna Bahadur Thapa, Krishna Bahadur Subedi, Rudra Prasad Poudyal, Tilchan Timsina, Ambika Prasad Rijal, Khem Prasad Rijal, Bir Bahadur Rai, Dhan Kumar Rai, Rudra Rai, Kumar Rai, Goma Devi Rijal, Punya Prasad Rijal, Narendra Ektinhang, Sahar Bahadur Rai, Shaktiman Rai, and others.",
    aboutUsNaming: "School Naming",
    aboutUsNamingContent: "Along with the operation of the school, it was named 'Shree Jay Bhawani' after the name of God.",
    aboutUsGrowth: "Growth and Development",
    aboutUsGrowthContent: "Subsequently, more than a dozen government and private teachers have been found teaching. The school has been upgraded with the tireless efforts, activism, and struggle of the guardians to raise financial and physical resources, and with building grants from donor agencies, the District Education Office, and the Village Development Committee.",
    aboutUsVision: "Our Vision",
    aboutUsVisionContent: "To be a center of academic excellence that nurtures well-rounded, responsible citizens who contribute positively to society.",
    aboutUsMission: "Our Mission",
    aboutUsMissionContent: "To provide quality education in a supportive environment that promotes intellectual curiosity, personal growth, and social responsibility.",
    aboutUsValues: "Core Values",
    aboutUsValuesExcellence: "Excellence",
    aboutUsValuesExcellenceContent: "Striving for the highest standards in academic and personal achievement",
    aboutUsValuesIntegrity: "Integrity",
    aboutUsValuesIntegrityContent: "Upholding honesty, ethics, and transparency in all actions",
    aboutUsValuesRespect: "Respect",
    aboutUsValuesRespectContent: "Fostering a culture of mutual respect, inclusivity, and appreciation of diversity",
    aboutUsValuesInnovation: "Innovation",
    aboutUsValuesInnovationContent: "Encouraging creative thinking and innovative approaches to learning and problem-solving",
    aboutUsValuesCommunity: "Community",
    aboutUsValuesCommunityContent: "Building strong partnerships between the school, families, and the wider community",
  },
  np: {
    // TopBar translations
    phone: "+१२३-४५६-७८९०",
    email: "info@babylonschool.com",
    login: "लग - इन",
    register: "रेजिस्टर",
    
    home: "गृहपृष्ठ",
    about: "हाम्रो बारेमा",
    aboutUs: "हाम्रो बारे",
    missionVision: "लक्ष्य र उद्देश्य",
    ourTeam: "हाम्रो टोली",
    ourStaffs: "हाम्रा कर्मचारीहरू",
    managementTeam: "व्यवस्थापन समिति",
    gallery: "ग्यालरी",
    information: "सूचना केन्द्र",
    babylonBuds: "बेबिलोन बड्स",
    parents: "अभिभावक",
    
    // About submenu
    aboutUs: "हाम्रो बारे",
    missionVision: "लक्ष्य र दृष्टि",
    ourTeam: "हाम्रो टिम",
    managementTeam: "व्यवस्थापन समिति",
    
    // Information submenu
    notices: "सूचनाहरू",
    events: "कार्यक्रमहरू",
    calendar: "शैक्षिक क्यालेन्डर",
    
    // Babylon Buds submenu
    activities: "गतिविधिहरू",
    achievements: "उपलब्धिहरू",
    
    // Language selector
    language: "भाषा",
    english: "English",
    nepali: "नेपाली",
    
    // Hero/Slider translations
    sliderTitle1: "बेबिलोन नेशनल स्कूलमा स्वागत छ",
    sliderSubtitle1: "दिमाग पोषण, भविष्य आकार दिँदै",
    sliderCta1: "थप जानकारी",
    
    sliderTitle2: "शिक्षामा उत्कृष्टता",
    sliderSubtitle2: "२००५ देखि गुणस्तरीय शिक्षा प्रदान गर्दै",
    sliderCta2: "कार्यक्रमहरू अन्वेषण गर्नुहोस्",
    
    sliderTitle3: "हाम्रो समुदायमा सामेल हुनुहोस्",
    sliderSubtitle3: "एक ठाउँ जहाँ हरेक विद्यार्थी महत्त्वपूर्ण छ",
    sliderCta3: "अहिले आवेदन दिनुहोस्",
    
    // About component translations
    aboutWelcome: "स्वागतम्",
    aboutSchoolName: "श्री जय भवानी माध्यमिक विद्यालय",
    aboutHistory: "कोशी प्रदेश पाँचथर जिल्ला अन्तरगत हिलिहाङ गाउँपालिका वडा नं. ७ मा पर्ने यस श्री जय भवानी माध्यमिक विद्यालयको स्थापना वि. सं. २०४४ सालमा भएको थियो। विद्यालय स्थापना गर्ने क्रममा स्थानीय अभिभावकहरुले शिक्षाको महत्त्व बुझि पायक पर्ने स्थानमा घाँसे झाडी फँडानी गरी भिरालो फरेको जग्गालाई सम्याउँदै सम्पुर्ण अभिभावकहरुको सक्रियतामा विद्यालय सञ्चालन गरीएको थियो ।",
    aboutMission: "हाम्रो अनुभवी शिक्षकहरूको टोलीले विद्यार्थीहरूलाई उनीहरूको पूर्ण क्षमता हासिल गर्न प्रेरित र प्रोत्साहित गर्न अथक प्रयास गर्दछ। हामी सिक्ने, सृजनात्मकता र सहकार्यको प्रेमलाई बढावा दिने स्वागतयोग्य र समावेशी विद्यालय संस्कृति सिर्जना गर्न प्रयास गर्दछौं।",
    aboutVision: "हामी विद्यार्थीहरूलाई आजीवन सिकारु बन्न सशक्त बनाउन प्रतिबद्ध छौं जो तीव्र गतिमा परिवर्तन हुँदै गरेको संसारमा सफल हुन आवश्यक २१ औं शताब्दीको सीप र ज्ञानले सुसज्जित छन्।",
    
    // About features
    featureTitle1: "अनुभवी संकाय",
    featureDesc1: "उच्च योग्य शिक्षकहरू",
    featureTitle2: "आधुनिक सुविधाहरू",
    featureDesc2: "अत्याधुनिक पूर्वाधार",
    featureTitle3: "समग्र विकास",
    featureDesc3: "शैक्षिक, शारीरिक र नैतिक वृद्धि",
    featureTitle4: "व्यक्तिगत ध्यान",
    featureDesc4: "व्यक्तिगत सिकाइ दृष्टिकोण",
    
    // About buttons
    readMore: "थप पढ्नुहोस्",
    applyNow: "अहिले आवेदन दिनुहोस्!",
    yearsOfExcellence: "वर्षको उत्कृष्टता",
    
    // Recent Notices section
    recentNotices: "हालैका सूचनाहरू",
    notice1: "२०२५ सबै कक्षाहरूको लागि भर्ना खुला",
    notice2: "नर्सरी नतिजा प्रकाशित - अनलाइन जाँच गर्नुहोस्",
    notice3: "वार्षिक खेलकुद सप्ताह अप्रिल १५ बाट सुरु हुँदै",
    notice4: "अभिभावक-शिक्षक बैठक अप्रिल १० मा निर्धारित",
    notice5: "छात्रवृत्ति परीक्षा दर्ता खुला",
    viewAllNotices: "सबै सूचनाहरू हेर्नुहोस्",
    
    // Latest Events section
    latestEvents: "नवीनतम कार्यक्रमहरू",
    viewAllEvents: "सबै कार्यक्रमहरू हेर्नुहोस्",
    event1Title: "पुस्तक वितरण समारोह",
    event1Date: "मार्च १५, २०२५",
    event1Desc: "उत्कृष्ट विद्यार्थीहरूको लागि वार्षिक पुस्तक वितरण समारोह",
    
    event2Title: "विज्ञान प्रदर्शनी",
    event2Date: "फेब्रुअरी २८, २०२५",
    event2Desc: "विद्यार्थीहरूले नवीन विज्ञान परियोजना र प्रयोगहरू प्रदर्शन गर्दै",
    
    event3Title: "होली उत्सव",
    event3Date: "फेब्रुअरी १५, २०२५",
    event3Desc: "सांस्कृतिक प्रस्तुतिहरूसहित रंगीचंगी होली उत्सव समारोह",
    
    event4Title: "संगीत कार्यक्रम",
    event4Date: "जनवरी २५, २०२५",
    event4Desc: "प्रतिभाशाली विद्यार्थी प्रस्तुतिहरू समावेश गरिएको वार्षिक संगीत कार्यक्रम",
    
    event5Title: "वक्तृत्वकला प्रतियोगिता",
    event5Date: "जनवरी १०, २०२५",
    event5Desc: "विभिन्न समसामयिक विषयहरूमा अन्तर-कक्षा वक्तृत्वकला प्रतियोगिता",
    
    // Banner section
    bannerTitle: "चरित्र विकासको लागि शिक्षा",
    bannerSubtitle: "उज्यालो भविष्यको लागि ज्ञान, मूल्य र सीपहरू निर्माण गर्दै",
    bannerCta: "थप जानकारी",
    
    // Blogs section
    blogsTitle: "हाम्रो ब्लगबाट नवीनतम",
    blogsSubtitle: "हाम्रो विद्यालय समुदायबाट अन्तर्दृष्टि, अपडेट र कथाहरू",
    viewAllBlogs: "सबै लेखहरू हेर्नुहोस्",
    readMore: "थप पढ्नुहोस्",
    
    blog1Title: "अतिरिक्त क्रियाकलापहरूको महत्व",
    blog1Date: "मार्च २५, २०२५",
    blog1Excerpt: "अतिरिक्त क्रियाकलापहरूमा सहभागिताले कसरी समग्र विकास र भविष्यको सफलतामा योगदान पुर्‍याउँछ भन्ने पत्ता लगाउनुहोस्।",
    blog1Author: "प्रधानाध्यापक शर्मा",
    
    blog2Title: "शिक्षामा सांस्कृतिक विविधताको उत्सव",
    blog2Date: "मार्च १५, २०२५",
    blog2Excerpt: "शिक्षाको हाम्रो बहुसांस्कृतिक दृष्टिकोणले विद्यार्थीहरूलाई वैश्विक दृष्टिकोण र सांस्कृतिक संवेदनशीलता विकास गर्न कसरी मद्दत गर्दछ।",
    blog2Author: "राजेश थापा",
    
    blog3Title: "कक्षाकोठामा प्रविधि एकीकरण",
    blog3Date: "मार्च ५, २०२५",
    blog3Excerpt: "हाम्रा विद्यार्थीहरूको लागि सिकाइ अनुभवहरू बढाउन हामीले प्रविधि प्रयोग गर्ने नवीन तरिकाहरू अन्वेषण गर्द।",
    blog3Author: "सुनिता राई",
    
    // Staff page
    staffsTitle: "हाम्रा कर्मचारीहरूसँग भेट्नुहोस्",
    staffsSubtitle: "समर्पित शिक्षक र पेशेवरहरू जसले हाम्रो विद्यालयलाई उत्कृष्ट बनाउँछन्",
    
    // Management Team page
    managementTitle: "विद्यालय व्यवस्थापन समिति",
    managementSubtitle: "हाम्रो विद्यालयको शासन र व्यवस्थापनको लागि जिम्मेवार समर्पित टोली",
    managementCommitteeHeading: "वर्तमान व्यवस्थापन समिति",
    managementCommitteeFormationDate: "गठन मिति",
    landDonorsHeading: "जग्गा दाताहरु",
    landDonorsSubtitle: "जय भवानी माध्यमिक विद्यालयलाई जग्गा दान गर्ने उदार व्यक्तिहरू",
    principalsHeading: "पूर्व प्रधानाध्यापकहरू",
    principalsSubtitle: "वर्षौंदेखि हाम्रो संस्थालाई मार्गदर्शन गर्ने नेतृत्वकर्ताहरू",
    chairpersonsHeading: "पूर्व अध्यक्षहरू",
    chairpersonsSubtitle: "हाम्रो विद्यालय व्यवस्थापन समितिका पूर्व नेतृत्वकर्ताहरू",
    serialNumber: "क्र.सं.",
    name: "नाम",
    position: "पद",
    address: "ठेगाना",
    selectionProcess: "छनौट प्रक्रिया",
    from: "देखि",
    to: "सम्म",
    tenure: "पदावधी",
    present: "हालसम्म",
    
    // Footer section
    footerAboutTitle: "जय भवानी बारे",
    footerAboutText: "जय भवानी माध्यमिक विद्यालय उज्यालो भविष्यको लागि चरित्र, ज्ञान र सीपहरू विकास गर्ने गुणस्तरीय शिक्षा प्रदान गर्न प्रतिबद्ध छ।",
    footerContactTitle: "सम्पर्क जानकारी",
    footerAddress: "इटहरी-८, सुनसरी, नेपाल",
    footerPhone: "+९७७ ०२५-५८७६५४",
    footerEmail: "info@jaybhawani.edu.np",
    footerLinksTitle: "द्रुत लिङ्कहरू",
    footerLink1: "गृहपृष्ठ",
    footerLink2: "हाम्रो बारेमा",
    footerLink3: "शैक्षिक",
    footerLink4: "भर्ना",
    footerLink5: "कार्यक्रमहरू",
    footerLink6: "ब्लग",
    footerLink7: "सम्पर्क",
    footerLink8: "ग्यालरी",
    footerNewsletterTitle: "न्युजलेटर सदस्यता लिनुहोस्",
    footerNewsletterText: "हाम्रो नवीनतम समाचार र घोषणाहरूसँग अपडेट रहनुहोस्",
    footerNewsletterPlaceholder: "तपाईंको इमेल ठेगाना",
    footerNewsletterButton: "सदस्यता लिनुहोस्",
    footerCopyright: " 2025 Jay Bhawani Secondary School. All rights reserved.",
    footerPrivacyPolicy: "गोपनीयता नीति",
    footerTerms: "सेवाका सर्तहरू",
    
    // About Us page
    aboutUsTitle: "श्री जय भवानी माध्यमिक विद्यालयको बारेमा",
    aboutUsSubtitle: "शिक्षामा उत्कृष्टताको यात्रा",
    aboutUsHistory: "इतिहास",
    aboutUsHistoryContent: "कोशी प्रदेश पाँचथर जिल्ला अन्तरगत हिलिहाङ गाउँपालिका वडा नं. ७ मा पर्ने यस श्री जय भवानी माध्यमिक विद्यालयको स्थापना वि. सं. २०४४ सालमा भएको थियो । विद्यालय स्थापना गर्ने क्रममा स्थानीय अभिभावकहरुले शिक्षाको महत्त्व बुझि पायक पर्ने स्थानमा घाँसे झाडी फँडानी गरी भिरालो फरेको जग्गालाई सम्याउँदै सम्पुर्ण अभिभावकहरुको सक्रियतामा विद्यालय सञ्चालन गरीएको थियो ।",
    aboutUsFounders: "संस्थापकहरू",
    aboutUsFoundersContent: "विशेष गरी स्थानिय अभिभावक चक्रबहादुर राई, टंकनाथ तिम्सिना, छत्र बहादुर एक्तिनहाङ, पदमलाल रिजाल, जीवनाथ रिजाल, पुर्ण बहादुर थापा, कृष्ण बहादुर सुवेदी, रुद्र प्रसाद पौड्याल, तिलचन तिम्सिना, अम्विका प्रसाद रिजाल, खेम प्रसाद रिजाल, विर बहादुर राई, धन कुमार राई, रुद्र राई, कुमार राई, गोमा देवी रिजाल, पुन्य प्रसाद रिजाल, नरेन्द्र एक्तिनहाङ, सहर बहादुर राई, शक्तिमान राई आदीको अगुवाईमा एकतले घर बनाई विद्यालय सञ्चालन भएको पाईन्छ ।",
    aboutUsNaming: "विद्यालयको नामाकरण",
    aboutUsNamingContent: "विद्यालय सञ्चालन सँगसँगै भगवानको नामबाट विद्यालयको नाम श्री जय भवानी नामाकरण गरीएको थियो ।",
    aboutUsGrowth: "विकास र प्रगति",
    aboutUsGrowthContent: "तत्पश्चात सरकारी र निजी गरी करीव एक दर्जन भन्दा बढी शिक्षकहरुले अध्यापन गरेको पाईन्छ । अभिभावकको अथक प्रयास, सक्रियता र संघर्षमा आर्थिक तथा भौतिक साधनहरु जुटाउँदै दातृ निकायहरु जिल्ला शिक्षा कार्यालय र गाउँविकास समितिको भवन अनुदानमा भवन निर्माण गर्दै विद्यालय अप-ग्रेडिङ भएको छ ।",
    aboutUsVision: "हाम्रो दृष्टि",
    aboutUsVisionContent: "समाजमा सकारात्मक योगदान पुर्‍याउने जिम्मेवार नागरिकहरू तयार गर्ने शैक्षिक उत्कृष्टताको केन्द्र बन्ने ।",
    aboutUsMission: "हाम्रो लक्ष्य",
    aboutUsMissionContent: "बौद्धिक जिज्ञासा, व्यक्तिगत विकास र सामाजिक जिम्मेवारीलाई प्रोत्साहन गर्ने सहयोगी वातावरणमा गुणस्तरीय शिक्षा प्रदान गर्ने ।",
    aboutUsValues: "मूल मान्यताहरू",
    aboutUsValuesExcellence: "उत्कृष्टता",
    aboutUsValuesExcellenceContent: "शैक्षिक र व्यक्तिगत उपलब्धिमा उच्चतम मापदण्डको लागि प्रयासरत",
    aboutUsValuesIntegrity: "सत्यनिष्ठा",
    aboutUsValuesIntegrityContent: "सबै कार्यहरूमा इमानदारी, नैतिकता र पारदर्शिता कायम राख्ने",
    aboutUsValuesRespect: "सम्मान",
    aboutUsValuesRespectContent: "आपसी सम्मान, समावेशिता र विविधताको सराहनाको संस्कृति विकास गर्ने",
    aboutUsValuesInnovation: "नवीनता",
    aboutUsValuesInnovationContent: "सिकाइ र समस्या समाधानमा सिर्जनात्मक सोच र नवीन दृष्टिकोणलाई प्रोत्साहन गर्ने",
    aboutUsValuesCommunity: "समुदाय",
    aboutUsValuesCommunityContent: "विद्यालय, परिवारहरू र समग्र समुदायबीच बलियो साझेदारी निर्माण गर्ने",
  }
};

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');
  
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);
  
  const t = translations[locale] || translations.en;
  
  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'np' : 'en');
  };
  
  const changeLocale = (newLocale) => {
    if (translations[newLocale]) {
      setLocale(newLocale);
    }
  };
  
  return (
    <LocaleContext.Provider value={{ locale, t, toggleLocale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
