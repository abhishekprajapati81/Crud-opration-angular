import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,  } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  constructor(private http: HttpClient) {}

  employeApi: string = 'http://localhost:3000/employees';

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeApi);
  }

  deleteEmploye(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.employeApi}/${id}`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.employeApi);
  } 

  addEmploye(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.employeApi, employee)
  }

  editEmploye(id:number , employee:Employee):Observable<Employee>{
    return this.http.patch<Employee>(`${this.employeApi}/${id}`, employee)
  }
}
