import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState("");

    const [list, setList] = useState([]);

    const handleTitleSubmit = () => {
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
    };

    const clearList = () => {
        setList([]);
    };

    const editItemInList = (id) => {
        const itemToEdit = list.find((item) => item.id === id);
        itemToEdit.title = "bigner";
        console.log(itemToEdit);
    };

    const removeFromList = (id) => {
        setList(list.filter((item) => item.id !== id));
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
                            onClick={handleTitleSubmit}
                        >
                            Submit
                        </button>
                        <button className="formButton" onClick={clearList}>
                            Clear Collection
                        </button>
                    </div>
                </div>
                <div className="flex justify-center m-8">
                    <table className="table-fixed w-1/2">
                        <thead className="text-center bg-gray-400">
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Year</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-200">
                            {list.map((item) => {
                                return (
                                    <tr className="break-words" key={item.id}>
                                        <th>{item.title}</th>
                                        <th>{item.type}</th>
                                        <th>{item.year}</th>
                                        <th className="w-1/2">
                                            <button
                                                className="tableRemoveBTN"
                                                onClick={() =>
                                                    removeFromList(item.id)
                                                }
                                            >
                                                Remove
                                            </button>
                                            <button
                                                className="tableRemoveBTN"
                                                onClick={() =>
                                                    editItemInList(item.id)
                                                }
                                            >
                                                Edit
                                            </button>
                                        </th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
            <footer>yo</footer>
        </div>
    );
}

export default App;
