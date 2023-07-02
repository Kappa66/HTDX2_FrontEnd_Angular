import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  /* main.ts
        App starts executing
        we will be setting the straight point for the execution
        Authentication will take place
        we make it start any module we want */
