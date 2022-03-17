import { TokenService } from './../../services/token/token.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

export type returnlogin = {
  access_token:string
}

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  login = new FormGroup({
    username: new FormControl("john",Validators.required),
    password: new FormControl("changeme",Validators.required)
  })
    response:any
  constructor(private authService: AuthService, private tokenService: TokenService) { }
  
  onSubmit() {
    this.authService.login(this.login.value.username, this.login.value.password).subscribe((res: returnlogin) => {
      this.tokenService.saveToken(res.access_token)
    })
  }
  ngOnInit(): void {
  }

}