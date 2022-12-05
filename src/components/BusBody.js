import { React } from 'react';
import Doors from './Doors/Doors';
import OtherParts from './OtherParts/OtherParts';
import Wheels from './Wheels/Wheels';
import Windows from './Windows/Windows';

const style = (context) => {
	const { config:
		{ busBody: { top, left, height, width, borderRadius }}} = context;

	return {
		top: `${ top }px`,
		left: `${ left }px`,
		height: `${ height }px`,
		width: `${ width }px`,
		position: 'absolute',
		borderTopLeftRadius: `${ borderRadius.topLeft }px`,
		borderTopRightRadius: `${ borderRadius.topRight }px`,
		borderBottomRightRadius: `${ borderRadius.bottomRight }px`,
		borderBottomLeftRadius: `${ borderRadius.bottomLeft }px`,
	};
};

const BusBody = (context) =>
	<div className="busBody" style={ style(context) }>
		<Windows { ...context }/>
		<Doors { ...context }/>
		<Wheels { ...context }/>
		<OtherParts { ...context }/>
	</div>;

export default BusBody;
