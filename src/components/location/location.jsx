import boutique from '../../assets/boutique.webp'
import logo from '../../assets/Xiaomi_logo.png'
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import './location.css'


export function StoreLocation(){
    const icons=[
    <a href="https://www.facebook.com/XiaomiStoreTunisieAriana"><CiFacebook style={{height:"40px",width:"40px"}}/></a>,
    
    <a href="https://www.instagram.com/XiaomiStoreTunisieAriana" target='_blank'><PiInstagramLogoLight style={{height:"40px",width:"40px"}}/></a>,
    <a href="https://api.whatsapp.com/send?phone=21622796932" target='_blank'><PiWhatsappLogoLight style={{height:"40px",width:"40px"}}/></a>,
    <a href="mailto:hedirbnms@gmail.com" target='_blank'><CiMail style={{height:"40px",width:"40px"}}/></a>,
    <a href="https://www.google.com/maps/place/Xiaomi+Store+Ariana,+27+Av.+Habib+Bourguiba,+Ariana+2080/data=!4m2!3m1!1s0x12fd3560ac4c92a1:0xd518c7ab643d839d?utm_source=mstt_1&entry=gps&g_ep=CAESBzExLjUzLjQYACD___________8BKgA%3D" target='_blank'><CiLocationOn style={{height:"40px",width:"40px"}}/></a>
    
    
    
    
    
    
    ]
    return(
    <>
    <div className='flex flex-col align-item-center'>
        <h1 style={{color:"#191919",fontSize:"50px",fontWeight:"600"}}>Où nous trouver</h1>
        
        <div className="flex flex-row gap3">
            <div>
                <img src={boutique} alt="img" style={{height:"450px",height:"450px"}}/></div>
            
        <div className='flex flex-col align-item-center gap1'>
            
        <img src={logo} alt="" style={{height:"50px",width:"50px"}}/>
            <div style={{fontWeight:"bold",fontSize:"30px"}}> Ariatech Digital Store</div>
            <div className='box'>Authorized Xiaomi Store - Ariana</div>
            <div  style={{color:"#191919CC",fontWeight:"500px"}}>27 Avenue Habib Bourguiba, 2080 Ariana</div>
           
            <div className='flex justify-center gap1' >
                {icons.map((icon)=>(icon))}
            </div>
        </div>
        </div>
        </div>
        
        
    </>)

} 