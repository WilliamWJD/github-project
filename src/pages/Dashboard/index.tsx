import React, { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@githubExplorer:repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem('@githubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`)
      const repository = response.data;
      setRepositories([...repositories, repository]);

      setNewRepo('')
      setInputError('')
    } catch (err) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input placeholder="Digite o nome do repositório" value={newRepo} onChange={e => setNewRepo(e.target.value)} />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && (
        <Error>{inputError}</Error>
      )}

      <Repositories>
        {repositories.map(repo => (
          <Link key={repo.full_name} to={`/repository/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
