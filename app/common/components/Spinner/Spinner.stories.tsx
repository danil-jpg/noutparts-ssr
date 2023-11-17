import * as React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'UI/Spinner/Spinner',
    component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
