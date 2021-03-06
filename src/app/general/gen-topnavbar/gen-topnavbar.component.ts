//Core Imports
import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router
} from '@angular/router';

//Application Import 
import {
  UserService
} from '../../shared/services'

@Component({
  selector: 'gen-topnavbar',
  templateUrl: './gen-topnavbar.component.html',
  styleUrls: ['./gen-topnavbar.component.css']
})
export class GenTopnavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  /**
   * Logs out the current user
   */
  logout() {
    this.userService.logOut();
  }
}
