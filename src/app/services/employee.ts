import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) { }
  fetchAllEmployees() {
    return this.httpClient.get('http://localhost:3000/employees');
  }
  deleteEmployee(id: string) {
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`)
  }
  addEmployee(newEmp: any) {
    return this.httpClient.post('http://localhost:3000/employees', newEmp)
  }
}
