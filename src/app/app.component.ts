import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  // making variable making variable in  type script by 2 ways 1st way num:nuber =20 and secod num=20

  num: number = 2
  value = 20
  //two ways to write varible in type script 
  name : string = "Rupesh" 
  city = "pune"
  //type any  which allows all type of data 
  val :any = 20
  any = 10
  bool = true
  //array
  courses = ["java","html" ,"css" , "hibernate", "spring","j2ee"]
  //object
  student = {
    name :"Rupesh" , ge:"22" , city:"pune", Edu:"btech",  per:"84.04" 

  }
  
}
