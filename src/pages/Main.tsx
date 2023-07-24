import { memo, useEffect } from 'react' ;
import TextContainer from './components/small/TextContainer' ;
import HyperLink from './components/small/HyperLink' ;
import { LinkType } from '../common/types' ;
import SocialFeed from './components/small/SocialFeed' ;


const Main = () =>  {

    // update 'current'/active section hyperlink styling
    useEffect( () => {

        const highlightHyperlink = (entries: Array<IntersectionObserverEntry>) => {

            const removePrevActive = () => {
                // get last active section and remove styling.
                let prevActive = document.querySelector('.active') ;
                prevActive?.classList.remove('active') ;
            }
            entries.forEach( (entry) => {
                
                // set section as active. Remove any other active sections.
                if (entry.isIntersecting ){

                    if (entry.target.id === 'Opening' ){
                        removePrevActive() ; 
                    }
                    else {
                        let sectionLink = document.getElementById(`${entry.target.id}Link`) ;

                        // avoid unnecessary modifications.
                        if (!sectionLink?.classList.contains('active')){
                            removePrevActive() ;

                            // apply new active section styling.
                            sectionLink?.classList.add('active') ;
                        }
                    } 
                }
            }) ;

        } ;

        let sections = [ 'Opening', 'About' , 'Experience'] ;
        let styleIO = new IntersectionObserver(highlightHyperlink, { threshold : .5 }) ;


        sections.forEach ( section => {
            styleIO.observe(document.getElementById(`${section}`) as Element) ;
        }) ;

        return ( () => { sections.forEach ( section => { styleIO.unobserve(document.getElementById(`${section}`) as Element) }) })
    }) ;

    // dynamic-load animations
    useEffect( () => {
        
        const runLoadAnimation = (entries: Array<IntersectionObserverEntry>) => {

            entries.forEach( (entry, index) => {

                if (entry.isIntersecting){

                    // run animations on sections higher than current sections
                    for (let i=0 ; i< index ; i++){
                        let higherSection = entries[i].target ;
                        if (! higherSection.classList.contains('run')){
                            higherSection.classList.add('run') ;
                        }
                    }

                    entry.target.classList.add('run') ;
                }
            }) ;

        }

        let sections = ['Opening', 'About', 'Experience'] ;
        let animationIO = new IntersectionObserver(runLoadAnimation, { threshold : .3 })

        sections.forEach ( section => {
            animationIO.observe(document.getElementById(`${section}`) as Element) ;
        }) ;

        return (() => { sections.forEach( section => { animationIO.unobserve(document.getElementById(`${section}`) as Element) }) } )
    })

    // add small shadow to give header 'separation' effect and display 'scroll to top' widget. 
    useEffect( () => {

        let highestPos = document.getElementById('Opening')?.offsetTop ;
        
        const setHeaderShadow = () => {

            let currPos = window.pageYOffset ;
            let header = document.getElementById('Header') ;

            if ( highestPos && (currPos >= highestPos)){

                if ( header && (!header.classList.contains('shadow'))){
                    header.classList.add('shadow') ;
                }
            } else {

                if ( header && (header.classList.contains('shadow'))){
                    header.classList.remove('shadow') ;
                }
            }
        } ;

        window.addEventListener("scroll", setHeaderShadow) ;
        return ( () => window.removeEventListener("scroll", setHeaderShadow)) ; 
    }) ;


    return (
        <div className='content-container' id='PageContent'>
            
            <div className='page-spacer' >
                <TextContainer id='Opening'>
                    <div className='general-flex' id='Portrait'>
                        <div className='portrait' />
                    </div>
                    <div>
                        <p id='Greeting'> Hey <span className='hand-wave'>👋🏽</span>, my name is</p>
                        <p id='Name'>Malakai Spann </p>
                        <p className='subtitle' id='Occupation1'> Developer,</p>
                        <p className='subtitle' id='Occupation2'> Expert Google Search User,</p>
                        <p className='subtitle' id='Occupation3'> Tech Enthusiast</p>

                        <p className='paragraph' id='Introduction'>
                            I'm a 4th-year Computer Science major at <HyperLink type={LinkType.External} to='https://www.fit.edu/'> Florida Tech </HyperLink> focused
                            on software development and data science. In short, I like to use and make cool stuff.
                        </p>

                        <div className='list' id='Graduation-Date'>
                            <p className='date'> Dec 2023 </p>
                            <p className='desc'> Graduation : B.S. Computer Science </p>
                        </div>

                        <SocialFeed />
                    </div>
                </TextContainer>
            </div>

            <TextContainer id="About">
                <div className='title'> About Me </div>
                <div className='paragraph'>
                    <p>
                        Strangely enough, my interest in computing started around 2007 when I was gifted my first game system.
                        I enjoyed researching game mechanics, testing new builds, competing with friends, and taking on 
                        challenging objectives. The possibilities were only as limited as my resolve. It wasn't long before my 
                        fascination with games extended to the devices that enabled me to play them and I became captivated by 
                        the world of computing.
                    </p>
                </div>
                <div className='paragraph'>
                    <p>
                        Since then, I've continued chasing my passion by learning software development. I've gained professional 
                        experience designing, developing, and testing secure software and communicating with clients, teams, and users working for a
                        <HyperLink type={LinkType.External} to='https://www.lockheedmartin.com/en-us/who-we-are.html' > 
                            world-renowned Aerospace and Defense corporation.
                        </HyperLink>
                    </p>
                </div>
                <div id='Interests'>
                    <div className='subtitle'>
                        <p>Current Interests:</p>
                    </div>

                    <div className='paragraph '>
                        <p className='indent italic'> application development (full-stack), artificial intelligence, information assurance</p>
                    </div>
                </div>
            </TextContainer>

            <TextContainer id='Experience' >
                <p className='title'> Professional Experience</p>
                <div className='list'>
                    <p className='date'> 2022 - 2023</p>
                    <div className='desc'> <p>Software Engineer Intern @ Lockheed Martin. Duties included:</p>
                        <ul className='sublist'> 
                            <li> designing and implementing software for safety-critical systems </li>
                            <li> testing software using simulation environments </li>
                            <li> generating software artifacts for requirement verification</li>
                            <li> collaborating with internal groups to develop complete systems </li>
                            <li> communicating tasks, challenges, and progress to stakeholders on a regular basis</li>
                        </ul>
                    </div>
                </div>

                <div className='paragraph italic'>
                    <p>* Check out my <HyperLink type={LinkType.Internal} to='/projects'> 
                    projects page </HyperLink> for what I've been doing in the meantime. </p>
                </div>

            </TextContainer>

        </div>
    )
}

export default memo(Main)