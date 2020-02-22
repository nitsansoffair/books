import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  userId: string;

  constructor(private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      this.userId = user.id;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveFavorites() {
    this.dataStorageService.storeFavorites(this.userId);
  }

  onFetchFavorites() {
    this.dataStorageService.fetchFavorites(this.userId);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
