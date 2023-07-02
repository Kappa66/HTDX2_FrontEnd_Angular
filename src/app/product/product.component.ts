import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productValue =0 
  discount=0

  isAllowed = true

  constructor(private activate:ActivatedRoute){
    this.activate.params.subscribe((params)=>{
      let valone= params

      this.productValue = valone['productValue']
      this.discount = valone['discount']
    
    })
  }
/* Angular Forms
        1. Template Drien Forms
        2. Dynamic/Reactive Forms
    
    1.Template Driven Forms
        Its wasy to use, casue its simple and straight forwarded
        All the vaildations for the elements will be declared inside the html or 
        template.
        It uses the two way data binding
        Minimal component code as most of the code will be in Template file 
        Always Mention "ngForm" when using the template driven form  
    
     2.*/
}