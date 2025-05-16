import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function ModalViewService({ service, open, onClose  }) {
  

  if (!service) return null



  return (
    <Dialog open={open} onOpenChange={onClose} >
      <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col p-0 dark:bg-gray-800 dark:text-gray-50">
        <div className={` px-6 py-4 border-b dark:text-white`}>
          <DialogHeader >
            <DialogTitle >O.S.</DialogTitle>
            <DialogTitle className="text-gray-800' dark:text-white">TITULO</DialogTitle>
            <DialogDescription>
              <div className='flex flex-row justify-between'>
                
                <CardContent className="py-4 text-center text-gray-500">
                contenido del Modal dependiendo la consulta
                </CardContent>

                

              
                  
              </div>
              
            </DialogDescription>

          </DialogHeader>
        </div>

       
      </DialogContent>
    </Dialog>
  )

}
