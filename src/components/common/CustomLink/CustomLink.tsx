import React, { ReactNode } from 'react'
import { NavLink } from "react-router-dom";
import '../../../styles/index.css'
import { theme } from '../../../styles/theme';

type LinkProps = {
    to: string
    children: ReactNode
    callback?: () => void
}

const CustomLink: React.FC<LinkProps> = ({to, children, callback}) => {
        return (<NavLink id='navlink' className={({isActive}) => isActive ? 'navlink-active': ''} onClick={callback} to={to}>{children}</NavLink>);
}

export default CustomLink