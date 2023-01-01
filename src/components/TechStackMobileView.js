import {useState} from "react";
import {Tabs} from "./Tabs";
import {FrontEndStack} from "./FrontEndStack";
import {BackEndStack} from "./BackEndStack";

export const TechStackMobileView = () => {
    const [isFrontEndSelected, setIsFrontEndSelected] = useState(true);
    const [isBackEndSelected, setIsBackEndSelected] = useState(false);

    const frontEndSelected = () => {
        setIsFrontEndSelected(true);
        setIsBackEndSelected(false);
    }
    const backEndSelected = () => {
        setIsFrontEndSelected(false);
        setIsBackEndSelected(true);
    }

    return (
        <>
            <ul className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
                <li className="mr-2" onClick={frontEndSelected}>
                    {isFrontEndSelected ? <Tabs category={"Front End"} display={true}/> :
                        <Tabs category={"Front End "} display={false}/>}
                </li>
                <li className="mr-2" onClick={backEndSelected}>
                    {isBackEndSelected ? <Tabs category={"Back End"} display={true}/> :
                        <Tabs category={"Back End "} display={false}/>}
                </li>
            </ul>

            <div className="category-mobile-view">
                {isFrontEndSelected ? <FrontEndStack/> : <BackEndStack/>}
            </div>
        </>
    )
}