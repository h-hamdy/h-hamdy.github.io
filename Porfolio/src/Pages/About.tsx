export function About () {
	return (
		<>
			<div className="flex items-center justify-between text-gray-200 text-2xl p-10">
				<div className="flex flex-col">
					<div className="font-semibold">About</div>
					<div className="border border-[1px] rounded-lg border-[#535555] w-[50px]"></div>
				</div>
				<a href="/src/assets/Cv.pdf">
					<button className="flex items-center justify-center w-[150px] h-[40px] tracking-wide rounded-lg text-sm bg-[#535555] shadow-xl">Download Cv</button>
				</a>
			</div>
			<div className="h-full overflow-y-auto overflow-hidden pb-40">
			<div className="flex px-10 text-gray-200 text-center overflow-y-auto tracking-wide">
			Hello! I'm Houssam Hamdy, a front-end developer fully committed to my software engineering studies at 1337. Driven by self-discipline and a passion for tackling real-world challenges, I enjoy delving into new technologies. My excitement spills over into the ever-evolving world of the web3 industry, showcasing my commitment to staying at the forefront. Eager to contribute my skills and creativity, I actively engage in the dynamic field of software development.
			
			</div>
			<div className="p-10">

				<div className="border w-full rounded-xl border-[#535555] bg-[#535555]"></div>

			</div>
			<div>

			<div className="flex gap-[15px] items-center px-10">

			<div className="flex items-center justify-center border w-[50px] h-[50px] rounded-lg bg-[#535555] border-[#535555] shadow-inner">
					<img className="w-[32px] h-[32px]" src="/src/assets/education.png"></img>
			</div>
			<div className="text-gray-200 text-xl font-semibold tracking-wider">Education</div>
			</div>
			<div className="pl-28 py-6 text-white">

				<div className="flex gap-[15px]">
				<img src="/src/assets/1337.png" className="w-[60px] h-[60px] rounded-lg"></img>
				<div>

				<div>1337 (42 Network), Benguerir</div>
				<div className="text-xs text-[#535555]">November 2021 - 2024</div>
				<div className="text-sm text-gray-300 pt-[10px]">
					Completed Common Core at 1337 School with a remarkable achievement, achieving a level of <span className="text-white text-sm">11.18</span>
				</div>
				</div>
				</div>
				<div>

				</div>
			</div>
			</div>

			<div className="flex gap-[15px] items-center px-10">

			<div className="flex items-center justify-center border w-[50px] h-[50px] rounded-lg bg-[#535555] border-[#535555] shadow-inner">
					<img className="w-[32px] h-[32px]" src="/src/assets/certification.png"></img>
			</div>
			<div className="text-gray-200 text-xl font-semibold tracking-wider">Licenses & certifications</div>
			</div>
			<div className="pl-28 py-6 text-white">
				<div className="flex gap-[15px]">

				<div className="flex gap-[15px]">
					<img src="/src/assets/ibm.png" className="w-[60px] h-[60px] rounded-lg"></img>
				</div>
				<div>
				<div>Blockchain Essentials</div>
				<div className="text-xs text-[#535555]">IBM</div>
				<div className="text-xs text-[#535555] pb-[5px]">Issued on: November 5, 2022</div>
					<a href="https://courses.cognitiveclass.ai/certificates/71250c784c0c4e9fa24ba671b4777be4">

					<button className="flex items-center justify-center text-sm text-gray-300 border w-[150px] h-[30px] rounded-xl">
						<div>show credential</div>
					</button>
					</a>
				</div>
				</div>
			</div>
			<div className="pl-28 py-6 text-white">
			<div className="flex gap-[15px]">

				<div className="flex gap-[15px]">
					<img src="/src/assets/simpli.jpg" className="w-[60px] h-[60px] rounded-lg"></img>
				</div>
				<div>

				<div>Blockchain Certification Training</div>
				<div className="text-xs text-[#535555]">simplilearn</div>
				<div className="text-xs text-[#535555] pb-[5px]">Issued on: Septembre 27, 2022</div>
					<a href="https://simpli-web.app.link/e/I6kzeI3IbFb">

					<button className="flex items-center justify-center text-sm text-gray-300 border w-[150px] h-[30px] rounded-xl">
						<div>show credential</div>
					</button>
					</a>
				</div>
				</div>
			</div>
			<div className="pl-28 py-6 text-white">
			<div className="flex gap-[15px]">

				<div className="flex gap-[15px]">
					<img src="/src/assets/coursera.png" className="w-[60px] h-[60px] rounded-lg"></img>
				</div>
				<div>

				<div>Smart Contracts</div>
				<div className="text-xs text-[#535555]">Coursera</div>
				<div className="text-xs text-[#535555] pb-[5px]">Issued on: Novembre 25, 2022</div>
					<a href="https://www.coursera.org/account/accomplishments/verify/UVUXGWNV59VB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">

					<button className="flex items-center justify-center text-sm text-gray-300 border w-[150px] h-[30px] rounded-xl">
						<div>show credential</div>
					</button>
					</a>
				</div>
				
			</div>

			
			</div>
			<div>
			</div>
			</div>


		</>
	)
}