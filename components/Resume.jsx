"use client";

import { motion } from "framer-motion";
import { MailIcon, LinkIcon, PhoneIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Resume() {
  return (
    <div className="min-h-screen flex justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
      >

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold">Dhanashri Patil</h1>
          <p className="text-gray-300 mt-1">Software Test Engineer • Virar, MH</p>

          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <a href="mailto:patil.dhanuu23@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-sm">
              <MailIcon className="h-4 w-4" /> Email
            </a>

            <a href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-sm">
              <PhoneIcon className="h-4 w-4" /> +91 XXXXXXXXXX
            </a>

            <a href="https://www.linkedin.com/in/patildhanashri" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-sm">
              <LinkIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          <div className="flex justify-center mt-6">
            <a href="/resume.pdf" download
              className="flex items-center gap-2 px-5 py-2 bg-white/20 border border-white/20 text-white rounded-xl">
              <ArrowDownTrayIcon className="h-4 w-4" /> Download PDF Resume
            </a>
          </div>
        </div>

        {/* ABOUT */}
        <section className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-sm">
            Passionate Software Test Engineer with strong experience in both manual and automation testing.
            Skilled in creating test plans, debugging complex issues, and enhancing product quality.
            Experienced in Selenium, Cypress, Appium, API testing, and Agile methodology.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Selenium","Cypress","Appium","Jira","Postman","Regression Testing",
              "Smoke Testing","Sanity Testing","API Testing","Automation Testing",
              "Agile","Bug Reporting"
            ].map(s => (
              <span key={s} className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full">{s}</span>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>

          <div className="mb-6">
            <h3 className="font-bold text-lg">TechBuzz</h3>
            <p className="text-gray-400 text-sm">Software Test Engineer • 2020–2021 • On-site</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm mt-2 space-y-1">
              <li>Performed automation & manual testing for web and mobile applications.</li>
              <li>Improved regression suite by 30% using optimized test coverage.</li>
              <li>Identified major performance bottlenecks and usability issues.</li>
              <li>Worked closely with developers during agile sprints.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-lg">Integration Wizards Solutions Pvt. Ltd.</h3>
            <p className="text-gray-400 text-sm">Software Test Engineer • 2017–2020 • Remote</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm mt-2 space-y-1">
              <li>Executed functional, regression, and integration testing.</li>
              <li>Developed Appium automation scripts for Android & iOS.</li>
              <li>Created detailed bug reports and tracked issues to closure.</li>
              <li>Coordinated test cycles across distributed teams.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg">Career Break (Maternity & Upskilling)</h3>
            <p className="text-gray-400 text-sm">2022 – Present</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm mt-2 space-y-1">
              <li>Focused on parenting while continuously upskilling.</li>
              <li>Completed multiple courses on Cypress, API testing & automation.</li>
              <li>Practiced real-world scenarios through mock QA projects.</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>

          <div className="mb-4">
            <h3 className="font-bold">VIVA Institute of Technology</h3>
            <p className="text-gray-400 text-sm">BE — Electrical, Electronics & Communication • 2017</p>
          </div>

          <div>
            <h3 className="font-bold">Pravin Rohidas Patil Polytechnic</h3>
            <p className="text-gray-400 text-sm">Diploma in Electrical Engineering • 2014</p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-10 bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Highlighted Project</h2>
          <h3 className="font-bold">Prototype: Electromagnetic Differential Relay</h3>
          <p className="text-gray-300 text-sm mt-2">
            Developed a working prototype demonstrating industrial relay fault-clearing mechanisms,
            including fault response, automation logic, and emergency behavior simulation.
          </p>
        </section>

        {/* FOOTER */}
        <p className="text-center text-gray-500 mt-10 text-xs">
          Built for Dhanashri Patil • Powered by Next.js 14 + TailwindCSS
        </p>

      </motion.div>
    </div>
  );
}
