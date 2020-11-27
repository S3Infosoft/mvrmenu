import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.component.html',
  styleUrls: ['./dine-in.component.css']
})
export class DineInComponent implements OnInit {
  showTimings:boolean =false;
  length = [{n:5}];
  notifications=[ {dish:"pulav" , amount:"50"},
  {dish:"pulav" , amount:"50"},
  {dish:"pulav" , amount:"50"}
,{dish:"pulav" , amount:"50"}]
  showIcons:boolean= true;
  constructor() { }

  ngOnInit(): void {
    this.showIcons= true;
  }

  
 openNav() {
   console.log("nav")
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

 closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

openTimings(){
  document.getElementById("mySidenav1").style.width = "400px";
  document.getElementById("main").style.marginLeft = "400px";
}

closeTimings() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

onClickSearch(){
  this.showIcons= false;
}

}
