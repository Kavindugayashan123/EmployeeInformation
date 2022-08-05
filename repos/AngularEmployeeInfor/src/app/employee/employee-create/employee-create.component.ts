import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styles: []
})
export class EmployeeCreateComponent implements OnInit {

 constructor(private service: EmployeeDetailService) { }
 message: boolean = false;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null)
      form.resetForm();
    this.service.formData = {
      empId :0,
      EmpName : '',
      Address : '',
      TelephoneNumber : '',
      Designation :'',
      Department : '',
      JoinDate : ''
    }
  }

  onSubmit(form:NgForm){
    this.service.CreateEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.service.ReadEmployee();  //This is for reshresh the list after creating a new one
        this.message = true;
      },
      err => {
        console.log(err);
      }
    )
  }

  removeMessage() {
    this.message = false;
  }


}
