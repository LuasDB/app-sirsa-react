import { ReactComponent as LogoLight } from '@/assets/logo_sirsa.svg'
import { ReactComponent as LogoDark } from '@/assets/logo_sirsa_white.svg'


export default function Logo({isDarkMode,className='h-12 w-12', color='text-black'}){
    return (
        <>
            {isDarkMode ?
            (<LogoDark  className={`${className} ${color}`}/>) 
            : 
            (<LogoLight className={`${className} ${color}`} /> )}
        </>
            
    )
}