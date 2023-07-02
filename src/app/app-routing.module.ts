import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PG404Component } from './pg404/pg404.component';
import { Cop1Component } from 'src/cop1/cop1.component';
import { Cop2Component } from 'src/cop2/cop2.component';
import { Cop3Component } from 'src/cop3/cop3.component';
import { ProductComponent } from './product/product.component';
import { guard1Guard } from './guard1.guard';
import { thirdgGuard } from './thirdg.guard';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  // {
  //   path:"form",
  //   component:Form1Component
  // },  
  // {
  //   path:"cop1test",
  //   component : Cop1Component,
  //   canActivate:[guard1Guard]
  //   //outlet:'channel1'
    
  // },

  // {
  //   path:"cop2test",
  //   component : Cop2Component,
  //   outlet:'channel2'
    
  // },
  // {
  //   path:"home",
  //   redirectTo:"main"
  // }
  // {
  //   path:"main",
  //   component:AppComponent
  // },
  // {
  //   path: 'main',
  //   //component: AppComponent,
  //   children:[
  //     {
  //       path:"cop1test",
  //       component:Cop1Component,
  //     },
  //     {
  //       path:"cop2test",
  //       component:Cop2Component,
  //     },
  //     {
  //       path:"cop3test",
  //       component:Cop3Component,
  //     }
  //   ]
  // }, 
  {
    /* routing for reactive form */
    path:"form2",
    component:Form2Component
  },

  {
    path:"form",
    component:Form1Component
  },
  {
    path:"product",
    canActivate:[guard1Guard],
    children:[
      {
        path:"",
        component: ProductComponent
      },
      {
        path:'',
        canActivateChild:[thirdgGuard],
        children:[{path:"cop1",component:Cop1Component},
        {path:"cop2",component:Cop2Component},
        {path:"cop3",component:Cop3Component},
                  ]
      }
    ]
  },
  // {
  //   path:"cop3test",
  //   component : Cop3Component,
  //   outlet:'channel3'
  // },

  // {
  //   path: 'main',
  //   children: [
  //     {
  //       path:"cop2test",
  //       component : Cop2Component,
  //       //outlet:'channel2'        
  //     },
  //     {
  //       path:"cop3test",
  //       component : Cop3Component,
  //       //outlet:'channel3'
  //     },
  //   ],
  // },
  // {
  //   path: 'product/:productId/discount/:discount',
  //   component: ProductComponent,
  // },
  
  /* wildCard Routes 
        Intercept any invaild address  or path address of our application
        path**
        loading Error 404 or Page not found*/
  {
    path:'payment',
  loadChildren: () =>import('./payment/payment.module').then(m=> m.PaymentModule)},
  {
    path:'pay2',
    canMatch:[guard1Guard],
  loadChildren: () =>import('./pay2/pay2.module').then(m=> m.Pay2Module)},
  {
    path:"**",
    component : PG404Component
  }
];

/* Lazy loading
        Initally we will load only the neccessary modules
        Then if needed we load some modules if neccessary
        Load children, a function that uses the dynamic imports syntax to import
        our loazy loaded  modules when needed
        Steps: create the sperate modules 
              Cconfigure the loadchildren in app routing
              command ----> ng g module payment --route payment --module app.module*/
/* Router-outlet 
      is a element that is avaiable from router library where the router insert the component that
      gets matched on the browser URL
      
      we can add multiple outlets in our application which enables you to implement advance routing setting
      by default there is allways one router outlet ie, called primary outlet.*/

/* Routing Strategies
    
      HashLocationStrategy
          Manual routing strategy
          URLS will have a hash(#) in the address
          We need to import hashlocationStradtegt from @angular/core
          */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
