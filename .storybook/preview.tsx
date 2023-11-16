import React from 'react';
import type { Preview } from '@storybook/react';
import '../public/fonts.css';
import '../app/globals.scss';

const preview: Preview = {
    parameters: {
        options: {
            storySort: (a, b) =>
                a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
        },

        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <div>
                <Story />
            </div>
        ),
    ],
};

export default preview;
