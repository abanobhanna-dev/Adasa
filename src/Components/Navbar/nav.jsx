import { Link, NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="w-full py-5 px-4 md:px-8 bg-black fixed top-0 left-0 `w-full` z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* اللوجو */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full `bg-gradient-to-br` from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
            {/* <i className="fa-solid fa-camera text-white text-lg"></i> */}
            <img src="../../../public/logo-GdqARQRt.png" alt="" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-xl ">عدسة</span>
            <span className="text-gray-400 text-xs">
              عالم التصوير الفوتوغرافي
            </span>
          </div>
        </Link>

        {/* اللينكات */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-1.5 py-1.5 border border-white/10">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-medium transition ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-medium transition ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            المدونة
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-medium transition ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`
            }
          >
            من نحن
          </NavLink>
        </div>

        {/* الزر + البحث */}
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition text-lg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link
            to="/start"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition"
          >
            ابدأ القراءة
          </Link>
        </div>
      </div>
    </nav>
  );
}
