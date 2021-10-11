import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Greeter from './Greeter';

export default {
    title: 'Greeter',
    component: Greeter,
} as ComponentMeta<typeof Greeter>;

const Template: ComponentStory<typeof Greeter> = (args) => <Greeter {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const WithInitial = Template.bind({});
WithInitial.args = {
    initialName: "world",
    initialCounter: 10
};
