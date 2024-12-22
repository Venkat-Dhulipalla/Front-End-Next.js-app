"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Task } from "@/types/task";

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: { title: string; color: string }) => Promise<void>;
}

const COLORS = [
  "#EF4444", // Red
  "#F97316", // Orange
  "#EAB308", // Yellow
  "#22C55E", // Green
  "#3B82F6", // Blue
  "#6366F1", // Indigo
  "#A855F7", // Purple
  "#EC4899", // Pink
  "#78716C", // Brown
];

export default function TaskForm({ initialData, onSubmit }: TaskFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData?.title || "");
  const [color, setColor] = useState(initialData?.color || COLORS[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit({ title, color });
      router.push("/");
    } catch (error) {
      console.error("Failed to submit task:", error);
    }
  };

  return (
    <div className="text-white">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="text-[#808080] hover:text-white transition-colors">
          ←
        </Link>
        <h2 className="text-2xl font-bold">Create Task</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[#808080] mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ex. Brush your teeth"
            className="w-full bg-[#262626] rounded-lg p-3 text-white border border-[#0D0D0D] focus:outline-none focus:border-[#1E6F9F]"
            required
          />
        </div>

        <div>
          <label className="block text-[#808080] mb-2">Color</label>
          <div className="flex gap-2 flex-wrap">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full ${
                  color === c ? "ring-2 ring-white ring-offset-2 ring-offset-[#444444]" : ""
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1E6F9F] hover:bg-[#1E6F9F]/90 py-3 rounded-lg transition-colors"
        >
          {initialData ? "Save" : "Add Task"}
        </button>
      </form>
    </div>
  );
}
