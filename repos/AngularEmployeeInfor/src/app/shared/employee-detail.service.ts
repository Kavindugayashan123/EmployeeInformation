import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {
  formData:Employee;
  readonly rootURL = 'http://localhost:20023/api';
  list : Employee[];
   

  constructor(private http:HttpClient) { }

  CreateEmployee(){
    return this.http.post(this.rootURL+'/Employees',this.formData);
  }

  UpdateEmployee(){
    return this.http.put(this.rootURL+'/Employees/'+ this.formData.empId, this.formData);
   }

  DeleteEmployee(id){
    return this.http.delete(this.rootURL+'/Employees/'+ id);
   }

  ReadEmployee(){
    this.http.get(this.rootURL+ '/Employees')
    .toPromise()
    .then(res => 
      this.list = res as Employee[]);
  }  

}
