import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  roleAs: string | null;

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/signin',data);
  }


  _is_logged(): boolean {
  return !!localStorage.getItem('access_token');
    }

    
    getRole(role: string): boolean {
      const roleAs = localStorage.getItem('role');
      return roleAs === role; // Return true if role matches
    }
    out(): void {
    // Clear stored user data and token
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
  }
}
