import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Table from "./Table";
import Modal from "./Modal";

function App() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState("");

    const [list, setList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [itemEdit, setItemEdit] = useState([]);
    const prevItemEdit = { ...itemEdit };
    const handleDataSubmit = () => {
        if (editMode) {
            if (title !== prevItemEdit.title) {
                if (title !== "") {
                    itemEdit.title = title;
                    setTitle("");
                }
            }
            if (type !== prevItemEdit.type) {
                if (type !== "") {
                    itemEdit.type = type;
                    setType("");
                }
            }
            if (year !== prevItemEdit.year) {
                if (year !== "") {
                    itemEdit.year = year;
                    setYear("");
                }
            }
            setEditMode(false);
        } else {
            const formData = {
                id: new Date().getTime().toString(),
                title,
                type,
                year,
            };
            if (Object.values(formData).some((x) => x === null || x === "")) {
                return;
            } else {
                setList([...list, formData]);
                setTitle("");
                setType("");
                setYear("");
            }
        }
    };

    const clearList = () => {
        setList([]);
    };

    const editItemInList = (id) => {
        setItemEdit(list.find((item) => item.id === id));
    };

    const removeFromList = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="App flex flex-col min-h-screen">
            <header>
                <h1>My Media Collection</h1>
            </header>
            <main className="flex-grow">
                <div className="form w-1/4 flex-row mx-auto bg-gray-200 m-8 p-8 ">
                    <div className="formInputContainer ">
                        <label className="formLabel" htmlFor="titleInp">
                            Title:
                        </label>
                        <input
                            className=" w-full"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="formInputContainer">
                        <label className="formLabel" htmlFor="typeInp">
                            Type:
                        </label>
                        <input
                            className="w-full"
                            name="typeInp"
                            type="text"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                    <div className="formInputContainer">
                        <label className="formLabel" htmlFor="yearInp">
                            Year:
                        </label>
                        <input
                            className="w-full"
                            name="yearInp"
                            type="number"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-1/2 mx-auto mt-8">
                        <button
                            className="formButton"
                            onClick={handleDataSubmit}
                        >
                            Submit
                        </button>
                        <button className="formButton" onClick={clearList}>
                            Clear Collection
                        </button>
                    </div>
                </div>
                <div>
                    <Modal
                        list={list}
                        show={showModal}
                        handleCloseModal={handleCloseModal}
                        setTitle={setTitle}
                        setType={setType}
                        setYear={setYear}
                        itemEdit={itemEdit}
                        handleDataSubmit={handleDataSubmit}
                    />
                </div>
                <Table
                    list={list}
                    removeFromList={removeFromList}
                    editItemInList={editItemInList}
                    handleShowModal={handleShowModal}
                    setEditMode={setEditMode}
                />
            </main>
            <footer>yo</footer>
        </div>
    );
}

export default App;
