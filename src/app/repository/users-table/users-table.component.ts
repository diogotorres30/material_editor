import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {NewUserFormService} from '../../shared/new-user-form.service';
import {FetchUsersGQL} from '../../../generated/graphql';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NewUserComponent} from '../new-user/new-user.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  searchKey: string;
  public listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'name',
    'email',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private newUserFormService: NewUserFormService,
    private fetchUsersGQL: FetchUsersGQL,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.fetchUsersGQL.watch().valueChanges.subscribe(result => {
      this.listData = new MatTableDataSource(result.data.fetchUsers);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  createUser() {
    this.newUserFormService.updating = false;
    this.newUserFormService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(NewUserComponent, dialogConfig);
  }

  deleteUser(id) {
    this.newUserFormService.deleteUser(id);
  }

  updateUser(user) {
    this.newUserFormService.updating = true;
    this.newUserFormService.userId = user.id;
    this.newUserFormService.updateUserFormGroup(user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    this.dialog.open(NewUserComponent, dialogConfig);
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

}
