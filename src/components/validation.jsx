
export function validation_Profile(error){
    return error.name || error.age || error.email? false: true
}

export function validation_Interest(error){
    return error.interest || error.office || error.sports ? false : true;
}

export function validation_Settings(error){
    return error.dark ? false : true; 
}