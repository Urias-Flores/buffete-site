import { Link } from "@remix-run/react"

export default function WhatsappButton(){
    return (
        <Link className='whatsapp_icon' to='https://wa.me/50499929385'>
            <img src="/images/whatsapp.svg" alt="icon" className="icon_image"/>
        </Link>
    )
}