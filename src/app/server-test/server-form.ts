import { FormGroup, FormControl, Validators } from "@angular/forms"

export const SERVER_FORM={
    create:()=>{
        return new FormGroup({
        name:new FormControl('',[Validators.required]),
        lastName:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required]),
        })
    }
}