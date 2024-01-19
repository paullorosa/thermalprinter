import { Component } from '@angular/core';
import { Printer } from '@awesome-cordova-plugins/printer/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
toprint: string = "Hello World";

  constructor(private imprimir: Printer) {}

  printNow(){
    console.log("toprint", this.toprint);
    
    this.imprimir.print(this.toprint);
  }

}
