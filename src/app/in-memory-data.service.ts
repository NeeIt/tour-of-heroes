import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from './User';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor(private userService:UserService) {
   }
   createDb() {
    const users = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {users};
  }
   genId(users:User[]):number{
    return users.length>0?Math.max(...users.map(hero=>hero.id))+1:11;
  }
}
