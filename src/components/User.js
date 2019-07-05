import React from 'react';
import PropTypes from 'prop-types';

import Repos from './Repos';
import { Grid, Col, Row } from 'react-flexbox-grid';
import './../index.css';


const User = props => {
    const { currentUserData, userRepos } = props;
    const { userData } = currentUserData;
    const { repos, isFetching } = userRepos;
    console.log(currentUserData);

    return (
        <div className="UserInfo">
            <Grid>
                <Row center="xs" >
                    <Col md={6} lg={3} center="xs">
                        <h1 class="wrap" > User Name: </h1>
                    </Col>
                </Row>
                <Row center="xs">
                    <Col md={3} lg={2} center="xs">
                        <h2 className="userName"> {userData.login}</h2>
                    </Col>
                    <Col md={3} lg={2} center="xs">
                        <img className="UserAvatar"
                            alt={userData.userRepos}
                            src={userData.avatar_url}
                        />
                    </Col>
                </Row>
            </Grid>
            <Grid>
                <Row center="xs">
                    <Col md={6} lg={6}>
                    {!currentUserData.isFetching &&
                            !userRepos.isFetching &&
                            repos.length === 0 && (
                                <h2>No repos found for user {userData.login}</h2>
                            )}
                        {!isFetching &&
                            repos.length > 0 && (
                            <div>
                                <h2>Available Public Repositories </h2>
                                <Repos repos={repos} />
                            </div>
                        )}
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

User.propTypes = {
    currentUserData: PropTypes.object.isRequired,
    userRepos: PropTypes.object.isRequired,
};

export default User;
