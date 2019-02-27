import React from 'react';
import Header from '../component/Header';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header />
            {props.children}
        </div>
    );
}
export default Layout;
