import * as React from 'react';
import './css/image-block.css';
import './css/image.css';

type ImageRendition = '1:1' | '4:3' | '16:9';

export interface IImage {
	rendition: ImageRendition;
	modifier?: string;
}

export interface IImageBlock {
	children: any;
	description?: string;
}

const RENDITION_BASE_SIZE = 50;

const calculateRenditions = (rendition: ImageRendition): number[] => {
	return rendition
		.split(':')
		.map((size: string) => parseInt(size, 10))
		.map((size: number) => (size >= 9 ? size / 2 : size))
		.map((size: number) => size * RENDITION_BASE_SIZE);
};

export const Image = ({ rendition, modifier }: IImage) => {
	const [width, height] = calculateRenditions(rendition);

	return (
		<div className={`a-image` + (modifier ? ` a-image--${modifier}` : '')} style={{ width, height }}>
			<p className="a-image__rendition" style={{ lineHeight: `${height}px` }}>
				{rendition}
			</p>
		</div>
	);
};

export const ImageBlock = ({ description, children }: IImageBlock) => {
	return (
		<div className="h-image-block">
			{description && <p>{description}</p>}
			{children}
		</div>
	);
};
