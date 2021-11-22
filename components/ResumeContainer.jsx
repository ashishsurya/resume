import React from 'react';
import EducationContainer from './EducationContainer';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer';
import SkillsContainer from './SkillsContainer';

const ResumeContainer = () => {
  return (
    <div>
      <Header />
      <ProjectsContainer/>
      <EducationContainer />
      <SkillsContainer />
    </div>
  );
};

export default ResumeContainer;
