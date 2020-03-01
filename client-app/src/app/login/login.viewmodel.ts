import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export class LoginViewModel{

    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.loginForm = this.formBuilder.group({
            username: new FormControl(""),
            password: new FormControl("")
        });
    }
}