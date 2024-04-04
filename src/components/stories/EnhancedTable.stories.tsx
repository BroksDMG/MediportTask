import React from 'react';
import EnhancedTable from '../EnhancedTable';
import { TagContextProvider } from '../../context/useTagContext';
export default {
  title: 'Components/EnhancedTable',
  component: EnhancedTable,
};

export const Default = () => (
    <TagContextProvider>
      <EnhancedTable />
    </TagContextProvider>
  );