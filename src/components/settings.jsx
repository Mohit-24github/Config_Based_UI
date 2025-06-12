import RadioButton from "../renderer/radioButton"

export default function setting ({formFields}){
    return <div>
            <RadioButton
                formFields={formFields[0]}
            />
    </div>
}