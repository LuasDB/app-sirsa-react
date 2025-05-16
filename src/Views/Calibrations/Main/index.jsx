import { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SupportTicketForm } from '@/Components/SupportTicketForm'
import { TableTicketsClient } from '@/Components/TableTicketsClient'
import { ModalViewTicket } from '@/Components/ModalViewTicket'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    FileText,
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


export default function Main(){

    return (
        <div className='contairner mx-auto space-y-2'>
            
            <Toaster />
            <Tabs defaultValue="arribos" >
            <header className='flex flex-row items-center justify-center gap-8 mb-4'>
            <Settings className="h-5 w-5" /><p>Laboratorio de calibraciones</p>
            </header>
            
                <TabsList className='p-2 bg-gray-50 dark:bg-gray-800 justify-around gap-8'>
                    <TabsTrigger value="arribos" className='data-[state=active]:bg-indigo-600 data-[state=active]:text-white hover:bg-indigo-700 hover:text-white'>Arribos</TabsTrigger>
                    <TabsTrigger value="calibracion" className='data-[state=active]:bg-indigo-600 data-[state=active]:text-white hover:bg-indigo-700 hover:text-white'>En proceso</TabsTrigger>
                    <TabsTrigger value="historico" className='data-[state=active]:bg-indigo-600 data-[state=active]:text-white hover:bg-indigo-700 hover:text-white'>Historico</TabsTrigger>
                </TabsList>
                <TabsContent value="arribos">Aqui va los arribos</TabsContent>
                <TabsContent value="calibracion">Aqui van las calibraciones</TabsContent>
                <TabsContent value="historico">Aqui van los historicos</TabsContent>
            </Tabs>
            
        </div>
    )
}