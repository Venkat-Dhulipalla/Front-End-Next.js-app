"use client";

import TaskForm from "@/components/TaskForm";
import { Header } from "@/components/Header";
import { api } from "@/lib/api";

export default function CreateTask() {
  const handleSubmit = async (data: { title: string; color: string }) => {
    await api.createTask(data);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-[#444444]">
        <div className="max-w-3xl mx-auto p-8">
          <TaskForm onSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
}
