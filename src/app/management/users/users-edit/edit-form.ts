import { FormGroup, FormControl, Validators } from "@angular/forms"

export const EDIT_FORM={
    create:()=>{
        return new FormGroup({
            
            firstName: new FormControl('',[Validators.required]),
            lastName: new FormControl('',[Validators.required]),
            company: new FormControl('',[Validators.required]),
            jobTitle : new FormControl('',[Validators.required]),
            email: new FormControl('',[Validators.required]),
            option: new FormControl('',[Validators.required]),
            optionOne: new FormControl('',[Validators.required]),
            phone: new FormControl('',[Validators.required]),
            optionTwo: new FormControl('',[Validators.required]),
            notes: new FormControl('',[Validators.required]),
        })
    }
}