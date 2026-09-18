import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-orange-500 leading-none mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          الصفحة غير موجودة
        </h2>

        <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
          عذرًا، الصفحة اللي بتدور عليها مش موجودة أو تم نقلها.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-full transition"
          >
            العودة للرئيسية
          </Link>

          <Link
            to="/blog"
            className="border border-white/20 hover:border-orange-500/50 text-gray-300 hover:text-orange-400 font-medium px-7 py-3 rounded-full transition"
          >
            تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}
