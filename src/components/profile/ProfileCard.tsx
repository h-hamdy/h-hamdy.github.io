import { useState } from "react";
export function ProfileCard() {
	const [show, setshow] = useState(false);

  return (
    <>

      <div className="flex flex-col items-center gap-[20px] lg:justify-center pt-[16px] lg:pt-0 lg:h-full border border-[#343838] custom-corner px-10">
        <div className={`flex lg:flex-col flex-row items-center justify-around gap-[15px] ${show ? "" : "pb-[15px]"}`}>

			<div className="lg:hidden block p-[12px] absolute right-0 top-0">
			<div className="w-[26px] flex items-center justify-center h-[30px] bg-[#343838] rounded-tr-[15px] rounded-bl-[15px] shadown-lg" onClick={() => setshow(!show)}>
			{
				show ? 
				<button className=" w-[12px] h-[12px]">
					<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/up.png"></img>
				</button>
				: <button className=" w-[12px] h-[12px]">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/down.png"></img>
			</button>
			}
			</div>
			</div>

          <img
            className="border border-[#343838] bg-[#343838] custom-corner lg:w-[120px] w-[80px] h-[80px] lg:h-[120px] shadow-xl transform transition-transform duration-300 hover:scale-110"
            src="https://cdn.intra.42.fr/users/0d6b52298379f4824e232a37e7049fac/hhamdy.jpg"
			/>
		  <div className="flex flex-col items-center justify-around gap-[15px] pt-[15px] lg:pt-0">

          <div className="text-gray-200 text-lg lg:text-xl font-semibold tracking-wider transform transition-transform duration-300 hover:scale-110">
            Houssam Hamdy
          </div>
          <div className="flex items-center justify-center w-[120px] h-[23px] bg-[#4e77e7] text-xs font-semibold text-gray-100 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110">
            Software enginner
          </div>
			</div>
        </div>
		{
			show && 
			<div className="lg:hidden pb-[10px]">

			<div className="flex flex-col gap-[15px]">
				<div className="border w-full rounded-xl border-[#343838] bg-[#343838]"></div>
				
				<div className="flex items-center xl:gap-[15px] gap-[5px] text-white lg:pt-[15px] pt-[5px] duration-200 hover:scale-105">
				<div className="flex items-center justify-center border xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] rounded-lg bg-[#343838] border-[#343838] shadow-xl">
					<img
					className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]"
					src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/email.png"
					></img>
				</div>
				<div className="flex flex-col">
					<div className="text-gray-300 text-xs">Email</div>
					<div className="text-xs xl:text-sm xl:tracking-wider">houssamhamdy223@gmail.com</div>
				</div>
				</div>
				<div className="flex items-center xl:gap-[15px] gap-[5px] text-white duration-200 hover:scale-105">
				<div className="flex items-center justify-center border xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] rounded-lg bg-[#343838] border-[#343838] shadow-xl">
					<img
					className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]"
					src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/phone.png"
					></img>
				</div>
				<div className="flex flex-col">
					<div className="text-gray-300 text-xs">Phone</div>
					<div className="text-xs xl:text-sm xl:tracking-wider">+212 770403023</div>
				</div>
				</div>
				<div className="flex items-center xl:gap-[15px] gap-[5px] lg:pb-[15px] pb-[5px] text-white duration-200 hover:scale-105">
				<div className="flex items-center justify-center border  xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] rounded-lg bg-[#343838] border-[#343838] shadow-xl">
					<img
					className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]"
					src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/location.png"
					></img>
				</div>
				<div className="flex flex-col">
					<div className="text-gray-300 text-xs">Location</div>
					<div className="text-xs xl:text-sm xl:tracking-wider">Morocco, Casablanca</div>
				</div>
				</div>
			<div className="border w-full rounded-xl border-[#343838] bg-[#343838] "></div>
			</div>
			<div className="flex items-center gap-[15px] pt-[15px] justify-center">
			<a href="https://www.linkedin.com/in/houssam-hamdy-393792232/">
				<button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/linkedin.png"></img>
				</button>
			</a>
			<a href="https://github.com/h-hamdy">
				<button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/github.png"></img>
				</button>
			</a>
			<a href="https://medium.com/@houssamhamdy223">
				<button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/medium.png"></img>
				</button>
			</a>
			<a href="https://leetcode.com/housssam/">
				<button className="w-[25px] transform transition-transform duration-300 hover:scale-110  lg:pb-0">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/leetcode.png"></img>
				</button>
			</a>
			</div>
		</div>
		}
		<div className="lg:block hidden">
			<div className="flex flex-col gap-[15px]">
				<div className="border w-full rounded-xl border-[#343838] bg-[#343838]"></div>
				
				<div className="flex items-center xl:gap-[15px] gap-[5px] text-white lg:pt-[15px] pt-[5px] duration-200 hover:scale-105">
				<div className="flex items-center justify-center border xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] rounded-lg bg-[#343838] border-[#343838] shadow-xl">
					<img
					className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]"
					src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/email.png"
					></img>
				</div>
				<div className="flex flex-col">
					<div className="text-gray-300 text-xs">Email</div>
					<div className="text-xs xl:text-sm xl:tracking-wider">houssamhamdy223@gmail.com</div>
				</div>
				</div>
				<div className="flex items-center xl:gap-[15px] gap-[5px] text-white duration-200 hover:scale-105">
				<div className="flex items-center justify-center border xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] rounded-lg bg-[#343838] border-[#343838] shadow-xl">
					<img
					className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]"
					src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/phone.png"
					></img>
				</div>
				<div className="flex flex-col">
					<div className="text-gray-300 text-xs">Phone</div>
					<div className="text-xs xl:text-sm xl:tracking-wider">+212 770403023</div>
				</div>
				</div>
				<div className="flex items-center xl:gap-[15px] gap-[5px] lg:pb-[15px] pb-[5px] text-white duration-200 hover:scale-105">
				<div className="flex items-center justify-center border  xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] rounded-lg bg-[#343838] border-[#343838] shadow-xl">
					<img
					className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]"
					src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/location.png"
					></img>
				</div>
				<div className="flex flex-col">
					<div className="text-gray-300 text-xs">Location</div>
					<div className="text-xs xl:text-sm xl:tracking-wider">Morocco, Casablanca</div>
				</div>
				</div>
			<div className="border w-full rounded-xl border-[#343838] bg-[#343838] "></div>
			</div>
			<div className="flex items-center gap-[15px] pt-[15px] justify-center">
			<a href="https://www.linkedin.com/in/houssam-hamdy-393792232/">
				<button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/linkedin.png"></img>
				</button>
			</a>
			<a href="https://github.com/h-hamdy">
				<button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/github.png"></img>
				</button>
			</a>
			<a href="https://medium.com/@houssamhamdy223">
				<button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/medium.png"></img>
				</button>
			</a>
			<a href="https://leetcode.com/housssam/">
				<button className="w-[25px] transform transition-transform duration-300 hover:scale-110 pb-[20px] lg:pb-0">
				<img src="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/leetcode.png"></img>
				</button>
			</a>
			</div>
			</div>
		</div>
    </>
  );
}
