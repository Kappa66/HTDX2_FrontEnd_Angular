import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  firstname=''
  checkbox = false                         
  chooseoption = ''
  descr=''

  fun1(formValue:NgForm){
    console.log(formValue.value)
  }

 resetForm(value:NgForm){
    value.reset()
  }

  setValues(value:NgForm){
    let details = {
      firstname:'newName',
      checkbox: false ,                        
      chooseoption:'option one',
      descr:'some description'
    }
    value.setValue(details)
  }
}
