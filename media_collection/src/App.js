import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [year, setYear] = useState("");
    const [formData, setFormData] = useState({
        title: title,
        type: type,
        year: year,
    });
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

    const testBtn = () => {
        console.log(list);
        setTitle("");
    };
    return (
        <div className="App flex flex-col min-h-screen">
            <header>
                <h1>My Media Collection</h1>
            </header>
            <main className="flex-grow">
                <div className="form">
                    <label htmlFor="titleInp">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="typeInp">Type:</label>
                    <input
                        name="typeInp"
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <label htmlFor="yearInp">Year:</label>
                    <input
                        name="yearInp"
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <button onClick={handleTitleSubmit}>Submit</button>
                    <button onClick={testBtn}>test</button>
                </div>
                <div className="flex justify-center m-8">
                    <table className="table-auto w-full">
                        <thead className="text-center bg-gray-400">
                            <tr>
                                <th>Heading</th>
                                <th>Type</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-200">
                            {list.map((item) => {
                                return (
                                    <tr>
                                        <th>{item.year}</th>
                                        <th>{item.type}</th>
                                        <th>{item.year}</th>
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
