"use client";

import { Input, Textarea } from "@heroui/react";
import { ProjectData } from "@/app/projects/new/page";

interface ProjectBasicsProps {
    data: ProjectData;
    updateData: (key: keyof ProjectData, value: any) => void;
}

export default function ProjectBasics({ data, updateData }: ProjectBasicsProps) {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-xl font-semibold mb-2">Project Basics</h2>
                <p className="text-default-500 mb-6">Start by naming your project. You can change this later.</p>
            </div>

            <Input
                label="Project Name"
                placeholder="e.g. The Lighthouse"
                variant="bordered"
                value={data.name}
                onValueChange={(val) => updateData("name", val)}
                isRequired
                size="lg"
            />

            <Textarea
                label="Description / Notes"
                placeholder="Any initial notes about this production..."
                variant="bordered"
                value={data.notes}
                onValueChange={(val) => updateData("notes", val)}
                minRows={3}
            />
        </div>
    );
}
