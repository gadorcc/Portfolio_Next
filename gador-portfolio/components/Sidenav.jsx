import React, { useState } from "react";
import { UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';

const Sidenav = () => {
  const items = {
    root: {
      index: 'root',
      canMove: false,
      isFolder: true,
      children: ['child2', 'child4'],
      data: 'Root item',
      canRename: false,
    },
    // child1: {
    //   index: 'child1',
    //   canMove: false,
    //   isFolder: false,
    //   children: [],
    //   data: 'Hola',
    //   canRename: false,
    // },
    child4: {
      index: 'child4',
      canMove: false,
      isFolder: false,
      children: [],
      data: 'child4',
      canRename: false,
    },
    child2: {
      index: 'child2',
      canMove: false,
      isFolder: true,
      children: ['child3'],
      data: 'Child item 2',
      canRename: false,
    },
    child3: {
      index: 'child3',
      children: [],
      data: 'Child item3'
    }
  };
  const dataProvider = new StaticTreeDataProvider(items, (item, newName) => ({ ...item, data: newName }));

  return (
    <UncontrolledTreeEnvironment
      dataProvider={dataProvider}
      getItemTitle={item => item.data}
      viewState={{}}
    >
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
    </UncontrolledTreeEnvironment>
  );
}
export default Sidenav
