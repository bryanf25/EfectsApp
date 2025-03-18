import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  users :User[] = []

  constructor(private userService: UserService){}
  
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe( (userData:User[]) => {
      this.users = userData
      console.log(this.users)
    })
  }
}
