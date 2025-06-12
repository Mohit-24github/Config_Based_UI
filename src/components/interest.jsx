import { CheckBox } from "../renderer/checkBox";
import RadioButton from "../renderer/radioButton";

export default function interest ({formFields}) {
    return <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-md bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col gap-3">
                <CheckBox  formFields={formFields[0]}/>
                {formFields[0].errorMessage && <span className="text-red-500 mt-3 text-center0">{formFields[0].errorMessage}</span>}
                <br/>
                <RadioButton
                    formFields={formFields[1]}
                />
                <RadioButton
                    formFields={formFields[2]}
                />
            </div>
        </div>
    </div>
}