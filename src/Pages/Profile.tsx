import { useState } from "react";
import { Link } from "react-router-dom";
import { About } from "./About";
import { Resume } from "./Resume";
import { Portfolio } from "./Portfolio";
import { Blog } from "./Blog";
// import { Contact } from "./Contact";

export function Profile() {
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="flex gap-[15px] w-screen border border-[#343838] custom-corner overflow-hidden lg:block hidden">
        <div className="border border-[#282929] h-full bg-[#282929] custom-corner shadow-lg w-full">
          <div className="flex justify-end">
            <div className="flex items-center justify-around shadow-xl border border-[#343838] bg-[#343838] w-[600px] h-[55px] custom-corner-nav">
              <Link to="/Portfolio">
                <button className={`text-[${page === 1 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 hover:scale-110 font-bold `} onClick={() => setPage(1)}>About</button>
              </Link>
              <Link to="/Portfolio/Projects">
                <button className={`text-[${page === 3 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 hover:scale-110 font-bold`} onClick={() => setPage(3)}>Projects</button>
              </Link>
              <Link to="/Portfolio/Blog">
                <button className={`text-[${page === 4 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 hover:scale-110 font-bold`} onClick={() => setPage(4)}>Blog</button>
              </Link>
              {/* <Link to="/Contact">
                <button className={`text-[${page === 5 ? "#4e77e7" : "#e5e7eb"}] hover:text-[#4e77e7] duration-200 hover:scale-110 font-bold`} onClick={() => setPage(5)}>Contact</button>
              </Link> */}
            </div>
          </div>
			{
				page === 1 && <About/> ||
				page === 2 && <Resume/> ||
				page === 3 && <Portfolio/> ||	
				page === 4 && <Blog/>
				// page === 5 && <Contact/>
			}
			</div>
        </div>
    </>
  );
}
