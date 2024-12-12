import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  user: any;  // Declare a variable to hold the user data

  ngOnInit(): void {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('user');
    
    if (userData) {
      this.user = JSON.parse(userData);  // Parse the JSON string back into an object
    } else {
      console.log('User not found in localStorage');
    }
  }
}