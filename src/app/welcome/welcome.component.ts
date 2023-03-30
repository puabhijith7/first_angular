import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  
  t:number=0
  name:number=0
  myFunction(){
   this.t= this.name *2.20462262
  }
}

