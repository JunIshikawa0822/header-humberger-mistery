import Image from 'next/Image'
import HeadCSS from '../../styles/Home.module.css'

export default function KeioIcon(){
    return(
        <Image src = '/images/logo-KU_keio.png' width ={80} height = {60} className={HeadCSS.icon}/>
    )
}