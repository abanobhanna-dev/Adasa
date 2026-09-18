import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import data from "../../data/posts.json";
export default function Blog() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "الكل");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [view, setView] = useState("grid")

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("الكل");
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    setPosts(data.posts);
    setLoading(false);
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <ThreeCircles
          height="80"
          width="80"
          color="#f97316"
          ariaLabel="loading"
        />
      </div>
    );
  }

  const filteredPosts = posts
    .filter((post) =>
      selectedCategory === "الكل" ? true : post.category === selectedCategory,
    )
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  return (
    <>
      {/* Blog Header */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-orange-400 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            مدونتنا
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            <span className="text-orange-500">استكشف</span>{" "}
            <span className="text-white">مقالاتنا</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      {/*  Controls  */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                "الكل",
                "إضاءة",
                "بورتريه",
                "مناظر طبيعية",
                "تقنيات",
                "معدات",
              ].map(
                (
                  cat, // cat = معدات,الكل,إضاءة,تقنيات,"مناظر طبيعية",
                ) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat
                      ? "bg-orange-500 text-white"
                      : "bg-white/5 text-gray-300 border border-white/10 hover:border-orange-500/50 hover:text-orange-400"
                      }`}
                  >
                    {cat === "الكل" ? "جميع المقالات" : cat}
                  </button>
                ),
              )}
            </div>

            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pr-10 pl-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400 text-sm">
              عرض{" "}
              <span className="text-orange-400 font-medium">
                {filteredPosts.length}
              </span>{" "}
              مقالات
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setView("grid")}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${view === "grid"
                  ? "bg-orange-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-orange-400"
                  }`}
              >
                <i className="fa-solid fa-border-all"></i>
              </button>

              <button
                onClick={() => setView("list")}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${view === "list"
                  ? "bg-orange-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-orange-400"
                  }`}
              >
                <i className="fa-solid fa-list"></i>
              </button>

              <button
                onClick={() => setSelectedCategory("الكل")}
                className="text-gray-400 hover:text-orange-400 text-sm flex items-center gap-1 transition mr-2"
              >
                <i className="fa-solid fa-xmark"></i>
                مسح الفلتر
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
            {currentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-300">
                        {post.author.name}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-gray-400 group-hover:border-orange-500 group-hover:text-orange-500 transition">
                      <i className="fa-solid fa-arrow-left text-xs"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-orange-400 transition flex items-center justify-center disabled:opacity-40"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition ${currentPage === i + 1
                  ? "bg-orange-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-orange-400"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-orange-400 transition flex items-center justify-center disabled:opacity-40"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
