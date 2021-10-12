import { GlobalStyles } from "./styles/global";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { Header } from "./components/Header";
import { UseMovieProvider } from "./context/useMovieContext";

const App = () => {
  return (
    <UseMovieProvider>
      <Router>
        <Header />
        <GlobalStyles />
        <Routes />
      </Router>
    </UseMovieProvider>
  );
};

export default App;
