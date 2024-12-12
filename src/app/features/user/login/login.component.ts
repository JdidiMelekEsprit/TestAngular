import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username:string="";
password:string="";
errorMessage: string = '';
  constructor(private authService: AuthentificationService,private router: Router){
  }
  login(): void {
    this.authService.login({ "email": this.username, "password": this.password }).subscribe(
      (response) => {
        // Store token and user info in localStorage
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('role', response.user.role);
        localStorage.setItem('user', JSON.stringify(response.user));  // Store as JSON string
  
        console.log('Response:', response);  // Log the response to confirm it
  
        // Redirect based on role
        const userRole = response.user.role;
        if (userRole === 'userSimple') {
          this.router.navigateByUrl('user/profil'); // Redirect to the profile page
        } else if (userRole === 'admin') {
          this.router.navigateByUrl('user/admin-dashboard'); // Redirect to the admin dashboard
        }
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
  
}
