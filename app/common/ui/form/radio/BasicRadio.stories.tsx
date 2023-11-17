import * as React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import BasicRadio from './BasicRadio';

const meta: Meta<typeof BasicRadio> = {
    title: 'UI/Form/BasicRadio',
    component: BasicRadio,
    parameters: {
        docs: {},
    },
};

export default meta;

type Story = StoryObj<typeof BasicRadio>;

const BasicRadioContainerWithHooks = (): JSX.Element => {
    const texts = ["Option 1", "Option 2", "Option 3"];
	const descriptions = ["Description 1", "Description 2", "Description 3"];
	const [chosenRadio, setChosenRadio] = React.useState<string | null>(null);

    return (
        <BasicRadio texts={texts} descriptions={descriptions} type="col" setChosenRadio={setChosenRadio} heading="Куда отправляем?"></BasicRadio>
    );
};

export const Primary: StoryFn = () => <BasicRadioContainerWithHooks />;

Primary.argTypes = {
    type: {
        description: 'direction of radios',
        options: ['row' , 'col' ],
        control: { type: 'select' },
    },
    texts: {
        description: 'array of texts of radios',
        control: { type: 'text' },
    },
    descriptions: {
        description: 'array of possible descriptions of radios',
        control: { type: 'text' },
    },
    heading: {
        control: { type: 'text' },
        description: 'heading of the radios-block',
    },
};
