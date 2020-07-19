import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }


}
