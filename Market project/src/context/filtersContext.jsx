import { createContext, useState } from "react";
import useGetProducts from "../custom/useGetProducts";

export const filterContext = createContext()


function FiltersProvider({children}){

    const { content } = useGetProducts("products");

    const [value, setValue] = useState(0)
    const [category, setCategory] = useState("all")
    const [productos, setProductos] = useState()



    function handlePrice(event){
        let newValue = event.target.value
        
        let newContent;
        category !== "all" 
        ? newContent = content.filter(elem => elem.price >= newValue && elem.category === category)
        : newContent = content.filter(elem => elem.price >= newValue)
        
        setValue(newValue);
        setProductos(newContent)
    }


    function handleCategory(event){
        let newContent;
        event.target.value !== "all" 
        ? newContent = content.filter(elem => elem.category === event.target.value && elem.price >= value)
        : newContent = content.filter(elem => elem.price >= value)
    
        setProductos(newContent)
        setCategory(event.target.value)
}

return(
    <filterContext.Provider value={{handleCategory, handlePrice, value, content: productos ? productos : content}}>
        {children}
    </filterContext.Provider>
)
}

export default FiltersProvider