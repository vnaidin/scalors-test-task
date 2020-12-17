import React, { useEffect, useState } from 'react';
import './App.css';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import project from './task/project.json';

import Project from './Components/Project';

function App() {
	const [projects, updateProjects] = useState([]);
	const [editMode, setEditMode] = useState(false);
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
						gridTemplateColumns: 'auto',
						border: '1px solid black',
						alignItems: 'center',
						justifyItems: 'center',
					}}
					key={project.id}
				>
					<Project project={project} edit={editMode} />
					<Tooltip title='Delete'>
						<DeleteIcon
							onClick={() => {
								updateProjects(projects.filter((p) => p.id !== project.id));
							}}
						/>
					</Tooltip>
					<Tooltip title='Edit'>
						<EditIcon onClick={() => console.log('edit')} />
					</Tooltip>
				</div>
			))}
		</div>
	);
}

export default App;
