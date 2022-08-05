import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeDetailService } from 'src/app/shared/employee-detail.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styles: []
})


export class EmployeeUpdateComponent implements OnInit {
formData:NgForm;
message: boolean = false;

constructor(private service: EmployeeDetailService) { }
submitOnUpdate;

ngOnInit() {
 this.intialiseOnSubmit();
  }

   onSubmit() {
    this.service.UpdateEmployee().subscribe(
      res => {
        console.log(res);
        this.message = true;
      },
      err => {
        console.log(err);
      }
    )
  }
  
  intialiseOnSubmit(){
    this.submitOnUpdate = this.onSubmit();
   }

  // onSubmit(form:NgForm){
  //   this.service.UpdateEmployee().subscribe(
  //     res => {
  //       //this.toastr.success('Submitted successfully', 'Employee Details Information');
  //       this.message = true;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )
  // }

}
