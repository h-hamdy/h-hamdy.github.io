export function Contact() {
  return (
    <>
      <div className="text-gray-200 text-2xl p-10">
        <div className="flex flex-col">
          <div className="font-semibold">Contact Form</div>
          <div className="border border-[1px] rounded-lg border-[#4e77e7] w-[50px]"></div>
        </div>
      </div>

      <div className="flex flex-col gap-[15px] items-center justify-center h-[80%] overflow-y-hidden">
        <div className="flex flex-col justify-center lg:flex-row gap-[15px] w-full px-5">
          <input
            className="bg-[#343838] border hover:border-[2px] h-[50px] hover:border-[#4e77e7] w-full lg:w-[330px] xl:w-[400px] rounded-xl px-5 text-white shadow-xl"
            placeholder="Full Name"
            style={{ outline: "none" }}
          ></input>
          <input
            className="bg-[#343838] border hover:border-[2px] h-[50px] hover:border-[#4e77e7] w-full lg:w-[330px] xl:w-[400px] rounded-xl px-4 text-white shadow-xl"
            placeholder="Email address"
            style={{ outline: "none" }}
          ></input>
        </div>
		<div className="px-5 w-full flex items-center justify-center">

        <textarea
          className="bg-[#343838] border hover:border-[2px] h-[120px] hover:border-[#4e77e7] w-full lg:w-[670px] xl:w-[800px] rounded-xl px-4 p-5 text-white shadow-xl"
          placeholder="Email address"
          style={{ outline: "none" }}
		  ></textarea>
		  </div>
        <div className="pt-10">
          <button className="text-white flex items-center justify-center w-[170px] h-[45px] tracking-wide rounded-lg text-sm bg-[#4e77e7] shadow-xl font-bold transform transition-transform duration-300 hover:scale-110">
            Send Email
          </button>
        </div>
      </div>
    </>
  );
}
