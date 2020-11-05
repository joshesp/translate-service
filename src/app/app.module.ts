import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Servicio de traductor
import { I18nService } from './services/i18n.service';
// Pipe para traductpr
import { TranslatePipe } from './pipes/translate.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FormsModule } from '@angular/forms';

// Cuando inicaliza la aplicación cargar el servicio de traduccion (cargar [lang].json)
export function initAppLanguageFactory(provider: I18nService): () => Promise<void> {
  return () => provider.loadLanguage();
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    NavBarComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initAppLanguageFactory, deps: [I18nService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
