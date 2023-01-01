import "../styles/technologies.css";
import {useEffect, useState} from "react";

export const Tabs = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(true);

    useEffect(() => {
        props.category ? setSelectedCategory(props.category) : setSelectedCategory(' ');
    }, [props.category])

    const active = 'inline-block bg-gray-100 text-blue-600 rounded-t-lg py-4 px-4 text-sm font-medium text-center active dark:bg-gray-800 text-black';
    const inactive = 'inline-block text-white hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center dark:text-gray-400  dark:hover:bg-gray-800 dark:hover:text-gray-300'
    return (
        <a href="/"
           onClick={(e) => e.preventDefault()}
           className={props.display ? active : inactive}>
            {selectedCategory}
        </a>

    )
}