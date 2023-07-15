import React from 'react'

/**
 *   @details : Creates a flexible container for text (and other content). 
 * 
 *   @Required
 *   @param[in] id:             unique identifier for the section.
 * 
 *   @Optional
 *   @param[in] title:    the subheading to display at the top of the container.
 *   @param[in] children: other html/react elements to be displayed within container.
 *   @param[in] extra_styles: extra styles to be applied to the text container. These should be passed as a single string or string literal.
 */

type Props = {
    title?: string,
    id: string,
    extra_styles?: string,
    children?: React.ReactNode;
}

const TextContainer = ({ title, id, children, extra_styles }: Props) => {
    return (
        <div className={`textbox-container text ${extra_styles === undefined ? '' : extra_styles}`} id={id}>
            { title !== undefined ?
                <div className='title'>
                    {title}
                </div>
                : null }
            {children}
        </div>
    )
}

export default TextContainer