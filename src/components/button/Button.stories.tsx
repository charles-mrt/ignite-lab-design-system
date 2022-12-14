import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

import { SignIn } from 'phosphor-react';

export default {
    title: 'Components/Button',
    component: Button,
    args: {       
        children: 'Create account',
    },
    argTypes: {}
} as Meta<ButtonProps>

/**
 * export variants     
 */
export const Default: StoryObj<ButtonProps> = {
}

