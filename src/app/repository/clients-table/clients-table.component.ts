import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NewClientFormService} from "../../shared/new-client-form.service";
import {FetchClientsGQL} from "../../../generated/graphql";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {NewClientComponent} from "../new-client/new-client.component";

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit {
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
    private newClientFormService: NewClientFormService,
    private fetchClientsGQL: FetchClientsGQL,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.fetchClientsGQL.watch().valueChanges.subscribe(result => {
      this.listData = new MatTableDataSource(result.data.fetchClients);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    })
  }

  createClient() {
    this.newClientFormService.updating = false;
    this.newClientFormService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(NewClientComponent, dialogConfig)
  }

  deleteClient(id) {
    this.newClientFormService.deleteClient(id);
  }

  updateClient(client) {
    this.newClientFormService.updating = true;
    this.newClientFormService.cliId = client.id;
    this.newClientFormService.updateClientFormGroup(client);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(NewClientComponent, dialogConfig)
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

}
