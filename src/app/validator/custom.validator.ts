import { FormGroup } from '@angular/forms';

export class CustomValidator {
    static matchPassword(form: FormGroup) {
        const password = form.controls.password.value;
        const confirmPassword = form.controls.confirm_password.value || '';
        if (confirmPassword.length <= 0) {
            return null;
        }
        if (confirmPassword !== password) {
            return {
                mismatch: true
            };
        }
        return null;
    }
}
