import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './Alunos.css'

function CadastroHobbies() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [plataforma, setPlataforma] = useState('')
    const [tempoSemanal, setTempoSemanal] = useState('')
    const [nivelHabilidade, setNivelHabilidade] = useState('')
    const [status, setStatus] = useState('Ativo')

    useEffect(() => {
        if (id) {
            buscarMetaPorId()
        }
    }, [id])

    async function buscarMetaPorId() {
        const response = await axios.get(
            `http://localhost:8080/metas/${id}`
        )

        setNome(response.data.nome)
        setCategoria(response.data.categoria)
        setPlataforma(response.data.plataforma)
        setTempoSemanal(String(response.data.tempoSemanal))
        setNivelHabilidade(response.data.nivelHabilidade)
        setStatus(response.data.status)
    }

    async function salvarMeta() {

        const meta = {
            nome,
            categoria,
            plataforma,
            tempoSemanal: Number(tempoSemanal),
            nivelHabilidade,
            status
        }

        if (id) {
            await axios.put(
                `http://localhost:8080/hobbies/${id}`,
                meta
            )

            alert('Hobbie atualizado com sucesso!')
        } else {
            await axios.post(
                'http://localhost:8080/hobbies',
                meta
            )

            alert('Hobbie cadastrado com sucesso!')
        }

        navigate('/hobbies/consulta')
    }

    return (
        <div className="alunos-pagina">

            <div className="alunos-container">

                <div className="alunos-topo">

                    <div>
                        <h1>
                            {id ? 'Editar Hobbie' : 'Cadastro de Hobbie'}
                        </h1>

                        <p>
                            Preencha as informações do hobbie abaixo:
                        </p>
                    </div>

                    <button
                        className="alunos-botao-voltar"
                        onClick={() => navigate('/hobbies/consulta')}
                    >
                        Consultar hobbie
                    </button>

                </div>

                <div className="alunos-form-card alunos-form-centralizado">

                    <h2>
                        {id ? 'Alterar informações' : 'Novo hobbie'}
                    </h2>

                    <div className="alunos-formulario">

                        <input
                            type="text"
                            placeholder="Título do Hobbie"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Descrição"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        />
                        <p>Data de Entrega:</p>
                        <input
                            type="date"
                            placeholder="Data de Entrega"
                                value={plataforma}
                                onChange={(e) => setPlataforma(e.target.value)}
                            />

                        <input
                            type="text"
                            placeholder="Tempo Semanal"
                            value={tempoSemanal}
                            onChange={(e) => setTempoSemanal(e.target.value)}
                        />
                        <input 
                            type="text"
                            placeholder="Nível de Habilidade"
                            value={nivelHabilidade}
                            onChange={(e) => setNivelHabilidade(e.target.value)}
                        />
                        <p>Status:</p>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="Ativo">Ativo</option>
                            <option value="Inativo">Inativo</option>
                        </select>

                        <button
                            className="alunos-botao-salvar"
                            onClick={salvarMeta}
                        >
                            {id ? 'Salvar alterações' : 'Cadastrar meta'}
                        </button>

                        <button
                            className="alunos-botao-cancelar"
                            onClick={() => navigate('/logado')}
                        >
                            Voltar ao painel
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default CadastroHobbies