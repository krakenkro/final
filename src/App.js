import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchUni from './comp/SearchUni';
import Home from './comp/Home';
import UniList from './comp/UniList';
import UniDetails from './comp/UniDetails';
import { Layout, Menu  } from 'antd';
const { Header, Content, } = Layout;


function App() {
  return (
  <Layout className="App">
        <Router>
          <Header>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item><Link to="/" >Главная</Link></Menu.Item>
              <Menu.Item><Link to="/unis" >Университеты</Link></Menu.Item>
            </Menu>
          </Header>
          <Content  style={{ padding: '50px' }}>
            <div className="site-layout-content" style={{minHeight: '70vh', padding: '24px', background: '#fff',}}>
              <Routes>
                  <Route path="/unis" element={
                      <UniList />
                  } />
                  <Route path="/unis/:name" element={
                      <UniDetails/>
                  } />
                  <Route path="/" element={
                      <Home/>
                  } />
                   <Route path="seek/:query" element={
                      <SearchUni />
                  } />
              </Routes>
            </div>
          </Content>
        </Router>
    </Layout>
  );
}

export default App;
