import { FormGroup, FormControl, Validators } from "@angular/forms"

export const LOGIN_FORM={
    create:()=>{
        return new FormGroup({
            name:new FormControl('',[Validators.required]),
            location :new FormControl('',[Validators.required]),
            description :new FormControl('',[Validators.required]),
            website:new FormControl('',[Validators.required]),
            url:new FormControl('',[Validators.required]),
            password:new FormControl('',[Validators.required]),
            
        })
    }
}