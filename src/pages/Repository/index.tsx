/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issue } from './styles';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;

    owner: {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    title: string;
    id: string;
    html_url: string;
    user: {
        login: string;
    };
}

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();
    useEffect(() => {
        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });
        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        });

        // OR PROMISE.ALL()
        // promise.race legal pra busca de ceps - a requisição que ganhar vai

        // async function loadData(): Promise<void> {
        //     const [repository, issues] = await Promise.all([
        //         api.get(`repos/${params.repository}`),
        //         api.get(`repos/${params.repository}/issues`),
        //     ]);

        //     console.log(repository);
        //     console.log(issues);
        // }

        // loadData();
    }, [params.repository]);

    // OR

    return (
        <>
            <Header>
                <img src={logoImage} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Back
                </Link>
            </Header>

            {repository && (
                <RepositoryInfo>
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <p>Stars</p>
                        </li>
                        <li>
                            <strong>{repository.forks_count} </strong>
                            <p>Forks</p>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <p>Open Issues</p>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}
            <Issue>
                {issues.map((issue) => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issue>
        </>
    );
};

export default Repository;
