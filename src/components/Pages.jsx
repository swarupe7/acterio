import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import Layout from './Layout';

const Pages = ({setDpost}) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
    <Navbar setSearchQuery={setSearchQuery}/>
    <br />
    <Layout setDpost={setDpost} searchQuery={searchQuery} />
    </>
    

  )
}

export default Pages