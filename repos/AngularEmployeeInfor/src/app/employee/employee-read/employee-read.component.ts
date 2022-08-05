import { Employee } from './../../shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styles: []
})
export class EmployeeReadComponent implements OnInit {

  constructor(private service: EmployeeDetailService) { }
    //private update: EmployeeUpdateComponent     
  message: boolean = false;

  ngOnInit() {
   this.service.ReadEmployee();
  } 

  onSubmit() {
    this.service.UpdateEmployee().subscribe(
      res => {
         this.message = true;
      },
      err => {
        console.log(err);
      }
    )
  }

  editEmploye(pd: Employee){
    this.service.formData = pd;
    this.removeMessage();
  }

  removeMessage(){
    this.message = false;
  }
  
  onDelete(empId){
    this.service.DeleteEmployee(empId)
    .subscribe(res =>{
      this.service.ReadEmployee();
    },
    err =>{
      console.log(err);
    })
  }

  clickMethod(name: string, empId) {
    if(confirm("Are you sure to delete "+name)) {
      this.service.DeleteEmployee(empId)
      .subscribe(res =>{
        this.service.ReadEmployee();
      },
      err =>{
        console.log(err);
      })
    }
    }
  
  //  onSubmit(){
  // this.update.onSubmit();
  // } 

  // populateForm(pd: Employee){
  //   this.service.formData = pd;
  //   console.log(pd.empId);
  // }
  
  // onSubmit(form:NgForm){
  //   this.service.CreateEmployee(form.value).subscribe(
  //     res => {
  //       this.message = true;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

}
