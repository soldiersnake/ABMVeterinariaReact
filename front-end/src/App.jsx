import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutoProtegida from './layout/RutoProtegida';

import NotLogin from "./paginas/NotLogin";
import Registrar from "./paginas/Registrar";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import OlvidePassword from "./paginas/OlvidePassword";
import { NuevoPassword } from './paginas/NuevoPassword';
import AdministrarPacientes from './paginas/AdministrarPacientes';
import EditarPerfil from './paginas/EditarPerfil';
import CambiarPassword from './paginas/CambiarPassword';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';



function App() {

  

  return (
    <BrowserRouter>
    <AuthProvider>
      <PacientesProvider>
          <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<NotLogin />} />
              <Route path='registrar' element={<Registrar />} />
              <Route path='olvide-password' element={<OlvidePassword />} />
              <Route path='olvide-password/:token' element={<NuevoPassword />} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
            </Route>

            <Route path='/admin' element={<RutoProtegida/>}>
              <Route index element={ <AdministrarPacientes/> } />
              <Route path='perfil' element={<EditarPerfil/>}/>
              <Route path='cambiar-password' element={<CambiarPassword/>}/>

            </Route>
          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
