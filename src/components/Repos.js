import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';

import './../index.css';
import Pagination from './Pagination';


const Repos = props => (
    <Grid>
        <Row center="xs">
            <Col md={6} lg={6}>
                    <span className="pages"> Pages </span>
                    <Pagination/>
            </Col>
            <Col md={6} lg={12} center="xs">
                <ul className="uselist">
                    {props.repos.map(repo => (
                        <li key={repo.id}>
                            <h3>Repo Name: {repo.name}</h3>
                            <p> {repo.description}</p>
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    </Grid>
);

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;
