import { ProjectsCard } from "../components/ProjectsCard"

export function Portfolio () {
	return (
		<>
			<div className="text-gray-200 text-2xl lg:p-10 p-6 pb-10">
				<div className="flex flex-col">
					<div className="font-semibold">Projets</div>
					<div className="border border-[1px] rounded-lg border-[#4e77e7] w-[78px]"></div>
				</div>
			</div>
			<div className="flex flex-wrap  h-full w-full lg:gap-[50px] justify-center lg:justify-start gap-[20px] overflow-y-auto overflow-hidden lg:pb-48 pb-32 lg:px-10">
				<ProjectsCard link="https://github.com/h-hamdy/Webserv" img="https://www.computerscience.gcse.guru/wp-content/uploads/2016/11/webserver-e1479654596735.jpg" time="Ft_webserv" title="Implement HTTP server with C++" desc=""/>
				<ProjectsCard link="https://github.com/h-hamdy/ft_transcendence" img="https://raw.githubusercontent.com/h-hamdy/Portfolio/main/src/assets/transcendence.png" time="ft_Transcendence" title="Cyber Pong is an Online Ping Pong Game"/>
				<ProjectsCard link="https://github.com/h-hamdy/inception" img="https://shorturl.at/rFUY8" time="Inception" title="Exploring Docker: Virtualizing Multiple Images"/>
			</div>
		</>
	)
}