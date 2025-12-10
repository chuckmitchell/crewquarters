"use client";

import { useState } from "react";
import { Button, Card, CardBody } from "@heroui/react";
import StepIndicator from "@/components/create-project/step-indicator";
import ProjectBasics from "@/components/create-project/project-basics";
import RosterInput from "@/components/create-project/roster-input";
import ScheduleInput from "@/components/create-project/schedule-input";
import InventoryInput from "@/components/create-project/inventory-input";

export type ProjectData = {
    name: string;
    notes: string;
    crew: string[];
    shootingDates: { name: string; startDate: string; endDate: string }[];
    inventory: { name: string; count: number }[];
};

export default function NewProjectPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [projectData, setProjectData] = useState<ProjectData>({
        name: "",
        notes: "",
        crew: [],
        shootingDates: [],
        inventory: [],
    });

    const steps = [
        { title: "The Slate", description: "Project Basics" },
        { title: "Cast & Crew", description: "Roster Input" },
        { title: "The Schedule", description: "Shooting Dates" },
        { title: "Inventory", description: "Housing Blocks" },
    ];

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log("Submitting Project Data:", projectData);
            alert("Project Created! (Check console for data)");
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const updateData = (key: keyof ProjectData, value: any) => {
        setProjectData((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Create New Project
                    </h1>
                    <p className="mt-2 text-sm text-default-500">
                        Let's get your production set up.
                    </p>
                </div>

                <StepIndicator currentStep={currentStep} steps={steps} />

                <Card className="min-h-[400px]">
                    <CardBody className="p-8">
                        {currentStep === 1 && (
                            <ProjectBasics
                                data={projectData}
                                updateData={updateData}
                            />
                        )}
                        {currentStep === 2 && (
                            <RosterInput
                                data={projectData}
                                updateData={updateData}
                            />
                        )}
                        {currentStep === 3 && (
                            <ScheduleInput
                                data={projectData}
                                updateData={updateData}
                            />
                        )}
                        {currentStep === 4 && (
                            <InventoryInput
                                data={projectData}
                                updateData={updateData}
                            />
                        )}
                    </CardBody>
                </Card>

                <div className="flex justify-between">
                    <Button
                        variant="flat"
                        onPress={handleBack}
                        isDisabled={currentStep === 1}
                    >
                        Back
                    </Button>
                    <Button color="primary" onPress={handleNext}>
                        {currentStep === steps.length ? "Launch Project" : "Next Step"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
