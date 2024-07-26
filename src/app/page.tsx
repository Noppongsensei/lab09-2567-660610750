"use client";
import { useState } from "react";
import Header from "@components/Header";
import TaskInput from "@components/TaskInput";
import Task from "@components/Task";
import Footer from "@components/Footer";
import { nanoid } from "nanoid";

interface TaskItem {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const addTask = (newTaskTitle: string) => {
    const newTask: TaskItem = { id: nanoid(), title: newTaskTitle, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const toggleDoneTask = (taskId: string) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <p className="text-center text-secondary fst-italic">
          All ({tasks.length}) Done ({tasks.filter(task => task.completed).length})
        </p>
        <TaskInput addTaskFunc={addTask} />
        {tasks.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            deleteTaskFunc={deleteTask}
            toggleDoneTaskFunc={toggleDoneTask}
            completed={task.completed}
            key={task.id}
          />
        ))}
      </div>
      <Footer year="2024" fullName="Noppong Anakhaphruek" studentId="660610750" />
    </div>
  );
}


