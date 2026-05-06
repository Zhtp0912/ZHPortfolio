import { qualifications } from "../../data/home";

const colorConfig: Record<string, { border: string; badge: string; badgeText: string; dot: string }> = {
  blue:   { border: "border-blue-500",   badge: "bg-blue-50",   badgeText: "text-blue-600",   dot: "bg-blue-500" },
  yellow: { border: "border-yellow-500", badge: "bg-yellow-50", badgeText: "text-yellow-600", dot: "bg-yellow-500" },
  purple: { border: "border-purple-500", badge: "bg-purple-50", badgeText: "text-purple-600", dot: "bg-purple-500" },
  green:  { border: "border-green-500",  badge: "bg-green-50",  badgeText: "text-green-600",  dot: "bg-green-500" },
  orange: { border: "border-orange-500", badge: "bg-orange-50", badgeText: "text-orange-600", dot: "bg-orange-500" },
  teal:   { border: "border-teal-500",   badge: "bg-teal-50",   badgeText: "text-teal-600",   dot: "bg-teal-500" },
};

export default function Qualifications() {
  return (
    <section id="qualification" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Qualifications</h2>
          <p className="text-gray-400">My academic and professional background</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200" />

          <ul className="space-y-6 pl-14">
            {qualifications.map((q) => {
              const c = colorConfig[q.color] ?? colorConfig.blue;
              return (
                <li key={q.title} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute -left-10 top-5 w-4 h-4 rounded-full ${c.dot} ring-4 ring-white shadow-sm`} />

                  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-l-4 ${c.border} hover:shadow-md transition-shadow duration-200`}>
                    {/* Period badge */}
                    {q.period && (
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${c.badge} ${c.badgeText}`}>
                        {q.period}
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-gray-900 leading-snug">{q.title}</h3>
                    {q.place && <p className="text-sm text-gray-500 mt-1">{q.place}</p>}
                    {q.highlight && (
                      <p className={`text-sm font-semibold mt-2 ${c.badgeText}`}>{q.highlight}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}