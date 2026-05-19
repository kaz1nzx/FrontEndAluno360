import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './Alunos.css'

function ConsultaHobbies() {

    const navigate = useNavigate()

    const [hobbies, setHobbies] = useState<any[]>([])

    useEffect(() => {
        buscarHobbies()
    }, [])

    async function buscarHobbies() {
        const response = await axios.get(
            'http://localhost:8080/hobbies'
        )

        setHobbies(response.data)
    }

    async function excluirHobbie(id: number) {

        const confirmar = confirm('Deseja realmente excluir este hobbie?')

        if (confirmar) {
            await axios.delete(
                `http://localhost:8080/hobbies/${id}`
            )

            alert('Hobbie excluído com sucesso!')

            buscarHobbies()
        }
    }

    function editarHobbie(id: number) {
        navigate(`/hobbies/editar/${id}`)
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>Planejamento de Hobbies</h1>

                        <p>
                            Organize seus hobbies!
                        </p>
                    </div>

                    <div className="alunos-topo-botoes">

                        <button
                            className="alunos-botao-novo"
                            onClick={() => navigate('/hobbies/cadastro')}
                        >
                            Novo Hobbie
                        </button>

                        <button
                            className="alunos-botao-voltar"
                            onClick={() => navigate('/logado')}
                        >
                            Voltar
                        </button>

                    </div>

                </div>

                <div className="alunos-lista-card">

                    <div className="alunos-lista-topo">

                        <div>
                            <h2>Tarefas cadastradas</h2>

                            <p>
                                Total de hobbies: {hobbies.length}
                            </p>
                        </div>

                    </div>

                    <div className="alunos-tabela-container">

                        <table className="alunos-tabela">

                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Plataforma</th>
                                    <th>Tempo Semanal</th>
                                    <th>Nível Habilidade</th>
                                    <th>Status</th>
                                    

                                </tr>
                            </thead>

                            <tbody>

                                {
                                    hobbies.map((hobbie) => (

                                        <tr key={hobbie.id}>

                                            <td>{hobbie.nome}</td>
                                            <td>{hobbie.categoria}</td>
                                            <td>{hobbie.plataforma}</td>
                                            <td>{hobbie.tempoSemanal}</td>
                                            <td>{hobbie.prazo}</td>
                                            <td>{hobbie.nivelHabilidade}</td>
                                            <td>{hobbie.status}</td>

                                            <td>
                                                <span className="alunos-status">
                                                    {hobbie.status}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="alunos-acoes">

                                                    <button
                                                        className="alunos-botao-editar"
                                                        onClick={() => editarHobbie(hobbie.id)}
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="alunos-botao-excluir"
                                                        onClick={() => excluirHobbie(hobbie.id)}
                                                    >
                                                        Excluir
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>

                                    ))
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ConsultaHobbies