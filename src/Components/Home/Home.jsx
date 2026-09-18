import { Link } from "react-router-dom";
import data from "../../data/posts.json";
const Home = () => {
  const featuredPost = data.posts.filter((post) => post.featured === true)
  const latestPost = data.posts.slice(0, 3);
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden  bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-1.5 rounded-full mb-8">
            <span>مرحباً بك في عدسة</span>
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-orange-500">اكتشف فن</span>
            <br />
            <span className="text-white">التصوير الفوتوغرافي</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="blog"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full transition flex items-center gap-2"
            >
              استكشف المقالات
              <i className="fa-solid fa-arrow-left text-sm"></i>
            </Link>

            <Link
              to="about"
              className="border border-white/20 hover:border-white/40 text-gray-300 hover:text-white font-medium px-7 py-3 rounded-full transition flex items-center gap-2"
            >
              اعرف المزيد
              <i className="fa-solid fa-circle-info text-sm"></i>
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl w-36 h-36 flex flex-col items-center justify-center gap-2">
              <i className="fa-solid fa-pen text-orange-500 text-2xl"></i>
              <span className="text-white text-2xl font-bold">6</span>
              <span className="text-gray-400 text-sm">كاتب</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl w-36 h-36 flex flex-col items-center justify-center gap-2">
              <i className="fa-solid fa-folder text-orange-500 text-2xl"></i>
              <span className="text-white text-2xl font-bold">4</span>
              <span className="text-gray-400 text-sm">تصنيفات</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl w-36 h-36 flex flex-col items-center justify-center gap-2">
              <i className="fa-solid fa-users text-orange-500 text-2xl"></i>
              <span className="text-white text-2xl font-bold">+10 ألف</span>
              <span className="text-gray-400 text-sm">قارئ</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl w-36 h-36 flex flex-col items-center justify-center gap-2">
              <i className="fa-solid fa-file-lines text-orange-500 text-2xl"></i>
              <span className="text-white text-2xl font-bold">+50</span>
              <span className="text-gray-400 text-sm">مقالة</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== مقالات مختارة ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-orange-400 text-sm px-3 py-1 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                مميز
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                مقالات مختارة
              </h2>
              <p className="text-gray-400 text-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>

            <Link
              to="blog"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2.5 rounded-full transition flex items-center gap-2"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left text-sm"></i>
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {featuredPost.map((post) => (
              <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 transition flex flex-col md:flex-row-reverse">
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center text-right">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 justify-start">
                    <span className="bg-white/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <Link

                      to={`/blog/${post.id}`}
                      className="text-orange-400 text-sm flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      <i className="fa-solid fa-arrow-left text-xs"></i>
                      اقرأ المقال
                    </Link>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm text-white">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="`md:w-[420px]` `lg:w-[480px]` h-64 md:h-auto relative overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt="إتقان تصوير الساعة الذهبية"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <i className="fa-solid fa-star text-[10px]"></i>
                    مميز
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== استكشف حسب الموضوع ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            التصنيفات
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            استكشف حسب الموضوع
          </h2>
          <p className="text-gray-400 text-lg mb-14">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <Link
              to="/blog?category=إضاءة"
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-orange-500/10 hover:border-orange-500/60 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition">
                <i className="fa-solid fa-sun text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition">
                إضاءة
              </h3>
              <span className="text-gray-400 text-sm">3 مقالة</span>
            </Link>

            <Link
              to="/blog?category=بورتريه"
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-orange-500/10 hover:border-orange-500/60 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition">
                <i className="fa-solid fa-user text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition">
                بورتريه
              </h3>
              <span className="text-gray-400 text-sm">3 مقالة</span>
            </Link>

            <Link
              to="/blog?category=مناظر طبيعية"
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-orange-500/10 hover:border-orange-500/60 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition">
                <i className="fa-solid fa-mountain-sun text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition">
                مناظر طبيعية
              </h3>
              <span className="text-gray-400 text-sm">2 مقالة</span>
            </Link>

            <Link
              to="/blog?category=تقنيات"
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-orange-500/10 hover:border-orange-500/60 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition">
                <i className="fa-solid fa-sliders text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition">
                تقنيات
              </h3>
              <span className="text-gray-400 text-sm">5 مقالة</span>
            </Link>

            <Link
              to="/blog?category=معدات"
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:bg-orange-500/10 hover:border-orange-500/60 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition">
                <i className="fa-solid fa-camera text-orange-500 text-2xl"></i>
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-orange-400 transition">
                معدات
              </h3>
              <span className="text-gray-400 text-sm">3 مقالة</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== أحدث المقالات ===== */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                الأحدث
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                أحدث المقالات
              </h2>
              <p className="text-gray-400">محتوى جديد طازج من المطبعة</p>
            </div>

            <Link
              to="/blog"
              className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 transition"
            >
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left text-sm"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPost.map((post) => (

              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 transition"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-5 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm text-white"> {post.author.name}</p>
                        <p className="text-xs text-gray-500"> {post.author.role}</p>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-500 transition">
                      <i className="fa-solid fa-arrow-left text-sm"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}


          </div>
        </div>
      </section>

      {/* ===== النشرة الإخبارية ===== */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-envelope text-white text-2xl"></i>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="text-orange-500">نشرتنا الإخبارية</span>
            </h2>

            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-black/40 border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full transition">
                اشترك الآن
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/32?img=1"
                  className="w-7 h-7 rounded-full border-2 border-[#0a0a0a]"
                />
                <img
                  src="https://i.pravatar.cc/32?img=2"
                  className="w-7 h-7 rounded-full border-2 border-[#0a0a0a]"
                />
                <img
                  src="https://i.pravatar.cc/32?img=3"
                  className="w-7 h-7 rounded-full border-2 border-[#0a0a0a]"
                />
              </div>
              <span>انضم لـ +10,000 مصور</span>
              <span>•</span>
              <span>بدون إزعاج</span>
              <span>•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
