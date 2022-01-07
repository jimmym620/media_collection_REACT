import React, { Component } from "react";

const Table = ({ list, removeFromList, editItemInList, handleShowModal }) => {
    return (
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
                                        onClick={() => removeFromList(item.id)}
                                    >
                                        Remove
                                    </button>
                                    <button
                                        className="tableRemoveBTN"
                                        onClick={() => {
                                            editItemInList(item.id);

                                            // handleShowModal();
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
