import { useEffect, useState, memo } from 'react'
import NavMenu from '../small/NavMenu';
import ThemeSwitcher from '../small/ThemeSwitcher';
import ScrollLock from '../small/ScrollLock';


const Header = () => {

    // add mobile menu
    const [menuTrigger, setMenuTrigger] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(prevState => {
            return !prevState
        })
    }

    const blurBackground = (blur:boolean) => {
        let bg = document.getElementById('PageContent');

        if (bg != null){
            bg.style.filter = blur? 'blur(10px)' : 'blur(0)';
        }
    }

    const handleMenuToggle = () => {
        setMenuTrigger(!menuTrigger);

        blurBackground(!menuTrigger);
    }

    // revert any changes if screen size is changed from mobile to 'large' (screen width >640px).
    const [lastWidth, setLastWidth] = useState(0);
    useEffect(() => {
        let threshold = 640;

        const revertMobileChanges = () => {

            let currWidth = visualViewport?.width;

            // only run when going from mobile to larger.
            if (lastWidth <= threshold){
                // revert menu toggle and background blur to default values.
                if ( currWidth !== undefined && currWidth > threshold){
                    blurBackground(false);
                    setMenuTrigger(false);
                }
            }   
            setLastWidth(currWidth ?? 0);
        }
    
        visualViewport?.addEventListener('resize', revertMobileChanges);

        return ( () => visualViewport?.removeEventListener('resize', revertMobileChanges));
    }, [lastWidth]);
    

    // add (dis)appearing effect.
    const [toggle, setToggle] = useState<boolean | null>(null);

    useEffect(() => {

        // save last page pos; 0 on page load.
        let lastPos = window.pageYOffset;

        // only toggle header when 15 or more pixels have been scrolled.
        let threshold = 1;

        const getScrollDir = () => {
            let currPos = window.pageYOffset;
            // user scrolling down ? Don't show header.
            let showHeader = currPos > lastPos ? false : true;

            // user scrolling in a direction already detected? Don't update.
            if ( showHeader !== toggle && ( 
                (lastPos - currPos > threshold) || (currPos - lastPos > threshold)))
            {
                setToggle(showHeader);
            } else if (currPos === 0) {
                setToggle(true);
            }
            lastPos = currPos;
        };
        document.addEventListener('scroll', getScrollDir);
        // remove EL as part of cleanup
        return (() => document.removeEventListener('scroll', getScrollDir));
    }, [ toggle ]); // prevent element reloads when toggle changed.

    return (
        <div className={`header outer ${toggle? 'show' : toggle!== null ? 'hide' : ''}`} id='Header'>
            <div className='inner'>
                < div className='general-flex parent-height'>
                    <NavMenu menuTrigger={menuTrigger} extra_function={() => { blurBackground(false); setMenuTrigger(false); }}/>
                    <div className='general-flex' id='Interactables'>
                        <ThemeSwitcher />
                        <div className='menu toggle' onClick={() => { handleClick(); handleMenuToggle();  }}> 
                            {
                                !menuTrigger ?
                                    <div className='parent-height'>
                                        <div className={`x-mark graphic small invert ${clicked? 'rotateRight' : 'sideways'}`} onAnimationEnd={handleClick} />
                                    </div>
                                    :
                                    <div className='parent-height'>
                                        <div className={`x-mark graphic small invert ${clicked? 'rotateLeft' : 'straight'}`} onAnimationEnd={handleClick} />
                                        <ScrollLock />
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default memo(Header);