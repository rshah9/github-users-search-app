import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './../index.css';


const Picker = props => {
    let input;

    const { onSubmit } = props;
    return (
        <div className="wrapper-grid">
            <Grid fluid>
                <Row center="xs">
                    <Col xs={8}>
                        <h1> Github Users Search Application</h1>
                        <h3>Search for a Github username</h3>
                    </Col>
                </Row>
            </Grid>
            <Grid fluid>
                <Row center="xs">
                    <Col xs={8}>
                        <form onSubmit={e => {
                            e.preventDefault();
                            if (input.value !== '') {
                                onSubmit(input.value);
                            }
                            }}>
                            <input className="userInput" type="text"
                                   ref={node => {
                                    input = node;
                                }}
                            />
                            <input className="searchButton" type="submit" value="Search" />
                        </form>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

Picker.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Picker;
