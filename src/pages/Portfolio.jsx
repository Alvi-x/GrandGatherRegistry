export default function Portfolio() {
  return (
    <div className="min-h-screen p-8 bg-brand-white text-brand-black">
      <h1 className="text-3xl font-semibold mb-6">Our Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 flex items-center justify-center mb-3">
              Project {i + 1}
            </div>
            <p>Project description goes here.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
