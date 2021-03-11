import React from 'react';
import PropTypes from 'prop-types';
import { Outer, OuterRoutes } from './styles';

function Layout({ children }) {
  return <Outer> {children} </Outer>;
}

function RoutesLayout({ children }) {
  return <OuterRoutes> {children} </OuterRoutes>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

RoutesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout, RoutesLayout };
