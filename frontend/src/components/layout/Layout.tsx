import React from 'react';
import { NavBar } from '../reusable/navbar';
import { Outlet } from 'react-router-dom';
import { MainLayoutWrapper } from './layout.styled';
export default function Layout() {
  return (
    <React.Fragment>
      <NavBar />
      <MainLayoutWrapper>
        <Outlet />
      </MainLayoutWrapper>
    </React.Fragment>
  );
}
