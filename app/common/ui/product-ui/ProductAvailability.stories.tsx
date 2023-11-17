import * as React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import ProductAvailability from './ProductAvailability';

const meta: Meta<typeof ProductAvailability> = {
    title: 'UI/ProductUI/ProductAvailability',
    component: ProductAvailability,
    parameters: {
        docs: {
            description: {
                component: 'Another description, overriding the comments',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof ProductAvailability>;

export const Primary: Story = {
    args: {
        type: 'available',
    },
    argTypes: {
        type: {
            description: 'type of the availability',
            options: ['available' , 'ending' , 'outOfStock'],
            control: { type: 'select' },
        },
    },
};
