import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Article from "./components/Article.jsx";
import Customer from "./components/Customer.jsx";
import FloatingBtn from "./components/FloatingBtn.jsx";
function App() {
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="main-wrapper">
          <Main></Main>
          <Article />
          <Customer />
          <FloatingBtn/>
        </div>
      </div>
    </>
  );
}

export default App;
