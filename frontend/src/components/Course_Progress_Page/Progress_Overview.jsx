import React from "react";

const Progress_Overview = () => {
  const stats = [
    { title: "Total Courses Enrolled", value: "05" },
    { title: "Courses Completed", value: "03" },
    { title: "Certificate Earned", value: "03" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-gray-100 rounded-l p-6 text-center" // gray bg + no shadow
        >
          <h3 className="text-gray-800 font-medium">{item.title}</h3>
          <p className="text-3xl font-bold mt-2">{item.value}</p>
        </div>
      ))}
    </section>
  );
};

export default Progress_Overview;
