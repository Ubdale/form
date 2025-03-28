import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormService } from '../../shared/form.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  imports: [HeaderComponent, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      alert("Please fix the errors in the form.");
      return;
    }

    this.formService.submitForm(this.form.value).subscribe(
      response => {
        alert(response.message);
        this.form.reset();
      },
      error => {
        console.log(error);
        
        alert("Submission failed!");
      }
    );
  }

  get f() {
    return this.form.controls;
  }
}
