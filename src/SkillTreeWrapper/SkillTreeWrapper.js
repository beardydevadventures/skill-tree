import React from 'react';
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType
} from 'beautiful-skill-tree';

const data: SkillType[] = [
  {
    id: 'hello-world',
    title: 'Hello World',
    tooltip: {
      content:
        'This node is the top most level, and will be unlocked, and ready to be clicked.',
    },
    children: [
      {
        id: 'hello-sun',
        title: 'Hello Sun',
        tooltip: {
          content:
            'This is a parent of the top node, and will locked while the parent isn’t in a selected state.',
        },
        children: [],
      },
      {
        id: 'hello-stars',
        title: 'Hello Stars',
        tooltip: {
          content:
            'This is the child of ‘Hello World and the sibling of ‘Hello Sun’. Notice how the app takes care of the layout automatically? That’s why this is called Beautiful Skill Tree and not just ‘Skill Tree’. (Also the npm namespace had already been taken for the latter so (flick hair emoji).',
        },
        children: [],
      },
    ],
  },
];

const SkillTreeWrapper = () => {
  return (
    <SkillProvider>
      <SkillTreeGroup>
        {() => {
          return (
            <SkillTree treeId="basic-birch" title="First Skill Tree" data={data} />
          )
        }}
      </SkillTreeGroup>
    </SkillProvider>
  );
}

export default SkillTreeWrapper;
