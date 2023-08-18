import { memo } from 'react';
import TextContainer from '../small/TextContainer';
import Footer from '../large/Footer';
import Graphic from '../small/Graphic';
import { LinkType, Size } from '../../../common/types';
import HyperLink from '../small/HyperLink';

const Contact = () => {

    return (
        <div className='page-spacer' id='contact'>
            <TextContainer>
                <p className='title'> Connect With Me </p>
                <p className='paragraph'> I'm actively searching for exciting opportunities to learn or test my skills.</p>
                <p className='paragraph'> Are you looking for a passionate software engineer or just want to say hello? Shoot me a message!</p>

                <div className='info-container'>
                    <div className='contact-info'>
                        <div className='container'>
                            <a href='mailto:MalakaiSpann@gmail.com' className='general-flex'>
                                <Graphic size={Size.Medium} graphic_src='/logos/gmail.png' desc='Email' disable_inversion={true}/>
                            </a>
                            <div className='text'>
                                <p className='subtitle'> Email </p>
                                <HyperLink to='mailto:MalakaiSpann@gmail.com' type={LinkType.External}> MalakaiSpann@gmail.com</HyperLink>   
                            </div>
                        </div>
                    </div>

                    <div className='contact-info'>
                        <div className='container'>
                            <a href='https://linkedin.com/in/malakaispann' className='general-flex'>
                                <Graphic size={Size.Medium} graphic_src='/logos/in-blue.png' desc='Email' disable_inversion={true}/>
                            </a>
                            <div className='text'>
                                <p className='subtitle'> LinkedIn </p>
                                <HyperLink to='https://linkedin.com/in/malakaispann' type={LinkType.External}> Malakai Spann</HyperLink>   
                            </div>
                        </div>
                    </div>
                </div>

                <div className='resume-container'>
                    <p className='subtitle'>
                        Want this in PDF-Format? <br/> &darr;
                    </p>
                    
                    <a className='resume-link' href={process.env.PUBLIC_URL + '/Resume.pdf'}> Resume </a>
                </div>

            </TextContainer>
            <Footer />
        </div>
    )
}

export default memo(Contact)