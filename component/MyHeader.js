import HeadCSS from '../styles/Home.module.css'
import KeioIcon from './HeaderParts/KeioIcon'
import Title from './HeaderParts/Title'
import Menu from "./Menu";

import LayOut from '../styles/layout.module.css';


export default function MyHeader(){
    return(
            
        <header className={HeadCSS.header}>
            
            <div>
                <div className = {HeadCSS.tab}> <Title />
                    <Menu width={250}/>  
                    {/* <Header id="header" siteTitle={data.site.siteMetadata?.title || `Title`}/> */}
                    {/* <main id="page-wrap"></main> */}
                </div>
            </div>           

            <div className={HeadCSS.icon}>
              <KeioIcon />
            </div>

          </header>
    )
}