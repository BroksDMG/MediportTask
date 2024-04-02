import React, { createContext, useContext, useState,ReactNode} from 'react';
import { TagsApiData } from '../types/TagsApiData';


interface TagContextType {
  tags: TagsApiData[];
  setTags: React.Dispatch<React.SetStateAction<TagsApiData[]>>;
}

const TagContext = createContext<TagContextType | undefined>(undefined);

export const TagContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tags, setTags] = useState<TagsApiData[]>([]);

  return (
    <TagContext.Provider value={{ tags, setTags }}>
      {children}
    </TagContext.Provider>
  );
};

export const useTagContext = () => {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error('useTagContext must be used within a TagContextProvider');
  }
  return context;
};