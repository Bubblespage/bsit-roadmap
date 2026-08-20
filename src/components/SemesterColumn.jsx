import CourseCard from './CourseCard';

export default function SemesterColumn({ semester }) {
  return (
    <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-200/60 flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-gray-200 pb-3">
        <h3 className="font-bold text-gray-800 text-base">{semester.title}</h3>
        <span className="text-xs font-semibold text-gray-500 bg-white px-2.5 py-1 rounded-full shadow-2xs border border-gray-100">
          {semester.courses.reduce((acc, curr) => acc + curr.units, 0)} Units
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {semester.courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
}