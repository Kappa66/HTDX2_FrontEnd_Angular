import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
/* For step 4.
                ngOnInIt() : just for the initial  declaration or setup for capturing the data or API */
export class Form2Component implements OnInit {

    addForm: FormGroup;
    
  /* using form Group */
 /*  constructor(){}
  ngOnInit():void{
    this.addForm= new FormGroup({
      'fn':new FormControl(),
      'description': new FormControl(),
      'type': new FormControl()
    })
  } */

  /* using formbuilder */
  constructor(private fb:FormBuilder){}
    ngOnInit():void{      
      /* Validators  on Reacative forms
            Always add the Validators inside the ForControlName of a formGroup
            We have single or multiple validators
            we can add error messages to each form control of our forgroup in the form */
            
        
      this.addForm=this.fb.group({
        'fn':new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(10)]),
        'description': new FormControl('',[Validators.required, Validators.maxLength(10)]),
        'type': new FormControl(''),
        /* 'users': new FormArray([
          new FormControl('first one'),
          new FormControl('Second one'),
          new FormControl('first one'),
          new FormControl('Second one'),
          new FormControl('first one'),
          new FormControl('Second one'),
          new FormControl('first one'),
          new FormControl('Second one')
        ])
        
 */
        'users': new FormArray([
          this.fb.group({
            'name':new FormControl(''),
            'Marks':new FormControl(''),
            'branch':new FormControl('')
          })
        ])
        
      })
      /* Form Array 
            Create an array of form elements and make it dynamic intermsof creating new elements
            it consists of Formcontrol, group, nested form arrays as wll
            Implement the Dom interactions with Form Arrays
            Add or Remove the elements as user wishes to */

           /*  let users =new FormArray([
              new FormControl('first one'),
              new FormControl('Second one')
            ])  */ 

      let obj={
        'fn':'Name1',
        'type':'Reactive',
        //'description':'writing the letters'
      }


      /* setValue Method, always need to set the values for all the form elements */
      //this .addForm.setValue(obj)


      //patchValue,it will not throw a error even if one form element's value is not set
      this.addForm.patchValue(obj)

      /* Capturing the values from the form 
        1. form.value
        2. Inorder to get Value from the specific form element, we need to use "get" method
        3.Inorder to get value from the event ie, Form changes event, we will use ""*/


    }
    addval(){
      /* 1. form.value */
      console.log(this.addForm.value)

      /* 2. Inorder to get Value from the specific form element, we need to use "get" method */
      // console.log(this.addForm.get('fn').value)
      // console.log(this.addForm.get('type').value)

     /* 3.Inorder to get value from the event ie, Form changes event, we will use ""*/
    //   this.addForm.valueChanges.subscribe(data=>{
    //     console.log(data)
    //  })
      // if(this.addForm.pristine){

      // }

      // if(this.addForm.touched){

      // }

     /* Form States
      -->The form states always returns the states of the form
           Valid / Invalid --- is valid or not 
           Pristine --- it return when form has not been modified
           touched -- return when form has been interacted
           dirty -- it return when form has been modified */
      console.log(this.addForm.valid);
      console.log(this.addForm.invalid);
      console.log(this.addForm.pristine);
      console.log(this.addForm.dirty);
      console.log(this.addForm.touched);
      console.log(this.addForm.untouched);

    
    }

    resetForm(){
      this.addForm.reset();
    }

    addUser(){
      let userArr = this.addForm.get('users') as FormArray
      let newUser = this.fb.group({
      'name':'',
      'Marks':'',
      'branch':''
      });
      userArr.push(newUser)
    }

    removeElement(i){
      let arr = this.addForm.get('users') as FormArray
      arr.removeAt(i)
    }

    get users():FormArray{
      return this.addForm.get('users') as FormArray
    }
    assign(i){

      let arr = this.addForm.get('users') as FormArray
      
      if( arr.value[i].Marks >61){
        arr.value[i].branch = 'CSE';

      }
      else {
        arr.value[i].branch = 'Not Qualified'; 
      }
      arr.setValue(arr.value)
      //this.users.setValue(arr.value)
    }

  }
