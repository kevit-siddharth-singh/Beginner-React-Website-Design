import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Article from "./components/Article.jsx";
function App() {
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="main-wrapper">
          <Main></Main>
          <Article/>
          
        </div>
      </div>
    </>
  );
}

export default App;
