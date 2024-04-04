import './App.css';
import { useState,useEffect } from 'react';
import EnhancedTable from './components/EnhancedTable';
import axios from 'axios';
import {  useTagContext } from './context/useTagContext';
import Loading from './components/Loading';
import Error from './components/Error';



function App() {
  const {setTags} = useTagContext();
  const [isLoaded,setIsLoaded] = useState(false);
  const [errorMessage,setErrorMessage] = useState('')
  useEffect(() => {
    setIsLoaded(true)
    const baseUrl='https://api.stackexchange.com'
    const pathUrl='/2.3/tags?order=desc&sort=popular&site=stackoverflow'
    axios.get(`${baseUrl}${pathUrl}`)
    .then(response => {
      setTags(response.data.items)
      setIsLoaded(false)})
    .catch(error => {
      setIsLoaded(false)
      setErrorMessage(error.message)
      console.log(error)})
  },[setTags])

  if(isLoaded){
    return <Loading/>
  }
  console.log(errorMessage)
  if(errorMessage!==''){
    return <Error message={errorMessage}/>
  }
  return (
    <div className="App">
        <EnhancedTable />
    </div>
  );
}

export default App;
