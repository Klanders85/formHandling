import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { Observable } from "rxjs/Rx"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatToolbarModule, MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatCheckbox, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule, 
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
