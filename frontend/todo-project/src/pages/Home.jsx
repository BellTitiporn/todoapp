import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Update time every second
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const addTodo = () => {
        if (task.trim()) {
            setTodos([...todos, { text: task, completed: false }]);
            setTask("");
        }
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <>
            <Navbar />
            <div className="p-4 max-w-md mx-auto">
                <h1 className="text-2xl font-bold text-center">📌 TODO APP</h1>
                {/* Show Current Date & Time */}
                <p className="text-lg mt-2">
                    📅 {time.toLocaleDateString()} | 🕒 {time.toLocaleTimeString()}
                </p>


                {/* Task Input */}
                <div className="flex my-4">
                    <input
                        className="flex-1 border p-2"
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add new task..."
                    />
                    <button className="bg-blue-500 text-white p-2 ml-2" onClick={addTodo}>
                        Add
                    </button>
                </div>

                {/* Todo List */}
                <ul className="list-none">
                    {todos.map((todo, index) => (
                        <li key={index} className="flex justify-between p-2 border-b">
                            <span
                                className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""
                                    }`}
                                onClick={() => toggleComplete(index)}
                            >
                                {todo.text}
                            </span>
                            <button className="text-red-500" onClick={() => deleteTodo(index)}>
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Optional Quote */}
                <p className="mt-4 italic text-center">✨ "Small steps lead to big success!"</p>
            </div></>
    );
};

export default Home;
