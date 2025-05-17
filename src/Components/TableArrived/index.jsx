import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FaCheckDouble } from "react-icons/fa";
import { shortDate } from "@/Utility/formatDate";

export default function TableArrived({data,onViewService}) {
  const getStatusColor = (status) => {
    return status ? 'bg-green-500' : 'bg-red-500'
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Alta': return 'bg-red-500'
      case 'Media': return 'bg-yellow-500'
      case 'Baja': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="rounded-md border">
      <Table className='border-gray-700'>
        <TableHeader className=' rounded-md bg-gray-700 border '>
          <TableRow>
            <TableHead className='text-yellow-400 '>Cliente</TableHead>
            <TableHead className='text-yellow-400 '>Equipo</TableHead>
            <TableHead className='text-yellow-400 '>Serie</TableHead>
            <TableHead className='text-yellow-400 '>Fecha de Ingreso</TableHead>
            <TableHead className='text-yellow-400 '>Condiciones del equipo</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item,index)=>(
            <TableRow 
            className="cursor-pointer hover:bg-gray-400 dark:hover:bg-muted/50 dark:text-white text-start"
            key={item._id} 
            onClick={()=>onViewService(item)}>
            <TableCell>{item.cliente}</TableCell>
            <TableCell>{item.marca} {item.modelo}</TableCell>
            <TableCell>{item.serie}</TableCell>
            <TableCell>{shortDate(item.fechaIngreso)}</TableCell>
            <TableCell><Badge className={getStatusColor(item.enciende)}>{item.enciende ? 'Enciende':'No enciende'}</Badge> <Badge className={getStatusColor(item.detecta)}>{item.detecta ? 'Detecta':'No detecta'}</Badge></TableCell>
            
          </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </div>
  )
}
