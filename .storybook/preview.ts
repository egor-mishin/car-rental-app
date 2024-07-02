import type { Preview } from '@storybook/react';
import '../src/shared/styles/main.scss';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light',
			values: [
				{
					name: 'light',
					value: '#fff',
				},
				{
					name: 'dark',
					value: '#000',
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
