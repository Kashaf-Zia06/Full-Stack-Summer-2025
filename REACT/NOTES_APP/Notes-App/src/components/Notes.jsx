import React from 'react'
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom'

import "./Notes.css"

const Notes = () => {

    const { id } = useParams()
    const allNotes = useSelector((state) => state.note.notes);
    const note = allNotes.find((p) => p._id === id); // better than filter()[0]


    if (!note) {
        return <div className="text-center mt-36 text-red-600 font-semibold">Note not found!</div>;
    }
    return (
       <div id="body" className='w-full min-h-screen'>
            <div id="content min-h-screen mt-10">

                <div className='flex flex-col justify-center place-items-center mt-36 gap-15px '>
                    <div id='start ' className='flex gap-4 align-middle mt-6 '>

                        <div id="content">

                            <label >Title: </label>
                            <input type="text"
                                className=' border-gray-700 p-5 mt-1.5'
                                // placeholder='Enter title here'
                                disabled
                                value={note.title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        {/* <div className='btn'>
                            <button
                                onClick={handleCreate}
                                className='ml-1.5'>

                                {
                                    notesId ? "update Notes" : "Create Notes"
                                }
                            </button>
                        </div> */}
                    </div>

                    <div id="writing-area" className='mt-5'>
                        <h4 id="heading">NotePad:</h4>
                        <textarea
                            className='mt-1.5 w-[500px] h-[300px] p-4'
                            // placeholder='Enter your content here'
                            disabled
                            onChange={(e) => setValue(e.target.value)}
                            value={note.content}

                        >

                        </textarea>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Notes


// import React from 'react';
// import { useSelector } from 'react-redux';
// import "./Notes.css"


// const Notes = () => {
//     const notes = useSelector((state) => state.note?.notes);

//     const { searchTerm } = useSelector((state) => state.search);

//     const filteredNotes = notes.filter(note =>
//         note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         note.content.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <>
//             {filteredNotes.map(note => (
//                 <div key={note._id}>{note.title}</div>
//             ))}
//         </>
//     );
// };
// export default Notes