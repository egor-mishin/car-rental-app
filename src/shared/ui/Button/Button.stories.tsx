import { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Buttons',
	render: ({ ...args }) => <Button {...args}>{args.title}</Button>,
	component: Button,
	tags: ['autodocs'],
	args: {
		onClick: fn(),
	},
	argTypes: {
		appearance: { control: { type: 'select', options: ['primary', 'secondary', 'minimal'] } },
		title: { control: 'text' },
		size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
		iconLabel: { control: 'select', options: ['wechat'] },
		disabled: { control: 'boolean' },
		kind: { control: { type: 'select', options: ['regular', 'icon-right', 'icon-only'] } },
		onClick: { action: 'clicked' },
	},
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	name: 'Primary small',
	parameters: {
		docs: {
			description: 'Primary small button',
		},
	},
	args: {
		appearance: 'primary',
		title: 'Label',
		size: 'small',
	},
};

export const PrimaryMedium: Story = {
	name: 'Primary medium',
	parameters: {
		docs: {
			description: 'Primary medium button',
		},
	},
	args: {
		appearance: 'primary',
		title: 'Label',
		size: 'medium',
	},
};

export const PrimaryWithIcon: Story = {
	name: 'Primary with icon',
	parameters: {
		docs: {
			description: 'Primary medium button',
		},
	},
	args: {
		appearance: 'primary',
		title: 'Label',
		size: 'medium',
		kind: 'with-icon',
		iconLabel: 'wechat',
	},
};

export const PrimaryWithIconOnly: Story = {
	name: 'Primary icon only',
	parameters: {
		docs: {
			description: 'Primary button with icon only',
		},
	},
	args: {
		appearance: 'primary',
		title: 'Label',
		size: 'medium',
		kind: 'icon-only',
		iconLabel: 'wechat',
	},
};

export const PrimaryWithIconRight: Story = {
	name: 'Primary icon right',
	parameters: {
		docs: {
			description: 'Primary medium button',
		},
	},
	args: {
		appearance: 'primary',
		title: 'Label',
		size: 'medium',
		kind: 'with-icon',
		iconLabel: 'wechat',
	},
};

export const PrimaryLarge: Story = {
	name: 'Primary large',
	parameters: {
		docs: {
			description: 'Primary large button',
		},
	},
	args: {
		appearance: 'primary',
		title: 'Label',
		size: 'large',
	},
};

export const MinimalLarge: Story = {
	name: 'Minimal large',
	parameters: {
		docs: {
			description: 'Primary large button',
		},
	},
	args: {
		appearance: 'minimal',
		title: 'Label',
		size: 'large',
	},
};

export const MinimalMedium: Story = {
	name: 'Minimal medium',
	parameters: {
		docs: {
			description: 'Minimal medium button',
		},
	},
	args: {
		appearance: 'minimal',
		title: 'Label',
		size: 'medium',
	},
};

export const MinimalSmall: Story = {
	name: 'Minimal small',
	parameters: {
		docs: {
			description: 'Minimal small button',
		},
	},
	args: {
		appearance: 'minimal',
		title: 'Label',
		size: 'small',
	},
};

export const SecondaryMinimalWithIcon: Story = {
	name: 'Secondary minimal with icon',
	parameters: {
		docs: {
			description: 'Minimal small button with icon',
		},
	},
	args: {
		appearance: 'minimal',
		title: 'Label',
		size: 'medium',
		iconLabel: 'wechat',
	},
};

export const SecondaryLarge: Story = {
	name: 'Secondary large',
	parameters: {
		docs: {
			description: 'Primary large button',
		},
	},
	args: {
		appearance: 'secondary',
		title: 'Label',
		size: 'large',
	},
};

export const SecondaryMedium: Story = {
	name: 'Secondary medium',
	parameters: {
		docs: {
			description: 'Secondary medium button',
		},
	},
	args: {
		appearance: 'secondary',
		title: 'Label',
		size: 'medium',
	},
};

export const SecondarySmall: Story = {
	name: 'Secondary small',
	parameters: {
		docs: {
			description: 'Secondary small button',
		},
	},
	args: {
		appearance: 'secondary',
		title: 'Label',
		size: 'small',
	},
};

export const SecondaryMediumWithIcon: Story = {
	name: 'Secondary medium with icon',
	parameters: {
		docs: {
			description: 'Secondary small button with icon',
		},
	},
	args: {
		appearance: 'secondary',
		title: 'Label',
		size: 'medium',
		iconLabel: 'wechat',
	},
};

export const PrimaryClicked: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByTestId('primary'));
		await expect(canvas.getByTestId('primary')).toHaveStyle('background-color: #1a37a7');
	},
	name: 'Primary clicked',
	parameters: {
		docs: {
			description: 'Primary button clicked',
		},
	},
	args: {
		appearance: 'primary',
		title: 'Label',
		testId: 'primary',
	},
};

export default meta;
