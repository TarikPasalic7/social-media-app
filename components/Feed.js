import Stories from "./Stories"
import Posts from "./Posts"


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
        <section>
              {/* Profile */}
                
               {/* Suggestions */}
               </section>
        </main>
    )
}

export default Feed

