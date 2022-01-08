import React from "react";

const Modal = ({
    handleCloseModal,
    show,
    setTitle,
    setType,
    setYear,
    itemEdit,
    handleDataSubmit,
}) => {
    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

    const handleCompleteEdit = () => {
        // if (Object.values(itemEdit).some((x) => x === null || x === "")) {
        //     return;
        // }

        handleDataSubmit();
        handleCloseModal();
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="formInputContainer ">
                    <label className="formLabel" htmlFor="titleInp">
                        Title:
                    </label>

                    <input
                        className=" w-full border border-black "
                        type="text"
                        placeholder={itemEdit.title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className=" formInputContainer">
                    <label className="formLabel" htmlFor="typeInp">
                        Type:
                    </label>
                    <input
                        className="w-full border border-black"
                        name="typeInp"
                        type="text"
                        placeholder={itemEdit.type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div className="formInputContainer">
                    <label className="formLabel" htmlFor="yearInp">
                        Year:
                    </label>
                    <input
                        className="w-full border border-black"
                        name="yearInp"
                        type="number"
                        placeholder={itemEdit.year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <button className="formButton" onClick={handleCompleteEdit}>
                    Complete
                </button>
                <button className="formButton" onClick={handleCloseModal}>
                    Cancel
                </button>
            </section>
        </div>
    );
};

export default Modal;
