import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const RestaurantOffer = () => {
const {t} = useTranslation()
  return (
    <div className=" dark:bg-gray-900 ">
      <div className=" p-6 container mx-auto">
        <h2  data-aos="fade-down" className="text-4xl font-extrabold text-gray-700 dark:text-yellow-400 text-center mb-6">
          {t("home.h18")}
        </h2>
        <p  data-aos="fade-down" className="text-lg dark:text-gray-300 text-center text-gray-800 font-sans mb-6 px-10">
        {t("home.h19")}
        </p>
        <div className="grid grid-cols-1 dark:text-white md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            <Link to={"/uzbek"}>
          <div data-aos="fade-up" className="dark:bg-gray-800 p-4 rounded-lg bg-white hover:bg-gray-100 duration-300 shadow-md dark:hover:bg-gray-700 transition">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imag/kabob.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnL2thYm9iLmpwZyIsImlhdCI6MTc0MjI3NDgyMSwiZXhwIjoxNzczODEwODIxfQ.RIFv8eY4NRLNNAY0_cdxhNBRcc1iTxgCk3d90GcH-Nk"
              alt=""
              className="border rounded-md"
            />
            <p className="mt-2 font-semibold">{t("home.h20")}</p>
          </div>
            </Link>
            <Link to={"/uzbek"}>
          <div data-aos="fade-up" className="dark:bg-gray-800 p-4 rounded-lg bg-white hover:bg-gray-100 duration-300 shadow-md dark:hover:bg-gray-700 transition">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imag/manti.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnL21hbnRpLmpwZyIsImlhdCI6MTc0MjI3NDgwMiwiZXhwIjoxNzczODEwODAyfQ.EO9a9I__MUWuevGG86GaD7AmBYB-Dd03qlShr7bWJgY"
              alt="Manti"
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="mt-3 font-semibold">{t("home.h22")}</p>
          </div>
            </Link>
            <Link to={"/yapon"}>
          <div data-aos="fade-up" className="dark:bg-gray-800 p-4 rounded-lg bg-white hover:bg-gray-100 duration-300 shadow-md dark:hover:bg-gray-700 transition">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imag/sushi.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnL3N1c2hpLmpwZWciLCJpYXQiOjE3NDIyOTU0MTksImV4cCI6MTc3MzgzMTQxOX0.d6BtxG3vXh23T-xbYhBvWef0zlgiFmVsLY3OYC_Posg"
              alt="Sushi"
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="mt-3 font-semibold">{t("home.h23")}</p>
          </div>
            </Link>
            <Link to={"/dengiz"}>
          <div data-aos="fade-up" className="dark:bg-gray-800 p-4 rounded-lg bg-white hover:bg-gray-100 duration-300 shadow-md dark:hover:bg-gray-700 transition">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imag/donburi.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnL2RvbmJ1cmkuanBnIiwiaWF0IjoxNzQyMjk1NDg5LCJleHAiOjE3NzM4MzE0ODl9.mTvAlLMkYdPsaqmdYvv8vUKfM1NQ2U3LFKz1sQTl5uw"
              alt="Xitoy dumplinglari"
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="mt-3 font-semibold">{t("home.h24")}</p>
          </div>
            </Link>
            <Link to={"/uzbek"}>
          <div data-aos="fade-up" className="dark:bg-gray-800 p-4 rounded-lg bg-white hover:bg-gray-100 duration-300 shadow-md dark:hover:bg-gray-700 transition">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imgs/osh-bg.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL29zaC1iZy5qcGciLCJpYXQiOjE3NDI2MzExMTQsImV4cCI6MTc3NDE2NzExNH0.-EKK5ys_Zk-mSQGL10jw8gmsWpEFLi1ed2SWkQz_o_c"
              alt="Palov"
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="mt-3 font-semibold">{t("home.h21")}</p>
          </div>
            </Link>
            <Link to={"/dengiz"}>
          <div 
           data-aos="fade-up" className="dark:bg-gray-800 p-4 rounded-lg bg-white hover:bg-gray-100 duration-300 shadow-md dark:hover:bg-gray-700 transition">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imgs/baliq-home.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL2JhbGlxLWhvbWUuanBnIiwiaWF0IjoxNzQyNjMxMTgzLCJleHAiOjE3NzQxNjcxODN9.svl1Ofs9GXfU8A0SCs2VqyDG2n5ZuTkX6fdrGKUu7jA"
              alt="Dengiz mahsulotlari"
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="mt-3 font-semibold">{t("home.h25")}</p>
          </div>
            </Link>
            <Link to={"/yapon"}>
          <div data-aos="fade-up" className="dark:bg-gray-800 p-4 rounded-lg bg-white hover:bg-gray-100 duration-300 shadow-md dark:hover:bg-gray-700 transition">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imag/Gril%20Losos.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnL0dyaWwgTG9zb3MuanBnIiwiaWF0IjoxNzQyMzAzODc3LCJleHAiOjE3NzM4Mzk4Nzd9.xxS7mZ5WJADUaXHsKTnxyl9QvFhyDEkng0OUbJJxOK0"
              alt="Grill"
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="mt-3 font-semibold">{t("home.h26")}</p>
          </div>
            </Link>
            <Link to={"/turk"}>
          <div data-aos="fade-up" className="dark:bg-gray-800 p-4 rounded-lg bg-white hover:bg-gray-100 duration-300 shadow-md dark:hover:bg-gray-700 transition">
            <img
              src="https://omvwbniuooqqvunluhkz.supabase.co/storage/v1/object/sign/imgs/turk2-home.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWdzL3R1cmsyLWhvbWUud2VicCIsImlhdCI6MTc0MjYzMTIxNCwiZXhwIjoxNzc0MTY3MjE0fQ.Qd95xNFkW6HXuVrsA0ggiTY32RuIxJ5jQCGJSv_ayM0"
              alt="lahmakun"
              className="rounded-md w-full h-40 object-cover"
            />
            <p className="mt-3 font-semibold">{t("home.h27")}</p>
          </div>
            </Link>
        </div>
        <div data-aos="fade-up" className="flex justify-center mt-8">
            <Link to={"/menu"}>
          <button data-aos="fade-up" className="bg-yellow-500 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition">
            {t("home.h28")}
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantOffer;
