import React, { FormEventHandler, forwardRef } from 'react';

import { Link } from 'react-router-dom';


type ButtonProps = {
    variant?: String
    color?: String
    children: String
    href?: string
}

const Button = (props: ButtonProps) => {
    const { variant, color, href } = props;

    const defaultStyle: Object = {
        color: color,
        backgroundColor: '#f5f5f5'
    }
    const outlinedStyle: Object = {
        color: color,
        backgroundColor: 'auto',
        border: `1px solid ${color}`
    }
    const containedStyle: Object = {
        color: '#fff',
        backgroundColor: color === undefined ? '#156999' : color,
        boxShadow: '0 0 0.2rem rgba(0, 0, 0, 0.3)'
    }

    switch (variant) {
        case 'text':
            return <DefaultButton href={href} style={defaultStyle} {...props} />
        case 'outlined':
            return <DefaultButton href={href} style={outlinedStyle} {...props} />
        case 'contained':
            return <DefaultButton href={href} style={containedStyle} {...props} />
        default: return <DefaultButton href={href} style={defaultStyle} {...props} />

    }
}
export default Button

type DefaultProps = {
    href: string
    children: String
    color?: String
    style: Object
}

const DefaultButton = (props: DefaultProps) => {
    const { href, children, style } = props;

    const sx: Object = {
        ...style,
        display: 'inline-block',
        position: 'relative',
        justifyContent: "center",
        alignItems: "center",
        transition: 'background 400ms',
        padding: '12px',
        borderRadius: '2px',
        fontFamily: 'Roboto, sans-serif',
    }

    return (
        <ActionLink to={href}>
            <div style={sx}>
                {children}
            </div>
        </ActionLink>
    )
}

type ActionProps = {
    to: string
    children: React.ReactNode | any
}

const ActionLink = forwardRef((props: ActionProps, ref: FormEventHandler) => {
    const { to } = props;
    if (!to.startsWith("/")) {
        return <a ref={ref} target="_blank" rel="noopener" href={to} {...props} />;
    }
    if (to.includes("#")) {
        return <a {...props} />;
    }
    return <Link ref={ref} {...props} />;
});
