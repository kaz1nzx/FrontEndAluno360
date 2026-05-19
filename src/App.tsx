import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Logado from './pages/Logado'

import CadastroAluno from './pages/CadastroAlunos'
import ConsultaAlunos from './pages/ConsultaAlunos'

import CadastroTarefas from './pages/CadastroTarefas'
import ConsultaTarefas from './pages/ConsultaTarefas'

import CadastroMetas from './pages/CadastroMetas'
import ConsultaMetas from './pages/ConsultaMetas'

import CadastroCursos from './pages/CadastroCursos'
import ConsultaCursos from './pages/ConsultaCursos'

import CadastroEventos from './pages/CadastroEventos'
import ConsultaEventos from './pages/ConsultaEventos'


import CadastroHobbies from './pages/CadastroHobbies'
import ConsultaHobbies from './pages/ConsultaHobbies'



function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

        <Route
          path="/logado"
          element={<Logado />}
        />

        <Route
          path="/alunos/cadastro"
          element={<CadastroAluno />}
        />

        <Route
          path="/alunos/consulta"
          element={<ConsultaAlunos />}
        />

        <Route
          path="/alunos/editar/:id"
          element={<CadastroAluno />}
        />

        <Route
          path="/tarefas/cadastro"
          element={<CadastroTarefas />}
        />

        <Route
          path="/tarefas/consulta"
          element={<ConsultaTarefas />}
        />

        <Route
          path="/tarefas/editar/:id"
          element={<CadastroTarefas />}
        />

        <Route
          path="/metas/cadastro"
          element={<CadastroMetas />}
        />
        
        <Route
          path="/metas/consulta"
          element={<ConsultaMetas />}
        />
        <Route
          path="/metas/editar/:id"
          element={<CadastroMetas />}
        />

        <Route
          path="/cursos/cadastro"
          element={<CadastroCursos />}
        />

        <Route
          path="/cursos/consulta"
          element={<ConsultaCursos />}
        />

        <Route
          path="/cursos/editar/:id"
          element={<CadastroCursos />}
        />

        <Route
          path="/eventos/cadastro"
          element={<CadastroEventos />}
        />

        <Route
          path="/eventos/consulta"
          element={<ConsultaEventos />}
        />

        <Route
          path="/eventos/editar/:id"
          element={<CadastroEventos />}
        />

        <Route
          path="/hobbies/cadastro"
          element={<CadastroHobbies />}
        />
        
        <Route
          path="/hobbies/consulta"
          element={<ConsultaHobbies />}
        />
        <Route
          path="/hobbies/editar/:id"
          element={<CadastroHobbies />}
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App