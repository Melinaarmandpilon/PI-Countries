
export function validate(input) {
    // console.log("input que llega a VALIDATE:", input);
    let error = {};
    if (!input.name) {
      error.name = "Name is requerid";
    } 
    if (/\d/.test(input.name)) {
        error.name = "Numbers are not allowed";
    }
    if (input.name.length<3) {
        error.name = "Activity name must have at least 3 characters";
    }
    if (!input.difficulty) {
      error.difficulty = "Select at least one difficulty";
    } 
    if (!input.duration) {
      error.duration = "Indicate duration of the activity";
    } 
    if(!input.season){
      error.season="Select at least one season"
    }
    if(input.countryId.length<=0){
      error.countryId="Select at least one country"
    }
    // console.log("error en validate:", error);
    return error;
  }