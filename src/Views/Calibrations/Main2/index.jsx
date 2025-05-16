// app/dashboard/page.tsx (o donde residirá tu dashboard)
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
} from "lucide-react"; // Iconos de Lucide

// Datos de ejemplo (reemplazar con datos reales o de tu API)
const equiposEnProceso = [
  { id: "EQ-001", nombre: "Multímetro Digital XYZ", cliente: "Industrias ACME", fechaIngreso: "2023-10-20", estado: "En Calibración", tecnico: "Ana Pérez" },
  { id: "EQ-002", nombre: "Termómetro Infrarrojo FLK", cliente: "Lab. Beta", fechaIngreso: "2023-10-22", estado: "Pendiente Asignación", tecnico: "-" },
  { id: "EQ-003", nombre: "Balanza Analítica MTR", cliente: "Farma S.A.", fechaIngreso: "2023-10-19", estado: "Embalaje", tecnico: "Luis Gómez" },
];

const solicitudesPendientes = [
  { id: "SOL-001", cliente: "Tecno Avanzada", equipos: "2x Osciloscopio, 1x Generador", fechaSolicitud: "2023-10-23", estado: "Nueva" },
  { id: "SOL-002", cliente: "Construcciones Alfa", equipos: "1x Nivel Láser", fechaSolicitud: "2023-10-21", estado: "En Revisión" },
];

const historialCalibraciones = [
  { id: "OS-2023-098", equipoId: "EQ-000", nombreEquipo: "Manómetro Patrón", cliente: "Servicios Precisos", fechaFin: "2023-10-15", resultado: "Conforme" },
  { id: "OS-2023-097", equipoId: "EQ-00X", nombreEquipo: "Pesa de 1kg", cliente: "Industrias ACME", fechaFin: "2023-10-12", resultado: "No Conforme" },
];


