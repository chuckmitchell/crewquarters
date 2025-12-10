"use client";

import { Textarea, Card, CardBody, Button } from "@heroui/react";
import { ProjectData } from "@/app/projects/new/page";
import { UserPlus, X } from "lucide-react";
import { useState } from "react";

interface RosterInputProps {
    data: ProjectData;
    updateData: (key: keyof ProjectData, value: any) => void;
}

export default function RosterInput({ data, updateData }: RosterInputProps) {
    const [pasteInput, setPasteInput] = useState("");

    const handleSmartPaste = () => {
        if (!pasteInput.trim()) return;

        const newNames = pasteInput
            .split(/\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0);

        // Simple de-duplication against current list could happen here if needed
        const updatedCrew = [...data.crew, ...newNames];
        updateData("crew", updatedCrew);
        setPasteInput("");
    };

    const removeCrewMember = (index: number) => {
        const updatedCrew = data.crew.filter((_, i) => i !== index);
        updateData("crew", updatedCrew);
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-xl font-semibold mb-2">Cast & Crew Roster</h2>
                <p className="text-gray-500 mb-6">Add your team members. Use the text area to paste a list of names quickly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                        <UserPlus size={18} />
                        Smart Paste
                    </h3>
                    <Textarea
                        label="Quick Add Names"
                        placeholder="Paste a list of names here (one per line)...
John Doe
Jane Smith
Bob Director"
                        variant="bordered"
                        minRows={8}
                        value={pasteInput}
                        onValueChange={setPasteInput}
                    />
                    <Button color="primary" variant="flat" onPress={handleSmartPaste} isDisabled={!pasteInput.trim()}>
                        Add to Roster
                    </Button>
                </div>

                <div className="space-y-4">
                    <h3 className="font-medium">Current Roster ({data.crew.length})</h3>
                    <div className="max-h-[300px] overflow-y-auto border rounded-xl p-2 bg-gray-50">
                        {data.crew.length === 0 ? (
                            <div className="h-full flex items-center justify-center text-gray-400 text-sm italic p-8">
                                No team members added yet.
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {data.crew.map((name, idx) => (
                                    <Card key={idx} shadow="sm">
                                        <CardBody className="py-2 px-3 flex flex-row justify-between items-center">
                                            <span className="font-medium">{name}</span>
                                            <Button isIconOnly size="sm" variant="light" color="danger" onPress={() => removeCrewMember(idx)}>
                                                <X size={16} />
                                            </Button>
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
