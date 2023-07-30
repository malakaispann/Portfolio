import SocialIcon from "./SocialIcon" ;

const SocialFeed = () => {
    return (
        <div className='socials' id='Socials'>
            <SocialIcon link='https://github.com/KayDVC' link_text='@KayDVC' graphic_src='/logos/github-mark.png' graphic_desc='Link to my Github account.' keep_invert={true}/>
            <SocialIcon link='mailto:MalakaiSpann@gmail.com' link_text='MalakaiSpann@gmail.com' graphic_src='/logos/gmail.png' graphic_desc='Link to my email.'/>
            <SocialIcon link='https://linkedin.com/in/malakaispann' link_text='Malakai Spann' graphic_src='/logos/In-Blue.png' graphic_desc='Link to my LinkedIn account.'/>
        </div>
    )
}

export default SocialFeed ;