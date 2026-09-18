import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      {/* ===== Footer ===== */}
      <footer className="border-t border-white/10 pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* عن عدسة */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-camera text-white"></i>
                </div>
                <span className="text-white font-bold text-xl">عدسة</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
              </div>
            </div>

            {/* استكشف */}
            <div>
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                استكشف
                <span className="w-8 h-0.5 bg-orange-500"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-orange-500 transition text-sm"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-orange-500 transition text-sm"
                  >
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-orange-500 transition text-sm"
                  >
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>

            {/* التصنيفات */}
            <div>
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                التصنيفات
                <span className="w-8 h-0.5 bg-orange-500"></span>
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    to="blog?category=إضاءة"
                    className="text-gray-400 hover:text-orange-500 transition text-sm"
                  >
                    إضاءة
                  </a>
                </li>
                <li>
                  <Link
                    href="/blog?category=بورتريه"
                    className="text-gray-400 hover:text-orange-500 transition text-sm"
                  >
                    بورتريه
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=مناظر طبيعية"
                    className="text-gray-400 hover:text-orange-500 transition text-sm"
                  >
                    مناظر طبيعية
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=تقنيات"
                    className="text-gray-400 hover:text-orange-500 transition text-sm"
                  >
                    تقنيات
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                ابقى على اطلاع
                <span className="w-8 h-0.5 bg-orange-500"></span>
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 mb-3 transition"
              />
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-full transition text-sm">
                اشترك
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 عدسة. صنع بكل 🧡 جميع الحقوق محفوظة</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-500 transition">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                شروط الخدمة
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
