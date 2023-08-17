import { memo, useEffect } from 'react';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Opening from './components/sections/Opening';
import Contact from './components/sections/Contact';

const Main = () =>  {

    var sections = [ 'opening', 'about' , 'projects', 'contact'];


    // update 'current'/active section hyperlink styling
    useEffect( () => {

        const highlightHyperlink = (entries: Array<IntersectionObserverEntry>) => {

            const removePrevActive = () => {
                // get last active section and remove styling.
                let prevActive = document.querySelector('.active');
                prevActive?.classList.remove('active');
            }
            entries.forEach( (entry) => {
                
                // set section as active. Remove any other active sections.
                if (entry.isIntersecting ){

                    if (entry.target.id === 'opening' ){
                        removePrevActive(); 
                    }
                    else {
                        let sectionLink = document.getElementById(`${entry.target.id}Link`);
                        // avoid unnecessary modifications.
                        if (!sectionLink?.classList.contains('active')){
                            removePrevActive();

                            // apply new active section styling.
                            sectionLink?.classList.add('active');
                        }
                    } 
                }
            });
        };

        let styleIO = new IntersectionObserver(highlightHyperlink, { threshold : .5 });
        sections.forEach ( section => {
            styleIO.observe(document.getElementById(`${section}`) as Element);
        });
        return ( () => { sections.forEach ( section => { styleIO.unobserve(document.getElementById(`${section}`) as Element) }) })
    });

    // dynamic-load animations
    useEffect( () => {
        const runLoadAnimation = (entries: Array<IntersectionObserverEntry>) => {
            entries.forEach( (entry, index) => {

                if (entry.isIntersecting){

                    // run animations on sections higher than current sections
                    for (let i=0; i< index; i++){
                        let higherSection = entries[i].target;
                        if (! higherSection.classList.contains('run')){
                            higherSection.classList.add('run');
                        }
                    }

                    entry.target.classList.add('run');
                }
            });
        }

        let animationIO = new IntersectionObserver(runLoadAnimation, { threshold : .3 })
        sections.forEach ( section => {
            animationIO.observe(document.getElementById(`${section}`) as Element);
        });
        return (() => { sections.forEach( section => { animationIO.unobserve(document.getElementById(`${section}`) as Element) }) } )
    })

    // add small shadow to give header 'separation' effect and display 'scroll to top' widget. 
    useEffect( () => {
        let highestPos = document.getElementById('opening')?.offsetTop;
        const setHeaderShadow = () => {
            let currPos = window.pageYOffset;
            let header = document.getElementById('Header');

            if ( highestPos && (currPos >= highestPos)){

                if ( header && (!header.classList.contains('shadow'))){
                    header.classList.add('shadow');
                }
            } else {

                if ( header && (header.classList.contains('shadow'))){
                    header.classList.remove('shadow');
                }
            }
        };

        window.addEventListener('scroll', setHeaderShadow);
        return ( () => window.removeEventListener('scroll', setHeaderShadow)); 
    });



    return (
        <div className='content-container' id='PageContent'>
            <Opening/>

            <About />

            <Projects/>

            <Contact/>
        </div>
    )
}

export default memo(Main)