import { GlobalStyles } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { Header } from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <GlobalStyles />
      <Routes />
    </Router>
  );
};

export default App;
