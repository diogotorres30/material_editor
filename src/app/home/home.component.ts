import {Component, OnInit} from '@angular/core';
import {UserLoginService} from '../shared/user-login.service';
import {Router} from '@angular/router';
import {ProjectFormService} from '../shared/projectForm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  hide = true;

  constructor(
    public userLoginService: UserLoginService,
    private router: Router,
    private projectFormService: ProjectFormService
  ) {
  }


  ngOnInit() {
  }

  onSubmit() {
    if (this.userLoginService.form.valid) {
      this.projectFormService.userEmail =  this.userLoginService.form.value.email;
      console.log(this.userLoginService.form.value.password);

      this.userLoginService.form.reset();
      this.userLoginService.initializeFormGroup();
      this.router.navigate(['/repository']).then(r => {
      });
    }
  }


  onClear() {
    this.userLoginService.form.reset();
    this.userLoginService.initializeFormGroup();
  }
}
