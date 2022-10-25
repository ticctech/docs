import React, { forwardRef } from 'react';

import { createUseStyles } from 'react-jss'
import clsx from 'clsx';

import { Link, LinkProps } from 'react-router-dom';


const primaryColor: string = '#156999';

const useStyles = createUseStyles({
    button: {
        display: 'inline-block',
        position: 'relative',
        justifyContent: "center",
        alignItems: "center",
        transition: 'background 400ms',
        borderRadius: '0.125rem',
        fontFamily: 'sans-serif',
        fontSize: '0.9rem',
        fontWeight: 500,
        letterSpacing: '0.035em',
        padding: {
            top: ' 0.8rem',
            right: '1.3rem',
            bottom: '0.8rem',
            left: '1.3rem',
        },
    },
    defaultStyle: {
        color: primaryColor,
        '&:hover': {
            color: '#003f6b',
            backgroundColor: '#f5f5f5',
        }
    },
    outlinedStyle: {
        color: primaryColor,
        backgroundColor: 'auto',
        border: `1px solid #156999`,
        '&:hover': {
            color: '#003f6b',
        }
    },
    containedStyle: {
        color: '#fff',
        backgroundColor: primaryColor,
        boxShadow: '0 0 0.2rem rgba(0, 0, 0, 0.3)',
        '&:hover': {
            backgroundColor: '#003f6b',
            color: '#fff'
        }
    }
})

type ButtonProps = {
    variant?: String
    children: String
    href?: string
    style?: Object;
}

const Button = (props: ButtonProps) => {
    const { variant, href } = props;
    const classes = useStyles();

    switch (variant) {
        case 'text':
            return <ActionLink to={href} className={clsx(classes.defaultStyle, classes.button)} {...props} />
        case 'outlined':
            return <ActionLink to={href} className={clsx(classes.outlinedStyle, classes.button)} {...props} />
        case 'contained':
            return <ActionLink className={clsx(classes.containedStyle, classes.button)} to={href}   {...props} />
        default: return <ActionLink to={href} className={clsx(classes.defaultStyle, classes.button)} {...props} />

    }
}
export default Button

interface ActionProps extends LinkProps {
    to: string;
    className: string;
    children: LinkProps<React.ReactNode>['children'];
}

const ActionLink = forwardRef((props: ActionProps, ref: React.FormEventHandler<Element>) => {
    const { to } = props;
    if (!to.startsWith("/")) {
        return <a ref={ref} target="_blank" rel="noopener" href={to} {...props} />;
    }
    if (to.includes("#")) {
        return <a {...props} />;
    }
    return <Link ref={ref} {...props} />;
});
