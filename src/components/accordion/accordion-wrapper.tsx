/** React */
import React, { Children, ComponentType, ReactElement, ReactNode, cloneElement, isValidElement, useMemo } from "react"

/** Provider */
import { useAccordion } from "./accordion-root"

/** Utils */
import { generateId } from "./accordion-utils"

/** Props */
type AccordionWrapperProps = {
    children: ReactNode
}

const ALLOWED_CHILD_COMPONENT = ['AccordionItem'] 

export function AccordionWrapper({ children }: AccordionWrapperProps) {
    const { addItem } = useAccordion()
    
    const accordionItemComponents = useMemo(() => {
        return Children.map(children, (child, index) => {
            if (!isValidElement(child)) return;
            
            const childComponent = child.type as ComponentType;

            if (!ALLOWED_CHILD_COMPONENT.includes(childComponent.name)) return;

            const id = generateId();

            addItem({
                id,
                isExpanded: true
            })
            
            return cloneElement(child as ReactElement, {
                "data-accordion-id": id,
                
            });
        })
    }, [children])
 
    return (
        <>
            {accordionItemComponents}
        </>
    )
}