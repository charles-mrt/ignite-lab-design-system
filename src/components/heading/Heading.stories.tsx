import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Text size.',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

/**
 * export variants     
 */
export const Default: StoryObj<HeadingProps> = {
    //default size 'md'
}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (<h1>Title - tag H1</h1>)
    },

    argTypes: {                
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}