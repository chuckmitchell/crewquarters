"use client";

import { DateRangePicker, Input, Button, Card, CardBody } from "@heroui/react";
import { ProjectData } from "@/app/projects/new/page";
import { Trash2, Plus, CalendarDays } from "lucide-react";
import { parseDate } from "@internationalized/date";

interface ScheduleInputProps {
    data: ProjectData;
    updateData: (key: keyof ProjectData, value: any) => void;
}

export default function ScheduleInput({ data, updateData }: ScheduleInputProps) {

    const addBlock = () => {
        const newBlock = { name: "", startDate: "", endDate: "" };
        updateData("shootingDates", [...data.shootingDates, newBlock]);
    };

    const removeBlock = (index: number) => {
        const newBlocks = [...data.shootingDates];
        newBlocks.splice(index, 1);
        updateData("shootingDates", newBlocks);
    };

    const updateBlock = (index: number, field: string, value: any) => {
        const newBlocks = [...data.shootingDates];
        // @ts-ignore
        newBlocks[index][field] = value;
        updateData("shootingDates", newBlocks);
    };

    const handleDateChange = (index: number, range: any) => {
        if (range) {
            const newBlocks = [...data.shootingDates];
            newBlocks[index].startDate = range.start.toString();
            newBlocks[index].endDate = range.end.toString();
            updateData("shootingDates", newBlocks);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-xl font-semibold mb-2">The Schedule</h2>
                <p className="text-default-500 mb-6">Define your shooting dates and locations. We'll verify housing buffers for each block.</p>
            </div>

            <div className="space-y-4">
                {data.shootingDates.map((block, index) => (
                    <Card key={index} className="border border-default-200">
                        <CardBody className="p-4">
                            <div className="flex flex-col md:flex-row gap-4 items-start">
                                <div className="flex-grow space-y-4 w-full">
                                    <Input
                                        label="Location / Block Name"
                                        placeholder="e.g. Lunenburg, Week 1, Studio A"
                                        value={block.name}
                                        onValueChange={(val) => updateBlock(index, "name", val)}
                                        variant="bordered"
                                        isRequired
                                    />
                                    <DateRangePicker
                                        label="Shooting Dates"
                                        visibleMonths={2}
                                        onChange={(range) => handleDateChange(index, range)}
                                        value={
                                            block.startDate && block.endDate
                                                ? { start: parseDate(block.startDate), end: parseDate(block.endDate) }
                                                : null
                                        }
                                    />

                                    {block.startDate && block.endDate && (
                                        <div className="mt-2 p-3 bg-primary-50/50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-md text-sm border border-primary-100 dark:border-primary-800 flex justify-between items-center">
                                            <span className="font-medium">Accom. Window:</span>
                                            <span>
                                                {block.startDate} (-1) to {block.endDate} (+1)
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <Button
                                    isIconOnly
                                    color="danger"
                                    variant="light"
                                    onPress={() => removeBlock(index)}
                                    className="mt-2"
                                >
                                    <Trash2 size={20} />
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}

                <Button
                    startContent={<Plus size={20} />}
                    variant="bordered"
                    className="w-full h-16 border-2 border-dashed"
                    onPress={addBlock}
                >
                    Add Shooting Dates
                </Button>

                {data.shootingDates.length === 0 && (
                    <div className="text-center py-8 text-default-400">
                        <CalendarDays className="mx-auto mb-2 opacity-50" size={48} />
                        <p>No dates added yet. Click above to start your schedule.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
