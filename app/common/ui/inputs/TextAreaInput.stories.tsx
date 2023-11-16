import * as React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import TextAreaInput from './TextAreaInput';

const meta: Meta<typeof TextAreaInput> = {
    title: 'UI/Inputs/TextAreaInput',
    component: TextAreaInput,
    parameters: {
        docs: {
            description: {
                component: 'Another description, overriding the comments',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof TextAreaInput>;

export const Primary: Story = {
    args: {
        label: 'label',
    },
    argTypes: {
        label: {
            control: { type: 'text' },
            description: 'place label here',
        },
    },
};
