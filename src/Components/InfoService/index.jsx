import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Briefcase,
  Tag,
  ScanSearch,
  Info,
  CalendarClock,
  Workflow,
  Power,
  CheckCircle2,
  XCircle,
  UserCircle,
  Mail,
  ShieldCheck,
  Building2,
  Fingerprint,
  Wrench,
  PackageOpen,
  Thermometer,
  Layers,
  Radiation,ClipboardList,LogIn ,LogOut,TriangleAlert,UserRoundPen 
} from "lucide-react";
import ActionButton from "../ActionButton";
// Componente auxiliar para mostrar cada ítem de detalle
const DetailItem = ({
  icon,
  label,
  value,
  isBadge = false,
  badgeVariant = "secondary",
}) => (
  <div className="grid grid-cols-[auto_1fr] items-start gap-x-3 py-2.5">
    <div className="flex items-center justify-center text-sm text-muted-foreground pt-0.5 ">
      {icon && <span className="mr-4 h-4 w-4">{icon}</span>}
      <span className="font-medium">{label}:</span>
    </div>
    {isBadge && typeof value === 'string' ? (
      <Badge variant={badgeVariant} className="w-fit text-xs sm:text-sm px-2.5 py-0.5">
        {value}
      </Badge>
    ) : (
      <div className="text-sm break-words">{value}</div>
    )}
  </div>
);

export default function InfoService({
  record

}) {
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error("Error al formatear fecha:", error);
      return "Fecha inválida";
    }
  };

  const booleanToVisual = (value) => (
    <div className="flex items-center">
      {value ? (
        <CheckCircle2 className="h-4 w-4 mr-1.5 text-green-500 dark:text-green-400" />
      ) : (
        <XCircle className="h-4 w-4 mr-1.5 text-red-500 dark:text-red-400" />
      )}
      {value ? "Sí" : "No"}
    </div>
  );

  const getStageBadgeVariant = (stage) => {
    if (!stage) return "secondary";
    switch (stage.toLowerCase()) {
      case "arribo": return "success";
      case "calibración": return "success";
      case "enviado": return "success";
      default: return "success";
    }
  };

  const getStatusBadgeVariant = (status) => {
    if (!status) return "default";
    switch (status.toLowerCase()) {
      case "open": return "success"; // Asume que tienes una variante 'success' (verde)
      case "closed": return "outline";
      case "pending": return "secondary";
      default: return "default";
    }
  };
  const registradoPor = record.registradoPor || {};
  




