/** React */
import React, { HtmlHTMLAttributes, ReactNode, useMemo } from 'react'

/** Hook */
import { useAccordion } from './accordion-root'

/** Props */
type Props = HtmlHTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

export function AccordionButton({ children, ...props }: Props) {
    const { toggle } = useAccordion();

    const accordionId = useMemo(() => props["data-accordion-id"], [props]);

    const handleOnClik = () => {
        toggle(accordionId)
    }

    return (
        <div 
            role="button" 
            style={{ 
                backgroundColor: '#cecece', 
                padding: '8px',
                cursor: 'pointer', 
            }}
            onClick={handleOnClik}
            {...props}
        >
            {children}
        </div>
    )
}