import React, { useEffect } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import { authCheck } from '../redux/authActionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}

const Main = props => {

    useEffect(() => {
        props.authCheck();
    }, [])
    return (
        <div style={{ backgroundColor: "#B2C5C6" }}>
            <Header />
            <Body />
            <Footer />

        </div>
    )
}
export default connect(null, mapDispatchToProps)(Main);