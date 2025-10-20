"use client";
import { useState } from "react";
import { skillsData } from "../../data/home";

const colorMap = {
  Frontend: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hover: "hover:bg-blue-100" },
  Backend:  { bg: "bg-purple-500", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hover: "hover:bg-purple-100" },
  Microsoft:{ bg: "bg-green-500", light: "bg-green-50", text: "text-green-600", border: "border-green-200", hover: "hover:bg-green-100" },
  Tools:    { bg: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hover: "hover:bg-orange-100" },
} as const;

export default function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Skills &amp; Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => {
            const colors = colorMap[category as keyof typeof colorMap];
            const isOpen = openCategory === category;

            return (
              <div key={category} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenCategory(isOpen ? null : category)}
                  className={`w-full flex items-center justify-between p-6 ${colors.hover} transition-colors duration-200 focus:outline-none`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                      <span className="text-white font-bold text-lg">
                        {category === "Frontend" ? "🎨" : category === "Backend" ? "⚙️" : category === "Microsoft" ? "🪟" : "🔧"}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className={`text-xl font-bold ${colors.text}`}>{category}</h3>
                      <p className="text-sm text-gray-500 mt-1">{skills.length} technologies</p>
                    </div>
                  </div>

                  <svg className={`w-6 h-6 transform transition-transform duration-300 ${colors.text} ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className={`p-6 pt-0 ${colors.light}`}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {skills.map((s, i) => (
                        <div key={s} className="bg-white rounded-lg p-3 text-center text-gray-700 font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 border border-gray-200" style={{ animationDelay: `${i * 50}ms` }}>
                          {s}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <div className={`w-full ${colors.light} rounded-full h-2`}>
                        <div className={`${colors.bg} h-2 rounded-full transition-all duration-1000 ease-out ${isOpen ? "w-full" : "w-0"}`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-sm text-gray-600">Technologies</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-green-600 mb-2">3+</div>
            <div className="text-sm text-gray-600">Years Learning</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-2xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-sm text-gray-600">Projects Built</div>
          </div>
        </div>
      </div>
    </section>
  );
}
