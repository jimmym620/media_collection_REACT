import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [formData, setFormData] = useState({
        title: title,
        type: type,
    });

    const handleTitleSubmit = () => {
        setFormData({
            title,
            type,
        });
    };
    return (
        <div className="App">
            <h1>My Media Collection</h1>
            <div className="form">
                <label htmlFor="titleInp">Title:</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="typeInp">Type:</label>
                <input type="text" onChange={(e) => setType(e.target.value)} />
                <button onClick={handleTitleSubmit}>Submit</button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Heading</th>
                        <th>Type</th>
                    </tr>
                    <tr>
                        <th>{formData.title}</th>
                        <th>{formData.type}</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default App;
