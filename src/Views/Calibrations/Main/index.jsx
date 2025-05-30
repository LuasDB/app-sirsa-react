import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ModalViewService } from '@/Components/ModalViewService'
import { Input } from '@/components/ui/input'
import TableArrived from '@/Components/TableArrived'
import TableInProcess from '@/Components/TableInProcess'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import {
    FileText,
    CirclePlus,
    MoreHorizontal,
    PlusCircle,
    Search,
    Settings,
    User,
    Bell,
    Truck,
    ClipboardList,
    History,
    Filter,
    CalendarDays,
  } from "lucide-react";
import { Toaster,toast } from 'sonner'
import { useAuth } from '@/Context/AuthContext'
import { useMediaQuery } from 'react-responsive'
import { useGetServices } from '@/Hooks/useGetServices.js'
import { Button } from '@/components/ui/button'
import InfoService from '@/Components/InfoService'
import FormNewRegister from '@/Components/FormNewRegister'



export default function Main(){

    const [searchTerm,setSearchTerm] = useState(null)
    const [selectedService,setSelectedService] = useState(null)
    const [section,setSection] = useState('arrived')
    const [isModalOpen,setIsModalOpen]=useState(false)
    const { services,loading } = useGetServices({service:'all',year:`${new Date().getFullYear()}`})
    
    const constentSections = {
        newRegister:<FormNewRegister register={null}/>,
        arrived: <InfoService record={selectedService}/>
    }

    return (
        <div className='contairner mx-auto space-y-2 '>
            <Toaster />

            {loading ? (
                <Box className='w-full h-screen flex justify-center '>
                    <CircularProgress />
                </Box>) 
                : (
                <Tabs defaultValue="arribos" >
            
            
            <TabsList className='p-2 bg-gray-50 dark:bg-gray-800 justify-around gap-8'>
                <TabsTrigger value="arribos" className='data-[state=active]:bg-gray-600 data-[state=active]:text-yellow-400 hover:bg-gray-700 hover:text-yellow-400'>Arribos</TabsTrigger>
                <TabsTrigger value="calibracion" className='data-[state=active]:bg-gray-600 data-[state=active]:text-yellow-400 hover:bg-gray-700 hover:text-yellow-400'>En proceso</TabsTrigger>
                <TabsTrigger value="historico" className='data-[state=active]:bg-gray-600 data-[state=active]:text-yellow-400 hover:bg-gray-700 hover:text-yellow-400'>Historico</TabsTrigger>
            </TabsList>

            <TabsContent value="arribos" className="space-y-4">
                <Card className='dark:bg-gray-800'>
                    <div className="flex gap-2 m-2">
                        <Input 
                        placeholder="Buscar en arribos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm ml-auto"
                        />
                    </div>
                    <div className='w-full relative mt-4'>
                        <Button className='absolute right-4 text bg-gray-600'
                            onClick={()=>{
                                setSection('newRegister')
                                setIsModalOpen(true)
                                }}>
                            <CirclePlus /> Nuevo registro
                        </Button>

                        </div>
                    <CardHeader className="flex flex-col items-center md:items-start justify-between ">
                       
                        <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-white mt-7">
                            <ClipboardList />
                            Solicitudes de Calibración Pendientes
                        </CardTitle>
                        <CardDescription>
                            Equipos actualmente se encuentran en espera de una orden de servicio.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TableArrived 
                            data={services.filter(service=>service.stage === 'Arribo')}
                            onViewService={(service)=>{
                                setSelectedService(service)
                                setSection('arrived')
                                setIsModalOpen(true)}}
                        />
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="calibracion">              
                <Card className='dark:bg-gray-800'>
                    <div className="flex gap-2 m-2">
                        <Input 
                        placeholder="Buscar en calibraciones..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm ml-auto"
                        />
                    </div>
                    <CardHeader className="flex flex-col items-center md:items-start justify-between">
                        <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-white">
                            <ClipboardList />
                            Solicitudes de Calibración Pendientes
                        </CardTitle>
                        <CardDescription>
                            Equipos actualmente en alguna etapa del flujo de calibración.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TableInProcess />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="historico">Aqui van los historicos</TabsContent>
                </Tabs>
                )
            }
            
            
            <ModalViewService 
                open={isModalOpen}
                onClose={()=>{
                    setIsModalOpen(false)
                    }}
                section={constentSections[section]}
            />


            
        </div>
    )
}