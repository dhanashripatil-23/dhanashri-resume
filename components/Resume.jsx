import { motion } from "framer-motion";
import { MailIcon, LinkIcon } from "@heroicons/react/24/outline";

export default function Resume(){
  return (
    <div className="min-h-screen flex justify-center py-16 px-4">
      <motion.div 
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
        className="w-full max-w-4xl p-10 rounded-3xl border border-white/10 bg-glass backdrop-blur-xl shadow-2xl"
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-2">
          Dhanashri Patil
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Software Test Engineer • Virar, MH
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <a className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm"
             href="mailto:patil.dhanuu23@gmail.com">
            <MailIcon className="h-4 w-4" /> Email
          </a>
          <a className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-sm"
             target="_blank" rel="noopener noreferrer"
             href="https://www.linkedin.com/in/patildhanashri">
            <LinkIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <section className="space-y-6">
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-300 leading-relaxed">
              Software Test Engineer with strong skills in automation (Selenium, Appium, Cypress)
              and manual testing. Passionate about quality, debugging & delivering flawless user experience.
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["Selenium","Cypress","Appium","Manual Testing","Automation","Jira","Postman"].map(s=>(
                <span key={s} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold mb-3">Experience</h2>

            <div className="mb-4">
              <h3 className="font-bold">TechBuzz</h3>
              <p className="text-gray-400 text-sm">Software Test Engineer • 2020–2021</p>
              <p className="text-gray-300 mt-1 text-sm">Automation + Manual testing for mobile & web.</p>
            </div>

            <div>
              <h3 className="font-bold">Integration Wizards</h3>
              <p className="text-gray-400 text-sm">Software Test Engineer • 2017–2020</p>
              <p className="text-gray-300 mt-1 text-sm">Mobile & web app QA, automation scripts & debugging.</p>
            </div>
          </div>
        </section>

        <p className="text-center text-gray-500 mt-10 text-xs">
          Built for Dhanashri Patil — Powered by Next.js & Tailwind
        </p>
      </motion.div>
    </div>
  )
}
