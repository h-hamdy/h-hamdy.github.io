export function Contact () {
	return (
		<>
			<div className="text-gray-200 text-2xl p-10">
				<div className="flex flex-col">
					<div className="font-semibold">Contact Form</div>
					<div className="border border-[1px] rounded-lg border-[#535555] w-[50px]"></div>
				</div>
			</div>
			<div className="flex flex-col gap-[15px] items-center justify-center">
				<div className="flex gap-[15px]">
					<input className="bg-[#535555] border hover:border-[2px] h-[50px] w-[400px] rounded-xl px-4 text-white shadow-xl	" placeholder="Full Name" style={{ outline: 'none' }}></input>
					<input className="bg-[#535555] border hover:border-[2px] h-[50px] w-[400px] rounded-xl px-4 text-white shadow-xl" placeholder="Email address" style={{ outline: 'none' }}></input>
				</div>
				<textarea className="bg-[#535555] border hover:border-[2px] h-[120px] w-[800px] rounded-xl px-4 p-5 text-white shadow-xl" placeholder="Email address" style={{ outline: 'none' }}></textarea>
				<div className="pt-10">
					<button className="flex items-center justify-center w-[180px] h-[50px] bg-[#535555] rounded-lg text-white shadow-xl font-bold tracking-wider">Send Email</button>
				</div>
			</div>
		</>
	)
}