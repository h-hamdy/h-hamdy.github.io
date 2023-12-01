export function ProfileCard () {
	return (
		<>
			<div className="flex flex-col items-center justify-around gap-[15px] p-10">
					<img className="border border-[#535555] bg-[#535555] custom-corner w-[120px] h-[120px]" src="https://cdn.intra.42.fr/users/0d6b52298379f4824e232a37e7049fac/hhamdy.jpg"/>
					<div className="text-gray-200 text-xl font-semibold tracking-wider">Houssam Hamdy</div>
					<div className="flex items-center justify-center w-[120px] h-[23px] bg-[#535555] text-xs font-semibold text-gray-100 rounded-lg">Software enginner</div>
				</div>
				<div className="px-10">
				<div className="border w-full rounded-xl border-[#535555] bg-[#535555]"></div>
				<div className="pt-[15px]">
				<div className="flex flex-col gap-[15px]">

				<div className="flex items-center gap-[15px] text-white">

					<div className="flex items-center justify-center border w-[50px] h-[50px] rounded-lg bg-[#535555] border-[#535555] shadow-inner">
						<img className="w-[30px] h-[30px]" src="/src/assets/Email.png"></img>
					</div>
					<div className="flex flex-col">
						<div className="text-gray-300 text-xs">Email</div>
						<div className="text-sm">houssamhamdy223@gmail.com</div>
					</div>
				</div>
				<div className="flex items-center gap-[15px] text-white">
				<div className="flex items-center justify-center border w-[50px] h-[50px] rounded-lg bg-[#535555] border-[#535555] shadow-inner">
						<img className="w-[30px] h-[30px]" src="/src/assets/phone.png"></img>
					</div>
					<div className="flex flex-col">
						<div className="text-gray-300 text-xs">Phone</div>
						<div className="text-sm">0770403023</div>
					</div>
				</div>
				<div className="flex items-center gap-[15px] text-white">
				<div className="flex items-center justify-center border w-[50px] h-[50px] rounded-lg bg-[#535555] border-[#535555] shadow-inner">
						<img className="w-[30px] h-[30px]" src="/src/assets/birthday.png"></img>
					</div>
					<div className="flex flex-col">
						<div className="text-gray-300 text-xs">Brithday</div>
						<div className="text-sm">Novembre 19, 2003</div>
					</div>
				</div>
				<div className="flex items-center gap-[15px] pb-[15px] text-white">
				<div className="flex items-center justify-center border w-[50px] h-[50px] rounded-lg bg-[#535555] border-[#535555] shadow-inner">
						<img className="w-[30px] h-[30px]" src="/src/assets/location.png"></img>
					</div>
					<div className="flex flex-col">
						<div className="text-gray-300 text-xs">Location</div>
						<div className="text-sm">Morocco, Casablanca</div>
					</div>
				</div>
				</div>
				<div className="border w-full rounded-xl border-[#535555] bg-[#535555]"></div>
				<div className="pt-[15px] flex items-center gap-[15px] justify-center">
					<button className="w-[25px]">
						<img src="/src/assets/linkedin.png">
						</img>
					</button>
					<button className="w-[25px]">
						<img src="/src/assets/github.png">
						</img>
					</button>
					<button className="w-[25px]">
						<img src="/src/assets/medium.png">
						</img>
					</button>
				</div>
				</div>
				</div>
		</>
	)
}