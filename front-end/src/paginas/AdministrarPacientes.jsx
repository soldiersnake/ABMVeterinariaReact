import { useState } from "react";
import ListadoPacientes from "../components/ListadoPacientes";
import NotFormulario from "../components/NotFormulario";

const AdministrarPacientes = () => {

  const [mostrarFormulario, SetMostrarFormulario] = useState(false);
  
  return (
      <div className="flex flex-col md:flex-row">
        <button
          type="button"
          className="bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
          onClick={() => SetMostrarFormulario(!mostrarFormulario) }
          >{mostrarFormulario ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>


        <div className= { `${mostrarFormulario ? 'block' : 'hidden' } md:block md:w-1/2 lg:w-2/5` } >
          <NotFormulario />
        </div>

        <div className="md:w-1/2 lg:w-3/5">
          <ListadoPacientes />
        </div>

      </div>
  )
}

export default AdministrarPacientes;