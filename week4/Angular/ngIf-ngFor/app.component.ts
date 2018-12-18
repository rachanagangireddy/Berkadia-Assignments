import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIf and ngFor example';
  isAvail=true;
  Students=[{
name:'RACHANA' ,branch:'CSE'},
{name:'RAJEE' ,branch:'CSE'},
{name:'RAMA' ,branch:'IT'},
{name:'TANU' ,branch:'CSE'}];

}
