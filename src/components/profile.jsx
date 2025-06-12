import DynamicTextField  from "../renderer/textField"

export default function profile({formFields}) {

    return <div>
        <div>
            <DynamicTextField formFields={formFields}/>
        </div>
    </div>
}