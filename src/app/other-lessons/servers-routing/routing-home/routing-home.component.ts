import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-routing-home',
  templateUrl: './routing-home.component.html',
  styleUrls: ['./routing-home.component.css']
})
export class RoutingHomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number): void {
    // complex calculation stuff
    this.router.navigate(['../servers', id, 'edit'], {relativeTo: this.route, queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin(): void {
    this.authService.login();
  }

  onLogout(): void {
    this.authService.logout();
  }

}
