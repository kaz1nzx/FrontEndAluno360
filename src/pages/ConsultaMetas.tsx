import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './Alunos.css'

function ConsultaMetas() {

    const navigate = useNavigate()

    const [metas, setMetas] = useState<any[]>([])

    useEffect(() => {
        buscarMetas()
    }, [])

    async function buscarMetas() {
        const response = await axios.get(
            'http://localhost:8080/metas'
        )

        setMetas(response.data)
    }

    async function excluirMeta(id: number) {

        const confirmar = confirm('Deseja realmente excluir esta meta?')

        if (confirmar) {
            await axios.delete(
                `http://localhost:8080/metas/${id}`
            )

            alert('Meta excluída com sucesso!')

            buscarMetas()
        }
    }

    function editarMeta(id: number) {
        navigate(`/metas/editar/${id}`)
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>Planejamento de Metas</h1>

                        <p>
                            Organize suas metas!
                        </p>
                    </div>

                    <div className="alunos-topo-botoes">

                        <button
                            className="alunos-botao-novo"
                            onClick={() => navigate('/metas/cadastro')}
                        >
                            Nova Meta
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
                                Total de metas: {metas.length}
                            </p>
                        </div>

                    </div>

                    <div className="alunos-tabela-container">

                        <table className="alunos-tabela">

                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descrição</th>
                                    <th>Categoria</th>
                                    <th>Prazo</th>
                                    <th>Progresso</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    metas.map((meta) => (

                                        <tr key={meta.id}>

                                            <td>{meta.titulo}</td>
                                            <td>{meta.descricao}</td>
                                            <td>{meta.categoria}</td>
                                            <td>{meta.prazo}</td>
                                            <td>{meta.progresso}</td>
                                            <td>{meta.status}</td>

                                            <td>
                                                <span className="alunos-status">
                                                    {meta.status}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="alunos-acoes">

                                                    <button
                                                        className="alunos-botao-editar"
                                                        onClick={() => editarMeta(meta.id)}
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="alunos-botao-excluir"
                                                        onClick={() => excluirMeta(meta.id)}
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

export default ConsultaMetas