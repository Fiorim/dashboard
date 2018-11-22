import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  name = '';
  email = '';
  phone = '';
  address = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
      this.address = user.address;
    });
  }

}
