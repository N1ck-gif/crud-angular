/* 
  
  Quando for criar um @Input dentro de uma diretiva, colocar o seletor primeiro e depois o separador
  neste caso, estamos usando o 'Em' como separador, isso significa que o valor dessa @Input vai receber
  o valor que vem depois do 'Em' no html 
  
  Exemplo:
  <li *myFor="let n em [1,2,3]">{{n}}</li>
  
  Sempre devemos referenciar uma diretiva estrutural com um '*' antes do seletor no HTML
*/

import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {

  // Este @Input é o nome que vamos usar no HTML para referenciar nossa diretiva
  @Input("myForEm") numbers!: number[];

  constructor(
    private container: ViewContainerRef,
    // Este template é a tag que você está chamando a diretiva
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number }
      );
    }
    console.log(this.numbers);
  }
}
