import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ListIcon from '@material-ui/icons/List';
import Tooltip from '@material-ui/core/Tooltip';

import DevicesList from './DevicesList';
import UsersList from './UsersList';

function ProjectsList({ project, edit }) {
	const [open, setOpen] = useState(false);
	const [editMode, setEditMode] = useState(false);

	return (
		<List
			key={project.id}
			style={{
				display: 'grid',
				gridAutoFlow: 'row',
			}}
		>
			<ListItem
				key={project.title}
				style={{
					display: 'grid',
					gridAutoFlow: 'column',
					gridTemplateColumns: 'repeat(auto-fill, 250px) ',
				}}
			>
				<ListItemText primary={`Title: ${project.title}`} />
				<ListItemText
					primary={`Start Date: ${new Date(
						project.beginDate,
					).toLocaleDateString()}`}
				/>
				<ListItemText
					primary={`Expiration Date: ${
						project.expirationDate
							? new Date(project.expirationDate).toLocaleDateString()
							: 'not stated'
					}`}
				/>
				<Tooltip title='Show More Information!'>
					<ListIcon
						onClick={() => {
							setOpen(!open);
						}}
					/>
				</Tooltip>
			</ListItem>
			<Collapse in={open} timeout='auto' unmountOnExit>
				<DevicesList projectID={project.id}></DevicesList>
				<UsersList projectID={project.id}></UsersList>
			</Collapse>
		</List>
	);
}

export default ProjectsList;
