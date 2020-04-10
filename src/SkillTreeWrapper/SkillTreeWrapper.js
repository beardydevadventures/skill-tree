import React from 'react';
import theme from '../data/theme';
import data from '../data/data';
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider
} from 'beautiful-skill-tree';

const SkillTreeWrapper = () => {
  return (
    <SkillProvider>
      <SkillTreeGroup theme={theme}>
        {() => {
          return (
            <SkillTree treeId="main-tree" title="Front End Developer Skills" data={data} />
          )
        }}
      </SkillTreeGroup>
    </SkillProvider>
  );
}

export default SkillTreeWrapper;
