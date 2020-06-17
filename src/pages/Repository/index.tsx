/* eslint-disable react/jsx-indent */
import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header>
                <img src={logoImage} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Back
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                      src="https://avatars0.githubusercontent.com/u/52184708?s=460&u=f9c5ce5b97e710e9012597f2e153f78c57402ced&v=4"
                      alt="{Profile}"
                    />
                    <div>
                        <strong>{params.repository}</strong>
                        <p>description</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>107</strong>
                        <p>Stars</p>
                    </li>
                    <li>
                        <strong>8</strong>
                        <p>Forks</p>
                    </li>
                    <li>
                        <strong>17</strong>
                        <p>Issues abertas</p>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="inprogress">
                    <div>
                        <strong>soon</strong>
                        <p>pronto</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
