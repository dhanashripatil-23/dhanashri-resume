"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, LinkIcon, PhoneIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function Resume() {
  const resumeRef = useRef(null);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      // Dynamic imports for client-side only libraries
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const element = resumeRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Dhanashri_Patil_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Download Button - Fixed at top */}
        <div className="flex justify-end mb-6">
          <motion.button
            onClick={downloadPDF}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download PDF
          </motion.button>
        </div>

        {/* Resume Content */}
        <motion.div
          ref={resumeRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          {/* HEADER */}
          <div className="text-center mb-8 pb-8 border-b-2 border-orange-500">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">
              Dhanashri Patil
            </h1>
            <p className="text-xl text-gray-700 font-semibold mb-4">Software Test Engineer</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-medium">📍</span>
                <span>Virar, Maharashtra, India</span>
              </div>
              <a 
                href="mailto:patil.dhanuu23@gmail.com"
                className="flex items-center gap-2 hover:text-orange-600 transition-colors"
              >
                <EnvelopeIcon className="h-4 w-4" />
                <span>patil.dhanuu23@gmail.com</span>
              </a>
              <a 
                href="tel:+918237207698"
                className="flex items-center gap-2 hover:text-orange-600 transition-colors"
              >
                <PhoneIcon className="h-4 w-4" />
                <span>+91 8237207698</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/patildhanashri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-600 transition-colors"
              >
                <LinkIcon className="h-4 w-4" />
                <span>linkedin.com/in/patildhanashri</span>
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Results-oriented software test engineer with expertise in automation and manual testing, 
              passionate about ensuring robust and reliable software releases through rigorous analysis 
              and collaborative teamwork. Skilled in tools like Cypress and Selenium, with a knack for 
              troubleshooting and process enhancement in Agile environments. Committed to delivering 
              high-quality outcomes and learning new technologies to drive team and project success. 
              During a recent career break, proactively upskilled in artificial intelligence (AI) 
              technologies, gaining knowledge in AI-driven testing tools and automation frameworks to 
              enhance testing efficiency and innovation in future projects.
            </p>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Work Experience
            </h2>

            {/* Career Break */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">Full-time Parenting (Career Break)</h3>
                <span className="text-gray-600 font-medium text-sm md:text-base">Nov 2022 - Present</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2">
                After a meaningful pause to embrace marriage and motherhood, I'm excited to return with 
                renewed energy and a commitment to upskilling in the latest technologies and AI, ready 
                to contribute effectively and grow professionally in software testing.
              </p>
            </div>

            {/* TechBuzz */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Software Test Engineer</h3>
                  <p className="text-lg text-gray-700 font-semibold">TechBuzz</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600 font-medium block">May 2020 - Jul 2021</span>
                  <span className="text-gray-500 text-sm">1 yr 3 mos • On-site</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Experienced Software Test Engineer with a strong focus on designing, executing, and 
                maintaining manual and automated tests for web and mobile applications. Skilled in 
                creating test plans, identifying defects, collaborating with cross-functional teams, 
                and ensuring software meets quality standards. Proficient with testing tools like 
                Selenium and Appium, with a commitment to improving testing processes and delivering 
                reliable, user-friendly software solutions.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  Software Testing
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  Adhoc Testing
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  Selenium
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  Appium
                </span>
              </div>
            </div>

            {/* Integration Wizards */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Software Test Engineer</h3>
                  <p className="text-lg text-gray-700 font-semibold">Integration Wizards Solutions Private Limited</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600 font-medium block">Apr 2018 - May 2020</span>
                  <span className="text-gray-500 text-sm">2 yrs 2 mos • Remote</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                Transitioned from Associate Software Test Engineer to Software Test Engineer with 
                enhanced responsibilities in creating and executing detailed test plans, identifying 
                defects, and collaborating with development teams to improve software quality. Skilled 
                in both manual and automated testing, contributing to test case design, defect tracking, 
                and basic team coordination. Continuously developing technical skills in test automation 
                and programming for stronger QA impact.
              </p>
              <div className="mt-4 mb-4">
                <p className="text-sm text-gray-600 font-semibold mb-2">Previous Role:</p>
                <div className="pl-4 border-l-2 border-orange-300">
                  <p className="text-gray-700 font-medium">Associate Software Test Engineer</p>
                  <p className="text-gray-600 text-sm mb-2">Oct 2017 - Apr 2018</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Seasoned UI & Mobile App Tester skilled in ensuring seamless user experiences for 
                    websites and iOS/Android apps. Experienced in manual and automated testing, defect 
                    tracking, and collaborating with development teams to deliver high-quality, 
                    user-friendly products. Proficient in Selenium, Cypress, and industry-standard QA practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  Data Structures
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  Test Automation
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  Cypress
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                  Selenium
                </span>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Education
            </h2>

            <div className="mb-4 pb-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">
                Bachelor of Engineering - Electrical, Electronics and Communications Engineering
              </h3>
              <p className="text-gray-700 font-semibold">VIVA Institute of Technology</p>
              <p className="text-gray-600 text-sm">Mumbai University • Jun 2017</p>
            </div>

            <div className="mb-4 pb-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">
                Diploma - Electrical, Electronics and Communications Engineering
              </h3>
              <p className="text-gray-700 font-semibold">
                Pravin Rohidas Patil College of Diploma Engineering & Technology
              </p>
              <p className="text-gray-600 text-sm">Maharashtra State Board of Technical Education • May 2014</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800">Secondary School Certificate</h3>
              <p className="text-gray-700 font-semibold">Aryan High School</p>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Projects
            </h2>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">
                  Prototype Model of Electromagnetic Type of Differential Relay
                </h3>
                <span className="text-gray-600 font-medium text-sm">Aug 2016 - May 2017</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The objective of this project is to have a clearer visual view of how a differential 
                relay operates in the industries and how the fault clearing is done within the relay.
              </p>
            </div>
          </section>

          {/* SKILLS */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Mobile App Testing",
                "Software Test Engineer",
                "UI Testing",
                "Software Quality Assurance",
                "Selenium",
                "Cypress",
                "Appium",
                "Test Automation",
                "Manual Testing",
                "API Testing",
                "Agile Methodology",
                "Defect Tracking",
                "Test Planning",
                "Regression Testing",
                "Data Structures"
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 rounded-lg text-sm font-medium border border-orange-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </motion.div>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          Built with Next.js 14 + TailwindCSS • Professional Resume Portfolio
        </p>
      </div>
    </div>
  );
}
