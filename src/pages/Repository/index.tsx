/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/28929274?s=200&v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Likes</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="asdfasdf">
          <div>
            <strong>Full Name</strong>
            <p>Description</p>
          </div>

          <FiChevronRight />
        </Link>
        <Link to="asdfasdf">
          <div>
            <strong>Full Name</strong>
            <p>Description</p>
          </div>

          <FiChevronRight />
        </Link>
        <Link to="asdfasdf">
          <div>
            <strong>Full Name</strong>
            <p>Description</p>
          </div>

          <FiChevronRight />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
