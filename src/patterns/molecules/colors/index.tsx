import * as React from 'react';
import { Color, IColor } from '../../atoms/color';
import './css/colors.css';

export const BRAND_COLORS: IColor[] = [
	{ color: '#0b363b', name: 'sea-green', primary: true },
	{ color: '#7faf42', name: 'alpine-green', primary: true },
	{ color: '#31431d', name: 'forrest-green' },
	{ color: '#da798f', name: 'slightly-rose', primary: true },
	{ color: '#ba4650', name: 'blood-rose' },
	{ color: '#431412', name: 'arcaten-rose' },
	{ color: '#f1f4e3', name: 'cherryflower-orange' },
	{ color: '#f3b296', name: 'bleach-orange' },
	{ color: '#fab178', name: 'sunshine-orange', primary: true },
	{ color: '#f48342', name: 'expressive-orange' },
];

export const Colors = () => {
	return (
		<div className="m-colors">
			{BRAND_COLORS.map((brand: IColor) => {
				return (
					<Color
						key={brand.color + brand.name}
						color={brand.color}
						name={brand.name}
						primary={brand.primary}
					/>
				);
			})}
		</div>
	);
};
