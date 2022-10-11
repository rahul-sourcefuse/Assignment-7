import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from '../models/employee-model';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';


@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {

  formValue!:FormGroup;
  employeeModelObj:EmployeeModel=new EmployeeModel();
  employeeData!:any;

  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      firstName:[''],
      middleName:[''],
      lastName:[''],
      email:[''],
      phoneNumber:[''],
      Role:[''],
      Address:[''],
      Doj:['']
    })
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postEmployeeDetails(){
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.middleName=this.formValue.value.middleName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.phoneNumber=this.formValue.value.phoneNumber;
    this.employeeModelObj.Role=this.formValue.value.Role;
    this.employeeModelObj.Address=this.formValue.value.Address;
    this.employeeModelObj.Doj=moment().format('LLL');
    

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert('Employee added Successfully');
      let ref=document.getElementById('cancel');
      ref?.click()
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert('Something went Wrong');
    })
  }
  
  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      console.log(res);
      this.employeeData=res;
    })
  }

  deleteEmployee(row:any){
    this.api.deleteEmployee(row.id)
    .subscribe(res=>{
      alert("Employee Deleted Successfully");
      this.getAllEmployee();
    })
  }
  onEdit(row : any){
    this.showAdd=false;
    this.showUpdate=true;
    this.employeeModelObj.id=row.id;
    this.formValue.controls['firstName'].setValue(row.firstname);
    this.formValue.controls['middleName'].setValue(row.middlename);
    this.formValue.controls['lastName'].setValue(row.lastname);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['phoneNumber'].setValue(row.phonenumber);
    this.formValue.controls['Role'].setValue(row.role);
    this.formValue.controls['Address'].setValue(row.address);

  }

  updateEmployeeDetails(){
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.middleName=this.formValue.value.middleName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.phoneNumber=this.formValue.value.phoneNumber;
    this.employeeModelObj.Role=this.formValue.value.Role;
    this.employeeModelObj.Address=this.formValue.value.Address;
    
    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res=>{
      alert("Update Successfully");
      this.getAllEmployee();
    })
  }






}
