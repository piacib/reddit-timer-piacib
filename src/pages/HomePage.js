import React from 'react';
import Table from '../components/Table';
import Search from '../components/Search';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = () => (
  <div>
    <Table />
    <Search />
    <Posts />
    <Footer />
    <Header />
  </div>
);

export default HomePage;
