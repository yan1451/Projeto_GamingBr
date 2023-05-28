import { useState } from "react";


export function useMultiStep(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = (i, e) => {

        if (e) e.preventDefault();
    
        if (i < 0 || i >= steps.length) return;
    
        setCurrentStep(i);
      }
    

    return {
        currentStep,
        currentComponente: steps[currentStep],
        nextStep
    }

}