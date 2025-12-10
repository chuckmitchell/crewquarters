"use client";

import { Input, Button, Card, CardBody } from "@heroui/react";
import { ProjectData } from "@/app/projects/new/page";
import { useState } from "react";
import { Hotel, Plus, Trash2 } from "lucide-react";

interface InventoryInputProps {
    data: ProjectData;
    updateData: (key: keyof ProjectData, value: any) => void;
}

export default function InventoryInput({ data, updateData }: InventoryInputProps) {
    const [name, setName] = useState("");
    const [count, setCount] = useState("");

    const addBlock = () => {
        if (!name || !count) return;
        const newBlock = { name, count: parseInt(count) };
        updateData("inventory", [...data.inventory, newBlock]);
        setName("");
        setCount("");
    };

    const removeBlock = (index: number) => {
        const updatedInv = data.inventory.filter((_, i) => i !== index);
        updateData("inventory", updatedInv);
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-xl font-semibold mb-2">Housing Inventory</h2>
                <p className="text-gray-500 mb-6">Optional: Do you already have rooms blocked off at specific hotels?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="font-medium">Add Property Block</h3>
                    <div className="space-y-3">
                        <Input
                            label="Property Name"
                            placeholder="e.g. Lunenburg Arms"
                            value={name}
                            onValueChange={setName}
                            startContent={<Hotel size={18} className="text-gray-400" />}
                        />
                        <Input
                            type="number"
                            label="Room Count"
                            placeholder="e.g. 10"
                            value={count}
                            onValueChange={setCount}
                        />
                        <Button color="secondary" className="w-full" onPress={addBlock} isDisabled={!name || !count}>
                            <Plus size={18} /> Add Block
                        </Button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-medium">Current Inventory</h3>
                    {data.inventory.length === 0 ? (
                        <div className="text-gray-400 italic text-sm">No inventory added yet. This is optional.</div>
                    ) : (
                        <div className="space-y-3">
                            {data.inventory.map((item, idx) => (
                                <Card key={idx} shadow="sm">
                                    <CardBody className="flex flex-row justify-between items-center py-3">
                                        <div>
                                            <div className="font-semibold">{item.name}</div>
                                            <div className="text-sm text-gray-500">{item.count} Rooms</div>
                                        </div>
                                        <Button isIconOnly color="danger" variant="light" onPress={() => removeBlock(idx)}>
                                            <Trash2 size={18} />
                                        </Button>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
