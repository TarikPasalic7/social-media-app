import Stories from "./Stories"
import Posts from "./Posts"
import Profile from "./Profile"
import Suggestions from "./Suggestions"


function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Section Left */}
            <section className="col-span-2">
              {/* Stories */}
              <Stories/>
               {/* Posts */}
               <Posts/>

               </section>
        {/* Section Right */}
        <section className="hidden xl:inline-grid col-span-1">
              {/* Profile */}
              <div className="fixed top-20" >
              <Profile/>
                
                {/* Suggestions */}
                <Suggestions/>

              </div>
             
               </section>
        </main>
    )
}

export default Feed

