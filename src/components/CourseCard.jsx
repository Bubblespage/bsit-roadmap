export default function CourseCard({ course }) {
  const getTypeColor = (type) => {
    switch (type) {
      case "Core": return "bg-blue-50 text-blue-700 border-blue-200";
      case "Specialization": return "bg-purple-50 text-purple-700 border-purple-200";
      case "General": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-800">
            {course.code}
          </span>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getTypeColor(course.type)}`}>
            {course.type}
          </span>
        </div>
        <h4 className="font-bold text-gray-900 text-sm mb-1">{course.title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed mb-3">{course.desc}</p>
      </div>
      <div className="pt-2 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400 font-medium">
        <span>{course.units} Units</span>
        {course.preReq && (
          <span className="text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded text-[10px]">
            Pre-req: {course.preReq}
          </span>
        )}
      </div>
    </div>
  );
}