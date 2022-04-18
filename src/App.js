import "./App.css";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import UserData from "./components/UserData/UserData";

function App() {
  return (
    <div className="App">
      <Header />
      <UserData />
      <Footer />
    </div>
  );
}

export default App;
