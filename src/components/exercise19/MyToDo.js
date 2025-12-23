import { useState } from "react";

export function MyToDo() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    id: null,
    text: "",
    completed: false,
  });
  const [editingId, setEditingId] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  function handleChange(e) {
    setCurrentTask((prev) => ({ ...prev, text: e.target.value }));
  }

  function handleAddTask() {
    if (currentTask.text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: currentTask.text,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);

    setCurrentTask({ id: null, text: "", completed: false });
  }

  function handleDelete(id) {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  }

  function handleEdit(id) {
    setEditingId(id);
    let task = tasks.find((t) => t.id === id);
    setEditingValue(task.text);
  }

  function handleEditChange(e) {
    setEditingValue(e.target.value);
  }

  function handleSave() {
    if (editingValue.trim() === "") return;

    setTasks((prev) => {
      return prev.map((t) =>
        t.id === editingId ? { ...t, text: editingValue } : t
      );
    });

    setEditingId(null);
    setEditingValue("");
  }

  function handleCancel() {
    setEditingId(null);
    setEditingValue("");
  }

  function handleComplete(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: true } : t))
    );
  }

  return (
    <>
      <input value={currentTask.text} onChange={handleChange} />
      <button className="btn btn-success m-2" onClick={handleAddTask}>
        Add Task
      </button>
      <p>Total: {tasks.length}</p>
      <p>Completed: {tasks.filter((t) => t.completed).length}</p>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.id === editingId ? (
                <>
                  <input value={editingValue} onChange={handleEditChange} />
                  <button
                    className="btn btn-primary mx-2 my-1"
                    onClick={() => handleSave(task.id)}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger mx-2 my-1"
                    onClick={() => handleCancel(task.id)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={task.completed ? "text-success text-decoration-line-through" : "text-dark"}
                  >
                    {task.text}
                  </span>
                  <button
                    className="btn btn-danger mx-2 my-1"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary mx-2 my-1"
                    onClick={() => handleEdit(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-info"
                    disabled={task.completed}
                    onClick={() => handleComplete(task.id)}
                  >
                    Mark Complete
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
