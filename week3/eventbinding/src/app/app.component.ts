import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event binding';
  name:string='RACHNA';
  branch:string='CSE';
  show:boolean=false;
  id:string='';
  getdetails():void{

  this.show=!this.show;
  this.id=this.name+' '+this.branch;
    
  }
}
