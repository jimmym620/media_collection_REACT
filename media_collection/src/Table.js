import React from "react";

const Table = ({
    list,
    removeFromList,
    editItemInList,
    handleShowModal,
    setEditMode,
}) => {
    return (
        <div className="flex justify-center w-full">
            <table className="table-fixed sm:w-full md:w-1/2 ">
                <thead className=" bg-gray-400">
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
                                        onClick={() => removeFromList(item.id)}
                                    >
                                        Remove
                                    </button>
                                    <button
                                        className="tableRemoveBTN"
                                        onClick={() => {
                                            editItemInList(item.id);
                                            setEditMode(true);
                                            handleShowModal();
                                        }}
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
    );
};

export default Table;
