import Graphic from '../../pages/components/small/Graphic'
import { Size } from '../types'

const TestGraphic = () => {
    return (
        <div>
            <Graphic size={ Size.Small} graphic_src='/logos/In-Blue.png' desc='small logo' />
            <Graphic size={ Size.Medium} graphic_src='/logos/In-Blue.png' desc='medium logo' />
            <Graphic size={ Size.Large} graphic_src='/logos/In-Blue.png' desc='large logo' />
        </div>
    )
}

export default TestGraphic