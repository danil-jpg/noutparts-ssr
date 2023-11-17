import * as React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import DiscountSticker from './DiscountSticker';

const meta: Meta<typeof DiscountSticker> = {
    title: 'UI/ProductUI/DiscountSticker',
    component: DiscountSticker,
    parameters: {
        docs: {
            description: {
                component: 'Another description, overriding the comments',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof DiscountSticker>;

export const Primary: Story = {
    args: {
        amount: -125,
    },
    argTypes: {
        amount: {
            control: { type: 'text' },
            description: 'amount of discount',
        },
    },
};
