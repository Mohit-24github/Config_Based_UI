import { validation_Interest, validation_Profile, validation_Settings } from "../components/validation";

export const tabs=(data,setData, error ,setError)=> [
    {
        id:1,
        name:"Profile",
        validation:(error)=>validation_Profile(error),
        fields:
        [
            {
                id: 1,
                type: "textField",
                label: "name",
                value: data.name,
                setValue: (value) => setData({ ...data, name: value }),
                isMandatory: true,
                validation: {
                    required: true,
                    minCharacters: 3,
                    maxcharacters: 20,
                    patter: /^[a-zA-Z\s]+$/,
                },
                errorMessage: error.name,
                setErrorMessage:(errorMessage) => setError({...error, name: errorMessage})
            },
            {
                id: 2,
                type: "numberField",
                label: "age",
                value: data.age,
                setValue: (value) => setData({ ...data, age: value }),
                isMandatory: true,
                validation: {
                    required: true,
                    minValue: 1,
                    maxValue: 100,
                    pattern: /^\d+$/,
                },
                errorMessage: error.age,
                setErrorMessage:(errorMessage) => setError({...error, age:errorMessage})
            },
            {
                id: 3,
                type: "emailField",
                label: "email",
                value: data.email,
                setValue: (value) => setData({ ...data, email: value }),
                isMandatory: true,
                validation: {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
                errorMessage: error.email,
                setErrorMessage:(errorMessage) => setError({...error, email:errorMessage})
            }
        ]
    },
    {
        id:2,
        name:"Interests",
        validation: (error)=>validation_Interest(error),
        fields:[
            {
                id: 1,
                type:"checkbox",
                label: "Hobbies",
                value: data.interest,
                setValue: (value) => setData({ ...data, interest: value }),
                isMandatory: true,
                options: [
                    { id: 1, label: "Reading", value: "Reading"},
                    { id: 2, label: "Traveling", value: "Traveling"},
                    { id: 3, label: "Cooking", value: "Cooking"},
                ],
                validation: {
                    required: true,
                },
                errorMessage: error.interest,
                setErrorMessage:(errorMessage) => setError({...error, interest:errorMessage})
            },
            {
                id: 2,
                type:"radio",
                label:"Office Working",
                name: "office",
                value: data.office,
                setValue: (value) => setData({ ...data, office: value }),
                isMandatory: true,
                options:[
                    { id: 1, label: "Work From Home", value: "Work From Home" },
                    { id: 2, label: "Office Hours", value: "Office Hours" }
                ],
                validation: {
                    required: true,
                },
                errorMessage: error.office,
                setErrorMessage:(errorMessage) => setError({...error, office:errorMessage})
            },
            {
                id: 3,
                type:"radio",
                label:"Sports",
                name: "sports",
                value: data.sports,
                setValue: (value) => setData({ ...data, sports: value }),
                isMandatory: true,
                options:[
                    { id: 1, label: "Indoor", value: "Indoor" },
                    { id: 2, label: "Outdoor", value: "Outdoor" }
                ],
                validation: {
                    required: true,
                },
                errorMessage: error.sports,
                setErrorMessage:(errorMessage) => setError({...error, sports:errorMessage})
            }
        ]
    },
    {
        id:3,
        name:" Settings",
        validation: (error)=>validation_Settings(error),
        fields:[
            {
                id: 1,
                type:"radio",
                label:"Mode Setting",
                name: "Mode",
                value: data.dark,
                setValue: (value) => setData({ ...data, dark: value }),
                isMandatory: true,
                options:[
                    { id: 1, label: "Dark", value: "Dark" },
                    { id: 2, label: "Light", value: "Light" }
                ],
                validation: {
                    required: true,
                },
                errorMessage: error.dark,
                setErrorMessage:(errorMessage) => setError({...error, dark:errorMessage})
            }
        ]
    }
]