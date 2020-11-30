import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private spinner: SpinnerService , private router: Router) { }

  ngOnInit(): void {
    this.spinner.requestEnded();
  }
  onClick(){
    console.log('c')
    this.router.navigate(['/dine'])
  }
}
