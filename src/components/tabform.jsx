import Profile from "../components/profile";
import Interest from "../components/interest";
import Setting from "../components/settings";
import { useState } from "react";
import Button from '@mui/material/Button';
import { tabs } from "../config/tabs";

export default function Tabform(){
    const [activeTab, setActiveTab] = useState(0);
    const tabComponents = [Profile, Interest, Setting];
    const [data , setData] = useState({
        name: "",
        age: 0,
        email: "",
        interest: [],
        sports: "",
        office: "",
        dark: ""
    })
    const [error,setError] = useState({
        name: "fill",
        age: "fill",
        email: "fill",
        interest: "select",
        sports: "select",
        office: "select",
        dark: "select"
    })
    const changeTab = (index) =>{
        if (tabs(data,setData,error,setError)[activeTab].validation(error)){
            setActiveTab(index)
            return index    
        }
    }

    const moveNext = () => {
        if (tabs(data,setData,error,setError)[activeTab].validation(error)) {
            setActiveTab((prevTab) => {
            return prevTab+1
            })
        }
    }

    const movePrev = () => {
        setActiveTab((prevTab) => {
            return prevTab-1
        })
    }

    const Submit =()=>{
    if (!tabs(data,setData,error,setError)[activeTab].validation(error)) {
            console.log("Validation failed for the current tab.");
            return;
        }
        console.log("Submitted Data: ", data);
        
    }
    const ActiveTabComponent = tabComponents[activeTab];
    const tabFields = tabs(data, setData, error, setError)[activeTab].fields;
    return <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center  -full max-w-xl md:w-1/2 p-4 border-2 m-2 bg-white rounded-lg">
            <div className="cursor-pointer flex justify-center gap-2 mb-2 w-full border-b-2">
                {tabs(data,setData,error,setError).map((t,index)=>(
                    <div className="py-1 " key={index} >
                        <Button
                        variant="outlined"
                        onClick={()=>changeTab(index)} >
                            {t.name}
                        </Button>
                    </div>
                ))}
            </div>
            <ActiveTabComponent formFields={tabFields}/>
        </div>
        <div className=" py-2 justify-center gap-2">
            <div className="flex ">
                <div className="px-2">{activeTab > 0 && <Button variant="contained" onClick={()=>movePrev()} >Previous</Button>}</div>
                <div className="px-2">{activeTab < tabComponents.length - 1 && <Button variant="contained" onClick={()=>moveNext()}>Next</Button>}</div>
            </div>
            <div className="py-2 px-2">{activeTab === tabComponents.length - 1 && <Button variant="outlined" onClick={()=>Submit()}>SUBMIT</Button>}</div>
        </div>
    </div>
}