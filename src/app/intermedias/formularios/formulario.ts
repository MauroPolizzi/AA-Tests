import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormularioLogin {

    public form: FormGroup;

    constructor(builder: FormBuilder) {
        
        this.form = builder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
}