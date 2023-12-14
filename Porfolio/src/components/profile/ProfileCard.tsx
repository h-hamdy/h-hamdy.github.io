export function ProfileCard() {
  return (
    <>
      <div className="flex flex-col items-center gap-[20px] justify-center h-full">
        <div className="flex flex-col items-center justify-around gap-[15px] pt-[15px]">
          <img
            className="border border-[#343838] bg-[#343838] custom-corner w-[120px] h-[120px] shadow-xl transform transition-transform duration-300 hover:scale-110"
            src="https://cdn.intra.42.fr/users/0d6b52298379f4824e232a37e7049fac/hhamdy.jpg"
          />
          <div className="text-gray-200 text-xl font-semibold tracking-wider transform transition-transform duration-300 hover:scale-110">
            Houssam Hamdy
          </div>
          <div className="flex items-center justify-center w-[120px] h-[23px] bg-[#4e77e7] text-xs font-semibold text-gray-100 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-110">
            Software enginner
          </div>
        </div>
        <div className="px-10">
          <div className="border w-full rounded-xl border-[#343838] bg-[#343838]"></div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center xl:gap-[15px] gap-[5px] text-white pt-10 duration-200 hover:scale-105">
              <div className="flex items-center justify-center border xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] rounded-lg bg-[#343838] border-[#343838] shadow-xl">
                <img
                  className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]"
                  src="/src/assets/email.png"
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
                  src="/src/assets/phone.png"
                ></img>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-300 text-xs">Phone</div>
                <div className="text-xs xl:text-sm xl:tracking-wider">+212 770403023</div>
              </div>
            </div>
            <div className="flex items-center xl:gap-[15px] gap-[5px] pb-10 text-white duration-200 hover:scale-105">
              <div className="flex items-center justify-center border  xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] rounded-lg bg-[#343838] border-[#343838] shadow-xl">
                <img
                  className="xl:w-[30px] xl:h-[30px] w-[25px] h-[25px]"
                  src="/src/assets/location.png"
                ></img>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-300 text-xs">Location</div>
                <div className="text-xs xl:text-sm xl:tracking-wider">Morocco, Casablanca</div>
              </div>
            </div>
          </div>
          <div className="border w-full rounded-xl border-[#343838] bg-[#343838]"></div>
        </div>
        <div className="flex items-center gap-[15px] justify-center">
          <a href="https://www.linkedin.com/in/houssam-hamdy-393792232/">
            <button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
              <img src="/src/assets/linkedin.png"></img>
            </button>
          </a>
          <a href="https://github.com/h-hamdy">
            <button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
              <img src="/src/assets/github.png"></img>
            </button>
          </a>
          <a href="https://medium.com/@houssamhamdy223">
            <button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
              <img src="/src/assets/medium.png"></img>
            </button>
          </a>
          <a href="https://leetcode.com/housssam/">
            <button className="w-[25px] transform transition-transform duration-300 hover:scale-110">
              <img src="/src/assets/leetcode.png"></img>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
