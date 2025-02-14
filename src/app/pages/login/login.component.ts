import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { APIresponse, User } from '../../modules/user';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObg: User = new User();
  masterSrv = inject(MasterService)
  rout = inject(Router)

  onLogin(){
    this.masterSrv.login(this.loginObg).subscribe((res:APIresponse)=>{
      if(res.result){
        localStorage.setItem("incidetntUser", JSON.stringify(res.data))
        this.rout.navigateByUrl('/dashboard')
      }
    })
    console.log(this.loginObg.name)
  }
}
