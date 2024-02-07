import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "../src/components/Table";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MyTable from "../src/components/Table";

const MainLayout = () => (
  <>
    <Header />
    <div className="scrollable-content">{<HomePage />}</div>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/table" element={<MyTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
