import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import { UserService } from './services/user.service';
import { UserInfo } from './models/user.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent{
	constructor(private _userService: UserService, private http: Http ) {};
	
	private users:UserInfo[];
	private errorMessage:any = '';
	
	getListOfUsers() {
		this._userService.getUsers()
			.subscribe(
				users => this.users = users,
				error => this.errorMessage = <any>error
			)
	}
}