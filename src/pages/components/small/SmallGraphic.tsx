import React from 'react'
import '../../styles/component_styles.css'

/*
    @details : Creates a small graphic when given the location and description of the image.
               Supports all formats.
    @param[in] icon_src : the relative svg file from '/src/assets' of the icon in string format.
    @param[in] desc : Description of icon for increased accessability.
*/

type Props = {
    graphic_src: string,
    desc: string
}

function SmallGraphic({ graphic_src, desc }: Props) {
    // @testing
    return (
        <div>
            <img className='icon' src={require("./../../assets" + graphic_src)} alt={desc} />
        </div>
    )
}

export default SmallGraphic