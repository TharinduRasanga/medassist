import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-form-additional',
  templateUrl: './login-form-additional.component.html',
  styleUrls: ['./login-form-additional.component.scss']
})
export class LoginFormAdditionalComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.updateStudentData();
    const id = this.actRoute.snapshot.paramMap.get('id');
  }

  get firstName() {
    return this.editForm.get('firstName');
  }

  get lastName() {
    return this.editForm.get('lastName');
  }

  get email() {
    return this.editForm.get('email');
  }

  get mobileNumber() {
    return this.editForm.get('mobileNumber');
  }

  updateStudentData() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  goBack() {
  }

  updateForm() {
  }
}
