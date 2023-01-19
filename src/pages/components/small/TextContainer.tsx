import React from 'react'
import { useThemeContext } from '../../../common/contexts/ThemeContext'

type Props = {
    title: string,
    children?: React.ReactNode;
}

const TextContainer = ({ title, children }: Props) => {
    const { getTheme } = useThemeContext() ;
    let theme = getTheme() ;
    return (
        <div className='textbox outer'>
            <div className='textbox inner'>
                <div className={'text title ' + theme}>
                    {title}
                </div>
                {children}
            </div>
        </div>
    )
}

export default TextContainer