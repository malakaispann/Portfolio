import { memo, useEffect } from 'react' ;
import TextContainer from './components/small/TextContainer' ;
import HyperLink from './components/small/HyperLink' ;
import { LinkType } from '../common/types' ;
import SocialFeed from './components/small/SocialFeed' ;

// Images
import { ReactComponent as BashLogo } from '../assets/logos/bash-icon.svg' ;
import { ReactComponent as CppLogo } from '../assets/logos/cpp-icon.svg' ;
import { ReactComponent as CSSLogo } from '../assets/logos/css-icon.svg' ;
import { ReactComponent as GolangLogo } from '../assets/logos/golang-icon.svg' ;
import { ReactComponent as HTMLLogo } from '../assets/logos/html-icon.svg' ;
import { ReactComponent as JavaLogo } from '../assets/logos/java-icon.svg' ;
import { ReactComponent as JSLogo } from '../assets/logos/javascript-icon.svg' ;
import { ReactComponent as PythonLogo } from '../assets/logos/python-icon.svg' ;
import { ReactComponent as RustLogo } from '../assets/logos/rust-icon.svg' ;
import { ReactComponent as TSLogo } from '../assets/logos/typescript-icon.svg' ;

import { ReactComponent as DockerLogo } from '../assets/logos/docker-icon.svg' ;
import { ReactComponent as FlaskLogo } from '../assets/logos/flask-icon.svg' ;
import { ReactComponent as GitLogo } from '../assets/logos/git-icon.svg' ;
import { ReactComponent as NodeJsLogo } from '../assets/logos/nodejs-icon.svg' ;
import { ReactComponent as SassLogo } from '../assets/logos/sass-icon.svg' ;
import { ReactComponent as ReactLogo } from '../assets/logos/react-icon.svg' ;
import { ReactComponent as TailwindLogo } from '../assets/logos/tailwind-icon.svg' ;

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

        let sections = [ 'Opening', 'About' , 'Projects'] ;
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

        let sections = ['Opening', 'About', 'Projects'] ;
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
                    <div>
                        <p id='Greeting'> Hey <span className='hand-wave'>👋🏽</span>, my name is</p>
                        <p id='Name'>Malakai Spann </p>
                        <p className='subtitle' id='Occupation1'> Developer,</p>
                        <p className='subtitle' id='Occupation2'> Expert Google Search User,</p>
                        <p className='subtitle' id='Occupation3'> Tech Enthusiast</p>

                        <p className='paragraph' id='Introduction'>
                            I'm a 4th-year Computer Science major at <HyperLink type={LinkType.External} to='https://www.fit.edu/'> Florida Tech </HyperLink> focused
                            on software development and data science. In short, I like to make and use cool stuff.
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
                <div>
                    <div className='general-flex' id='Portrait'>
                        <div className='portrait' />
                    </div>
                    <div className='title'> About Me </div>
                    <div className='paragraph'>
                        <p>
                            I became interested in the world of software in 2012 after finding a modding forum for Fallout New Vegas.
                            Since then, I've continued learning all software has to teach with the same curiosity that initially roped me in.
                        </p>
                    </div>
                    <div className='paragraph'>
                        <p>
                            Currently, I'm designing, developing, and testing safety-critical software at a 
                            <HyperLink type={LinkType.External} to='https://www.lockheedmartin.com/en-us/who-we-are.html'> world-renowned Aerospace and Defense corporation.</HyperLink>
                        </p>
                    </div>
                    <div className='paragraph'>
                        <p>
                            When I'm not working, I can usually be found hacking away at the mountain of 
                            <HyperLink type={LinkType.Internal} to='/#projects' > personal projects</HyperLink> I've started, playing video games, 
                            re-watching the same 10 movies/tv shows I always watch, or refilling my cup of coffee.
                        </p>
                    </div>
                    <div id='Interests'>
                        <div className='subtitle'>
                            <p>Current Interests:</p>
                        </div>
                        <div className='paragraph'>
                            <p className='indent italic'> application development (full-stack), artificial intelligence, information assurance</p>
                        </div>
                        <div className='paragraph'>
                            <p> Some of the (pseudo-) programming languages I've worked with:</p>
                            <ul>
                                <li>
                                    <CppLogo/>
                                    C++
                                </li>
                                
                                <li>
                                    <RustLogo />
                                    Rust
                                </li>

                                <li> 
                                    <PythonLogo/> 
                                    Python
                                </li>

                                <li>
                                    <JavaLogo/>
                                    Java
                                </li>

                                <li>
                                    <HTMLLogo/>
                                    HTML
                                </li>

                                <li>
                                    <CSSLogo />
                                    CSS
                                </li>

                                <li>
                                    <JSLogo/>
                                    JavaScript
                                </li>

                                <li>
                                    <TSLogo/>
                                    TypeScript
                                </li>

                                <li>
                                    <GolangLogo />
                                    Go
                                </li>

                                <li>
                                    <BashLogo />
                                    Bash
                                </li>
                            </ul>
                        </div>

                        <div className='paragraph'>
                            <p> Some of the frameworks/other tech I enjoy using:</p>
                            <ul>
                                <li>
                                    <GitLogo/>
                                    Github/lab
                                </li>


                                <li>
                                    <DockerLogo/>
                                    Docker
                                </li>

                                <li>
                                    <FlaskLogo />
                                    Flask
                                </li>

                                <li>
                                    <NodeJsLogo />
                                    NodeJS
                                </li>
                                 
                                <li>
                                    <ReactLogo/>
                                    React ( + Native)
                                </li>

                                <li>
                                    <SassLogo />
                                    Sass
                                </li>

                                <li>
                                    <TailwindLogo />
                                    Tailwind
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </TextContainer>



            <TextContainer id='Projects'>

            </TextContainer>


        </div>
    )
}

export default memo(Main)