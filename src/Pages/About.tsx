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
      <div className="h-[90%] overflow-y-auto lg:pb-40">
        <div className="flex lg:px-10 px-6 text-gray-200 text-center overflow-y-auto text-sm lg:text-md lg:tracking-wider">
          Hello! I'm Houssam Hamdy, a front-end developer fully committed to my
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
              Education
            </div>
          </div>
          <div className="lg:pl-28 pl-10 px-6 py-6 text-white">
            <div className="flex gap-[15px]">
              <img
                src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/1337.png"
                className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] rounded-lg "
              ></img>
              <div>
                <div className="text-sm lg:text-md">1337 (42 Network), Benguerir</div>
                <div className="text-xs text-[#343838]">
                  November 2021 - 2024
                </div>
                <div className="lg:text-sm text-xs text-gray-300 pt-[10px]">
                  Completed Common Core at 1337 School with a remarkable
                  achievement, achieving a level of{" "}
                  <span className="text-white text-sm">11.18</span>
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
              <div className="text-xs text-[#343838]">IBM</div>
              <div className="text-xs text-[#343838] pb-[5px]">
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
              <div className="text-xs text-[#343838]">simplilearn</div>
              <div className="text-xs text-[#343838] pb-[5px]">
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
              <div className="text-xs text-[#343838]">Coursera</div>
              <div className="text-xs text-[#343838] pb-[5px]">
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
