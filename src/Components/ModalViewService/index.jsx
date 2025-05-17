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
import InfoService from '@/Components/InfoService'

export function ModalViewService({ service, open, onClose  }) {
  

  if (!service) return null

  return (
    <Dialog open={open} onOpenChange={onClose} >
      <DialogContent className="sm:max-w-[800px] h-[90vh] flex flex-col dark:bg-gray-800 dark:text-gray-50 p-0 pt-4 sm:pt-2 sm:pb-0">
        <div className={`border-b dark:text-white`}>     
                <CardContent className="overflow-y-auto h-[87vh]">
                  <InfoService record={service}/>
                </CardContent>
              </div>

      </DialogContent>
    </Dialog>
  )

}
