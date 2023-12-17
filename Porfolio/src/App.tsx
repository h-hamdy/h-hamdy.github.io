import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./Pages/Profile";
import { ProfileCard } from "./components/profile/ProfileCard";
import { useState } from "react";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Blog } from "./Pages/Blog";
import { Portfolio } from "./Pages/Portfolio";

function App() {
	const [page, setPage] = useState(1);


  return (
    <>
	<div className="flex flex-col lg:flex-row gap-[15px] w-screen h-screen lg:p-[25px] p-[20px]">


		<div className="border border-[#282929]  bg-[#282929] custom-corner shadow-xl lg:w-3/12 h-fit lg:h-full w-full">
          <ProfileCard />
        </div>
		<div className="border flex items-center justify-around h-[8%] rounded-tl-[24px] shadow-xl rounded-tr-[24px] absolute w-full bottom-0 right-0 bg-[#343838] border-[#343838] lg:hidden z-50">
			<button className={`text-[${page === 1 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 text-sm lg:text-md hover:scale-110 font-bold `} onClick={() => setPage(1)}>About</button>
			<button className={`text-[${page === 3 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 text-sm lg:text-md hover:scale-110 font-bold`} onClick={() => setPage(3)}>Portfolio</button>
			<button className={`text-[${page === 4 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 text-sm lg:text-md hover:scale-110 font-bold`} onClick={() => setPage(4)}>Blog</button>
			<button className={`text-[${page === 5 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 text-sm lg:text-md  hover:scale-110 font-bold`} onClick={() => setPage(5)}>Contact</button>
		</div>
		<div className="border h-full lg:hidden custom-corner bg-[#282929] border-[#282929] overflow-y-hidden pb-[10%]">
			<Blog/>
		</div>
      <BrowserRouter>
        <Routes>
			<Route path="/" element={<Profile />}></Route>
			<Route path="/Resume" element={<Profile />}></Route>
			<Route path="/Portfolio" element={<Profile />}></Route>
			<Route path="/Blog" element={<Profile />}></Route>
			<Route path="/Contact" element={<Profile />}></Route>
        </Routes>
	</BrowserRouter>
	</div>
    </>
  );
}

export default App;
