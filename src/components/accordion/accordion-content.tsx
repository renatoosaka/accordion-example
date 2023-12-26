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

/** Props */
type Props = HtmlHTMLAttributes<HTMLDivElement>

export function AccordionContent({ children, ...props }: Props) {
    const { items } = useAccordion()

    const accordionId = useMemo(() => props["data-accordion-id"], [props]);
    
    const isExpanded = useMemo(() => {
        return items[accordionId]?.isExpanded || false
    }, [items, accordionId])

    if (!isExpanded) return;

    return (
        <div {...props}>
            {children}
        </div>
    )
}