import Post from "./Post";

function Posts() {
    const posts=[
        {
            id:"1",
            username:"sssanpha",
            userImg:"https://www.w3schools.com/howto/img_avatar.png",
            img:"https://www.w3schools.com/howto/img_avatar.png",
            caption:"caption"
        },
        {
            id:"2",
            username:"secondusa",
            userImg:"https://www.w3schools.com/howto/img_avatar.png",
            img:"https://www.w3schools.com/howto/img_avatar.png",
            caption:"caption 2"
        },
        {
            id:"3",
            username:"third usa",
            userImg:"https://www.w3schools.com/howto/img_avatar.png",
            img:"https://www.w3schools.com/howto/img_avatar.png",
            caption:"caption 3"
        }
    ]

    return (
        <div>
            {posts.map((post)=>(
              
              <Post key={post.id} 
              id={post.id} 
              username={post.username}
              userImg={post.userImg}
             img={post.img}
             caption={post.caption}
            />
            ))}
            
        </div>
    )
}

export default Posts