export default function DashboardPage() {
  // Aquí iría la lógica para abrir los modales, por ejemplo, usando un estado
  // const [selectedItem, setSelectedItem] = useState<any>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleOpenModal = (item: any) => { setSelectedItem(item); setIsModalOpen(true); }

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      {/* Header Principal */}
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-4">
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6" /> {/* O tu logo */}
          <h1 className="text-xl font-semibold">Laboratorio de Calibraciones</h1>
        </div>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar equipo, O.S., cliente..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col">
                <span>EQ-001 ha pasado a Embalaje.</span>
                <span className="text-xs text-muted-foreground">Hace 5 minutos</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col">
                <span>Nueva solicitud SOL-003 recibida.</span>
                <span className="text-xs text-muted-foreground">Hace 1 hora</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center text-sm text-muted-foreground">
              Ver todas las notificaciones
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Configuración</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 space-y-6">
        {/* Sección de Acciones Rápidas (Opcional) */}
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Dashboard</h2>
            <div className="ml-auto flex items-center gap-2">
                <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" /> Filtros Globales
                </Button>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Nueva Solicitud
                </Button>
            </div>
        </div>

        {/* Tarjeta 1: Equipos en Proceso */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Equipos en Proceso de Calibración
              </CardTitle>
              <CardDescription>
                Equipos actualmente en alguna etapa del flujo de calibración.
              </CardDescription>
            </div>
            <Input placeholder="Filtrar equipos..." className="max-w-xs" />
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Equipo</TableHead>
                  <TableHead>Nombre Equipo</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Fecha Ingreso</TableHead>
                  <TableHead>Estado Actual</TableHead>
                  <TableHead>Técnico</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equiposEnProceso.map((equipo) => (
                  <TableRow key={equipo.id} className="cursor-pointer hover:bg-muted/50" onClick={() => alert(`Abrir modal para ${equipo.id}`)}>
                    <TableCell className="font-medium">{equipo.id}</TableCell>
                    <TableCell>{equipo.nombre}</TableCell>
                    <TableCell>{equipo.cliente}</TableCell>
                    <TableCell>{equipo.fechaIngreso}</TableCell>
                    <TableCell>
                      <Badge variant={
                        equipo.estado === "En Calibración" ? "default" :
                        equipo.estado === "Pendiente Asignación" ? "secondary" :
                        "outline"
                      }>{equipo.estado}</Badge>
                    </TableCell>
                    <TableCell>{equipo.tecnico}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={(e) => {e.stopPropagation(); alert(`Ver detalles ${equipo.id}`)}}>Ver Detalles</DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => {e.stopPropagation(); alert(`Asignar técnico ${equipo.id}`)}}>Asignar Técnico</DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => {e.stopPropagation(); alert(`Notificar cliente ${equipo.id}`)}}>Notificar Cliente</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Mostrando {equiposEnProceso.length} equipos en proceso.
          </CardFooter>
        </Card>

        {/* Tarjeta 2: Solicitudes de Calibración */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-primary" />
                Solicitudes de Calibración Pendientes
              </CardTitle>
              <CardDescription>
                Nuevas solicitudes de clientes esperando aprobación y asignación.
              </CardDescription>
            </div>
             <Input placeholder="Filtrar solicitudes..." className="max-w-xs" />
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Solicitud</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Equipo(s)</TableHead>
                  <TableHead>Fecha Solicitud</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {solicitudesPendientes.map((solicitud) => (
                  <TableRow key={solicitud.id} className="cursor-pointer hover:bg-muted/50" onClick={() => alert(`Abrir modal para ${solicitud.id}`)}>
                    <TableCell className="font-medium">{solicitud.id}</TableCell>
                    <TableCell>{solicitud.cliente}</TableCell>
                    <TableCell className="max-w-xs truncate">{solicitud.equipos}</TableCell>
                    <TableCell>{solicitud.fechaSolicitud}</TableCell>
                    <TableCell>
                      <Badge variant={solicitud.estado === "Nueva" ? "destructive" : "outline"}>
                        {solicitud.estado}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={(e) => {e.stopPropagation(); alert(`Ver detalles ${solicitud.id}`)}}>Ver Detalles</DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => {e.stopPropagation(); alert(`Aceptar ${solicitud.id}`)}}>Aceptar Solicitud</DropdownMenuItem>
                          <DropdownMenuItem onClick={(e) => {e.stopPropagation(); alert(`Rechazar ${solicitud.id}`)}} className="text-red-600">Rechazar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
           <CardFooter className="text-xs text-muted-foreground">
            Mostrando {solicitudesPendientes.length} solicitudes pendientes.
          </CardFooter>
        </Card>

        {/* Tarjeta 3: Bitácora de Calibraciones Pasadas */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5 text-primary" />
                Historial de Calibraciones
              </CardTitle>
              <CardDescription>
                Registro de todas las calibraciones completadas.
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <Input placeholder="Buscar en historial..." className="max-w-xs" />
                {/* Aquí podrías agregar un DatePickerRange de Shadcn para filtrar por fechas */}
                <Button variant="outline" size="icon"><CalendarDays className="h-4 w-4" /></Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Calibración/O.S.</TableHead>
                  <TableHead>ID Equipo</TableHead>
                  <TableHead>Nombre Equipo</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Fecha Fin</TableHead>
                  <TableHead>Resultado</TableHead>
                  <TableHead className="text-right">Certificado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {historialCalibraciones.map((item) => (
                  <TableRow key={item.id} className="cursor-pointer hover:bg-muted/50" onClick={() => alert(`Abrir modal para ${item.id}`)}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.equipoId}</TableCell>
                    <TableCell>{item.nombreEquipo}</TableCell>
                    <TableCell>{item.cliente}</TableCell>
                    <TableCell>{item.fechaFin}</TableCell>
                    <TableCell>
                      <Badge variant={item.resultado === "Conforme" ? "success" : "destructive"}>
                        {item.resultado}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" onClick={(e) => {e.stopPropagation(); alert(`Descargar certificado ${item.id}`)}}>
                        <FileText className="mr-2 h-4 w-4" /> Ver
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Mostrando {historialCalibraciones.length} registros del historial.
            {/* Aquí podrías agregar paginación si la lista es muy larga */}
          </CardFooter>
        </Card>
      </main>

      {/* Aquí iría tu componente Modal, por ejemplo:
      {isModalOpen && selectedItem && (
        <DetalleCalibracionModal
          item={selectedItem}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      */}
    </div>
  );
}
