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
    useRef
} from 'react'

/** Hooks */
import { useAccordion } from './accordion-root'

/** Utils */
import { generateId } from './accordion-utils'

/** Props */
type Props = HtmlHTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

const ALLOWED_CHILD_COMPONENT = ['AccordionButton', 'AccordionContent'] 

export function AccordionItem({ children, ...props }: Props) {    
    const { addItem } = useAccordion()
    const accordionId = useRef<string>('');

    useEffect(() => {
        accordionId.current = generateId()

        addItem({
            id: accordionId.current,
            isExpanded: true
        })
    }, [])
    
    return (
        <div
            data-accordion-id={accordionId.current}
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
                    "data-accordion-id": accordionId.current
                });
            })}
        </div>
    )
}