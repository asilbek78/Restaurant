import { Briefcase, CheckCircle, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Requirements = () => {
  const { i18n } = useTranslation();

  const headers = {
    h1: {
      uz: "Biz sizdan kutamiz.",
      en: "We expect from you.",
      ru: "Мы ожидаем от вас.",
    },
    p: {
      uz: "Biz jamoamizga qo'shiladigan har bir insonning professionalligi va ishtiyoqini qadrlaymiz. Quyidagi fazilatlar muhim hisoblanadi.",
      en: "We value the professionalism and enthusiasm of everyone who joins our team. The following qualities are important.",
      ru: "Мы ценим профессионализм и энтузиазм каждого, кто присоединяется к нашей команде. Следующие качества считаются важными.",
    },
  };
  const requirements = [
    {
      icon: <Briefcase size={48} className="text-blue-400 mb-4" />,
      title: {
        uz: "Tajriba va Bilim",
        en: "Experience & Knowledge",
        ru: "Опыт и знания",
      },
      description: {
        uz: "O'z sohangiz bo'yicha tajribaga ega bo'lishingiz va o'z ustingizda ishlashingiz muhim.",
        en: "It is important to have experience in your field and work on self-improvement.",
        ru: "Важно иметь опыт в своей области и работать над саморазвитием.",
      },
    },
    {
      icon: <Users size={48} className="text-green-400 mb-4" />,
      title: { uz: "Jamoaviy Ishlash", en: "Teamwork", ru: "Работа в команде" },
      description: {
        uz: "Do'stona muhitda ishlash va hamkasblaringiz bilan yaxshi muloqotga ega bo'lish muhim.",
        en: "It is important to work in a friendly environment and have good communication with colleagues.",
        ru: "Важно работать в дружелюбной обстановке и хорошо общаться с коллегами.",
      },
    },
    {
      icon: <CheckCircle size={48} className="text-yellow-400 mb-4" />,
      title: { uz: "Mas'uliyat", en: "Responsibility", ru: "Ответственность" },
      description: {
        uz: "Ishga jiddiy yondashish, vaqtni qadrlash va o'z vazifalarini aniq bajarish.",
        en: "Taking work seriously, valuing time, and completing tasks precisely.",
        ru: "Серьезное отношение к работе, ценность времени и точное выполнение задач.",
      },
    },
  ];

  return (
    <div className=" container text-gray-900 dark:text-white py-7 pb-14 px-6 md:px-12">
      <div className="w-[78%] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-400 dark:text-yellow-400">
          {headers.h1[i18n.language]}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          {headers.p[i18n.language]}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[96%] mx-auto">
        {requirements.map((item, id) => (
          <div
            key={id}
            className="flex flex-col items-center text-center p-6 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">
              {item.title[i18n.language]}
            </h3>
            <p className="text-gray-800 dark:text-gray-400">
              {item.description[i18n.language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requirements;
