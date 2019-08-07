import React, { useState } from 'react';

const RecursiveItem = (props) => {
  return (
    <>
      {props.data.map(item => (
        <li key={item.label.toString()}>
          <span>{item.label}</span>

          {item.children && item.children.length && (
            <ul>
              <RecursiveItem data={item.children} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};


export const RecursiveList = () => {
  const [list] = useState([
    {
      label: '1',
      children: [
        {
          label: '1-1',
          children: [
            { label: '1-1-1' },
            { label: '1-1-2' },
            {
              label: '1-1-3',
              children: [{ label: '1-1-3-1' }],
            },
          ],
        },
        { label: '1-2' },
      ],
    },
    {
      label: '2',
      children: [
        { label: '2-1', children: [{ label: '2-1-1' }] },
        { label: '2-2' },
      ],
    },
  ]);

  return (
    <>
      <ul>
        <RecursiveItem data={list} />
      </ul>
    </>
  );
};

export default RecursiveList;
