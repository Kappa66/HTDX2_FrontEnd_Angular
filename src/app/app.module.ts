import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cop1Component } from 'src/cop1/cop1.component';
import { Cop2Component } from 'src/cop2/cop2.component';
import { Cop3Component } from 'src/cop3/cop3.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';                    
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { PG404Component } from './pg404/pg404.component';
import { ProductComponent } from './product/product.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Cop1Component,
    Cop2Component,
    Cop3Component,
    PG404Component,
    ProductComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  // providers: [{provide: LocationStrategy,
  //             useClass:HashLocationStrategy}]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* app-module
        all the code and functionality is grouped in this module
        @ ==> it a decrator
        
        ---> Declartion: all the component loaded in the project
        --->Imports: All the modules for the applcaition
        --->providers: Services are added 
        --->Bootstrap: What is the first component to load
        ---> Exports: It is to export and expose the component for aoutside the module
        --->Always the application will be having minimumof of one component, it loaded in Appmodule
        ---> You can always turn on or off the modules based on the certain condition */
