import React from 'react';
import Navbar from '../components/Navbar';
import ItemListContainer from '../containers/ItemListContainer';

export const Home = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer children="Prontamente se publicarán productos."/>
        </>
    );
};

export default Home;

