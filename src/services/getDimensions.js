/* eslint-disable no-magic-numbers */
import { range } from '@laufire/utils/collection';

const noOfWindows = 5;
const multiplier = 230;

const noOfDoors = 2;
const doorMultiplier = 690;
const margin = 300;

const noOfRightDoorGlasses = 2;
const rightGlassMultiplier = 690;
const rightGlassMargin = 365;

const noOfLeftDoorGlasses = 2;
const leftGlassMultiplier = 690;
const leftGlassMargin = 308;

const noOfExteriorWheels = 2;
const wheelExteriorMultiplier = 695;
const wheelExteriorMargin = 125;

const noOfWheelInteriors = 3;
const wheelInteriorMultiplier = 710;
const wheelInteriorMargin = 230;

const busBody = (size) => ({
	top: 150 * size,
	left: 100 * size,
	height: 350 * size,
	width: 1200 * size,
	border: 2 * size,
	borderRadius:
		{
			topLeft: 153 * size,
			topRight: 5 * size,
			bottomRight: 5 * size,
			bottomLeft: 15 * size,
		},
});

const redLights = (size) => ({
	top: 270 * size,
	left: 1200 * size,
	height: 35 * size,
	width: 10 * size,
	borderRadius: 2 * size,
	border: 1 * size,
});

const rearIndicator = (size) => ({
	top: 307 * size,
	left: 1200 * size,
	height: 35 * size,
	width: 10 * size,
	border: 1 * size,
});

const frontGlass = (size) => ({
	top: 40 * size,
	left: 0 * size,
	width: 90 * size,
	height: 136 * size,
	borderTopLeftRadius: 90 * size,
	border: 2 * size,
});

const luggageSection = (size) => ({
	top: 239 * size,
	left: 585 * size,
	height: 100 * size,
	width: 200 * size,
	border: 3 * size,
});

const luggageSecHandle = (size) => ({
	top: 318 * size,
	left: 666 * size,
	height: 10 * size,
	width: 50 * size,
});

const windows = (size) =>
	range(1, noOfWindows).map((window) => ({
		top: 20 * size,
		height: 100 * size,
		width: 170 * size,
		left: (window * multiplier) * size,
		borderRadius: 5 * size,
		border: 2 * size,
	}));

const doors = (size) =>
	range(0, noOfDoors).map((door) => ({
		top: 156 * size,
		left: ((door * doorMultiplier) + margin) * size,
		height: 180 * size,
		width: 115 * size,
		border: 5 * size,
	}));

const rightDoorGlass = (size) =>
	range(0, noOfRightDoorGlasses).map((doorGlass) => ({
		left: ((doorGlass * rightGlassMultiplier) + rightGlassMargin) * size,
		top: 164 * size,
		height: 172 * size,
		width: 50 * size,
		border: 1 * size,
	}));

const leftDoorGlass = (size) =>
	range(0, noOfLeftDoorGlasses).map((doorGlass) => ({
		left: ((doorGlass * leftGlassMultiplier) + leftGlassMargin) * size,
		top: 164 * size,
		height: 172 * size,
		width: 50 * size,
		border: 1 * size,
	}));

const wheelExterior = (size) =>
	range(0, noOfExteriorWheels).map((wheel) => ({
		left: ((wheel * wheelExteriorMultiplier) + wheelExteriorMargin) * size,
		height: 80 * size,
		top: 290 * size,
		width: 80 * size,
		borderRadius: 100 * size,
		border: 35 * size,
	}));

const wheelInterior = (size) =>
	range(0, noOfWheelInteriors).map((wheelInt) => ({
		left: ((wheelInt * wheelInteriorMultiplier)
		+ wheelInteriorMargin) * size,
		height: 70 * size,
		top: 440 * size,
		width: 37 * size,
		borderRadius: 35 * size,
		border: 5 * size,
	}));

const getDimensions = (size) => ({
	busBody: busBody(size),
	redLights: redLights(size),
	rearIndicator: rearIndicator(size),
	frontGlass: frontGlass(size),
	luggageSection: luggageSection(size),
	luggageSecHandle: luggageSecHandle(size),
	windows: windows(size),
	doors: doors(size),
	rightDoorGlass: rightDoorGlass(size),
	leftDoorGlass: leftDoorGlass(size),
	wheelExterior: wheelExterior(size),
	wheelInterior: wheelInterior(size),
});

export default getDimensions;