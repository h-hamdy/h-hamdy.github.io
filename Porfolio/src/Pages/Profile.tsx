import { useState } from "react";
import { Link } from "react-router-dom";
import { About } from "./About";
import { Resume } from "./Resume";
import { Portfolio } from "./Portfolio";
import { Blog } from "./Blog";
import { Contact } from "./Contact";

export function Profile() {
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="flex gap-[15px] w-screen overflow-hidden">
        <div className="border border-[#282929] h-full bg-[#282929] custom-corner shadow-lg w-full">
          <div className="flex justify-end">
            <div className="flex items-center justify-around border border-[#535555] bg-[#535555] w-[600px] h-[55px] custom-corner-nav">
              <Link to="/">
                <button className="text-gray-300" onClick={() => setPage(1)}>About</button>
              </Link>
              {/* <Link to="/Resume">
                <button className="text-gray-300" onClick={() => setPage(2)}>Resume</button>
              </Link> */}
              <Link to="/Portfolio">
                <button className="text-gray-300" onClick={() => setPage(3)}>Portfolio</button>
              </Link>
              <Link to="/Blog">
                <button className="text-gray-300" onClick={() => setPage(4)}>Blog</button>
              </Link>
              <Link to="/Contact">
                <button className="text-gray-300" onClick={() => setPage(5)}>Contact</button>
              </Link>
            </div>
          </div>
		  {/* <div className="h-full overflow-y-auto overflow-hidden pb-10"> */}

			{
				page === 1 && <About/> ||
				page === 2 && <Resume/> ||
				page === 3 && <Portfolio/> ||	
				page === 4 && <Blog/> ||
				page === 5 && <Contact/>
			}
			</div>
        </div>
      {/* </div> */}
    </>
  );
}
