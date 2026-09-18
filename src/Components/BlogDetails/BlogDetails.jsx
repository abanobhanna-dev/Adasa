import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/posts.json";
const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const foundPost = data.posts.find((p) => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-4 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold">المقالة غير موجودة</h2>
        <Link to="/blog" className="text-orange-500 hover:underline">
          العودة للمدونة
        </Link>
      </div>
    );
  }
  const relatedPosts = data.posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* ===== Hero ===== */}
      <section className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>

        <div className="absolute bottom-0 right-0 left-0 p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-gray-300 text-sm">{post.readTime}</span>
              <span className="text-gray-300 text-sm">•</span>
              <span className="text-gray-300 text-sm">{post.date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
              />
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-gray-400">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* ===== Sidebar ===== */}
          <aside className="lg:w-72 shrink-0 space-y-5 order-2 lg:order-1">
            {/* محتويات المقال */}
            <div className="bg-[#161616] border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-white">محتويات المقال</h3>
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                  <i className="fa-solid fa-list text-white text-sm"></i>
                </div>
              </div>
              <ul className="space-y-4 text-sm">
                {post.content
                  .split("## ")
                  .slice(1)
                  .map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between text-gray-400 hover:text-orange-400 cursor-pointer transition"
                    >
                      <span>{item.split("\n")[0]}</span>
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                        {index + 1}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* الإحصائيات */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#161616] border border-white/10 rounded-2xl p-4 text-center">
                <i className="fa-regular fa-calendar text-orange-500 mb-2"></i>
                <p className="font-bold text-sm">{post.date}</p>
                <p className="text-xs text-gray-400 mt-1">تاريخ النشر</p>
              </div>
              <div className="bg-[#161616] border border-white/10 rounded-2xl p-4 text-center">
                <i className="fa-regular fa-clock text-orange-500 mb-2"></i>
                <p className="font-bold text-sm">{post.readTime}</p>
                <p className="text-xs text-gray-400 mt-1">وقت القراءة</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#161616] border border-orange-500/30 rounded-2xl p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
              </div>
              <h4 className="font-bold mb-1">لا تفوت جديدنا</h4>
              <p className="text-sm text-gray-400 mb-4">
                اشترك للحصول على أحدث المقالات
              </p>
              <Link
                to="/blog"
                className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-full text-sm font-medium transition"
              >
                تصفح المزيد
              </Link>
            </div>
          </aside>

          {/* ===== المقال ===== */}
          <article className="flex-1 order-1 lg:order-2">
            {/* اقتباس */}
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-10">
              <p className="text-lg text-gray-200 leading-relaxed">
                "{post.excerpt}"
              </p>
            </div>

            {/* المحتوى */}
            <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {post.content}
            </div>

            {/* الوسوم */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-gray-400">الوسوم:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 border border-white/10 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* الكاتب */}
            <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-lg">{post.author.name}</p>
                <p className="text-orange-400 text-sm mb-1">
                  {post.author.role}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ===== مقالات قد تعجبك ===== */}
      <section className="px-4 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <i className="fa-solid fa-fire text-orange-500"></i>
              مقالات قد تعجبك
            </h2>
            <Link
              to="/blog"
              className="text-orange-400 text-sm hover:text-orange-300 transition flex items-center gap-1"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left text-xs"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.id}`}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 transition"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt={item.title}
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-orange-400">
                    {item.category}
                  </span>
                  <h3 className="font-bold mt-1 group-hover:text-orange-500 transition line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogDetails;
