import React, { useState, useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';

const AppModalFormulario=({show, handleClose, handleChange, listPais, handleSubmit ,form, tituloModal})=>{   
     
     
    return (<>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{tituloModal}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
        <Modal.Body>
            <div className="form-group">
                <label htmlFor="nombres">Nombres</label>
                <input type="text" className="form-control" id="nombres"  value={form.nombres} 
                placeholder="Nombres" name="nombres" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" className="form-control" id="apellidos" value={form.apellidos} 
                placeholder="Apellidos" name="apellidos" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" className="form-control" id="ciudad"  value={form.ciudad}  
                placeholder="Ciudad" name="ciudad" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="idPais">Pais</label>
                <select  name="idPais" id="idPais" value={form.idPais}  className="form-control" onChange={handleChange}>
                    <option >Seleccione una opcion</option>
                    {listPais.map((item,index) => (
                        <option value={item.idPais}   key={index}>
                        {item.nombre}
                        </option>
                    ))}
                </select>
            </div>

        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" value="Guardar" variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    
    </>);
}
export default AppModalFormulario;