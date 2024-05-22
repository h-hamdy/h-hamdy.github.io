export function About() {
  return (
    <>
      <div className="flex items-center justify-between text-gray-200 lg:text-2xl text-xl lg:p-10 p-6">
        <div className="flex flex-col">
          <div className="font-semibold">About</div>
          <div className="border border-[1px] rounded-lg border-[#4e77e7] w-[64px]"></div>
        </div>
        <a href="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/HoussamCv.pdf">
          <button className="flex items-center justify-center lg:w-[150px] lg:h-[40px] w-[120px] h-[35px] tracking-wide rounded-lg text-sm bg-[#4e77e7] hover:bg-[#4e77e7] shadow-xl font-bold transform transition-transform duration-300 hover:scale-110">
            Download Cv
          </button>
        </a>
      </div>
      <div className="h-[95%] overflow-y-auto lg:pb-40">
        <div className="flex lg:px-10 px-6 text-gray-200 text-center overflow-y-auto text-sm lg:text-md lg:tracking-wider">
          Hello! I'm Houssam Hamdy, a Full-Stack developer fully committed to my
          software engineering studies at 1337. Driven by self-discipline and a
          passion for tackling real-world challenges, I enjoy delving into new
          technologies. My excitement spills over into the ever-evolving world
          of the web3 industry, showcasing my commitment to staying at the
          forefront. Eager to contribute my skills and creativity, I actively
          engage in the dynamic field of software development.
        </div>
        <div className="lg:p-10 p-6 px-10">
          <div className="border w-full rounded-xl border-[#343838] bg-[#343838]"></div>
        </div>
        <div>
          <div className="flex gap-[15px] items-center lg:px-10 px-6">
            <div className="flex items-center justify-center border lg:w-[50px] lg:h-[50px] w-[35px] h-[35px]  rounded-lg bg-[#343838] border-[#343838] shadow-inner">
              <img
                className="lg:w-[32px] lg:h-[32px] w-[25px] h-[25px]"
                src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/education.png"
              ></img>
            </div>
            <div className="text-gray-200 lg:text-xl font-semibold tracking-wider">
              Education & Experience
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:pl-28 pl-10 px-6 py-6 text-white">
            <div className="flex gap-[15px]">
              <img
                src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/1337.png"
                className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] rounded-lg "
              ></img>
              <div>
                <div className="text-sm lg:text-md">1337 (42 Network), Benguerir</div>
                <div className="text-[11px] text-gray-400">
                  November 2021 - 2024
                </div>
                <div className="lg:text-sm text-xs text-gray-300 pt-[10px]">
                  Completed Common Core at 1337 School with a remarkable
                  achievement, achieving a level of{" "}
                  <span className="text-white text-sm">11.18</span>
                </div>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX////YSSvZZUz+/PnYRSb///3feGXWPRnSQR736eXUNgXnoZXUOA/12tTTQCDYQyTosKT24Nzlq53y083bcmDptqngjn/uzcbXXkjZYkfXQB7hi3nUWT7quLDWWz3TPhnfgnLswbfhl4fWTTPdf2rtysHcbVfbf3DTOQb48OzVTi3sw7vx2dHrysDVaE7YVjnkoJnabVrinYvYVkOO3/+UAAAEwElEQVR4nO2aa3eiOhhGQUKjiMVbUaMWb2OLMuPxnP//3w4k3IIQ6OiiM65n91PgJckmCblYTQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAs2E0xfxCcJSx+YXgxrHG1wXNeacRi2UY3Fs1C16Nw+B1w+D3URi8XDQLnptfN/Qc0gT2EhlajWKJ3Q+Dh3azYGsQBr+wRrGO9xuGXb0RjjBsFky5IW0WbHNDp1nw699rSJoF/8WGz9+GMIy5y5DZEdl4kNOSIeW3Cla58CpDQjnymCsYvtp5WGF83mPIdrOQSVoUHUbpWYfcGna3wWAwmEmv3R6GlwbBgqgM99vter3dHqRqy4ZsF+UdE/wYHy0p+B5D+sbTO5YUPOHpqXNr6I34rXWuz7IPkV1HZfh55jH+XmFIh4UKTlYsF/wAQ7eBIeOGpnZIyyZ7n0cbKkO2EUVumHS5YDgu1tB4ycU/3NBUGGpm1hj0rNUb6j0e86MwgOsMNX+VtXm7hpq2jStLl5pZa2iL/mecCh+PWkNtkg2Hlg1NbcktyD5Z8isMSUeE7IpNW2p4fltHiL6vHbIvbcttqBm8n9qzNF1taIuHgpu+W2p4tPhk0RU5/0w7duuGvGy6S5PVhvxSGPDLok166VUEkQvvHb73fYaaS8kq25ZWGiZBpjEar2zVbBEbxmm+tdKMyzcaGnNRiRrDrCOHbPW8otJQzFnGJXmgVUNDfPxncffzVYbMzZVoar1LTlFlSE6il6bhrRqax3w+/Z8qw9fC+cooN4mXG1InhFprngq+50tj2v+IHHgdrInC0N7GpaUnSf3czTLD/ibCDUTuaaVaNiTxwi6q+cUKqg1JR9RrtrA+r2IM++o2lD162Sqo3XUpIZd4Rg6XmraiDZkYqoPoG+p0xTPXdBIvNYwRVZxmffouw2hRZWr91FBoXEt2T4mhTg8ik3D1pjKMX94HS+/llza1qzY3P6Dv2R/+y9PnpEd0+ZAxVipD3eJ1H3V1taEYhu/8nrPhifRN1hn2rvmV+j2GjmiPZGEcL1T89Hapoc6CSMupMRRfRGGRtKHa0O9xRtsllTbad51i7H3+9Myj0ZluR6TSJq0wdOaG6HBKQ9E9ZtF23fmMptHwC5ZOcaWGH7bneezVpvJe8j7DZI/Xc98vx6H46SErucIwOvzgF1WG0bbCDP/OF2p3AtFGp7TSpYaFXfJjDMml+LQZTnPJ3SpDnYm6qQyzNZufzIfjmvlwU3H2dt9pYjz0zCwTI9tdlxhKRSsNyX/SmiZctp1yT7ZneHMKZEyzcirbMKmnYsYPnzjIGc9zAm0a6rabf9ejeW4wlJy13e6Bqs/a2NHPZSwdn7VqqFN93BPfGH+ylLZxt+elA6lo+hYoz0udbl/kbIxc1f6QuZPomHYqhTzQMDq6Xk0Pm8PxZMtvsfbM26s786ZeZ+O6h4Vd+EwWzrydwtH7ww3DzwKJNi7Fq4/43YI4jDk3dccvMxIw/IMN8RtwzO8YPv//Yjz9/9M8//9EAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAP53+2anXjYFCDrAAAAABJRU5ErkJggg=="
                className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] rounded-lg "
              ></img>
              <div>
                <div className="text-sm lg:text-md">UM6P - Mohammed VI Polytechnic University · Internship</div>
                <div className="text-[11px] text-gray-400">
                  Janvier 2024
                </div>
                <div className="lg:text-sm text-xs text-gray-300 pt-[10px]">
                  Full-stack Developer
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="flex gap-[15px] items-center lg:px-10 px-6">
          <div className="flex items-center justify-center border lg:w-[50px] lg:h-[50px] w-[35px] h-[35px]  rounded-lg bg-[#343838] border-[#343838] shadow-inner">
            <img
              className="lg:w-[32px] lg:h-[32px] w-[20px] h-[20px]"
              src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/certification.png"
            ></img>
          </div>
          <div className="text-gray-200 lg:text-xl font-semibold tracking-wider">
            Licenses & certifications
          </div>
        </div>
		<div className="pl-10">

        <div className="lg:pl-28 px-6 py-6 text-white">
          <div className="flex gap-[15px]">
            <div className="flex gap-[15px]">
              <img
                src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/ibm.png"
                className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] rounded-lg"
              ></img>
            </div>
            <div>
              <div className="lg:text-md text-sm">Blockchain Essentials</div>
              <div className="text-[11px] text-gray-400">IBM</div>
              <div className="text-[11px] text-gray-400 pb-[5px]">
                Issued on: November 5, 2022
              </div>
              <a href="https://courses.cognitiveclass.ai/certificates/71250c784c0c4e9fa24ba671b4777be4">
				<button className="flex items-center justify-center text-sm text-gray-300 border lg:w-[150px] lg:h-[30px] w-[110px] h-[25px] rounded-xl">
                  <div className="lg:text-md text-xs">show Certificate</div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:pl-28 px-6 py-6 text-white">
          <div className="flex gap-[15px]">
            <div className="flex gap-[15px]">
              <img
                src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/simpli.jpg"
                className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] rounded-lg"
              ></img>
            </div>
            <div>
              <div className="lg:text-md text-sm">Blockchain Certification Training</div>
              <div className="text-[11px] text-gray-400">simplilearn</div>
              <div className="text-[11px] text-gray-400 pb-[5px]">
                Issued on: Septembre 27, 2022
              </div>
              <a href="https://simpli-web.app.link/e/I6kzeI3IbFb">
			  <button className="flex items-center justify-center text-sm text-gray-300 border lg:w-[150px] lg:h-[30px] w-[110px] h-[25px] rounded-xl">
                  <div className="lg:text-md text-xs">show Certificate</div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:pl-28 px-6 py-6 text-white">
          <div className="flex gap-[15px]">
            <div className="flex gap-[15px]">
              <img
                src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/coursera.png"
                className="lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] rounded-lg"
				></img>
            </div>
            <div className="">
              <div className="lg:text-md text-sm">Smart Contracts</div>
              <div className="text-[11px] text-gray-400">Coursera</div>
              <div className="text-[11px] text-gray-400 pb-[5px]">
                Issued on: Novembre 25, 2022
              </div>
              <a href="https://www.coursera.org/account/accomplishments/verify/UVUXGWNV59VB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">
                <button className="flex items-center justify-center text-sm text-gray-300 border lg:w-[150px] lg:h-[30px] w-[110px] h-[25px] rounded-xl">
                  <div className="lg:text-md text-xs">show Certificate</div>
                </button>
              </a>
            </div>
          </div>
				</div>
        </div>
        <div></div>
      </div>
    </>
  );
}
