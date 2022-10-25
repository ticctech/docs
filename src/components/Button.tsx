import React from 'react';

import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

import { useHistory } from 'react-router-dom';

const primaryColor: string = '#156999';

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
            color: '#003f6b',
            backgroundColor: '#f5f5f5',
            textDecoration: 'none'
        }
    },
    outlinedStyle: {
        color: primaryColor,
        backgroundColor: 'auto',
        border: `1px solid #156999`,
        '&:hover': {
            color: '#003f6b',
            textDecoration: 'none'
        }
    },
    containedStyle: {
        color: '#fff',
        backgroundColor: primaryColor,
        boxShadow: '0 0 0.4rem rgba(0, 0, 0, 0.3)',
        '&:hover': {
            backgroundColor: '#003f6b',
            color: '#fff',
            textDecoration: 'none'
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
            return <ActionLink to={href} className={clsx(classes.containedStyle, classes.button)}   {...props} />
        default: return <ActionLink to={href} className={clsx(classes.defaultStyle, classes.button)} {...props} />
    }
}
export default Button

interface ActionProps {
    to: string;
    className: string;
    children: React.ReactNode;
}

const ActionLink = (props: ActionProps) => {
    const history = useHistory();
    const { to } = props;
    if (!to.startsWith("/")) {
        return <a style={{ textDecoration: 'none', color: primaryColor }} href={to} {...props} />;
    }
    return <button onClick={() => history.push(to)} {...props} />;
}
