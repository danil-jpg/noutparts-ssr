import * as React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import ProductTag from './ProductTag';

const meta: Meta<typeof ProductTag> = {
    title: 'UI/ProductUI/ProductTag',
    component: ProductTag,
    parameters: {
        docs: {
            description: {
                component: 'Another description, overriding the comments',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ProductTag>;

export const Primary: Story = {
    args: {
        type: 'discount',
    },
    argTypes: {
        type: {
            description: 'type of the tag',
            options: ['discount' , 'new' , 'salesHit'],
            control: { type: 'select' },
        },
    },
};
