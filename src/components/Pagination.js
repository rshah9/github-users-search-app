import React from 'react';
import PropTypes from 'prop-types';
import './../index.css';

class Pagination extends React.Component {
    constructor(props) {
        const { currentUserData, userRepos } = props;
        const repos = userRepos;

        console.log(` the user data from pagination page ${currentUserData}`);
        console.log(` the user repo from pagination page ${userRepos}`);
        console.log(` the user repo000000 from pagination page ${repos}`);

        super();
        this.state = {
            // repos: userRepos,
            repos: ['a','b','c','d','e','f','g','h','i','j','k'],
            currentPage: 1,
            reposPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id),
        });
    }

    render() {
        const { repos, currentPage, reposPerPage } = this.state;
        // const { repos, currentPage, reposPerPage } = this.state;


        // Logic for displaying current repos
        const indexOfLastRepo = currentPage * reposPerPage;
        const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
        const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

        const renderRepos = currentRepos.map((repos, index) => {
            return <li key={index}>{repos}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(repos.length / reposPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="listStyle"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div className="paginationWrapper">
                <ul className="repoTest">
                    {renderRepos}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    };
}

Pagination.propTypes ={
    userRepos: PropTypes.object.isRequired
}


export default Pagination;