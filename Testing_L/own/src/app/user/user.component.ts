import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  user!: {name:string};
  isLoggedIn = false; 
  data!: string;

 constructor(private dataService:DataService){

 }

 ngOnInit(): void {  
  this.dataService.fetchInfo().then( data => this.data = data)
 }

}
