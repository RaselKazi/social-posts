import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Posts from '../Posts/Posts';
import { useState, useEffect} from 'react';

const Home = () => {

    
    const [posts, setPosts] = useState([]);
    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {setPosts(data);
        })
    },[]);
 
    return (
        <div>
            <CssBaseline />
      <Container maxWidth="md">
        {
            posts.map(post => <Posts showBtn={true} post={post}></Posts>)
        } 
      </Container>
     
        </div>
    );
};

export default Home;