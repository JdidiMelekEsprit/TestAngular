import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: any[] = [];
  announcements: any[] = [];
  totalUsers: number = 0;
  availableAnnouncements: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.loadUsers();
    this.loadAnnouncements();
  }

  loadUsers() {
    // Simulate fetching user data
    this.users = [
      { username: 'john_doe', email: 'john@example.com', role: 'userSimple' },
      { username: 'admin_user', email: 'admin@example.com', role: 'admin' },
      { username: 'jane_doe', email: 'jane@example.com', role: 'userSimple' },
      // Add more users as needed
    ];

    this.totalUsers = this.users.length;
  }

  loadAnnouncements() {
    // Simulate fetching announcements
    this.announcements = [
      { title: 'Announcement 1', available: true },
      { title: 'Announcement 2', available: false },
      { title: 'Announcement 3', available: true },
      // Add more announcements as needed
    ];

    this.availableAnnouncements = this.announcements.filter(a => a.available).length;
  }
}