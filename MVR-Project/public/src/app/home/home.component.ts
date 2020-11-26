import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../shared/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.spinner.requestEnded();
  }
  onclick(){
    console.log('clicked')
  }
}
