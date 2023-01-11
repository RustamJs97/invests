import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { navbarData } from '../utils/navbar';
import { Container } from './style';
import Sidebar from '../components/Sidebar';
const Root = () => {
  return (
    <Container>
      <Sidebar />
      <Routes>
        {navbarData.map(value => {
          return (
            <Route key={value.id} path={value.path} element={value.component} />
          );
        })}
      </Routes >
    </Container>
  );
};

export default Root;
