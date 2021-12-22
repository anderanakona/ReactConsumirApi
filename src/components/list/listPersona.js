import React, { useState, useEffect  } from "react";


const AppListPersonas=({listPersonas, obtenerPersona, eliminarPersona})=>{
    
    return (<>
        <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Ciudad</th>
                    <th scope="col">Pais</th>
                    <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {listPersonas.map((item,index) => (
                        <tr value={item.idPersona}   key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.nombres}</td>
                            <td>{item.apellidos}</td>
                            <td>{item.ciudad}</td>
                            <td>{item.pais.nombre}</td>
                            <td><button className="btn btn-danger" onClick={()=>eliminarPersona(item.idPersona)}>Eliminar</button></td>
                            <td><button className="btn btn-success" onClick={()=>obtenerPersona(item)}>actualizar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    
    </>);
}

export default AppListPersonas;