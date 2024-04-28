import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent {
  // form!: FormGroup;
  // employeeId!: number;
  // constructor(
  //   private FormBuilder: FormBuilder,
  //   private route: ActivatedRoute,
  //   private employeeService: EmployeesService
  // ) {}

  // ngOnInit(): void {
  //   this.form = this.FormBuilder.group({
  //     Name: ['', Validators.required],
  //     LastName: ['', Validators.required],
  //     city: ['', Validators.required],
  //     address: ['', Validators.required],
  //   });


  //   this.route.params.subscribe(params => {
  //     this.employeeId = +params['id'];
  //     console.log(params , 'id');
      
  //     this.employeeService.getEmployeeById(this.employeeId).subscribe(employee => {
  //       this.form.patchValue({
  //         Name: employee.Name,
  //         LastName: employee.LastName,
  //         city: employee.city,
  //         address: employee.address
  //       });
  //     });
  //   });
  // }

  // onSubmit() {
  //   const editedEmployee = this.form.value;
  //   this.employeeService.editEmploye(this.employeeId, editedEmployee).subscribe(response => {
  //     console.log('Employee updated successfully:', response);
  //   });
  // }}
}



