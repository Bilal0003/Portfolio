import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HeaderComponent } from './header/header.component';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
