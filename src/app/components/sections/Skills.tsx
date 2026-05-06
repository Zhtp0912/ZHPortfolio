"use client";
import { useState } from "react";
import { skillsData } from "../../data/home";

const categoryConfig = {
  Frontend: {
    emoji: "🎨",
    accent: "blue",
    headerBg: "bg-blue-600",
    tagBg: "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100",
    statColor: "text-blue-600",
  },
  Backend: {
    emoji: "⚙️",
    accent: "purple",
    headerBg: "bg-purple-600",
    tagBg: "bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-100",
    statColor: "text-purple-600",
  },
  Microsoft: {
    emoji: "🪟",
    accent: "green",
    headerBg: "bg-green-600",
    tagBg: "bg-green-50 text-green-700 border border-green-100 hover:bg-green-100",
    statColor: "text-green-600",
  },
  Tools: {
    emoji: "🔧",
    accent: "orange",
    headerBg: "bg-orange-500",
    tagBg: "bg-orange-50 text-orange-700 border border-orange-100 hover:bg-orange-100",
    statColor: "text-orange-500",
  },
} as const;

export default function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Skills &amp; Technologies</h2>
          <p className="text-gray-400">Tools and technologies I work with</p>
        </div>

        {/* Grid — fixed row heights so opening one card doesn't shift others */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {Object.entries(skillsData).map(([category, skills]) => {
            const cfg = categoryConfig[category as keyof typeof categoryConfig];
            const isOpen = openCategory === category;

            return (
              <div
                key={category}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Header button */}
                <button
                  onClick={() => setOpenCategory(isOpen ? null : category)}
                  className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 ${cfg.headerBg} rounded-xl flex items-center justify-center text-xl shadow-sm`}>
                      {cfg.emoji}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 text-base">{category}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{skills.length} technologies</p>
                    </div>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border border-gray-200 transition-transform duration-300 ${isOpen ? "rotate-180 bg-gray-100" : "bg-white"}`}>
                    <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Divider */}
                {isOpen && <div className="h-px bg-gray-100 mx-6" />}

                {/* Expandable content */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 py-5">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 cursor-default ${cfg.tagBg}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: "20+", label: "Technologies", color: "text-blue-600" },
            { val: "4",   label: "Categories",   color: "text-purple-600" },
            { val: "3+",  label: "Years Learning",color: "text-green-600" },
            { val: "10+", label: "Projects Built",color: "text-orange-500" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
              <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}