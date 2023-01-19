import React from 'react'
import Graphic from '../../pages/components/small/Graphic'

const TestGraphic = () => {
    return (
        <div>
            <Graphic size='small' graphic_src='/logos/linkedIn_logo.svg' desc='small logo' />
            <Graphic size='medium' graphic_src='/logos/linkedIn_logo.svg' desc='medium logo' />
            <Graphic size='large' graphic_src='/logos/linkedIn_logo.svg' desc='large logo' />
        </div>
    )
}

export default TestGraphic