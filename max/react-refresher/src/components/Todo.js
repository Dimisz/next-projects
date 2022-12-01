const Todo = ({text}) => {
    const deleteHandler = () => {
        alert(`${text} clicked`);
    };

    return (
        <div className="card">
            <h2>{text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;