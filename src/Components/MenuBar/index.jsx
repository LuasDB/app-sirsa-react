import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../Card"
import { CiLogout } from "react-icons/ci"
import { useAuth } from './../../Context/AuthContext'
import Logo from "../Logo"


export default function MenuBar({...props}) {
  const {isMobile,company} = props
  const { user, logout} = useAuth()
  const navigate = useNavigate()
  const [isDarkMode,setIsDarkMode] = useState(false)
  useEffect(()=>{
    if(!user){
    navigate('/login')
    }
    const root = document.documentElement
    const checkDark = () => setIsDarkMode(root.classList.contains("dark"))

    checkDark(); 
    const observer = new MutationObserver(checkDark)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  },[])
  const handleLogout = ()=>{
    logout()
    navigate('/login')

  }

  return (
    
<Card className="p-2 w-[100%]">
      <div className={`${isMobile?'flex-col':' flex-row'} flex items-center justify-between w-full`}>
       
        <div className={`${isMobile?'flex-row':' flex-row'} flex items-center gap-2 dark:text-white`}>
          <Logo isDarkMode={isDarkMode}/>
          <span className={`${isMobile?'text-[12px] ':'text-xl font-semibold block ' }   text-gray-800 dark:text-white  `}>
           {company}
          </span>
        </div>

        {/* Usuario + Logout */}
        <div className={`${isMobile ? 'mt-4 flex-row justify-between w-full' : ' items-center gap-4 justify-between'} flex`}>
          <div className="text-right sm:block">
            <div className="text-[10px] font-medium text-gray-800 dark:text-white">{user.name}</div>
            <div className="text-xs text-gray-500">DEPTO. {user.department.toUpperCase()}</div>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Cerrar sesión"
          >
            <CiLogout  className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </Card>
    
    
  );
}
