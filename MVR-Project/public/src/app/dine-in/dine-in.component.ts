import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { SpinnerService } from 'src/app/shared/spinner.service';

@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.component.html',
  styleUrls: ['./dine-in.component.css']
})
export class DineInComponent implements OnInit {
  showTimings:boolean =false;
  length = [{n:5}];
  searchText: string;
  quickbites : any = [];
  nonvegpizza : any =[];
  vegpizza: any=[];
  temp: any = []
  notifications=[ { img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png" , dish:"pulav" , amount:"50"},
  { img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png" ,dish:"pulav" , amount:"50"},
  {  img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png", dish:"upma" , amount:"50"}
,{ img:"https://img.icons8.com/color/10/000000/non-vegetarian-food-symbol.png", dish:"poha" , amount:"50"}]
  showIcons:boolean= true;

  menu = [{ message: { quickbites:[{dish:"Cheesy Chilli toast" , price:"100" , category:"veg" , img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png"} , {dish:"upma/upit" , price:"50" , category:"veg" , img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png"} , {dish:"Kanda Poha" , price:"50" , category:"veg" , img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png"} , {dish:"Sheera" , price:"100" , category:"veg" , img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png"}, {dish:"Sabudana" , price:"150" , category:"veg" ,img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png"}] ,
  nonvegpizza:[{dish:"Chiken cheese Sandwitch" , price:"100" , category:"veg" ,  img:"https://img.icons8.com/color/10/000000/non-vegetarian-food-symbol.png"} , {dish:"Chicken Grilled Sandwitch" , price:"100" , category:"veg" ,  img:"https://img.icons8.com/color/10/000000/non-vegetarian-food-symbol.png"} , {dish:"Chicken Garlic Chilly Sandwitch" , price:"100" , category:"veg" ,  img:"https://img.icons8.com/color/10/000000/non-vegetarian-food-symbol.png"}] ,
  vegpizza:[{dish:"Cheese Chilly Sandwich" , price:"100" , category:"veg" , img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png"} ,{dish:"cheesy chilli sandwitch" , price:"100" , category:"veg" , img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png"} , {dish:"cheesy Garlic sandwitch" , price:"100" , category:"veg" , img:"https://img.icons8.com/fluent/10/000000/vegetarian-food-symbol.png"}] },
   }]

  constructor( private _as: AppService , private spinner:SpinnerService ) { }
  ngOnInit(): void {
    this.showIcons= true;
    this.getMenu()
    // this.updateMenu()
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

toquickBites(){
  document.getElementById("quickBites").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
};

tovegSandwich(){
  document.getElementById("quickbitesVegSandwich").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
tononvegSandwich(){
  document.getElementById("quickbitesNonVegSandwich").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
tohotBeverages(){
  document.getElementById("hotBeverages").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
tocoldBeverages(){
  document.getElementById("coldBeverages").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
tostarterVeg(){
  document.getElementById("vegStarters").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

toSalad(){
  document.getElementById("saladandRaita").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
toSeaFoodStarters(){
  document.getElementById("seafoodStarters").scrollIntoView({behavior:"smooth"});
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

getMenu(){
  this._as.getData( ).
    subscribe((response : any) =>
    {
      this.quickbites = response.message[0].menu[0].message.quickbites;
      this.vegpizza = response.message[0].menu[0].message.vegpizza;
      this.nonvegpizza = response.message[0].menu[0].message.nonvegpizza;
      console.log(this.quickbites);
      console.log(this.vegpizza);
      console.log(this.nonvegpizza)
      console.log( 'response from API',response.message)
      this.spinner.requestEnded();
    }), (error) => {
      console.log( 'error is' , error)
      this.spinner.requestEnded();
    }
}

updateMenu(){
  console.log(this.menu)
      this._as.postData(this.menu).subscribe((response) =>
      {
        console.log( 'response from API' ,response)
      }), (error) => {
        console.log( 'error is' , error)
      }
  }
}
