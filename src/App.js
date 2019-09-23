import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectsProvider } from './context';

export const App = () => (
  <SelectedProjectsProvider>
    <ProjectsProvider>
      <div className="App">
        <Header></Header>
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectsProvider>
);
