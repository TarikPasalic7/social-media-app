import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition, } from "@headlessui/react";
import { Fragment,useRef,useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import {db,storage} from '../firebase'
import { addDoc, collection, serverTimestamp, updateDoc,doc } from "@firebase/firestore";
import { useSession } from "next-auth/react";
import { ref,getDownloadURL,uploadString } from "@firebase/storage";



function Modal() {
    const [open, setOpen] = useRecoilState(modalState);
     const filePicker = useRef(null);
     const captionRef = useRef(null)
     const [selectedFile, setSelectedFile] = useState(null);
     const [loading, setLoading] = useState(false);
    
       const {data:session}= useSession();
     const addImageToPost = (e) =>{
         const reader = new FileReader();
         if(e.target.files[0]){
             reader.readAsDataURL(e.target.files[0]);
         }
         reader.onload = (readerEvent) => {
             setSelectedFile(readerEvent.target.result);
         }

     };


    const uploadPost = async (e) =>{
       
        if(loading)
        return;
        if(selectedFile===null)
        return;
        setLoading(true);

        const dockRef= await addDoc(collection(db,'posts'),{

            username:session.user.username,
            caption:captionRef.current.value,
            profileImg:session.user.image,
            timestamp:serverTimestamp()
        })
        console.log(dockRef.id);
        const imageRef= ref(storage,`posts/${dockRef.id}/image`);
        await uploadString(imageRef,selectedFile,"data_url").then(async snapshot=>{
               const downloadURL = await getDownloadURL(imageRef);
               await updateDoc(doc(db,'posts',dockRef.id),{

                image:downloadURL
               })

        })
        setOpen(false);
        setLoading(false);
        setSelectedFile(null)
    }

    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}>


                    <div className='flex items-end justify-center min min-h[800px] sm:min-h-screen
                pt-4 px-4 pb-20 text-center sm:block sm-p-0' >
                        <Transition.Child as={Fragment} enter='ease-out duration-300'
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0" >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
                        </Transition.Child>
                        {/** Centering the modal contents */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>

                        <Transition.Child as={"Fragment"} enter='ease-out duration-300'
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />

                            <div className="inline-block align-bottom bg-white rounded-lg  px-4 pt-5 pb-4  text-left
                 overflow-hidden shadow-xl transform transition-all sm:my-8 mt-20 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                             <form>
                                 {selectedFile?( <img src={selectedFile} alt="uploaded post" onClick={()=>setSelectedFile(null)}/> ):(<div  onClick={()=>filePicker.current.click()}
                                 className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 cursor-pointer">

                                     <CameraIcon  className="h-6 w-6 text-blue-500" aria-hidden="true" />
                                 </div>)

                                 }
                                 
                               
                                 <div>
                                     <div className="mt-3 text-center sm:mt-5">
                                         <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                         Upload a photo
                                         </Dialog.Title>

                                     </div>
                                     <input 
                                     ref={filePicker}
                                     type="file"
                                     hidden
                                     onChange={addImageToPost}
                                     required
                                     
                                     
                                     />
                                     
                                     
                                 </div>
                                 <div>
                                <input className="border-none focus:ring-0 w-full text-center"
                                type="text" ref={captionRef} placeholder="Please enter a caption" required />
                                         
                                 </div>

                           <div className="mt-5 sm:mt-6">

                               <button onClick={uploadPost} type="button" 
                               className="inline-flex justify-center w-full rounded-md border border-transparent
                               shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-600
                               focus:outline-none focus:rounded-full focus:ring-offset-2 focus:ring-yellow-500 sm:text-sm
                               disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300">

                              {loading? "Uploading ...":"Upload Post"}

                               </button>
                               

                           </div>

                             </form>
                            </div>

                        </Transition.Child>




                    </div>
                </Dialog>

            </Transition.Root>
        </div>
    )
}

export default Modal
