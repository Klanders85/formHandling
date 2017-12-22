import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 import {UserInfo} from "./../models/user.model";

@Injectable()
export class UserService {
    constructor(private http: Http) {}
    
    private URL:string = 'http://localhost:3000';
    private extractData(res: Response) {
        return res.json() || [];
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
    
    getUsers():Observable<UserInfo[]> {
        return this.http.get(this.URL+'/users')
            .map(this.extractData)
            .catch(this.handleError);
    }
}
