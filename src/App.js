import "./App.css";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import MainUserData from "./components/MainUserData/MainUserData.component";

function App() {
  return (
    <div className="App">
      <Header />
      <MainUserData />
      <Footer />
    </div>
  );
}

export default App;
