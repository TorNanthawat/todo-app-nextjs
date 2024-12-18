"use client";
import { useState } from "react";
import { Todo } from "../types/todo";

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (id: string, newText: string) => void;
};

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo }: TodoListProps) => {
    const [editingId, setEditingId] = useState<string | null>(null); // To-Do ที่กำลังแก้ไข
    const [editText, setEditText] = useState<string>(""); // ข้อความที่กำลังแก้ไข

    const startEditing = (id: string, currentText: string) => {
        setEditingId(id);
        setEditText(currentText);
    };

    const saveEdit = (id: string) => {
        updateTodo(id, editText); // อัพเดทข้อความ
        setEditingId(null); // ออกจากโหมดแก้ไข
    };

    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className="flex items-center justify-between p-2 mt-4 border border-zinc-500 rounded-lg text-white max-w-full overflow-hidden"
                >
                    {/* Checkbox */}
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="mr-4 w-5 h-5 cursor-pointer flex-shrink-0"
                    />

                    {/* โหมดแก้ไข */}
                    {editingId === todo.id ? (
                        <div className="flex justify-between space-x-2 flex-grow">
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className="border border-zinc-500 p-1 w-full rounded-lg bg-zinc-800 truncate"
                            />
                            <button
                                onClick={() => saveEdit(todo.id)}
                                className="bg-sky-500 hover:bg-sky-800 hover:scale-105 duration-300 text-white px-2 py-1 rounded h-fit"
                            >
                                Save
                            </button>
                        </div>
                    ) : (
                        // โหมดปกติ
                        <div className="flex justify-between flex-grow cursor-pointer">
                            <span
                                onClick={() => startEditing(todo.id, todo.text)}
                                className={`w-40 truncate ${todo.completed ? "line-through text-gray-400" : ""}`}
                            >
                                {todo.text}
                            </span>
                            <span className="ml-4 font-medium text-gray-400 cursor-default flex-shrink-0">
                                {todo.completed ? "ทำแล้ว" : "ยังไม่ได้ทำ"}
                            </span>
                        </div>
                    )}

                    {/* ปุ่มลบ */}
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="bg-red-500 hover:bg-red-700 hover:scale-105 duration-300 text-white px-2 py-1 rounded ml-2 h-fit flex-shrink-0"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
