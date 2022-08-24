import React, { useEffect, useRef, useState } from "react";


let flexContainer = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

let customW65 = {
    width: "65%",
};
let customW35 = {
    width: "35%",
};

const Todo = () => {
    const [newItem, setNewItem] = useState({
        name: ''
    });
    const [items, setItems] = useState([]);
    const itemInput = useRef(null);

    useEffect(() => {
        const lsItems = localStorage.getItem("items");
        if (!lsItems) localStorage.setItem("items", JSON.stringify(items));
        else setItems(JSON.parse(lsItems));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    const deleteItem = (index) => {
        let filteredItems = items.filter((_, idx) => idx !== index);
        setItems(filteredItems);
    };

    const handleInput = (e) => {
        setNewItem({ name: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        itemInput.current.value = "";
        // don't allow empty values &
        // repeated values by pressing "add" button
        // by resetting the "newItem" variable
        if (newItem.name !== "") {
            setItems([...items, newItem]);
            setNewItem({ name: "" });
        }
    };

    return (
        <div style={flexContainer}>
            <div className="card w-25 text-bg-light">
                <div className="card-body">
                    <h1 className="card-title">Todo-list</h1>
                    <div className="row p-3">
                        <form onSubmit={handleClick}>
                            <input
                                id="input"
                                type="text"
                                className="form-control"
                                style={customW65}
                                ref={itemInput}
                                onChange={handleInput}
                                value={newItem.name}
                            />
                            <button className="btn btn-secondary" style={customW35} onClick={handleClick}>
                                Add to list
                            </button>
                        </form>
                    </div>
                    <ul className="list-group">
                        {items.length > 0 ? (
                            items.map((item, idx) => (
                                <li key={idx} className="list-group-item">
                                    {item.name}
                                    {/* prettier-ignore */}
                                    <button className="btn btn-warning float-end" onClick={() => { deleteItem(idx); }}>
                                        Delete
                                    </button>
                                </li>
                            ))
                        ) : (
                            <div>Empty list!</div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;