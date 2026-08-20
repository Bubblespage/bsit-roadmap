import { useState, useEffect } from 'react';
import { bsitRoadmap } from './data/roadmapData';

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [completedCourses, setCompletedCourses] = useState(() => {
    const saved = localStorage.getItem('bsit_completed_courses');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [courseGrades, setCourseGrades] = useState(() => {
    const saved = localStorage.getItem('bsit_course_grades');
    return saved ? JSON.parse(saved) : {};
  });

  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [warningMessage, setWarningMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem('bsit_completed_courses', JSON.stringify(completedCourses));
  }, [completedCourses]);

  useEffect(() => {
    localStorage.setItem('bsit_course_grades', JSON.stringify(courseGrades));
  }, [courseGrades]);

  const findCourseByCode = (code) => {
    for (const year of bsitRoadmap) {
      for (const sem of year.semesters) {
        const found = sem.courses.find(c => c.code.toLowerCase() === code.toLowerCase());
        if (found) return found;
      }
    }
    return null;
  };

  const toggleCourse = (course) => {
    const isCompleted = completedCourses.includes(course.code);

    if (!isCompleted && course.preReq && course.preReq !== "none") {
      const preReqCodes = course.preReq.split(',').map(p => p.trim());
      const missingPreReqs = preReqCodes.filter(req => !completedCourses.includes(req.toUpperCase()));

      if (missingPreReqs.length > 0) {
        const missingTitles = missingPreReqs.map(code => {
          const reqCourse = findCourseByCode(code);
          return reqCourse ? `${reqCourse.code} (${reqCourse.title})` : code;
        }).join(', ');

        setWarningMessage(`Prerequisite Warning: You must complete ${missingTitles} before checking off ${course.code}!`);
        setTimeout(() => setWarningMessage(null), 5000);
        return;
      }
    }

    setCompletedCourses(prev => 
      isCompleted ? prev.filter(c => c !== course.code) : [...prev, course.code]
    );
  };

  const handleGradeChange = (code, grade) => {
    setCourseGrades(prev => ({
      ...prev,
      [code]: grade ? parseFloat(grade) : undefined
    }));
  };

  // Reset Progress function
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all completed courses and grades?")) {
      setCompletedCourses([]);
      setCourseGrades({});
      localStorage.removeItem('bsit_completed_courses');
      localStorage.removeItem('bsit_course_grades');
    }
  };

  const totalUnits = bsitRoadmap.reduce((acc, year) => 
    acc + year.semesters.reduce((semAcc, sem) => 
      semAcc + sem.courses.reduce((cAcc, course) => cAcc + course.units, 0), 0), 0
  );

  const earnedUnits = bsitRoadmap.reduce((acc, year) => 
    acc + year.semesters.reduce((semAcc, sem) => 
      semAcc + sem.courses.reduce((cAcc, course) => 
        completedCourses.includes(course.code) ? cAcc + course.units : cAcc, 0), 0), 0
  );

  const progressPercentage = Math.round((earnedUnits / totalUnits) * 100) || 0;

  let totalGradePoints = 0;
  let gradedUnitsCount = 0;
  completedCourses.forEach(code => {
    const grade = courseGrades[code];
    if (grade !== undefined) {
      const courseObj = findCourseByCode(code);
      if (courseObj) {
        totalGradePoints += grade * courseObj.units;
        gradedUnitsCount += courseObj.units;
      }
    }
  });
  const currentGPA = gradedUnitsCount > 0 ? (totalGradePoints / gradedUnitsCount).toFixed(2) : "N/A";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white pb-24">
      {warningMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-amber-500 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
          <span>⚠️</span>
          <span className="text-xs font-bold">{warningMessage}</span>
          <button onClick={() => setWarningMessage(null)} className="ml-4 font-bold text-white hover:text-amber-100">✕</button>
        </div>
      )}

      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                BSIT Curriculum Portfolio
              </span>
              <span className="text-xs font-medium text-slate-500">12-Term Institutional Roadmap</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Degree Progress & Milestone Matrix
            </h1>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
            <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl flex items-center gap-4 shadow-2xs">
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Units Earned</div>
                <div className="text-sm font-extrabold text-indigo-600">{earnedUnits} / {totalUnits} ({progressPercentage}%)</div>
              </div>
              <div className="w-20 bg-slate-200 h-2 rounded-full overflow-hidden hidden sm:block">
                <div className="bg-indigo-600 h-full transition-all duration-500 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl shadow-2xs">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Current GPA</div>
              <div className="text-sm font-extrabold text-emerald-600">{currentGPA}</div>
            </div>

            <button
              onClick={handleReset}
              className="bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-200 hover:border-rose-200 px-3 py-2.5 rounded-xl text-xs font-bold transition-all shadow-2xs"
              title="Reset all progress and grades"
            >
              🔄 Reset Progress
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-4 pt-2 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5 bg-slate-100/80 p-1 rounded-lg border border-slate-200">
            {["All", "Core", "Specialization", "General"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  selectedFilter === filter
                    ? "bg-white text-indigo-600 shadow-xs font-bold border border-slate-200/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">🔍</span>
            <input
              type="text"
              placeholder="Search course code or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-slate-100/60 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-10 flex flex-col gap-12">
        {bsitRoadmap.map((yearGroup, yIdx) => (
          <section key={yIdx} className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-extrabold text-slate-800 tracking-tight flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                {yearGroup.year}
              </h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {yearGroup.semesters.map((semester, sIdx) => {
                const filteredCourses = semester.courses.filter((course) => {
                  const matchesCategory = selectedFilter === "All" || course.type === selectedFilter;
                  const matchesSearch = course.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                        course.title.toLowerCase().includes(searchQuery.toLowerCase());
                  return matchesCategory && matchesSearch;
                });

                if (filteredCourses.length === 0 && searchQuery) return null;

                return (
                  <div key={sIdx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <h3 className="font-bold text-slate-800 text-sm">{semester.title}</h3>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                        {semester.courses.reduce((acc, curr) => acc + curr.units, 0)} Units
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      {semester.courses.map((course, cIdx) => {
                        const isCompleted = completedCourses.includes(course.code);
                        const assignedGrade = courseGrades[course.code];
                        const matchesCategory = selectedFilter === "All" || course.type === selectedFilter;
                        const matchesSearch = course.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                              course.title.toLowerCase().includes(searchQuery.toLowerCase());
                        
                        if (!matchesCategory || !matchesSearch) return null;

                        const isPrerequisiteOfHovered = hoveredCourse && course.code.toLowerCase() === hoveredCourse.toLowerCase();

                        return (
                          <div
                            key={cIdx}
                            onMouseEnter={() => setHoveredCourse(course.preReq)}
                            onMouseLeave={() => setHoveredCourse(null)}
                            onClick={() => toggleCourse(course)}
                            className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative group select-none ${
                              isPrerequisiteOfHovered
                                ? "ring-2 ring-amber-400 bg-amber-50/50 border-amber-300 shadow-sm"
                                : isCompleted 
                                ? "bg-indigo-50/40 border-indigo-200 shadow-xs" 
                                : "bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md"
                            }`}
                          >
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-1.5">
                                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded border transition-colors ${
                                    isCompleted 
                                      ? "bg-indigo-600 text-white border-indigo-600" 
                                      : "bg-slate-100 text-slate-700 border-slate-200"
                                  }`}>
                                    {isCompleted ? "✓ " : ""}{course.code}
                                  </span>

                                  {/* Grade Badge Displayed Directly on Card if Selected */}
                                  {assignedGrade && (
                                    <span className="font-mono text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-300 shadow-2xs">
                                      Grade: {assignedGrade.toFixed(2)}
                                    </span>
                                  )}
                                </div>

                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                                  course.type === 'Specialization' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                                  course.type === 'Core' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                  'bg-emerald-50 text-emerald-700 border-emerald-200'
                                }`}>
                                  {course.type}
                                </span>
                              </div>
                              <h4 className={`font-bold text-xs mb-1 leading-snug ${isCompleted ? "text-slate-700" : "text-slate-900"}`}>
                                {course.title}
                              </h4>
                              <p className="text-slate-500 text-[11px] leading-relaxed mb-3">
                                {course.desc}
                              </p>
                            </div>

                            <div 
                              className="pt-2 border-t border-slate-100 flex justify-between items-center text-[11px] text-slate-400 font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>{course.units} Units</span>
                              
                              {isCompleted ? (
                                <div className="flex items-center gap-1">
                                  <span className="text-[10px] text-slate-500">Grade:</span>
                                  <select
                                    value={assignedGrade || ""}
                                    onChange={(e) => handleGradeChange(course.code, e.target.value)}
                                    className="bg-white border border-slate-300 rounded text-[11px] px-1 py-0.5 text-slate-700 font-bold focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
                                  >
                                    <option value="">Select</option>
                                    <option value="1.00">1.00</option>
                                    <option value="1.25">1.25</option>
                                    <option value="1.50">1.50</option>
                                    <option value="1.75">1.75</option>
                                    <option value="2.00">2.00</option>
                                    <option value="2.25">2.25</option>
                                    <option value="2.50">2.50</option>
                                    <option value="2.75">2.75</option>
                                    <option value="3.00">3.00</option>
                                    <option value="3.25">3.25</option>
                                    <option value="3.50">3.50</option>
                                    <option value="3.75">3.75</option>
                                    <option value="4.00">4.00</option>
                                  </select>
                                </div>
                              ) : (
                                course.preReq !== "none" && (
                                  <span className="text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-[10px]">
                                    Pre-req: {course.preReq}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}