import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css'],
})
export class EmployeesAddComponent implements OnInit {
  form!: FormGroup;

  @Output() dataAddedEmit: any = new EventEmitter();
  constructor(
    private FormBuilder: FormBuilder,
    private employeeService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      Name: ['', Validators.required],
      LastName: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.employeeService
        .addEmploye(this.form.value)
        .subscribe(this.dataAddedEmit.emit());
      console.log(this.form.value);
      this.form.reset();
    } else {
      console.error('Form is invalid');
    }
  }
}
