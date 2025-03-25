import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function HomePage() {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const phonenum = "+998884347808"

  return (
    <div className=" flex container mx-auto py-10 items-center justify-evenly h-auto dark:text-white">
      <div data-aos="zoom-in-right" className="w-[43%]">
      <Link to={"https://youtu.be/IDt8Y___IfE?si=yypRQm7e8v4ci0S2"}>
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Afsona Restorani" 
          className="w-full rounded-lg"
        />
      </Link>
      </div>

      <div data-aos="zoom-in-left" className="w-[43%]">
        <p className="dark:text-yellow-500 text-orange-500 font-semibold text-sm uppercase">{t("static.h1")}</p>
        <h1 className="text-4xl font-bold mt-2 text-gray-800 dark:text-white mb-6">{t("static.h2")}</h1>
        <p className="text-lg mb-8 leading-relaxed text-gray-800 dark:text-white">
          {t("static.h3")}
        </p>

        <div className="flex gap-4">
          <button 
            onClick={() => navigate("/dashboard")} 
            className="px-6 py-3 text-lg duration-200 dark:text-white text-gray-900 bg-yellow-500 font-sans hover:bg-yellow-600 transition rounded-md"
          >
            {t("static.h4")}
          </button>

          <button 
          onClick={() => window.location.href = `tel:${phonenum}`}
            className="px-6 py-3 dark:bg-transparent bg-gray-200 hover:bg-gray-300 text-lg duration-200 border border-white dark:hover:bg-white dark:hover:text-gray-900 transition rounded-md"
          >
            {t("static.h5")}
          </button>
        </div>
      </div>
    </div>
  );
}