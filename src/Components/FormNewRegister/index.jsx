import { useEffect,useState } from "react"
import CustomFormGroup from "@/Components/Utilitys/CustomFormGroup"
import Col from "@/Components/Col"
import { Button } from "@/components/ui/button"


export default function FormNewRegister({register, user}){


    const [formData, setFormData] = useState({
        cliente:'',
        marca: '',
        modelo: '',
        serie: '',
        tipo: '',
        marcaDetector: '',
        modeloDetector: '',
        serieDetector: '',
        tipoDetector: '',
        tipoRadiacion: '',
        unidadesEquipo:'',
        fechaIngreso:'',
        enciende:null,
        detecta:null,
        stage:'Arribo',
        status:'open',
        year:new Date().getFullYear(),
        isArrived:true,
        service:null,
        registradoPor:user

    })
    const [formError, setFormError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        
        if(name === 'tipoDetector' && value === 'Interno G.M.'){
            setFormData({
                ...formData,
                [name]: value,
            ['marcaDetector']:'N/D',
            ['modeloDetector']:'N/D',
            ['serieDetector']:'N/D',
        })
        }else{
            setFormData({
                ...formData,
                [name]: value,
                });
        }
        

        if (value.trim()) {
        setFormError({
            ...formError,
            [name]: false,
        });
        }

    }

    const validateForm = () => {
        const errors = {};
        Object.keys(formData).forEach((key) => {
        if (!formData[key].trim()) {
            errors[key] = true;
        }
        });
        setFormError(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit=()=>{

    }

    useEffect(()=>{
        if(register){
            setFormData({
                cliente:register.cliente,
                marca: register.marca,
                modelo: register.modelo,
                serie: register.serie,
                tipo: register.tipo,
                marcaDetector: register.marcaDetector,
                modeloDetector: register.modeloDetector,
                serieDetector: register.serieDetector,
                tipoDetector: register.tipoDetector,
                tipoRadiacion: register.tipoRadiacion,
                unidadesEquipo:register.unidadesEquipo,
                fechaIngreso:register.fechaIngreso,
                enciende:register.enciende,
                detecta:register.detecta,
                stage:register.stage,
                status:register.status,
                year:register.year,
                isArrived:register.isArrived,
                service:register.service,
                registradoPor:register?.registradoPor || null
                }
            )
        }else{
            setFormData(
                {
                    cliente:'',
                    marca: '',
                    modelo: '',
                    serie: '',
                    tipo: '',
                    marcaDetector: '',
                    modeloDetector: '',
                    serieDetector: '',
                    tipoDetector: '',
                    tipoRadiacion: '',
                    unidadesEquipo:'',
                    fechaIngreso:'',
                    enciende:null,
                    detecta:null,
                    stage:'Arribo',
                    status:'open',
                    year:new Date().getFullYear(),
                    isArrived:true,
                    service:null,
                    registradoPor:user

            
                }
            )
        }
    },[register])


    return (
        <div className="">

            <div>
                <Col md={8}>
                    <CustomFormGroup 
                        label={"Cliente"}
                        type={"text"}
                        name={"cliente"}
                        value={formData.cliente.toUpperCase()}
                        onChange={handleChange}
                        error={formError.cliente}
                    />
                </Col>
            </div>
            <Col >
                <CustomFormGroup
                label="Tipo de monitor"
                type="select"
                name="tipo"
                options={[{value:'Portatil',label:'Portatil'}, {value:'Area',label:'Area'},{value:'Alarma',label:'Alarma'}]}
                value={formData.tipo}
                onChange={handleChange}
                error={formError.tipo}
                />
            </Col>
            <div className="flex flex-col md:flex-row">
                <Col>
                    <CustomFormGroup
                    label="Marca"
                    type="text"
                    name="marca"
                    value={formData.marca}
                    onChange={handleChange}
                    error={formError.marca}
                    />
                </Col>
                <Col >
                    <CustomFormGroup
                    label="Modelo"
                    type="text"
                    name="modelo"
                    value={formData.modelo}
                    onChange={handleChange}
                    error={formError.modelo}
                    />
                </Col>
                <Col >
                    <CustomFormGroup
                    label="Serie"
                    type="text"
                    name="serie"
                    value={formData.serie}
                    onChange={handleChange}
                    error={formError.serie}
                    />
                </Col>
            </div>
            <div>           
                <Col md={4}>
                    <CustomFormGroup
                    label="Tipo Detector"
                    type="select"
                    name="tipoDetector"
                    options={[{value:'Interno G.M.',label:'Interno G.M.'}, {value:'Externo G.M.',label:'Externo G.M.'}, {value:'Proporcional',label:'Proporcional'}, {value:'Estado Solido',label:'Estado Solido'}]}
                    value={formData.tipoDetector}
                    onChange={handleChange}
                    error={formError.tipoDetector}
                    />
                </Col>    
            </div>
            <div className="flex flex-col md:flex-row">
            <Col md={4}>
                <CustomFormGroup
                label="Marca Detector"
                type="text"
                name="marcaDetector"
                value={formData.marcaDetector}
                onChange={handleChange}
                error={formError.marcaDetector}
                />
            </Col>
            <Col md={4}>
                <CustomFormGroup
                label="Modelo Detector"
                type="text"
                name="modeloDetector"
                value={formData.modeloDetector}
                onChange={handleChange}
                error={formError.modeloDetector}
                />
            </Col>
            <Col md={4}>
                <CustomFormGroup
                label="Serie Detector"
                type="text"
                name="serieDetector"
                value={formData.serieDetector}
                onChange={handleChange}
                error={formError.serieDetector}
                />
            </Col>
            </div>
            <div className="flex flex-col md:flex-row">
        
            <Col md={4}>
                <CustomFormGroup
                label="Tipo Radiación"
                type="select"
                name="tipoRadiacion"
                options={[{value:'Gamma',label:'Gamma'},{value:'Neutrones',label:'Neutrones'}]}
                value={formData.tipoRadiacion}
                onChange={handleChange}
                error={formError.tipoRadiacion}
                />
            </Col>
            <Col md={4}>
                <CustomFormGroup
                label="Unidades del equipo"
                type="select"
                name="unidadesEquipo"
                options={[{value:'mR/h',label:'mR/h'},{value:'µR/h',label:'µR/h'},{value:'mrem/h',label:'mrem/h'},{value:'µSv/h',label:'µSv/h'},{value:'mSv/h',label:'mSv/h'},{value:'CPM',label:'CPM'},{value:'CPS',label:'CPS'},{value:'mR',label:'mR'},{value:'µSv',label:'µSv'}]}
                value={formData.unidadesEquipo}
                onChange={handleChange}
                error={formError.unidadesEquipo}
                />
            </Col>
            </div>
            <div className="flex flex-col md:flex-row">
                <Col md={4}>
                    <CustomFormGroup
                    label="¿El equipo enciende?"
                    type="select"
                    name="enciende"
                    options={[{value:'si',label:'Si enciende'},{value:'no',label:'No enciende'}]}
                    value={formData.enciende}
                    onChange={handleChange}
                    error={formError.enciende}
                    />
                </Col>
                <Col md={4}>
                    <CustomFormGroup
                    label="¿El equipo detecta radiación?"
                    type="select"
                    name="detecta"
                    options={[{value:'si',label:'Si detecta'},{value:'no',label:'No detecta'}]}
                    value={formData.detecta}
                    onChange={handleChange}
                    error={formError.detecta}
                    />
                </Col>
            </div>
            <div>
                <Button> Guardar </Button>
            </div>
        </div>
    )
}