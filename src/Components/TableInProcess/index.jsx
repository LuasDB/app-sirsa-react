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


export default function TableInProcess() {
  const getStatusColor = (status) => {
    return status === 'open' ? 'bg-green-500' : 'bg-gray-500'
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
          <TableHead className='text-yellow-400'>Ultima Actualización</TableHead>
            <TableHead className='text-yellow-400'>Cliente</TableHead>
            <TableHead className='text-yellow-400'>Equipo</TableHead>
            <TableHead className='text-yellow-400'>Fecha de Ingreso</TableHead>
            <TableHead className='text-yellow-400'>Estado actual</TableHead>
            <TableHead className='text-yellow-400'>Acciones</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="cursor-pointer hover:bg-gray-400 dark:hover:bg-muted/50 dark:text-white text-start" >
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
          </TableRow>
          <TableRow className="cursor-pointer hover:bg-gray-400 dark:hover:bg-muted/50 dark:text-white text-start" >
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
            <TableCell>uno</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
