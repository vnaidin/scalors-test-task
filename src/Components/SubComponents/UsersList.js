import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import users from '../../task/user.json';

const UsersList = ({ projectID }) => (
	<List
		component='div'
		style={{
			display: 'grid',
			gridTemplateColumns: 'auto',
			gridAutoFlow: 'row',
		}}
		disablePadding
		subheader={
			<ListSubheader component='div' id='nested-list-subheader'>
				Users:
			</ListSubheader>
		}
	>
		{users
			.filter((user) => user.projectId === projectID)
			.map((user) => {
				return (
					<ListItem button key={user.firstName} style={{ padding: '0px 3em' }}>
						<ListItemText primary={`Name: ${user.firstName}`} />
						<ListItemText primary={`Surname: ${user.lastName}`} />
					</ListItem>
				);
			})}
	</List>
);

export default UsersList;
