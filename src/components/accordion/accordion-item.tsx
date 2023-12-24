/** React */
import React, { Children, ComponentType, HtmlHTMLAttributes, ReactElement, ReactNode, cloneElement, isValidElement } from 'react'

/** Props */
type Props = HtmlHTMLAttributes<HTMLDivElement> & {
    children: ReactNode
}

const ALLOWED_CHILD_COMPONENT = ['AccordionButton', 'AccordionContent'] 

export function AccordionItem({ children, ...props }: Props) {
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