import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import devices from '../../task/device.json';

const DevicesList = ({ projectID }) => (
	<List
		component='div'
		style={{
			display: 'grid',
			gridAutoFlow: 'row',
			gridTemplateColumns: 'auto',
		}}
		disablePadding
		subheader={
			<ListSubheader component='div' id='nested-list-subheader'>
				Devices:
			</ListSubheader>
		}
	>
		{devices
			.filter((device) => device.projectId === projectID)
			.map((device) => {
				return (
					<ListItem button key={device.deviceId} style={{ padding: '0px 3em' }}>
						<ListItemText primary={`ID: ${device.deviceId}`} />
						<ListItemText primary={`S/N: ${device.serialNumber}`} />
					</ListItem>
				);
			})}
	</List>
);

export default DevicesList;
