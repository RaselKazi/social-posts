import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Comments from '../Comments/Comments';
import Posts from '../Posts/Posts';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const PostsDetail = () => {
  
  let {postId} = useParams();
  
   const [posts, setPosts] = useState([]);
   const [comment, setcomment] = useState([]);
   const [img, setimg] = useState([]);
    
 // -- post  api----
   useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setPosts(data))
}, []);

//--- comments api---
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json())
    .then(data => setcomment(data))
}, [])

   useEffect(() =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {setimg(data.results[0].picture.thumbnail);
    })
},[]);
    
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="md">
                <Posts showBtn={false} post={posts}></Posts>
                {
                    comment.map(comment => <Comments img={img} comment={comment}></Comments>)
                }
                
            </Container>
        </div>
    );
};

export default PostsDetail;