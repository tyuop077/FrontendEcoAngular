import { FormGroup } from '@angular/forms';

export function EqualsValidator(control1: string, control2: string){
	return (formGroup: FormGroup) => {
		const c1 = formGroup.controls[control1];
		const c2 = formGroup.controls[control2];
		if (c2.errors && !c2.errors["notequal"]) return;
		c2.setErrors(c1.value !== c2.value ? { notequal: true } : null);
	}
}
