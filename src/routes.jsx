import Main from "./Views/Calibrations/Main";
import Main2 from "./Views/Calibrations/Main2";

import { IoMdSpeedometer } from "react-icons/io";



const routes = [
    {
        path:'/calibrations',
        name:'Calibraciones',
        icon:<IoMdSpeedometer />,
        component:<Main />,
        type:'menu',
        user:'admin',
        department:'tecnico'
    },
    {
        path:'/calibrations2',
        name:'Calibraciones',
        icon:<IoMdSpeedometer />,
        component:<Main2 />,
        type:'menu',
        user:'admin',
        department:'tecnico'
    },
]

export { routes }