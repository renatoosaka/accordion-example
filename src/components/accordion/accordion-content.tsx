/** React */
import React, { 
    Children, 
    ComponentType, 
    HtmlHTMLAttributes, 
    ReactElement, 
    ReactNode, 
    cloneElement, 
    isValidElement, 
    useMemo 
} from 'react'

/** Hook */
import { useAccordion } from './accordion-root'

/** Utils */
import { generateId } from './accordion-utils'

/** Props */
type Props = HtmlHTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

export function AccordionContent({ children, ...props }: Props) {
    const { items } = useAccordion()
    const accordionId = useMemo(() => props["data-accordion-id"], [props]);
    const isExpanded = useMemo(() => {
        return items[accordionId]?.isExpanded || false
    }, [items, accordionId])

    const accordionContentComponents = useMemo(() => {
        return Children.map(children, (child) => {
            if (!isValidElement(child)) return child;
            
            const childComponent = child.type as ComponentType;

            const isAccordionItem = (childComponent.name === 'AccordionItem');

            const elementProps = {}
            if (isAccordionItem) {
                Object.assign(elementProps, {
                    "data-accordion-id": generateId(),
                })
            }
            
            return cloneElement(child as ReactElement, elementProps);
        })
    }, [children])    

    if (!isExpanded) return;


    return (
        <div {...props}>
            {accordionContentComponents}
        </div>
    )
}