import { Component } from '@angular/core';
import { Printer } from '@awesome-cordova-plugins/printer/ngx';

// Declare manualmente o tipo FontOptions
interface FontOptions {
  align: 'left' | 'center' | 'right' | 'justified';
  bold: boolean;
  color: string;
  italic: boolean;
  size: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  toprint: string = "Hello World";

  constructor(private imprimir: Printer) {}

  printNow() {
    let fontOpts: FontOptions = {
      align: 'left', // ou 'center', 'right', 'justified'
      bold: false,
      color: 'black',
      italic: false,
      size: 12,
      name: 'Times New Roman',
    };

    this.imprimir.print(
      this.toprint,
      {
        name: 'MyDocument',
        duplex: true,
        orientation: 'portrait',
        monochrome: true,
        font: fontOpts,
      },
    ).then(() => {
      console.log('Impressão concluída com sucesso.');
    }).catch(err => {
      console.error('Erro ao tentar imprimir:', err);
    });
  }
}
