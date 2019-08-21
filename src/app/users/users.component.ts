import {Component,OnInit} from '@angular/core';

import {User} from '../User'

import {UserService} from '../user.service'
import {MessageService} from '../message.service';

@Component({
    selector:'app-users',
    templateUrl:'./users.component.html',
    styleUrls:['./users.component.css']
})

export class UserModule implements OnInit{
    users:User[];
    selectedUser:User;
    constructor(private userService: UserService, private messageService:MessageService){}
    
    ngOnInit(){this.getUsers();}
    
    getUsers(): void {
       this.userService.getUsers().subscribe(users => this.users = users);
      }

    add(name:string):void{
        name=name.trim();
        if(!name){return;}
        this.userService.addUser({name} as User)
        .subscribe(user => {this.users.push(user)})
    }
    delete(user:User):void{
        this.users=this.users.filter((item)=>item !== user);
        this.userService.deleteUser(user).subscribe();
    }

}