return (
    <section className="w-full h-full flex flex-col">
      <div className="">
        <SheetHeader className="mb-6 text-left ">
          <SheetTitle className="text-xl flex items-center dark:text-white">
            <Fingerprint className="mr-2 h-5 w-5 text-primary dark:text-white" />
            Detalles del Registro
          </SheetTitle>
          <SheetDescription>ID: {record._id || "N/A"}</SheetDescription>
        </SheetHeader>
      </div>
  
      {/* Contenedor con scroll */}
      <div className="flex-1 overflow-y-auto w-full">
        <div className="space-y-1">
            <div className="space-y-1">
                {/* Sección Cliente */}
                <h3 className="text-md font-semibold mt-4 mb-1 flex items-center text-primary dark:text-primary-foreground/90 text-yellow-500">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Información del Cliente
                </h3>
                <DetailItem label="Cliente" value={record.cliente || "N/A"} />
                <Separator className="my-3 bg-yellow-400" />

                {/* Sección Equipo Principal */}
                <h3 className="text-yellow-500 text-md font-semibold mt-3 mb-1 flex items-center text-primary dark:text-primary-foreground/90">
                    <Tag className="mr-2 h-4 w-4" />
                    Equipo
                </h3>
                <DetailItem label="Marca" value={record.marca || "N/A"} />
                <DetailItem label="Modelo" value={record.modelo || "N/A"} />
                <DetailItem label="Serie" value={record.serie || "N/A"} />
                <DetailItem label="Tipo" value={record.tipo || "N/A"} icon={<Layers />} />
                <DetailItem label="Unidades" value={record.unidadesEquipo || "N/A"} icon={<Thermometer />} />
                <Separator className="my-3 bg-yellow-400" />

                {/* Sección Detector (Condicional) */}
                {(record.marcaDetector || record.modeloDetector || record.serieDetector || record.tipoDetector) && (
                    <>
                    <h3 className="text-yellow-500 text-md font-semibold mt-3 mb-1 flex items-center text-primary dark:text-primary-foreground/90">
                        <ScanSearch className="mr-2 h-4 w-4" />
                        Detector
                    </h3>
                    {record.marcaDetector && <DetailItem label="Marca Det." value={record.marcaDetector} />}
                    {record.modeloDetector && <DetailItem label="Modelo Det." value={record.modeloDetector} />}
                    {record.serieDetector && <DetailItem label="Serie Det." value={record.serieDetector} />}
                    {record.tipoDetector && <DetailItem label="Tipo Det." value={record.tipoDetector} icon={<Layers />} />}
                    <DetailItem label="Tipo Radiación" value={record.tipoRadiacion || "N/A"} icon={<Radiation />}/>
                    
                    <Separator className="my-3 bg-yellow-400" />
                    </>
                )}

                {/* Sección Estado y Proceso */}
                <h3 className="text-yellow-500 text-md font-semibold mt-3 mb-1 flex items-center text-primary dark:text-primary-foreground/90">
                    <Info className="mr-2 h-4 w-4" />
                    Estado y Proceso
                </h3>
                <DetailItem label="Fecha Ingreso" value={formatDate(record.fechaIngreso)} icon={<CalendarClock />} />
                <DetailItem
                    label="Etapa"
                    value={record.stage || "N/A"}
                    isBadge
                    badgeVariant={getStageBadgeVariant(record.stage)}
                    icon={<Workflow />}
                />
                <DetailItem
                    label="Estado General"
                    value={record.status || "N/A"}
                    isBadge
                    badgeVariant={getStatusBadgeVariant(record.status)}
                />
                <DetailItem label="Año" value={record.year || "N/A"} />
                <DetailItem label="Servicio" value={record.service || "N/A"} icon={<Wrench />} />
                <DetailItem label="Recibido" value={booleanToVisual(record.isArrived)} icon={<PackageOpen />} />
                <DetailItem label="Enciende" value={booleanToVisual(record.enciende)} icon={<Power />} />
                <DetailItem label="Detecta" value={booleanToVisual(record.detecta)} icon={<CheckCircle2 />} />
                <Separator className="my-3 bg-yellow-400" />

                {/* Sección Registrado Por */}
                <h3 className="text-yellow-500 text-md font-semibold mt-3 mb-1 flex items-center text-primary dark:text-primary-foreground/90">
                    <UserCircle className="mr-2 h-4 w-4" />
                    Registrado Por
                </h3>
                <DetailItem label="Nombre" value={registradoPor.name || "N/A"} />
                <DetailItem label="Email" value={registradoPor.email || "N/A"} icon={<Mail />} />   
                <DetailItem label="Departamento" value={registradoPor.department || "N/A"} icon={<Building2 />} />

                <Separator className="my-3 bg-yellow-500" />
                    <h3 className="text-md font-semibold mt-4 mb-1 flex items-center text-primary dark:text-primary-foreground/90 text-yellow-500">
                            <ClipboardList  className="mr-2 h-4 w-4" />
                            Condiciones Físicas
                        </h3>
                    {record.physicalConditions ? ( <div className="flex flex-col md:flex-row flex-grow">

                    <section className="mb-4 w-1/2">
                    <h3 className="text-md font-semibold mt-4 mb-1 flex items-center text-primary dark:text-primary-foreground/90 text-gray-500">
                        <LogIn  className="mr-2 h-4 w-4" />
                        Entrada
                    </h3>
                        {Object.entries(record?.physicalConditions?.condicionesFisicas).map(([key,value],index)=>(
                            <DetailItem 
                            key={`${index}-con`}
                            label={key} 
                            value={value.entrada || "N/A"} 
                            icon={<CheckCircle2 className={value.entrada === "En buenas condiciones"
                                ? 'text-green-500'
                                : value.entrada === "No aplica"
                                ? 'text-gray-500'
                                : 'text-orange-300'}
                                />} /> 
                        ))}
                    </section>
                    <section className="mb-4 w-1/2">
                    <h3 className="text-md font-semibold mt-4 mb-1 flex items-center text-primary dark:text-primary-foreground/90 text-gray-500">
                        <LogOut  className="mr-2 h-4 w-4" />
                        Salida
                    </h3>
                        {Object.entries(record?.physicalConditions?.condicionesFisicas).map(([key,value],index)=>(
                            <DetailItem 
                            key={`${index}-con`}
                            label={key} 
                            value={value.salida ? value.salida : 'Pendiente'} 
                            icon={<CheckCircle2 className={value.salida ? 'text-green-500': 'text-gray-500'}/>} /> 
                        ))}
                    </section>

                    </div>)
                    :(
                        <div className="flex flex-col md:flex-row flex-grow justify-center">
                        <h3 className="text-md font-semibold mt-4 mb-1 flex items-center text-primary dark:text-primary-foreground/90 text-red-500">
                                <TriangleAlert  className="mr-2 h-4 w-4" />
                                Aun no se registran condiciones físicas
                            </h3>
                        </div>         
                    )
                    }
                    <Separator className="my-3 bg-yellow-500 mb-20" />
                    <h3 className="text-md font-semibold mt-4 mb-1 flex items-center text-primary dark:text-primary-foreground/90 text-yellow-500">
                            <UserRoundPen  className="mr-2 h-4 w-4" />
                            Acciones
                        </h3>
                        <div className="flex flex-col md:flex-row md:flex-wrap space-y-2 md:space-y-0 gap-3 items-center justify-center  overflow-x-hidden">
                            <ActionButton
                            icon={CheckCircle2}
                            label="Condiciones físicas"
                            color="bg-green-100 text-green-700"
                            onClick={() => console.log('Accion')}
                            />
                            <ActionButton
                            icon={CheckCircle2}
                            label="Asignar O.S."
                            color="bg-blue-100 text-blue-700"
                            onClick={() => console.log('Accion')}
                            />
                             <ActionButton
                            icon={CheckCircle2}
                            label="Notificar cliente"
                            color="bg-orange-100 text-orange-700"
                            onClick={() => console.log('Accion')}
                            />
                            <ActionButton
                            icon={CheckCircle2}
                            label="Recepción O.S. Fisica"
                            color="bg-orange-100 text-orange-700"
                            onClick={() => console.log('Accion')}
                            />
                            <ActionButton
                            icon={CheckCircle2}
                            label="Calibrar"
                            color="bg-orange-100 text-orange-700"
                            onClick={() => console.log('Accion')}
                            />
                            <ActionButton
                            icon={CheckCircle2}
                            label="Condiciones Físicas Salida"
                            color="bg-orange-100 text-orange-700"
                            onClick={() => console.log('Accion')}
                            />
                            <ActionButton
                            icon={CheckCircle2}
                            label="Notificación Envio"
                            color="bg-orange-100 text-orange-700"
                            onClick={() => console.log('Accion')}
                            />
                        </div>
                        
                

            </div>
        </div>
      </div>
    </section>
  );
  
    
    
  
}
