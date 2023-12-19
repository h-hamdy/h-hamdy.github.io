import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Profile } from "./Pages/Profile";
import { ProfileCard } from "./components/profile/ProfileCard";
import { useState } from "react";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";

function App() {
	const [page, setPage] = useState(1);


  return (
    <>
	<div className="flex flex-col lg:flex-row lg:gap-[15px] gap-[10px]  w-screen h-screen lg:p-[25px] xl:p-[30px] p-[10px]">


		<div className="border border-[#282929]  bg-[#282929] custom-corner shadow-xl lg:w-3/12 h-fit lg:h-full w-full">
          <ProfileCard />
        </div>
      <BrowserRouter>
		<div className="border flex items-center justify-around h-[6%] rounded-tl-[24px] shadow-xl rounded-tr-[24px] absolute w-full bottom-0 right-0 bg-[#343838] border-[#343838] lg:hidden z-50">
			<Link to="/">
                <button className={`text-[${page === 1 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 hover:scale-110 font-bold `} onClick={() => setPage(1)}>About</button>
			  </Link>
              <Link to="/Portfolio">
                <button className={`text-[${page === 3 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 hover:scale-110 font-bold`} onClick={() => setPage(3)}>Portfolio</button>
              </Link>
              <Link to="/Blog">
                <button className={`text-[${page === 4 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 hover:scale-110 font-bold`} onClick={() => setPage(4)}>Blog</button>
              </Link>
              <Link to="/Contact">
                <button className={`text-[${page === 5 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 hover:scale-110 font-bold`} onClick={() => setPage(5)}>Contact</button>
              </Link>
		</div>
		<div className="border h-full lg:hidden custom-corner bg-[#282929] border-[#282929] overflow-y-hidden pb-[10%]">
		{
				page === 1 && <About/> ||
				page === 3 && <Portfolio/> ||	
				page === 4 && <Blog/> ||
				page === 5 && <Contact/>
			}
		</div>
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
