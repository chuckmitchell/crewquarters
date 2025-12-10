"use client";

import { CheckCircle2, Circle } from "lucide-react";

interface StepIndicatorProps {
    currentStep: number;
    steps: { title: string; description: string }[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
    return (
        <div className="w-full py-4">
            <div className="relative flex items-center justify-between w-full">
                {/* Progress Bar Background */}
                {/* Progress Bar Background */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-default-200 -z-10 rounded-full" />

                {/* Active Progress Bar */}
                <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary transition-all duration-300 -z-10 rounded-full"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    const isCompleted = stepNumber < currentStep;

                    return (
                        <div key={index} className="flex flex-col items-center bg-background px-2">
                            <div
                                className={`
                  w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300
                  ${isActive
                                        ? "border-primary bg-primary text-white"
                                        : isCompleted
                                            ? "border-primary bg-primary text-white"
                                            : "border-default-300 bg-background text-default-400"
                                    }
                `}
                            >
                                {isCompleted ? (
                                    <CheckCircle2 size={18} />
                                ) : (
                                    <span className="text-sm font-bold">{stepNumber}</span>
                                )}
                            </div>
                            <div className="mt-2 text-center hidden sm:block">
                                <p
                                    className={`text-sm font-medium ${isActive ? "text-primary" : "text-default-500"
                                        }`}
                                >
                                    {step.title}
                                </p>
                                <p className="text-xs text-default-400">{step.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
