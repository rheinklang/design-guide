import * as React from 'react';

interface IHeadingSpec {
	Tag: string;
	pixelSize: string;
	level: string;
}

interface IParagraphSpec {
	InnerTag?: string;
}

const HEADINGS: IHeadingSpec[] = [
	{ level: '1', pixelSize: '44.8', Tag: 'h1' },
	{ level: '2', pixelSize: '38.4', Tag: 'h2' },
	{ level: '3', pixelSize: '33.6', Tag: 'h3' },
	{ level: '4', pixelSize: '28.8', Tag: 'h4' },
	{ level: '5', pixelSize: '25.6', Tag: 'h5' },
	{ level: '6', pixelSize: '22.4', Tag: 'h6' },
];

const PARAGRAPHS_CONTENT = `Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
clita kasd gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea
takimata sanctus est Lorem ipsum dolor sit amet.`;

const PARAGRAPHS: IParagraphSpec[] = [{ InnerTag: void 0 }, { InnerTag: 'strong' }, { InnerTag: 'em' }];

export const Typography = () => (
	<div className="m-typography">
		{HEADINGS.map(({ Tag, pixelSize, level }: IHeadingSpec) => (
			<Tag key={level}>
				Heading {level} <small>({pixelSize}px)</small>
			</Tag>
		))}
		{PARAGRAPHS.map(({ InnerTag }: IParagraphSpec, index: number) => (
			<p key={index}>{InnerTag ? <InnerTag>{PARAGRAPHS_CONTENT}</InnerTag> : PARAGRAPHS_CONTENT}</p>
		))}
	</div>
);
