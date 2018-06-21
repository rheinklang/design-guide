import * as React from 'react';
import './css/section.css';

export interface ISection {
	children: any;
	title: string;
	anchor?: string;
}

export const Section = ({ children, title, anchor }: ISection) => {
	return (
		<section className="o-section">
			<article className="h-container">
				<header className="o-section__header">
					<h2 className="o-section__title">
						§{' '}
						<a href={`#${anchor || title}`} rel="noopener noreferrer">
							{title}
						</a>
					</h2>
				</header>
				<div className="o-section__content">{children}</div>
			</article>
		</section>
	);
};
