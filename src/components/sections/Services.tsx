import { services } from "../../data/home";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s.title}
               className={`p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 border-t-4 ${
                 s.color === "blue" ? "border-blue-500" : "border-purple-500"
               }`}>
            <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
              s.color === "blue" ? "bg-blue-100" : "bg-purple-100"
            }`}>
              <span className={`text-2xl ${s.color === "blue" ? "text-blue-600" : "text-purple-600"}`}>
                {s.color === "blue" ? "🌐" : "🎨"}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
