import { Checkbox } from "@mui/material";


export const CheckBox =({formFields})=>{
    const { value, setValue, options,validation,setErrorMessage} = formFields;
    return (
        <div>
            {options.map((option) => {
                const { id, label } = option;
                const handleChange = (e) => {
                    const newValue = e.target.value;
                    const isChecked = e.target.checked
                    const update = isChecked? [...value, option.value] : value.filter(item => item !== option.value);
                    setValue(update);
                    if (validation) {
                        if (validation.required && !newValue) {
                            setErrorMessage(`${label} is required`)
                        }else{
                            setErrorMessage("")
                        }
                    }
                };
                return (
                    <div key={id} className="flex items-center gap-2">
                        <Checkbox id={id} label={label} checked={value.includes(label) ? true: false} onChange={(e)=>handleChange(e)} />
                        <label htmlFor={id}>{label}</label>
                    </div>
                );
            })}
        </div>
    )
}