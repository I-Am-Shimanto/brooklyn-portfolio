import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Index";
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import Process from "./pages/Process"
import Portfolio from "./pages/Portfolio"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
