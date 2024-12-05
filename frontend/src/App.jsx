import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
import CreatePage from "./pages/createPage";

export default function App() {
  return (
    <div className="flex flex-col justify-start items-start w-full min-h-screen bg-[#585858]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}
