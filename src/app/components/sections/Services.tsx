import { services } from "../../data/home";

const colorConfig = {
  blue: {
    headerBg: "bg-blue-600",
    tagBg: "bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100",
    emoji: "🌐",
  },
  purple: {
    headerBg: "bg-purple-600",
    tagBg: "bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-100",
    emoji: "🎨",
  },
  green: {
    headerBg: "bg-green-600",
    tagBg: "bg-green-50 text-green-700 border border-green-100 hover:bg-green-100",
    emoji: "🖥️",
  },
} as const;

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Services</h2>
          <p className="text-gray-400">What I can build and deliver for you</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s) => {
            const cfg = colorConfig[s.color];
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="px-6 py-6 flex flex-col gap-4">
                  {/* Icon */}
                  <div className={`w-11 h-11 ${cfg.headerBg} rounded-xl flex items-center justify-center text-xl shadow-sm`}>
                    {cfg.emoji}
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">{s.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{s.desc}</p>
                  </div>
                  {/* Badge */}
                  <span className={`self-start px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 cursor-default ${cfg.tagBg}`}>
                    Available
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}