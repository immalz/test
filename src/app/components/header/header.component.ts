import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectUserInfo } from 'src/app/state/auth.selector';
import { map } from "rxjs/operators"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<any> = new Observable();

  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user$ = this.store.select(selectUserInfo);
  }

  loggout(): void {
    this.router.navigate(['']);
  }

}
