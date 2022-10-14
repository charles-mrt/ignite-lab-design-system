import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { SignIn } from './SignIn';

export default {
    title: 'pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta


/**
 * automated tests  
 */
export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'charlesmrt@rocketseat.com.br');
        userEvent.type(canvas.getByPlaceholderText('*************'), '0987654321');

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            expect(canvas.getByText('Login realizado com sucesso')).toBeInTheDocument;
        })

    }
}

