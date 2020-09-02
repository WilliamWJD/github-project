import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore repositórios no github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/31516475?s=460&u=e2be85f1b7be7a9cd728c0fe9fd0ad8552d9cd57&v=4" alt="William" />
                    <div>
                        <strong>williamwjd/Sirius</strong>
                        <p>Projeto desenvolvido para controle de estoque do CPD</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/31516475?s=460&u=e2be85f1b7be7a9cd728c0fe9fd0ad8552d9cd57&v=4" alt="William" />
                    <div>
                        <strong>williamwjd/Sirius</strong>
                        <p>Projeto desenvolvido para controle de estoque do CPD</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img src="https://avatars0.githubusercontent.com/u/31516475?s=460&u=e2be85f1b7be7a9cd728c0fe9fd0ad8552d9cd57&v=4" alt="William" />
                    <div>
                        <strong>williamwjd/Sirius</strong>
                        <p>Projeto desenvolvido para controle de estoque do CPD</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard