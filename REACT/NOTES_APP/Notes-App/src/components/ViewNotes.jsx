import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./ViewNotes.css"
import { DeleteNotes } from '../redux/NotesSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Notes from './Notes';
import edit from "./edit.jpg"
import copy from "./copy.jpg"
import share from "./share.jpg"
import deleted from "./delete.jpeg"
import view from "./view.jpg"


const ViewNotes = () => {

    const notes=useSelector((state)=>state.note.notes);
    const [searchTerm, setsearchTerm] = useState('');
    const dispatch = useDispatch();


    const filteredData = notes.filter((note) => //returns all the notes when you haven’t typed anything yet.
    //When searchTerm is empty, includes("") is true for every string.
        note.title.toLowerCase().includes(searchTerm.toLowerCase())||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );



    function handleDelete(notesId) {
        dispatch(DeleteNotes(notesId))
    }

    function handleCopyLink(noteId) {
        const link = `${window.location.origin}/?notesId=${noteId}`;
        navigator.clipboard.writeText(link).then(() => {
            toast.success("Link copied to clipboard!");
        });
    }



    return (
        <div>
            <div className='mt-2 ml-17 p-3  rounded-2xl'>
                <input id='search-inp'
                    type="search"
                    placeholder='Search here'
                    value={searchTerm}
                    onChange={(e) => { setsearchTerm(e.target.value) }}
                    className='p-4 pl-2 '
                />
            </div>

            <div className='flex flex-col gap-4 ml-20 flex-wrap mt-5 '>
                {
              

                  filteredData.length===0 ? <p className='no-notes text-red-600 text-2xl'> No Notes to Show</p> :
                    filteredData.length > 0 && filteredData.map((note) => {
                        return (
                            <div>
                                <div
                                    key={note._id}  // ✅ key added here
                                    className='border-2 border-[#2f2d2d] rounded-2xl align-middle place-content-center p-5 w-[300px]'
                                >
                                    <div id="title">
                                        {note.title}
                                    </div>

                                    <div id="content">
                                        {note.content}
                                    </div>

                                    <div className='flex gap-4 mt-2 place-content-center'>
                                        <button >
                                            <a href={`/?notesId=${note?._id}`}>
                                                <img src={edit} alt="edit" width={20} />
                                            </a>
                                        </button>
                                        <button  >
                                            <a href={`/notes/${note?._id}`} target="_blank">
                                                <img src={view} alt="view" width={20} />
                                            </a>
                                        </button>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(note?.content)
                                                toast("Copied to Clipboard")
                                            }}

                                        >
                                            <img src={copy} alt="copy" width={20} /></button>
                                        <button
                                            onClick={() => handleCopyLink(note._id)}
                                        >
                                            <img src={share} alt="Share" width={20} /></button>
                                        <button

                                            onClick={() => handleDelete(note._id)}
                                        >
                                            <img src={deleted} alt="delete" width={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })

                }
            </div>
        </div>
    );

}

export default ViewNotes
