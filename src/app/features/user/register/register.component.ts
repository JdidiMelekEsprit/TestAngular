import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Announcement} from "../../../core/models/announcement";
import {User} from "../../../core/models/User";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // FormGroup: class that match the form tag in the Template && is a collection of inputs
     formRegister: FormGroup;
     user:User = new User();
     constructor(private userService: UserService, private router: Router) {}
     ngOnInit(): void {
      this.formRegister = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        username: new FormControl('', [Validators.required, Validators.minLength(5)]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        role: new FormControl('userSimple', Validators.required),
        address: new FormGroup({
          street: new FormControl(''),
          city: new FormControl(''),
          zipCode: new FormControl('')
        }),
        phoneNumbers: new FormArray([])
      });
    }
    
     //Helper method
     createPhoneControl(){
       return new FormControl('', [Validators.pattern(/^[0-9]{8}$/)]);
  }
  addPhoneNumber(){
       this.phoneNumbers.push(this.createPhoneControl());
  }
  removePhoneNumber(i:number){
    this.phoneNumbers.removeAt(i);
  }
     //the method save to be executed after the submit event (ngSubmit)
      get phoneNumbers(){
       return (this.formRegister.get('phoneNumbers') as FormArray);
      }
     save(){
       //backend
       this.user = this.formRegister.getRawValue();
       this.userService.addUser(this.user).subscribe(
         (data:User)=>{this.router.navigateByUrl('user/profile/${data.id}');

          this.router.navigateByUrl('/user/login');
         },
     
       (error) => {
        // Handle any errors (optional)
        console.error('Registration failed:', error);
      }
    );
       //get the set of value of each input in the form
        console.log(this.formRegister.getRawValue())

     }
}
