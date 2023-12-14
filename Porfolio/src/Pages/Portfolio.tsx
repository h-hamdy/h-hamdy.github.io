import { ProjectsCard } from "../components/ProjectsCard"

export function Portfolio () {
	return (
		<>
			<div className="text-gray-200 text-2xl p-10">
				<div className="flex flex-col">
					<div className="font-semibold">Portfolio</div>
					<div className="border border-[1px] rounded-lg border-[#4e77e7] w-[50px]"></div>
				</div>
			</div>
			<div className="flex flex-wrap h-full w-full gap-[50px] overflow-y-auto overflow-hidden pb-48 px-10">
				<ProjectsCard link="https://github.com/h-hamdy/Webserv" img="/src/assets/webserv.png" time="Ft_webserv" title="Implement HTTP server with C++" desc=""/>
				<ProjectsCard link="https://github.com/h-hamdy/ft_transcendence" img="/src/assets/transcendence.png" time="ft_Transcendence" title="Cyber Pong is an Online Ping Pong Game"/>
				<ProjectsCard link="https://github.com/h-hamdy/inception" img="https://shorturl.at/rFUY8" time="Inception" title="Exploring Docker: Virtualizing Multiple Images"/>
			</div>
		</>
	)
}