import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeCreateComponent } from './Employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './Employee/employee-update/employee-update.component';
import { EmployeeDetailService } from './shared/employee-detail.service';
import { EmployeeReadComponent } from './Employee/employee-read/employee-read.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeReadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [EmployeeDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
