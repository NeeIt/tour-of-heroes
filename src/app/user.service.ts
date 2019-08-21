import { Injectable } from "@angular/core";
import { User } from "./User";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private usersUrl = "api/users";

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap(_ => this.log("fetched heroes")),
      catchError(this.handleError<User[]>("getUsers", []))
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.get<User>(url).pipe(
      tap(_ => this.log("fetched heroes")),
      catchError(this.handleError<User>("getUser"))
    );
  }
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>("updateUser"))
    );
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
      tap((newUser: User) => this.log("added new user ")),
      catchError(this.handleError<User>("addUser"))
    );
  }
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === "number" ? user : user.id;
    const url = `${this.usersUrl}/${id};`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log("deleted hero")),
      catchError(this.handleError<User>("deleteUser"))
    );
  }
  searchUser(name: string): Observable<User[]> {
    if (!name.trim()) return of([]);
    else {
      return this.http.get<User[]>(`${this.usersUrl}/?name=${name}`).pipe(
        tap(_ => this.log(`found heroes matching "${name}"`)),
        catchError(this.handleError<User[]>("searchHeroes", []))
      );
    }
  }

  private log(message: string) {
    this.messageService.add(`UsersService: ${message}`);
  }
}
