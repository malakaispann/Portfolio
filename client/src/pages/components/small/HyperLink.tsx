import React from 'react'
import { LinkType } from '../../../common/types'
import { Link } from 'react-router-dom'


/**
 *   @details : Creates a hyperlink to an internal or external page.
 * 
 *   @Required
 *   @param[in] type : Supported options are LinkType.External and LinkType.Internal.
 *   @param[in] to   : full link to external page or absolute link (from index) to internal page.
 * 
 *   @Optional
 *   @param[in] children    : Link content or other elements to be displayed as hyperlink.
 *   @param[in] extra_styles: extra styles to be applied to graphic. These should be passed as a single string or string literal.
 */

type Props = {
    type: LinkType,
    to: string,
    children?: React.ReactNode,
    extra_styles?: string
}

const HyperLink = ({ type, to, children, extra_styles }: Props) => {
    
    return type === LinkType.Internal ?
        (
            <Link to={`${to}`} className={`hyperlink ${extra_styles === undefined ? "" : extra_styles}`}>
                {children}
            </Link>
        ) : 
        (
            <a href={`${to}`} className={`hyperlink ${extra_styles === undefined ? "" : extra_styles}`}  >
                {children}
            </a>
        )
}

export default HyperLink