import {FormControl,FormLabel,RadioGroup,FormControlLabel,Radio} from "@mui/material";

export default function RadioButton({ formFields}){
    const {value,setValue,setErrorMessage,validation,label,options} = formFields
    const handleChange=(e)=>{
        const newValue = e.target.value
        setValue(newValue)
        if (validation) {
            if (validation.required && !newValue) {
                setErrorMessage(`${label} is required`)
            }else{
                setErrorMessage("")
            }
        }
    }
    return (
        <FormControl>
        <FormLabel>{label}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={(e)=>handleChange(e)}
            >
            {options.map((option) => (
                <FormControlLabel
                    key={option.id}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                />
            ))}
            </RadioGroup>
            {formFields.errorMessage && <span className="text-red-500 mt-3 text-center0">{formFields.errorMessage}</span>}
            <br/>
        </FormControl>
    );
}