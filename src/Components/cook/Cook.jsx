import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import "./tail.css";

import CreateTask from "./CreateTask.jsx";
import ListTasks from "./ListTasks.jsx";
import terms from "../terms.js";

export default function Cook(props) {
	const [tasks, setTasks] = useState([]);
	if (props.d && props.d ? props.d : true) {
		import("./tail.css");
	}
	// console.log("tasks", tasks);

	useEffect(() => {
		// setTasks(JSON.parse(localStorage.getItem("tasks")));
	}, []);
	return (
		<DndProvider backend={HTML5Backend}>
			{/* <Sidebar /> */}
			<div className="flex justify-center items-center mt-0">
				<p className="  w-100 max-w-md font-bold text-xl text-center flex flex-row items-center  rounded-lg p-4 shadow-md ">
					Cook's Area
					<img className="h-40 w-60 ml-4" src="./chef.svg" />
				</p>
			</div>

			<Toaster />
			
			<div className="bg-slate-100 w-full flex flex-col items-center pt-3 ">
				<ListTasks
					d={props.d}
					user={terms.user}
					tasks={tasks}
					setTasks={setTasks}
				/>
			</div>
			
		</DndProvider>
	);
}