import {Component, OnInit, ViewChild} from '@angular/core';
import {FetchComplexRelatorioGQL, FetchFindingsGQL, Finding, Maybe} from "../../generated/graphql";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-report-editor',
  templateUrl: './report-editor.component.html',
  styleUrls: ['./report-editor.component.scss']
})
export class ReportEditorComponent implements OnInit {
  localListData: Maybe<Array<{ __typename?: "Finding" } & Pick<Finding, "title" | "description" | "impact" | "remediation" | "cvssVector" | "severity" | "otherReferences">>>
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'title',
    'actions'
  ];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private fetchComplexRelatorioGQL: FetchComplexRelatorioGQL, private fetchFindingsGQL: FetchFindingsGQL) {
  }

  ngOnInit() {
    this.fetchFindingsGQL.watch().valueChanges.subscribe((result => {
      this.localListData = result.data.fetchFindings;
      this.listData = new MatTableDataSource(result.data.fetchFindings);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    }))
    this.fetchComplexRelatorioGQL.watch({id: "5ec5d760cc05a73968743096"}).valueChanges.subscribe(result => {
      console.log(result.data);
    })
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

}
