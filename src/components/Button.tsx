import React from 'react';

import { Link } from 'react-router-dom';

type ButtonProps = {
    variant?: String
    color: String
    children: String
    href: string
}

const Button = (props: ButtonProps) => {
    const { variant, color, href } = props;

    const defaultStyle: Object = {
        color: color,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: '12px',
        borderRadius: '2px',
    }
    const outlinedStyle: Object = {
        color: color,
        backgroundColor: 'auto',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: '12px',
        border: `1px solid ${color}`,
        borderRadius: '2px',
    }
    const containedStyle: Object = {
        color: '#f5f5f5',
        backgroundColor: color,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: '12px',
        borderRadius: '2px',
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
    color: String
    style: Object
}

const DefaultButton = (props: DefaultProps) => {
    const { href, children, style } = props;

    return (
        <Link to={href}>
            <div
                style={style}>
                {children}
            </div>
        </Link>
    )
}