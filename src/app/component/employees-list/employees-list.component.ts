import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  $Employee!: Observable<Employee[]>;
  showAdd:boolean = false
  constructor(private employeService: EmployeesService) {}

  ngOnInit(): void {
    this.$Employee = this.employeService.getEmployee();
  }

  showAddForm(){
    this.showAdd = true
  }

  hideForm(){
    this.showAdd = false
  }

  getEmployee(){
    this.$Employee = this.employeService.getEmployee();
  }

  deleteItem(id: number): void {
    this.employeService.deleteEmploye(id).subscribe(() => {
      this.$Employee = this.employeService.getEmployee();
      console.log('Employee deleted successfully.');
    });
  }
  
  resetList(){
    this.getEmployee()
  }
}
