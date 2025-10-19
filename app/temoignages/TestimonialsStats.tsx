
'use client';

export default function TestimonialsStats() {
  const stats = [
    { number: "98%", label: "Taux de réussite", icon: "ri-trophy-line" },
    { number: "15,247", label: "Clients satisfaits", icon: "ri-user-smile-line" },
    { number: "4.9/5", label: "Note moyenne", icon: "ri-star-line" },
    { number: "24h", label: "Délai de réponse", icon: "ri-time-line" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl`}></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
