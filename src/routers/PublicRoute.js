import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route
            {...rest}
            component={props =>
                isAuthenticated ? (
                    <div>
                        <Redirect to="/dashboard" />
                    </div>
                ) : (
                        <Component {...props} />
                    )
            }
        />
    );

const mapStateToProps = (state, props) => {
    return {
        isAuthenticated: !!state.user.uid
    };
};

export default connect(mapStateToProps)(PublicRoute);