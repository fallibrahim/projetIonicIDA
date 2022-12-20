import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { EmployerService } from 'src/app/services/employer.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm!:FormGroup
  constructor(
    private adminService : AdminService,
    private employerService : EmployerService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(null, [
        Validators.required]),
      mdp : new FormControl(null, 
        [Validators.required])
    })
  }
  logIn() {
    this.adminService.getAdmin().subscribe(res => {
      const user = res.find((a:any) => {
        return a.email === this.loginForm.value.email;
      })
      if(user) {
        if (user.mdp === this.loginForm.value.mdp)
        alert("la connexion est réussi");
        this.loginForm.reset();
        this.router.navigate(['/admin']);

      }
      else {
        alert("login ou mot de passe incorrect!");
      }
    }) 
      
 }
 shouldShowEmailRequiredError() {

  const email = this.loginForm.controls['email'];

  return email.touched && email.hasError('required');

}
shouldShowMdpRequiredError() {
  const mdp = this.loginForm.controls['mdp'];
  return mdp.touched && mdp.hasError('required');
}
}
