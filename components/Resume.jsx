import React from 'react'
import { motion } from 'framer-motion'
import { MailIcon, LinkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-5xl rounded-2xl bg-white/90 dark:bg-[rgba(10,12,20,0.6)] backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden">
        <header className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 md:px-14">
          <div className="relative flex items-center gap-4">
            <div className="h-28 w-28 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-3xl font-bold text-white">DP</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">Dhanashri Patil</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Software Test Engineer • Virar, MH</p>
              <div className="mt-3 flex items-center gap-3">
                <a href="mailto:patil.dhanuu23@gmail.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/10 border border-white/10 text-sm">
                  <MailIcon className="h-4 w-4" />
                  <span>patil.dhanuu23@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/patildhanashri" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 dark:bg-white/10 border border-white/10 text-sm">
                  <LinkIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="ml-auto flex gap-3 mt-4 md:mt-0">
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-lg transform transition-transform hover:scale-[1.01]" download>
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Download PDF</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 bg-white dark:bg-transparent text-slate-800 dark:text-white hover:shadow-md transition">Contact</a>
          </div>
        </header>

        <main className="px-8 md:px-14 pb-10">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="md:col-span-2">
              <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Software Test Engineer</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">Results-oriented Software Test Engineer with hands-on experience in automated and manual testing for web and mobile applications. Skilled with Cypress, Selenium and Appium, and actively exploring AI-driven testing tools and automation frameworks. Strong communicator and collaborative team player — recently returned from a career break for full-time parenting while upskilling in modern testing practices and AI for test automation.</p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-white/60 dark:bg-white/10 border border-white/10">
                  <div className="text-xs text-slate-500">Experience</div>
                  <div className="font-semibold text-slate-900 dark:text-white">4+ yrs</div>
                </div>
                <div className="p-3 rounded-lg bg-white/60 dark:bg-white/10 border border-white/10">
                  <div className="text-xs text-slate-500">Primary Tools</div>
                  <div className="font-semibold text-slate-900 dark:text-white">Selenium • Cypress • Appium</div>
                </div>
                <div className="p-3 rounded-lg bg-white/60 dark:bg-white/10 border border-white/10">
                  <div className="text-xs text-slate-500">Open to</div>
                  <div className="font-semibold text-slate-900 dark:text-white">QA Roles • Automation • SDET</div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Work Experience</h3>
                <div className="mt-4 space-y-6">

                  <article className="p-4 rounded-xl bg-white dark:bg-[rgba(255,255,255,0.02)] border border-white/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-md font-semibold text-slate-900 dark:text-white">TechBuzz</h4>
                        <p className="text-sm text-slate-500">Software Test Engineer • May 2020 - Jul 2021</p>
                      </div>
                      <div className="text-sm text-slate-500">On-site</div>
                    </div>

                    <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      <li>Designed and executed manual and automated test suites for web & mobile apps using Selenium and Appium.</li>
                      <li>Collaborated with developers to triage defects and improve CI test coverage.</li>
                    </ul>
                  </article>

                  <article className="p-4 rounded-xl bg-white dark:bg-[rgba(255,255,255,0.02)] border border-white/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-md font-semibold text-slate-900 dark:text-white">Integration Wizards Solutions Pvt. Ltd.</h4>
                        <p className="text-sm text-slate-500">Software Test Engineer • Oct 2017 - May 2020</p>
                      </div>
                      <div className="text-sm text-slate-500">Remote</div>
                    </div>

                    <ul className="mt-3 list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      <li>Moved from Associate → Software Test Engineer; created detailed test plans and tracked defects to closure.</li>
                      <li>Contributed to test automation efforts and UI test stability improvements.</li>
                    </ul>
                  </article>

                  <article className="p-4 rounded-xl bg-white dark:bg-[rgba(255,255,255,0.02)] border border-white/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-md font-semibold text-slate-900 dark:text-white">Full-time parenting</h4>
                        <p className="text-sm text-slate-500">Career Break • Nov 2022 - Present</p>
                      </div>
                      <div className="text-sm text-slate-500">Upskilling</div>
                    </div>

                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Meaningful career break to embrace family and motherhood. During this period, upskilled in AI-driven testing tools and modern test automation frameworks.</p>
                  </article>

                </div>
              </div>
            </motion.div>

            <aside className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }} className="p-4 rounded-2xl border border-white/10 bg-white/60 dark:bg-white/10">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Skills</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Selenium', 'Cypress', 'Appium', 'Test Automation', 'Manual Testing', 'CI/CD', 'Jira', 'Postman', 'AI Testing'].map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full bg-transparent border border-white/10 text-slate-700 dark:text-white">{s}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }} className="p-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#041022] to-[#06122a] text-white">
                <h4 className="text-sm font-semibold">Highlighted Project</h4>
                <h5 className="mt-2 font-bold text-lg">Prototype model of electromagnetic type of differential relay</h5>
                <p className="mt-2 text-sm text-slate-200">A visual demonstration to understand relay fault clearing mechanism used in industries. Aug 2016 - May 2017.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.16 }} className="p-4 rounded-2xl border border-white/10 bg-white/60 dark:bg-white/10">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Education</h4>
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  <div className="font-semibold">VIVA Institute of Technology</div>
                  <div className="text-xs">Mumbai University — Electrical, Electronics & Communications Engineering — Jun 2017</div>
                </div>
                <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="font-semibold">Pravin Rohidas Patil College of Diploma Engineering & Technology</div>
                  <div className="text-xs">Diploma (Electrical) — May 2014</div>
                </div>
              </motion.div>

            </aside>
          </section>

          <section id="contact" className="mt-10 p-6 rounded-xl bg-gradient-to-r from-white to-slate-50 dark:from-[rgba(255,255,255,0.02)] dark:to-[rgba(255,255,255,0.01)] border border-white/10">
            <h3 className="text-lg font-bold">Contact & Showcase</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">I host this resume as a GitHub Pages / Vercel site to make it easily shareable with recruiters. Below are links you can use to showcase and track interest.</p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="https://github.com/your-username/your-resume-repo" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border bg-white dark:bg-transparent text-slate-800 dark:text-white">View on GitHub</a>
              <a href="https://vercel.com/new?template=https://github.com/your-username/your-resume-repo" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border bg-gradient-to-r from-slate-900 to-blue-900 text-white">1-Click Deploy to Vercel</a>
              <a href="https://github.com/your-username/your-resume-repo/actions" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border bg-white dark:bg-transparent text-slate-800 dark:text-white">Enable GitHub Actions</a>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border bg-white/60 dark:bg-white/10 text-sm">Shareable URL: <br /><span className="font-mono text-xs">https://dhanashri.example.com</span></div>
              <div className="p-3 rounded-lg border bg-white/60 dark:bg-white/10 text-sm">QR Code (download) <br /><span className="font-mono text-xs">Generate using any QR code generator for the above URL</span></div>
              <div className="p-3 rounded-lg border bg-white/60 dark:bg-white/10 text-sm">ATS Tip: <br />Keep a plain-text / PDF version for ATS parsing.</div>
            </div>
          </section>

        </main>

        <footer className="px-8 md:px-14 py-6 border-t border-white/10 flex items-center justify-between">
          <div className="text-sm text-slate-600 dark:text-slate-300">© Dhanashri Patil • Built with ❤️ for recruitment</div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/patildhanashri" target="_blank" rel="noopener noreferrer" className="text-sm">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
