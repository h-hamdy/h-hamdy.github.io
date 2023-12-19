interface Props {
  link: string;
  img: string;
  time: string;
  title: string;
  desc?: string;
}

export function BlogCard({ link, img, time, title, desc }: Props) {
  return (
    <>
      <a
        href={link}
        className="hover:scale-110 transition-transform duration-300 lg:pt-10"
      >
        <div className="h-full overflow-y-auto overflow-hidden">
          <div className="lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] bg-[#343838] shadow-2xl custom-corner transform card-container">
            <div className="flex items-center justify-center bg-white custom-corner lg:w-[300px] lg:h-[200px] w-[250px] h-[150px]">
              <img
                src={img}
                className="w-full lg:h-[200px] h-[150px] custom-corner object-fit"
                alt="Tree Image"
              />
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-400">{time}</div>
              <div className="text-white lg:text-xl text-md font-semibold tracking-wide">
                {title}
              </div>
              <div className="lg:text-sm text-xs text-gray-200">{desc}</div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
