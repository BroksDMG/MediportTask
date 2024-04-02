import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import EnhancedTable from './components/EnhancedTable';
import axios from 'axios';
import {  useTagContext } from './context/useTagContext';
function App() {
  const {tags,setTags} = useTagContext();
  const [isLoaded,setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true)
    const baseUrl='https://api.stackexchange.com'
    const pathUrl='/2.3/answers?order=desc&sort=activity&site=stackoverflow'
    axios.get(`${baseUrl}${pathUrl}`)
    .then(response => {
      setTags(response.data.items)
      setIsLoaded(false)})
    .catch(error => console.log(error))
  },[setTags])
  console.log(tags)
  return (
    <div className="App">
      
        <EnhancedTable />
    </div>
  );
}

export default App;
