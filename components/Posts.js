import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import {useEffect,useState} from 'react';
import {db} from '../firebase'
import Post from './Post'

function Posts () {

  const [posts, setposts] = useState([])
useEffect(() => {
  
 return onSnapshot(query(collection(db,'posts'),orderBy('timestamp',"desc")),snapshot =>{

setposts(snapshot.docs);

  })

 
}, [db])
  return (
    <div>
      {posts.map((post) => (

        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}

    </div>
  )
}

export default Posts
