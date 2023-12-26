/** React */
import React, { 
    Children, 
    ComponentType, 
    HtmlHTMLAttributes, 
    ReactElement, 
    ReactNode, 
    cloneElement, 
    isValidElement, 
    useEffect, 
    useMemo 
} from 'react'
import { useAccordion } from './accordion-root'

/** Props */
type Props = HtmlHTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

const ALLOWED_CHILD_COMPONENT = ['AccordionButton', 'AccordionContent'] 

export function AccordionItem({ children, ...props }: Props) {
    const { addItem } = useAccordion()
    const accordionId = useMemo(() => props["data-accordion-id"], [props]);

    useEffect(() => {
        addItem({
            id: accordionId,
            isExpanded: true
        })
    }, [])
    
    return (
        <div
            style={{
                padding: '16px',
                paddingRight: '4px'
            }}
            {...props}
        >
            {Children.map(children, (child) => {
                if (!isValidElement(child)) return;
                
                const childComponent = child.type as ComponentType;

                if (!ALLOWED_CHILD_COMPONENT.includes(childComponent.name)) return;

                return cloneElement(child as ReactElement, {
                    "data-accordion-id": props["data-accordion-id"]
                });
            })}
        </div>
    )
}