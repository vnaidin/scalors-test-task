import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListIcon from '@material-ui/icons/List';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

import DevicesList from './SubComponents/DevicesList';
import UsersList from './SubComponents/UsersList';

function Project({ project, deleteItem }) {
	const [open, setOpen] = useState(false);
	const [editMode, setEditMode] = useState(false);

	return (
		<List
			key={project.id}
			style={{
				display: 'grid',
				gridAutoFlow: 'row',
				border: open ? '1px solid black' : 'none',
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
				<TextField
					label={`Title: `}
					defaultValue={project.title}
					disabled={!editMode}
					color='secondary'
				></TextField>

				<TextField
					label={`Start Date: `}
					defaultValue={new Date(project.beginDate).toLocaleDateString()}
					disabled={!editMode}
					color='secondary'
				></TextField>
				<TextField
					label={`Expiration Date: `}
					defaultValue={
						project.expirationDate
							? new Date(project.expirationDate).toLocaleDateString()
							: 'not stated'
					}
					disabled={!editMode}
					color='secondary'
				></TextField>
				<Tooltip
					title='Show More Information!'
					onClick={() => {
						setOpen(!open);
					}}
				>
					{open ? <ArrowUpwardIcon /> : <ListIcon />}
				</Tooltip>
				<Tooltip title='Edit'>
					<EditIcon onClick={() => setEditMode(!editMode)} />
				</Tooltip>
				<Tooltip title='Delete'>
					<DeleteIcon onClick={() => deleteItem(project.id)} />
				</Tooltip>
			</ListItem>
			<Collapse in={open} timeout='auto' unmountOnExit>
				<DevicesList projectID={project.id}></DevicesList>
				<UsersList projectID={project.id}></UsersList>
			</Collapse>
		</List>
	);
}

export default Project;
