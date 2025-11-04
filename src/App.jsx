import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header di atas */}
      <Header />

      {/* Konten utama */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Footer di bawah */}
      <Footer />
    </div>
  );
}

export default App;
