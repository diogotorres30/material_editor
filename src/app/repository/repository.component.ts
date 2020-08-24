import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }


  logout() {
    this.router.navigate(['/']).then(r => {
    });
  }
}
