function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16">
      <h2 className="text-3xl font-bold mb-4">Home Sudah Ada!!</h2>
      <div className="flex justify-center items-center gap-8 w-4/5 mx-auto my-8">
        <button className="bg-red-600 text-white border-none px-6 py-3 rounded-lg text-base cursor-pointer transition-all duration-300 hover:bg-red-700 hover:scale-105">Lihat Perbandingan</button>
        <button className="bg-red-600 text-white border-none px-6 py-3 rounded-lg text-base cursor-pointer transition-all duration-300 hover:bg-red-700 hover:scale-105">Lihat Perbandingan</button>
        <button className="bg-red-600 text-white border-none px-6 py-3 rounded-lg text-base cursor-pointer transition-all duration-300 hover:bg-red-700 hover:scale-105">Lihat Perbandingan</button>
      </div>
      <p className="mt-4 text-gray-600">FrontEnd 2025</p>
    </section>
  );
}

export default Home;
