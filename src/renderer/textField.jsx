import { TextField } from "@mui/material";

export default function DynamicTextField({formFields}){
    return (<div>
        {formFields.map((field)=>{
            const {id,type,label,value,setValue,validation,errorMessage,setErrorMessage} = field
            const handleChange=(e)=>{
                const newValue = e.target.value;
                setValue(newValue);
                if (validation) {
                    if (validation.required && !newValue) {
                        setErrorMessage(`${label} is required`)
                    } else if (validation.minCharacters && newValue.length < validation.minCharacters) {
                        setErrorMessage(`${label} must be at least ${validation.minCharacters} characters`)
                    } else if (validation.maxcharacters && newValue.length > validation.maxcharacters) {
                        setErrorMessage(`${label} must be less than ${validation.maxcharacters} characters`)
                    } else if (validation.pattern && !validation.pattern.test(newValue)) {
                        setErrorMessage(`${label} is invalid`)
                    } else {
                        setErrorMessage("")
                    }
                }
            }
            switch (type){
                case "textField":
                    return (
                        <div key={id} className="mr-2 p-1">
                            <TextField label={label} variant="filled" value={value} onChange={(e)=>handleChange(e)}/>
                            {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                            <br />
                        </div>
                    )
                case "numberField":
                    return (
                        <div key={id} className="mr-2 p-1">
                            <TextField label={label} type="number" variant="filled" value={value} inputProps={{ step: 1, onWheel: (e) => e.target.blur() }} onChange={(e)=>handleChange(e)}/>
                            {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                            <br />
                        </div>
                    )
                case "emailField":
                    return (
                        <div key={id} className="mr-2 p-1">
                            <TextField label={label} variant="filled" value={value} onChange={(e)=>handleChange(e)}/>
                            {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                            <br />
                        </div>
                    )
                default:
                    return null;
            }
        })}
    </div>
    )
}