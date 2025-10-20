import { qualifications } from "../../data/home";

const leftBorder: Record<string, string> = {
  blue: "border-blue-500",
  yellow: "border-yellow-500",
  purple: "border-purple-500",
  green: "border-green-500",
  orange: "border-orange-500",
};

export default function Qualifications() {
  return (
    <section id="qualification" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">Qualifications</h2>
      <ul className="space-y-6">
        {qualifications.map((q) => (
          <li key={q.title}
              className={`bg-white p-6 rounded-xl shadow-md border-l-4 ${leftBorder[q.color]} hover:shadow-lg transition-shadow`}>
            <h3 className="text-xl font-semibold text-gray-900">{q.title}</h3>
            {q.place && <p className="text-gray-600">{q.place}</p>}
            {q.period && <p className="text-gray-600">{q.period}</p>}
            {q.highlight && <p className="font-medium text-gray-700">{q.highlight}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
