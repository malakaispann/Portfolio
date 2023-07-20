import { memo } from 'react'
import { LinkType } from '../../../common/types'
import { HashLink as Link } from 'react-router-hash-link' ;


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
    extra_styles?: string,
    extra_function?: Function,
}

const HyperLink = ({ type, to, children, extra_styles, extra_function }: Props) => {
    
    return type === LinkType.Internal ?
        (
            <Link to={`${to}`} className={`hyperlink ${extra_styles === undefined ? '' : extra_styles}`} onClick={() => extra_function? extra_function() : undefined}>
                {children}
            </Link>
        ) : 
        (
            <a href={`${to}`} className={`hyperlink ${extra_styles === undefined ? '' : extra_styles}`}>
                {children}
            </a>
        )
}

export default memo(HyperLink)