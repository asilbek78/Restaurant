import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function firstnew() {
  const {t} = useTranslation();
  return (
    <div>
      <div className="container mx-auto py-6 pb-20 px-4 text-white">
        <h2  className="text-3xl font-bold text-gray-800 text-center mb-9 dark:text-yellow-400">
          {t("news.h8")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="dark:bg-gray-800 bg-gray-100 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imgs/news1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL25ld3MxLmpwZyIsImlhdCI6MTc0MjgwNTI0MSwiZXhwIjoxNzc0MzQxMjQxfQ.XuOAdRszYrGfOP1t4zdqtx15o0ZZPP3Q8l4JBXaLFu8"
              alt="Afsona restorani yangi menyuni taqdim etadi!"
              className="w-full h-48 object-cover duration-200 group-hover:scale-105"
            />
            <div className="px-4 pt-3">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {t("news.h9")}
              </h3>
              <p className="dark:text-gray-400 mt-2 text text-gray-600">
                {t("news.h10")}
              </p>
              <Link to={"https://youtu.be/b1Csc1BZ8cg?si=hGWRKNeELVBWsqqm"}>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
                {t("news.h11")}
              </button>
              </Link>
            </div>
          </div>

          <div className="dark:bg-gray-800 bg-gray-100 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imgs/news22.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL25ld3MyMi5qcGciLCJpYXQiOjE3NDI4MjEzNDgsImV4cCI6MTc3NDM1NzM0OH0.HHg0OjiIXwRm6YkmuVIpZFfHU4owPj7EnehaWfIMyJs"
              alt="Jonli musiqa kechalari endi Afsona restoranida!"
              className="w-full h-48 object-cover duration-200 group-hover:scale-105"
            />
            <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {t("news.h12")}
              </h3>
              <p className="dark:text-gray-400 mt-2 text text-gray-600">
                {t("news.h13")}
              </p>
              <Link to={"https://youtu.be/SC6jwsyLq-w?si=YE5OcxQl99P1VIf1"}>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
              {t("news.h11")}
              </button>
              </Link>
            </div>
          </div>

          <div className="dark:bg-gray-800 bg-gray-100 rounded-2xl overflow-hidden shadow-lg group">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imgs/news3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL25ld3MzLmpwZyIsImlhdCI6MTc0MjgwNTYwMiwiZXhwIjoxNzc0MzQxNjAyfQ.ukFQG9xqVyEedoiUqsTbqt02wAAkuhdPdFuX-ev99wc"
              alt="Afsona restorani oilaviy dasturxon uchun maxsus takliflar!"
              className="w-full h-48 object-cover duration-200 group-hover:scale-105"
            />
            <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {t("news.h14")}
              </h3>
              <p className="dark:text-gray-400 mt-2 text text-gray-600">
               {t("news.h15")}
              </p>
              <Link to={"https://youtu.be/rS_8Quie1CU?si=9dAPk_uXCaGk2-Mk"}>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
              {t("news.h11")}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default firstnew;
