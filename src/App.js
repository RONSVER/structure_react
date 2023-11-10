import "./App.css";
import Main from "./pages/Main";
import BtnsModal from "./pages/BtnsModal";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Main />
      <BtnsModal />
      <Footer />
    </div>
  );
}

export default App;
