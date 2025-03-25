import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useTranslation } from "react-i18next";
const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div className=" dark:bg-gray-900">
      <div className=" container pt-12 dark:text-white text-gray-700 pb-16">
        <h1 className="text-3xl font-bold mb-7">{t("dash.h1")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="dark:bg-gray-800 p-4 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">{t("dash.h2")}</h2>
            <p className="text-2xl font-bold">256</p>
          </div>
          <div className="dark:bg-gray-800 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">{t("dash.h3")}</h2>
            <p className="text-2xl font-bold">$520,340</p>
          </div>
          <div className="dark:bg-gray-800 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">{t("dash.h4")}</h2>
            <p className="text-2xl font-bold">350</p>
          </div>
          <div className="dark:bg-gray-800 p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">{t("dash.h5")}</h2>
            <p className="text-2xl font-bold">125</p>
          </div>
        </div>

        <div className="mt-6 dark:bg-gray-800 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
          {t("dash.h6")}
          </h2>
          <Line
            data={{
              labels: ["Dush", "Sesh", "Chor", "Pay", "Jum", "Shan", "Yak"],
              datasets: [
                {
                  label: "Sotuvlar ($)",
                  data: [1, 50, 65, 60, 70, 76, 100],
                  borderColor: "#38bdf8",
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  tension: 0.4,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
