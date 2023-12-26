/** React */
import React, { 
    ReactNode, 
    createContext, 
    useContext, 
    useState 
} from 'react'

/** Wrapper */
import { AccordionWrapper } from './accordion-wrapper';

/** Types */
type Item = {
    id: string;
    isExpanded: boolean;
}

/** Context type */
type AccordionContextType = {
    items: Record<string, Item>;
    addItem: (item: Item) => void;
    toggle: (id: string) => void;
}

/** Context */
const AccordionContext = createContext({} as AccordionContextType)

/** Props */
type AccordionRootProps = {
    children: ReactNode
}

export function AccordionRoot({ children }: AccordionRootProps) {
   const [items, setItems] = useState<Record<string, Item>>({})

    const addItem = (item: Item) => { 
        setItems((state) => ({
           ...state,
           [item.id]: {
               ...item,
               isExpanded: true
           }
        }))
    }

    const toggle = (id: string) => {
        setItems((state) => ({
            ...state ,
            [id]: {
                ...state[id],
                isExpanded: !state[id].isExpanded
            }
        }))
    }

    return (
        <AccordionContext.Provider value={{ items, addItem, toggle }}>
            <AccordionWrapper>
                {children}
            </AccordionWrapper>
        </AccordionContext.Provider>
    )
}

export function useAccordion() {
    return useContext(AccordionContext);
}


