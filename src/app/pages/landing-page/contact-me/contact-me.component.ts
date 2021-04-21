import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/core/email.service';

@Component({
	selector: 'app-contact-me',
	templateUrl: './contact-me.component.html',
	styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
	emailForm: FormGroup;
	submitted: boolean;
	loading: boolean;

	constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

	ngOnInit(): void {
		this.emailForm = this.formBuilder.group({
			name: [{ value: undefined, disabled: this.loading }, [Validators.required]],
			email: [{ value: undefined, disabled: this.loading }, [Validators.required, Validators.email]],
			message: [{ value: undefined, disabled: this.loading }, [Validators.required, Validators.maxLength(600)]]
		});

		this.submitted = false;
		this.loading = false;
	}

	onSubmit() {
		this.submitted = true;
		if (this.emailForm.valid) {
			this.loading = true;
			this.disableForm();
			this.emailService.sendEmail(this.emailForm.value).subscribe(data => {
				console.log(data);
			}, err => {
				console.log(err);
			}, () => {
				console.log("Complete");
			});
		}
	}

	disableForm() {
		this.emailForm.controls['name'].disable();
		this.emailForm.controls['email'].disable();
		this.emailForm.controls['message'].disable();
	}

}
