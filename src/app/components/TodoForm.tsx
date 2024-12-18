"use client";
import { useState } from "react";

interface TodoFormProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText("");
        }
    };

    return (
        <form className="flex justify-between" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
                className="border border-zinc-500 p-2 rounded-lg w-full bg-zinc-800 text-white"
            />
            <button
                type="submit"
                className="w-20 ml-2 p-2 bg-sky-500 hover:bg-sky-800 hover:scale-105 duration-300 text-white rounded-lg"
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;
