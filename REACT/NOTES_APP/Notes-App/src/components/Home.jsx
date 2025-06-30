import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { UpdateNotes } from '../redux/NotesSlice'
import { AddNotes } from '../redux/NotesSlice'

const Home = () => {

    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [searchParams, setParams] = useSearchParams(); //searchParams is a valid object not undefined and  returns null if the key doesn't exist.
    const notesId = searchParams.get("notesId");
    const dispatch = useDispatch();
    const allNotes = useSelector((state) => state.note.notes);


    useEffect(() => {
        if (notesId) {
            const note = allNotes.find((p) =>
                p._id === notesId)
            setTitle(note.title);

            setValue(note.content);


        }

    }, [notesId])

    function handleCreate() {
        const note = {
            title: title,
            content: value,
            _id: notesId ||
                Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if (notesId) {
            //update
            dispatch(UpdateNotes(note))

        }

        else {
            //create
            dispatch(AddNotes(note))
        }

        //after creation or updation
        setTitle('')
        setParams({})
        setValue('')

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
                                placeholder='Enter title here'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='btn'>
                            <button
                                onClick={handleCreate}
                                className='ml-1.5'>

                                 {
                                    notesId ? "update Notes" : "Create Notes"
                                } 

                                
                            </button>
                        </div>
                    </div>

                    <div id="writing-area" className='mt-5'>
                        <h4 id="heading">NotePad:</h4>
                        <textarea
                            className='mt-1.5 w-[500px] h-[300px] p-4'
                            placeholder='Enter your content here'
                            onChange={(e) => setValue(e.target.value)}
                            value={value}

                        >

                        </textarea>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default Home
