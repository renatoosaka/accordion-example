/** React */
import React, { ReactNode, createContext, useContext, useState } from 'react'

/** Types */
type Item = {
    id: string;
    isExpanded: boolean;
    parentId?: string;
}

type AccordionContextType = {
    items: Record<string, Item>;
    addItem: (item: Item) => void;
    toggle: (item: Item) => void;
}

/** Context */
const AccortionContext = createContext({} as AccordionContextType)

/** Props */
type Props = {
    children: ReactNode
}

export function AccordionProvider({ children }: Props) {
    const [items, setItems] = useState<Record<string, Item>>({})

    const addItem = (item: Item) => {
        console.log(item)
        setItems({
            ...items,
            [item.id]: item
        })
    }

    const toggle = (item: Item) => {
        setItems({
            ...items,
            [item.id]: {
                ...item,
                isExpanded: !items[item.id].isExpanded
            }
        })
    }

    return (
        <AccortionContext.Provider value={{ items, addItem, toggle }}>
            {children}
        </AccortionContext.Provider>
    )
}

export function useAccordion() {
    return useContext(AccortionContext);
}