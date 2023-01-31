import HeadCSS from '../styles/Home.module.css'
import KeioIcon from './HeaderParts/KeioIcon'
import Title from './HeaderParts/Title'
import Menu from "./Menu";

import LayOut from '../styles/layout.module.css';


export default function MyHeader(){
    const styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '24px',
          top: '28px'
        },
        bmBurgerBars: {
          background: '#ffffff' 
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
          top:'86px'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#000000',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
      
    return(
        
            
        <header className={HeadCSS.header}>
            
            <div>
                    <Title />
                    <Menu width={250} styles = {styles}/>  
                    {/* <Header id="header" siteTitle={data.site.siteMetadata?.title || `Title`}/> */}
                    {/* <main id="page-wrap"></main> */}    
            </div>           

            <div className={HeadCSS.icon}>
              <KeioIcon />
            </div>

          </header>
    )
}