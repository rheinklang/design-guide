import * as React from 'react';
import './patterns/helpers/css';
import { Colors } from './patterns/molecules/colors';
import { Images } from './patterns/molecules/images';
import { Typography } from './patterns/molecules/typography';
import { Section } from './patterns/organisms/section';

class App extends React.Component {
	public render() {
		return (
			<div className="t-design-guide">
				<div className="h-container">
					<img className="h-center-image" src="logo.png" alt="Logo" />
				</div>
				<Section title="Brand colors" anchor="colors">
					<Colors />
				</Section>
				<Section title="Typography" anchor="type">
					<Typography />
				</Section>
				<Section title="Images and renditions" anchor="images">
					<Images />
				</Section>
			</div>
		);
	}
}

export default App;
