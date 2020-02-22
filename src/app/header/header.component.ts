import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;

      if (user) {
        this.dataStorageService.setUserId(user.id);
      }
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveFavorites() {
    this.dataStorageService.storeFavorites();
  }

  onFetchFavorites() {
    this.dataStorageService.fetchFavorites().subscribe();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
