import React, { useState, useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import AppModalFormulario from "./modals/modalFormularioPersona";
import AppListPersonas from "./list/listPersona";

function Welcome(props){
    
    const [form, setForm]=useState({idPersona:0, nombres: "", apellidos: "", ciudad: "", idPais: ""});
    const [listPais,setListPais]=useState([]);
    const [listPersonas,setListPersonas]=useState([]);
    const [show, setShow] = useState(false);
    const [tituloModal, setTituloModal]=useState('Agregar Persona');
   
    //
    useEffect(async () => {        
      obtenerPaises();
      obtenerPersonas();
      
    },[]);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setForm({
            idPersona:0, 
            nombres: "", 
            apellidos: "", 
            ciudad: "", 
            idPais: 0
        })
    }

    const obtenerPaises=async()=>{
     await   axios.get(`http://localhost:5130/listarPais`)
        .then((res) => {
          const paises = res.data;       
          setListPais(paises);
        }).catch(err => {
            console.log(err);
         });     
    }
    
    const obtenerPersonas=async()=>{
        await    axios.get(`http://localhost:5130/listarPersonas`)
        .then(async(res) => {
          const personas = res.data; 
          setListPersonas(personas);
        }).catch(err => {
            console.log(err);
        });;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        guardarPersona();
        console.log(form)
    };
    const guardarPersona=()=>{
      let per=  {
            "idPersona": form.idPersona,
            "nombres": form.nombres,
            "apellidos": form.apellidos,
            "ciudad": form.ciudad,
            "pais": {
              "idPais": form.idPais,
              "nombre": ""
            }
     }
      if(form.idPersona!=0 && form.idPersona>0){
        actualizarPersona(per)
      }else{
        crearPersona(per);   
      }
         
    }

    const crearPersona=(persona)=>{
        axios.post('http://localhost:5130/crearpersona', persona).then(res => {
            console.log(res);
            obtenerPersonas();
            }).catch(err => {
            console.log(err);
        });
    }
    const actualizarPersona=(persona)=>{
        axios.post('http://localhost:5130/actualizarPersona', persona).then(res => {
            console.log(res);
            obtenerPersonas();
            }).catch(err => {
            console.log(err);
        });
    }
    

    const obtenerPersona=(persona)=>{
        setShow(true); 
        setForm({
                idPersona:persona.idPersona,
                nombres: persona.nombres,
                apellidos: persona.apellidos, 
                ciudad: persona.ciudad, idPais: persona.pais.idPais
        })
        setTituloModal('Actualizar Persona');
    }
    
    const handleChange=(e)=>{
       setForm({
           ...form,
           [e.target.name]:e.target.value,
       })
    };
    
    const handleChecked=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        })
     };

    const eliminarPersona=(id)=>{
        axios.post('http://localhost:5130/eliminarPersona?id='+id, form).then(res => {                 
            obtenerPersonas();
        }).catch(err => {
                 console.log(err);
         });
         alert("hola como estas");
    }
    return (<>    
    <h2>{props.name}</h2>
    <Button className="nextButton" onClick={handleShow}>
        Agregar PersonaS
     </Button>
     <AppListPersonas listPersonas={listPersonas} obtenerPersona={obtenerPersona} 
        eliminarPersona={eliminarPersona}/>
     
      <AppModalFormulario show={show} handleChange={handleChange} form={form} tituloModal={tituloModal}
       handleClose={handleClose} listPais={listPais} handleSubmit={handleSubmit}/>
     
     
    </>);


}
export default Welcome;