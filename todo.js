function Todo({todo, index, remove}){
    function handle(){
        remove(index);
    }
    
    return(<>
        <div key={index} className="todo">{todo.text}</div>
        <button key={index} onClick={handle}>Delete</button>
        </>);
}