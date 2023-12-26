/** React */
import React, { 
    Children, 
    ComponentType, 
    ReactElement, 
    ReactNode, 
    cloneElement, 
    isValidElement, 
    useMemo 
} from "react"

/** Props */
type AccordionWrapperProps = {
    children: ReactNode
}

const ALLOWED_CHILD_COMPONENT = ['AccordionItem'] 

export function AccordionWrapper({ children }: AccordionWrapperProps) {
    const accordionItemComponents = useMemo(() => {
        return Children.map(children, (child) => {
            if (!isValidElement(child)) return;
            
            const childComponent = child.type as ComponentType;

            if (!ALLOWED_CHILD_COMPONENT.includes(childComponent.name)) return;

            return cloneElement(child);            
        })
    }, [children])
 
    return (
        <>
            {accordionItemComponents}
        </>
    )
}