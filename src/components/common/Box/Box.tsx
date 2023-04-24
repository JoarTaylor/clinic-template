import React from 'react'
import * as S from './styled'

type BoxProps = {
    row?: boolean
    spaceBetween?: boolean
    alignCenter?: boolean
    justifyCenter?: boolean
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({row, spaceBetween, alignCenter, justifyCenter, children}) => {
        return (<S.Div row={row} justifyCenter={justifyCenter} spaceBetween={spaceBetween} alignCenter={alignCenter}>{children}</S.Div>);
}

export default Box