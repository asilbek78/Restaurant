export default function NotFoundPage() {
    return (
      <div className="flex flex-col items-center justify-center py-32 bg-gray-900 text-white px-6">
        <h1 className="text-8xl font-bold text-red-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Sahifa topilmadi</h2>
        <p className="mt-2 text-gray-300 text-center max-w-md">
          Kechirasiz, siz izlagan sahifa mavjud emas yoki o‘chirilgan. Iltimos, bosh sahifaga qayting.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition shadow-lg"
        >
          Bosh sahifaga qaytish
        </a>
      </div>
    );
  }
  