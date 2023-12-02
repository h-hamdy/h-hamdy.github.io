interface Props {
	link: string,
	img: string,
	time: string,
	title: string,
	desc?: string,
}

export function BlogCard ( {link, img, time, title, desc}: Props ) {
	return (
		<>
			<a href={link}>
				<div className="h-full overflow-y-auto overflow-hidden pb-40 px-10">
					<div className="w-[300px] h-[300px] bg-[#535555] custom-corner">

					<div className="flex items-center justify-center bg-white custom-corner w-[300px] h-[200px]">
						<img src={img} className="w-full h-[200px]" alt="Tree Image" />
					</div>
					<div className="p-4">
					<div className="text-xs text-gray-400">{time}</div>
					<div className="text-white text-xl font-semibold tracking-wide">{title}</div>
					<div className="text-sm text-gray-200">{desc}</div>
					</div>
					</div>
				</div>
				</a>
		</>
	)
}