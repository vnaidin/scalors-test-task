import React, { useEffect, useState } from 'react';
import './App.css';

import project from './task/project.json';

import Project from './Components/Project';

function App() {
	const [projects, updateProjects] = useState([]);

	useEffect(() => {
		updateProjects(project);
	}, []);

	return (
		<div className='App'>
			{projects.map((project) => (
				<div
					className='ProjectsList'
					style={{
						width: '100%',
						display: 'grid',
						gridAutoFlow: 'column',
						//border: '1px solid black',
						alignItems: 'center',
					}}
					key={project.id}
				>
					<Project
						project={project}
						deleteItem={(id) =>
							updateProjects(projects.filter((p) => p.id !== id))
						}
					/>
					<div />
				</div>
			))}
		</div>
	);
}

export default App;
