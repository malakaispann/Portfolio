import React from 'react' ;
import '../../../styles/component_styles.css' ;
import '../../../styles/section_styles.css' ;
import { Size } from '../../../common/types' ;

/**
 *   @details : Creates a graphic when given the relative size, location, and description of the graphic.
 *              Supports all formats.
 * 
 *   @Required
 *   @param[in] graphic_src : the relative svg file from '/src/assets' of the graphic in string format.
 *   @param[in] desc : description of graphic for increased accessability.
 *   @param[in] size : relative size of graphic. Supported options are Size.Small, Size.Medium, Size.Large.
 * 
 *   @Optional
 *   @param[in] extra_styles: extra styles to be applied to graphic. These should be passed as a single string or string literal.
 */


type Props = {
    graphic_src: string,
    desc: string,
    size: Size,
    extra_styles?: string
}

function Graphic({ size, graphic_src, desc, extra_styles }: Props) {
    return (
        <img className={`graphic ${size} ${extra_styles === undefined ? "" : extra_styles}`} src={require("./../../../assets" + graphic_src)} alt={desc} />
    )
}

export default Graphic