import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 CURD Operation with an Array';
  employees = [
    {name:"Kumaravel", position:"Developer"},
    {name:"Vasuki", position:"Manager"},
    {name:"Swathy", position:"Designer"}
  ];

  model:any={};
  model2:any={};
  msg:any="";

  addEmployee(reqDiv:string){
    this.employees.push(this.model);
    this.model = {};
    this.msg = "Record is sucessfully added.....";
    console.log(reqDiv);
  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "Record is sucessfully deleted.....";
  }
  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;
  }
  updateEmployee(){
     let k = this.myValue;
     for(let i=0; i<this.employees.length; i++){
       if(i==k){
         this.employees[i] = this.model2;
         this.model2 = {};
         this.msg = "Record is sucessfully updated.....";
       }
     }
  }

  clickMe(){
    this.msg = "";
}

}
