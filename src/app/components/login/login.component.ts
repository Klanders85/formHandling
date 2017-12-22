import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { UserService } from '../../services/user.service';
import { UserInfo } from '../../models/user.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService, private http: Http ) {};

  private users:UserInfo[];
	private errorMessage:any = '';
	registerNewUser:boolean = false;
	
	registerUserToggle() {
		this.registerNewUser = !this.registerNewUser;
	}
  
	getListOfUsers() {
		this._userService.getUsers()
			.subscribe(
				users => this.users = users,
				error => this.errorMessage = <any>error
		  )
	}

  ngOnInit() {}

}
