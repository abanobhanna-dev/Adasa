import { Link } from "react-router-dom";
export default function Abaout() {
  return (
    <>
      {/* ===== مهمتنا ===== */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            من نحن
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="text-white">مهمتنا هي </span>
            <span className="text-orange-500">الإعلام والإلهام</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
            مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl py-8 px-4">
              <i className="fa-solid fa-book-open text-orange-500 text-2xl mb-3"></i>
              <h3 className="text-white text-2xl font-bold">15+</h3>
              <p className="text-gray-400 text-sm mt-1">تصنيف</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl py-8 px-4">
              <i className="fa-solid fa-pen-nib text-orange-500 text-2xl mb-3"></i>
              <h3 className="text-white text-2xl font-bold">50+</h3>
              <p className="text-gray-400 text-sm mt-1">كاتب خبير</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl py-8 px-4">
              <i className="fa-solid fa-file-lines text-orange-500 text-2xl mb-3"></i>
              <h3 className="text-white text-2xl font-bold">500+</h3>
              <p className="text-gray-400 text-sm mt-1">مقالة منشورة</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl py-8 px-4">
              <i className="fa-solid fa-users text-orange-500 text-2xl mb-3"></i>
              <h3 className="text-white text-2xl font-bold">2+ مليون</h3>
              <p className="text-gray-400 text-sm mt-1">قارئ شهرياً</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== قيمنا ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">قيمنا</h2>
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-400 mb-14">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition">
              <i className="fa-solid fa-rotate text-orange-500 text-3xl mb-4"></i>
              <h3 className="text-white font-bold text-lg mb-2">دائماً محدث</h3>
              <p className="text-gray-400 text-sm">
                أحدث الاتجاهات وأفضل الممارسات
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition">
              <i className="fa-solid fa-handshake text-orange-500 text-3xl mb-4"></i>
              <h3 className="text-white font-bold text-lg mb-2">المجتمع</h3>
              <p className="text-gray-400 text-sm">تعلم مع آلاف المصورين</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition">
              <i className="fa-solid fa-bolt text-orange-500 text-3xl mb-4"></i>
              <h3 className="text-white font-bold text-lg mb-2">تركيز عملي</h3>
              <p className="text-gray-400 text-sm">
                أمثلة واقعية يمكنك تطبيقها اليوم
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition">
              <i className="fa-solid fa-bullseye text-orange-500 text-3xl mb-4"></i>
              <h3 className="text-white font-bold text-lg mb-2">
                الجودة أولاً
              </h3>
              <p className="text-gray-400 text-sm">محتوى مدروس ومكتوب بخبرة</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== فريقنا ===== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            فريقنا
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            تعرف على كتابنا
          </h2>
          <p className="text-gray-400 mb-14">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
            المجتمع.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* كاتب 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition">
              <div className="relative w-24 h-24 mx-auto mb-5">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="سالم أحمد"
                  className="w-full h-full rounded-full object-cover"
                />
                <span className="absolute bottom-0 left-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                  <i className="fa-solid fa-check text-white text-xs"></i>
                </span>
              </div>
              <h3 className="text-white font-bold text-lg">سالم أحمد</h3>
              <p className="text-orange-400 text-sm mb-5">مصور محترف</p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-x-twitter text-sm"></i>
                </a>
              </div>
            </div>

            {/* كاتب 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition">
              <div className="relative w-24 h-24 mx-auto mb-5">
                <img
                  src="https://i.pravatar.cc/150?img=33"
                  alt="محمد علي"
                  className="w-full h-full rounded-full object-cover"
                />
                <span className="absolute bottom-0 left-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                  <i className="fa-solid fa-check text-white text-xs"></i>
                </span>
              </div>
              <h3 className="text-white font-bold text-lg">محمد علي</h3>
              <p className="text-orange-400 text-sm mb-5">مصور بورتريه</p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-x-twitter text-sm"></i>
                </a>
              </div>
            </div>

            {/* كاتب 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition">
              <div className="relative w-24 h-24 mx-auto mb-5">
                <img
                  src="https://i.pravatar.cc/150?img=60"
                  alt="إبراهيم حسن"
                  className="w-full h-full rounded-full object-cover"
                />
                <span className="absolute bottom-0 left-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-[#0a0a0a]">
                  <i className="fa-solid fa-check text-white text-xs"></i>
                </span>
              </div>
              <h3 className="text-white font-bold text-lg">إبراهيم حسن</h3>
              <p className="text-orange-400 text-sm mb-5">مصور طبيعة</p>
              <div className="flex justify-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-github text-sm"></i>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition"
                >
                  <i className="fa-brands fa-x-twitter text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-0">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="mailto:info@adasa.com"
                className="bg-black text-white font-semibold px-7 py-3 rounded-full hover:bg-gray-900 transition flex items-center gap-2"
              >
                تواصل معنا
                <i className="fa-solid fa-envelope text-sm"></i>
              </Link>

              <Link
                to="/blog"
                className="border-2 border-white text-white font-semibold px-7 py-3 rounded-full hover:bg-white hover:text-orange-600 transition"
              >
                تصفح المقالات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
