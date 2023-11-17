import * as React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import PrimaryInput from './PrimaryInput';

const meta: Meta<typeof PrimaryInput> = {
    title: 'UI/Inputs/PrimaryInput',
    component: PrimaryInput,
    parameters: {
        docs: {
            description: {
                component: 'Another description, overriding the comments',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PrimaryInput>;

export const Primary: Story = {
    args: {
        label: 'label',
        placeholder: 'placeholder',
        type: 'text',
    },
    argTypes: {
        type: {
            description: 'type of the input',
            options: ['text' , 'email' , 'tel'],
            control: { type: 'select' },
        },
        placeholder: {
            control: { type: 'text' },
            description: 'place placeholder here',
        },
        label: {
            control: { type: 'text' },
            description: 'place label here',
        },
    },
};
