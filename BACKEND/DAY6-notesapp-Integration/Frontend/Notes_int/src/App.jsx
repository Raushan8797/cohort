import axios from "axios";
import React, { useEffect, useState } from "react";
import NotesCard from "./component/NotesCard";

const App = () => {
  const [formvalues, setFormvalues] = useState({
    title: "",
    description: "",
  });

  const [updatedNoteId, setUpdatedNoteId] = useState(null)

  const [allnotes, setAllnotes] = useState([]);
  const handlechange = (e) => {
    setFormvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let getAllNotes = async () => {
    try {
      let response = await axios.get("http://localhost:3000/notes/allNotes");

      setAllnotes(response.data.data);
    } catch (error) {
      console.log("error in getting data", error);
    }
  };  

  useEffect(() => {
    getAllNotes();
  }, []);


  const handelSubmit = async (e) => {
    e.preventDefault();

if (updatedNoteId){
  let res = await axios.put(
      `http://localhost:3000/notes/${updatedNoteId}`,
    formvalues,
    );
    setUpdatedNoteId(null),
    console.log(res);
}else{
   let res = await axios.post(
      "http://localhost:3000/notes/create",
      formvalues,
    );
    console.log(res);
}
    

    setFormvalues({
      title: "",
      description: "",
    });
    getAllNotes();
  };

  let noteForUpdate = (note) => {
    console.log(note);
    setUpdatedNoteId (note._id)
        setFormvalues({
      title: note.title,
      description: note.description,
    })
  };

  let deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res);
      getAllNotes();
    } catch (error) {
      console.log("error in delete notes", error);
    }
  };

  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold"> Notes app </h1>

      <form
        onSubmit={handelSubmit}
        className=" w-100 flex flex-col p-4 border-2  border-black rounded-xl gap-5 "
      >
        <input
          onChange={handlechange}
          name="title"
          value={formvalues.title}
          className="p-2 outline-none text-xl border border-black rounded"
          type="text"
          placeholder="Title"
        />
        <input
          onChange={handlechange}
          name="description"
          value={formvalues.description}
          className="p-2 outline-none text-xl border border-black rounded"
          type="text "
          placeholder="Description"
        />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-500">
        {updatedNoteId? "Update Note ":   "Add Note"}
        </button>
      </form>

      <div className="flex flex-wrap gap-4">
        {allnotes.map((val) => (
          <NotesCard
            key={val._id}
            note={val}
            noteForUpdate={noteForUpdate}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
