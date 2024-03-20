import "./App.css";
import BreadCrumbs from "./components/BreadCrumbs";
import Content from "./components/Content";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";

function App() {
  return (
    <div>
      <Header />
      <LeftMenu />
      <BreadCrumbs />
      <Content />
    </div>
  );
}

export default App;
