import * as React from 'react';
import './css/color.css';

export interface IColor {
	color: string;
	name: string;
	primary?: boolean;
}

export const Color = ({ color, name, primary }: IColor) => {
	return (
		<div className="a-color">
			{primary && <span className="a-color__primary">Primary</span>}
			<div className="a-color__preview" style={{ backgroundColor: color }} />
			<p className="a-color__code">{color}</p>
			<p className="a-color__name">{name}</p>
		</div>
	);
};
