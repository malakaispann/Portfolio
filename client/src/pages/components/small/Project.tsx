import React from 'react';
import Graphic from './Graphic';
import { Size } from '../../../common/types';
import HyperLink from './HyperLink';
import { LinkType } from '../../../common/types';

type Props = {    
    title: string,
    main_link: string,
    img: string,
    img_desc: string,
    tech: Array<string>,
    categories: Array<string>,
    odd: boolean,
    children?: React.ReactNode,

}

const Project = ({ title, main_link, img, img_desc, tech, categories, odd, children }: Props) => {

    return (
        <div className={`project-container ${odd ? 'odd' : 'even'}`}>
            <div className='img-desc-container'>
                <Graphic size={Size.Large} graphic_src={img} desc={img_desc} disable_inversion={true} />
                <div className='desc'>
                    <p className='subtitle'>
                        <HyperLink type={LinkType.External} to={main_link ?? 'https://github.com/malakaispann?tab=repositories'}>
                            {title}
                        </HyperLink>
                    </p>

                    {
                        // project description set in parent.
                        children
                    }
                    <div className='paragraph'>
                        <p className='categories'> Category: </p>
                        <ul > 
                            {
                                // list tech stack.
                                categories.map( ( str) => { 
                                    return <li key={str}> {str} </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='paragraph'>
                        <p className='tech-stack'> Tech Stack: </p>
                        <ul > 
                            {
                                // list tech stack.
                                tech.map( ( str) => { 
                                    return <li key={str}> {str} </li>
                                })
                            }
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Project;