import { memo } from 'react';
import { Size } from '../../../common/types';

/**
 *   @details : Creates a graphic when given the relative size, location, and description of the graphic.
 *              Supports all formats.
 * 
 *   @Required
 *   @param[in] graphic_src : the relative svg file from '/src/assets' of the graphic in string format.
 *   @param[in] desc : description of graphic for increased accessability.
 *   @param[in] size : relative size of graphic. Supported options are Size.XSmall, Size.Small, Size.Medium, Size.Large.
 * 
 *   @Optional
 *   @param[in] disable_inversion: extra styles to be applied to graphic. These should be passed as a single string or string literal.
 *   @param[in] extra_styles: extra styles to be applied to graphic. These should be passed as a single string or string literal.
 */


type Props = {
    graphic_src: string,
    desc: string,
    size: Size,
    disable_inversion?: boolean,
    extra_styles?: string
}

function Graphic({ size, graphic_src, desc, disable_inversion, extra_styles }: Props) {
    return (
        <div className={`graphic ${size} ${extra_styles ?? ''}`}>
            <img className={`${disable_inversion === undefined? 'invert' : ''}`} src={require('./../../../assets' + graphic_src)} alt={desc} />
        </div>
    )
}

export default memo(Graphic)