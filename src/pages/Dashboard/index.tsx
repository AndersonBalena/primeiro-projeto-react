import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github </Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7341102?s=460&u=34c64b48c4e19fe90614d6c672df3187aa3e0844&v=4"
            alt="Anderson Balena Fernandes"
          />
          <div>
            <strong>context-api-wish-list</strong>
            <p>A simple wish list created to learn about context-api.</p>
          </div>

          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7341102?s=460&u=34c64b48c4e19fe90614d6c672df3187aa3e0844&v=4"
            alt="Anderson Balena Fernandes"
          />
          <div>
            <strong>context-api-wish-list</strong>
            <p>A simple wish list created to learn about context-api.</p>
          </div>

          <FiChevronRight />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7341102?s=460&u=34c64b48c4e19fe90614d6c672df3187aa3e0844&v=4"
            alt="Anderson Balena Fernandes"
          />
          <div>
            <strong>context-api-wish-list</strong>
            <p>A simple wish list created to learn about context-api.</p>
          </div>

          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
