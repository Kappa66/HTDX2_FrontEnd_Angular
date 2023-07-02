import { Component } from '@angular/core';

@Component({
  selector: 'app-cop1',
  templateUrl: './cop1.component.html',
  styleUrls: ['./cop1.component.css']
})
export class Cop1Component {

  superpower= "AquaMan"

  r = "1456"

  g= "green"

  sentance = "This is the sentance for the class"

  class='c1'

  h="head"
  val = 2
  
   /* Data binding
        means to bind the data from template to component and componenet to template 
        Define how the dta flows and how the data gets updated based on the logic code
        
        1.Interploation
              From ts file to template file
              Syntax:{{var}}
               */
              
       /*  2. Property binding 
            */
           
  hello(){
    console.log("hello everyone")
  }

  a(x:string,y:number,z:boolean){
    console.log(x+y+z)
  }

  b(x:number,y:number,z:string){
    console.log(x+y+z)
  }

  c(x:boolean,y:boolean,z:boolean){
    console.log(x,y,z)
  }

  lowerCase="THIS USED TO BE IN UPPERCASE"

  upperCase= "this used to be in lowercase chars"

  date_exm=Date.now()

  obj={
    "valone":"ships",
    "valtwo":"trains",
    "valthree":"planes"
  }
  numval = 2.36
  numval2 = 0.9678
}
