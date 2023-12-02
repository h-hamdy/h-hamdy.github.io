import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./Pages/Profile";
import { ProfileCard } from "./components/profile/ProfileCard";

function App() {
  return (
    <>
	<div className="flex gap-[15px] w-screen h-screen p-[30px]">


		<div className="border border-[#282929] h-full bg-[#282929] custom-corner shadow-xl w-3/12">
          <ProfileCard />
        </div>
      <BrowserRouter>
        <Routes>
			<Route path="/" element={<Profile />}></Route>
			<Route path="/Resume" element={<Profile />}></Route>
			<Route path="/Portfolio" element={<Profile />}></Route>
			<Route path="/Blog" element={<Profile />}></Route>
			<Route path="/Contact" element={<Profile />}></Route>
        </Routes>
	</BrowserRouter>
	</div>
    </>
  );
}

export default App;
