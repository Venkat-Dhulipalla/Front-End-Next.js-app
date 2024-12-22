'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import TaskForm from '@/components/TaskForm';
import { api } from '@/lib/api';
import { Task } from '@/types/task';

export default function EditTask() {
  const params = useParams();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTask();
  }, []);

  const loadTask = async () => {
    try {
      const tasks = await api.getTasks();
      const task = tasks.find(t => t.id === Number(params.id));
      if (task) setTask(task);
    } catch (error) {
      console.error('Failed to load task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: { title: string; color: string }) => {
    if (!task) return;
    await api.updateTask(task.id, data);
  };

  if (loading) return <div>Loading...</div>;
  if (!task) return <div>Task not found</div>;

  return <TaskForm initialData={task} onSubmit={handleSubmit} />;
}
