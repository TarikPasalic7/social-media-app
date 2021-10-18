import faker from "faker"
import React,{useEffect} from "react";
function Stories() {
useEffect(() => {
    const suggestions=[...Array(20)].map((_,i)=>(
    {

        ...faker.helpers.contextualCard(),
        id:i,
    }

    ));
    console.log(suggestions);
   
}, [])
    return (
        <div>
            Stories
        </div>
    )
}

export default Stories
