"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Task } from "@/types/task";
import { api } from "@/lib/api";
import { Header } from "@/components/Header";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const tasks = await api.getTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (task: Task) => {
    try {
      await api.updateTask(task.id, { completed: !task.completed });
      await loadTasks();
    } catch (error) {
      console.error("Failed to toggle task:", error);
    }
  };

  const deleteTask = async (id: number) => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    try {
      await api.deleteTask(id);
      await loadTasks();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="min-h-screen bg-[#444444]">
      <Header />
      <div className="max-w-3xl mx-auto p-8">
        {/* Create Task Button */}
        <Link
          href="/create"
          className="w-full bg-[#1E6F9F] hover:bg-[#1E6F9F]/90 text-white py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          Create Task
          <span className="text-xl">⊕</span>
        </Link>

        {/* Task Counters */}
        <div className="flex justify-between mt-8">
          <div className="flex items-center gap-2">
            <span className="text-[#4EA8DE]">Tasks</span>
            <span className="bg-[#333333] text-white px-2 py-0.5 rounded-full text-sm">
              {tasks.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#8284FA]">Completed</span>
            <span className="bg-[#333333] text-white px-2 py-0.5 rounded-full text-sm">
              {completedCount}
            </span>
          </div>
        </div>

        {/* Task List or Empty State */}
        <div className="mt-6">
          {loading ? (
            <div className="text-center text-white">Loading...</div>
          ) : tasks.length === 0 ? (
            <div className="border-t border-[#333333] rounded-lg pt-16 px-6 flex flex-col items-center text-center">
              <svg
                className="w-12 h-12 mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#808080"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <p className="text-[#808080] font-bold">
                You don't have any tasks registered yet.
              </p>
              <p className="text-[#808080]">
                Create tasks and organize your to-do items.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-[#262626] rounded-lg p-4 flex items-center gap-4"
                  style={{ borderLeft: `4px solid ${task.color}` }}
                >
                  <button
                    onClick={() => toggleTask(task)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      task.completed
                        ? "bg-[#8284FA] border-[#8284FA]"
                        : "border-[#4EA8DE]"
                    }`}
                  >
                    {task.completed && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>

                  <Link
                    href={`/edit/${task.id}`}
                    className={`flex-1 text-white ${
                      task.completed ? "line-through text-[#808080]" : ""
                    }`}
                  >
                    {task.title}
                  </Link>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-[#808080] hover:text-red-500"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
