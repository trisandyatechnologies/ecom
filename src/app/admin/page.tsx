'use client'
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Admin from './items/new_items/page';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Items',
    children: 'Content of Tab Pane 1',
  },
  
  {
    key: '2',
    label: 'NewItem',
    children: <Admin/>,
  },
  {
    key: '3',
    label: 'Orders',
    children: 'Content of Tab Pane 2',
  },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabPosition="left" />;

export default App;