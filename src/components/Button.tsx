import React from 'react';

import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

const primaryColor: string = '#156999';
const hoverColor: string = '#003f6b';

const useStyles = createUseStyles({
    button: {
        border: 0,
        textDecoration: 'none',
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
        cursor: 'pointer',
        padding: {
            top: ' 0.8rem',
            right: '1.3rem',
            bottom: '0.8rem',
            left: '1.3rem',
        }
    },
    defaultStyle: {
        color: primaryColor,
        '&:hover': {
            color: hoverColor,
            backgroundColor: '#f5f5f5',
            textDecoration: 'none'
        }
    },
    outlinedStyle: {
        color: primaryColor,
        backgroundColor: '#fff',
        border: `1px solid ${primaryColor}`,
        '&:hover': {
            color: hoverColor,
            borderColor: hoverColor,
            backgroundColor: '#f5f5f5',
            textDecoration: 'none'
        }
    },
    containedStyle: {
        color: '#fff',
        backgroundColor: primaryColor,
        boxShadow: '0 0 0.4rem rgba(0, 0, 0, 0.3)',
        '&:hover': {
            backgroundColor: hoverColor,
            color: '#fff',
            textDecoration: 'none'
        }
    }
})

interface ButtonProps {
    variant?: String
    children: String
    href: string
    style?: Object;
}

const Button = (props: ButtonProps) => {
    const { variant, href } = props;
    const classes = useStyles();

    switch (variant) {
        case 'text':
            return <ActionLink href={href} className={clsx(classes.defaultStyle, classes.button)} {...props} />
        case 'outlined':
            return <ActionLink href={href} className={clsx(classes.outlinedStyle, classes.button)} {...props} />
        case 'contained':
            return <ActionLink href={href} className={clsx(classes.containedStyle, classes.button)}   {...props} />
        default: return <ActionLink href={href} className={clsx(classes.defaultStyle, classes.button)} {...props} />
    }
}
export default Button;

interface ActionProps {
    href: string;
    className: string;
    children: React.ReactNode;
}

const ActionLink: Function = (props: ActionProps) => {
    const { href } = props;
    const history = useHistory();

    if (!href.startsWith("/")) {
        return <a style={{ textDecoration: 'none', color: primaryColor }} href={href} {...props} />;
    }
    return <button onClick={() => history.push(href)} {...props} />;
}