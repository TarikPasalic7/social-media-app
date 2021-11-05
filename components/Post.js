import {useState,useEffect} from 'react'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, setDoc,doc, deleteDoc,toDate } from '@firebase/firestore';
import {
  
  HeartIcon,
  PaperAirplaneIcon,
 
  DotsHorizontalIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon

} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from
  '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { db } from '../firebase';
import Moment from 'react-moment';
import 'moment-timezone';
import PostMenu from './PostMenu';

function Post ({ id, username, userImg, img, caption }) {
const {data:session} =useSession();
const [comments, setComments] = useState([])
const [comment, setComment] = useState("")
const [likes, setLikes] = useState([])
const [hasLiked, setHasLiked] = useState(false)

useEffect(() => onSnapshot(query(collection(db,'posts',id,'comments'),orderBy('timestamp','desc')),
snapshot =>setComments(snapshot.docs) ), [db,id])

useEffect(
  () =>
   onSnapshot(collection(db,'posts',id,'likes'),(snapshot)=> 
   setLikes(snapshot.docs)
),
 [db,id]
 );


  useEffect(() => 
   setHasLiked(
    likes.findIndex((like) => like.id===session?.user?.uid) !== -1 
    ),
     [likes])

const addComment = async(e)=>{
  e.preventDefault();
  const commentToSend = comment;
  setComment('');

  await addDoc(collection(db,'posts',id,'comments'),{
    comment: commentToSend,
    username:session.user.username,
    userImage: session.user.image,
    timestamp:serverTimestamp()


  })
}


const likePost = async () =>{
  
if(hasLiked){
await deleteDoc(doc(db,'posts',id,'likes',session.user.uid))
}
else{
  await setDoc(doc(db,'posts',id,'likes',session.user.uid),{
    username:session.user.username,
 
   })
 
}
 
}

const deletePost = async () =>{

  await deleteDoc(doc(db,'posts',id));
}


  return (

    <div className='bg-white my-8 border rounded-sm'>

      {/** Header */}
      
      <div className='flex items-center p-5'>
        <img
          src={userImg} className='rounded-full h-12 w-12 object-contain
               border p-1 mr-3' alt='post tag'
        />
        <p className='flex-1 font-bold '>{username}</p>
     
     
         {/* ... icon */}

<PostMenu/>



         
 
      </div>
      {/** img */}

      <img className='object-cover w-full ' alt='post img' src={img} />

      {/** Buttons */}

      {
        session && ( <div className='flex justify-between px-4 py-4'>
        <div className='flex space-x-4'>
          {hasLiked?(<HeartIconFilled onClick={likePost} className="btns text-red-600"/>):(<HeartIcon onClick={likePost} className='btns' />)}
          
          <ChatIcon className='btns' />
          <PaperAirplaneIcon className='btns' />
        </div>
        <BookmarkIcon className='btns' />
      </div>)
      }
    

      {/** Caption */}
      <div>
        <p className='p-5 truncate'>
          {likes.length>0 && (<p className="font-bold mb-1" >{likes.length} likes</p>)}
          <span className='font-bold mr-1'>{username} </span>
          {caption}

        </p>

      </div>
      {/** Comments **/}

{comments.length >0 && (

  <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
{

  comments.map(comment=>(<div key={comment.id} className="flex items-center space-x-2 mb-3">

<img  className="h-7 rounded-full" src={comment.data().userImage} alt="" />

<p className="text-sm flex-1"><span className="font-bold">{comment.data().username}</span> {" "} {comment.data().comment}</p>
<Moment fromNow className="pr-5 text-xs">{ comment.data().timestamp?.toDate().toString()  } 
</Moment>


  </div>))
}


  </div>

)}





      {/** Input box **/}
  {
    session && (   <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-6' />
        <input
          type='text'
          value={comment}
          onChange={e=>setComment(e.target.value)}
          placeholder='Add a comment...'
          className='border-none flex-1 focus:ring-0 outline-none'
        />
        <button type='submit' disabled={!comment.trim()} onClick={addComment} className='font-semibold text-yellow-600'>Post</button>
      </form>)
  }

   

    </div>
  )
}

export default Post
