import React from 'react';
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import BootstrapInput from './../BootstrapInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { store } from './../../store/store';
const OwnerConditional = (props) => {
	return (
		<Grid item xs={12}>
			<Grid container direction="row" spacing={2}>
				<Grid item xs={3}>
					<FormControl>
						<InputLabel shrink>
							{KaliFormsObject.translations.hubspot.actions.assignOwner}
						</InputLabel>
						<Select
							multiple={false}
							input={<BootstrapInput />}
							value={props.condition.owner}
							onChange={e => props.changeCondition({ index: props.idx, key: 'owner', value: e.target.value })}
							fullWidth={true}
						>
							<MenuItem value="">{KaliFormsObject.translations.hubspot.actions.selectOwner}</MenuItem>
							{KaliFormsHubSpot.contactOwners.map(owner => <MenuItem key={owner.ownerId} value={owner.ownerId}>{owner.firstName} {owner.lastName}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={2}>
					<FormControl>
						<InputLabel shrink>
							{KaliFormsObject.translations.hubspot.misc.if}
						</InputLabel>
						<Select
							multiple={false}
							input={<BootstrapInput />}
							value={props.condition.condition}
							onChange={e => props.changeCondition({ index: props.idx, key: 'condition', value: e.target.value })}
							fullWidth={true}
						>
							{store._FIELD_COMPONENTS_.fieldComponents.map(field => {
								if (
									(field.properties.name !== '')
									&& (field.id === 'checkbox'
										|| field.id === 'select'
										|| field.id === 'textbox'
										|| field.id === 'radio'
										|| field.id === 'hidden'
										|| field.id === 'dropdown'
										|| field.id === 'date'
										|| field.id === 'range'
										|| field.id === 'choices')
								) {

									let label = (typeof field.properties.caption !== 'undefined' && field.properties.caption !== '') ? field.properties.caption : field.properties.name
									return (
										<MenuItem
											key={field.internalId}
											value={field.properties.name}>
											{label}
										</MenuItem>
									)
								}
							})}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={2}>
					<FormControl>
						<InputLabel shrink>
							{KaliFormsObject.translations.hubspot.misc.operator}
						</InputLabel>
						<Select
							multiple={false}
							input={<BootstrapInput />}
							value={props.condition.operator}
							onChange={e => props.changeCondition({ index: props.idx, key: 'operator', value: e.target.value })}
							fullWidth={true}
						>
							<MenuItem key="contains" value="contains">
								{KaliFormsObject.translations.hubspot.misc.contains}
							</MenuItem>
							<MenuItem key="equal" value="equal">
								{KaliFormsObject.translations.hubspot.misc.equal}
							</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={3}>
					<FormControl>
						<InputLabel shrink>
							{KaliFormsObject.translations.hubspot.misc.value}
						</InputLabel>
						<BootstrapInput
							value={props.condition.value}
							onChange={e => props.changeCondition({ index: props.idx, key: 'value', value: e.target.value })}
							fullWidth={true}
							variant="filled"
						/>
					</FormControl>
				</Grid>
				<Grid item xs={2} style={{ paddingTop: 27 }}>
					<IconButton
						aria-label={KaliFormsObject.translations.hubspot.misc.addCondition}
						onClick={props.addCondition}
						variant="contained"
						color="primary"
						size="medium">
						<AddIcon fontSize="inherit" />
					</IconButton>
					<If condition={props.conditionalLength === 1}>
						<IconButton
							aria-label={KaliFormsObject.translations.hubspot.misc.removeCondition}
							onClick={() => props.setDefaultCondition()}
							variant="contained"
							color="primary"
							size="medium">
							<DeleteIcon fontSize="inherit" />
						</IconButton>
					</If>
					<If condition={props.conditionalLength > 1}>
						<IconButton
							aria-label={KaliFormsObject.translations.hubspot.misc.removeCondition}
							onClick={() => props.removeCondition(props.idx)}
							variant="contained"
							color="primary"
							size="medium">
							<DeleteIcon fontSize="inherit" />
						</IconButton>
					</If>
				</Grid>
			</Grid>
		</Grid>
	)
}
export default OwnerConditional;
