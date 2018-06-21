import * as React from 'react';
import { IImage, Image, ImageBlock } from '../../atoms/image';

const IMAGES: IImage[] = [
	{ rendition: '1:1' },
	{ rendition: '4:3' },
	{ rendition: '16:9' },
	{ rendition: '1:1', modifier: 'rounded' },
	{ rendition: '4:3', modifier: 'rounded' },
	{ rendition: '16:9', modifier: 'rounded' },
];

export const Images = () => (
	<div className="m-images">
		{IMAGES.map(({ rendition, modifier }: IImage, index: number) => (
			<ImageBlock key={index}>
				<Image rendition={rendition} modifier={modifier} />
			</ImageBlock>
		))}
	</div>
);
