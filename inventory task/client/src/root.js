import React from 'react';
import { SidebarProvider } from './sidebar';
import App from './App';

const Root = () => {
  return (
    <SidebarProvider>
      <App />
    </SidebarProvider>
  );
};

export default Root;