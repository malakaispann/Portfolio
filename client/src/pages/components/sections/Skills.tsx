// Images
import { ReactComponent as AssemblyLogo } from '../../../assets/logos/assembly.svg';
import { ReactComponent as BashLogo } from '../../../assets/logos/bash-icon.svg';
import { ReactComponent as CppLogo } from '../../../assets/logos/cpp-icon.svg';
import { ReactComponent as CSSLogo } from '../../../assets/logos/css-icon.svg';
import { ReactComponent as DaskLogo } from '../../../assets/logos/dask-icon.svg';
import { ReactComponent as DockerLogo } from '../../../assets/logos/docker-icon.svg';
import { ReactComponent as FlaskLogo } from '../../../assets/logos/flask-icon.svg';
import { ReactComponent as GitLogo } from '../../../assets/logos/git-icon.svg';
import { ReactComponent as GolangLogo } from '../../../assets/logos/golang-icon.svg';
import { ReactComponent as HTMLLogo } from '../../../assets/logos/html-icon.svg';
import { ReactComponent as JavaLogo } from '../../../assets/logos/java-icon.svg';
import { ReactComponent as JSLogo } from '../../../assets/logos/javascript-icon.svg';
import { ReactComponent as NodeJsLogo } from '../../../assets/logos/nodejs-icon.svg';
import { ReactComponent as NumpyLogo } from '../../../assets/logos/numpy-icon.svg';
import { ReactComponent as OpenCVLogo } from '../../../assets/logos/open-cv-icon.svg';
import { ReactComponent as PandasLogo } from '../../../assets/logos/pandas-icon.svg';
import { ReactComponent as PythonLogo } from '../../../assets/logos/python-icon.svg';
import { ReactComponent as ReactLogo } from '../../../assets/logos/react-icon.svg';
import { ReactComponent as RustLogo } from '../../../assets/logos/rust-icon.svg';
import { ReactComponent as SassLogo } from '../../../assets/logos/sass-icon.svg';
import { ReactComponent as SpringLogo } from "../../../assets/logos/spring-icon.svg";
import { ReactComponent as TailwindLogo } from '../../../assets/logos/tailwind-icon.svg';
import { ReactComponent as TSLogo } from '../../../assets/logos/typescript-icon.svg';
import { ReactComponent as ZigLogo } from '../../../assets/logos/zig-icon.svg';

const Skills = () => {
  
    return (
        <div>
            <div className='paragraph skills'>
                <p> Some of the (pseudo-) programming languages I've worked with:</p>
                <ul className='logos'>
                    <li>
                        <CppLogo/>
                    C++
                    </li>

                    <li>
                        <JavaLogo/>
                    Java
                    </li>

                    <li> 
                        <PythonLogo/> 
                    Python
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
                        <ZigLogo/>
                    Zig
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
                        <RustLogo />
                    Rust
                    </li>

                    <li>
                        <GolangLogo />
                    Go
                    </li>

                    <li>
                        <BashLogo />
                    Bash
                    </li>
                    <li>
                        <AssemblyLogo/>
                    Assembly
                    </li>
                </ul>
            </div>

            <div className='paragraph skills'>
                <p> Some of the frameworks and tools I enjoy using:</p>
                <ul className='logos'>
                    <li>
                        <GitLogo/>
                    Git
                    </li>

                    <li>
                        <DaskLogo />
                    Dask
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
                        <NumpyLogo />
                    Numpy
                    </li>

                    <li>
                        <OpenCVLogo />
                    OpenCV
                    </li>

                    <li>
                        <PandasLogo />
                    Pandas
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
                        <SpringLogo />
                    Spring
                    </li>

                    <li>
                        <TailwindLogo />
                    Tailwind
                    </li>
                </ul>
            </div>
        </div>
        
    )
}


export default Skills