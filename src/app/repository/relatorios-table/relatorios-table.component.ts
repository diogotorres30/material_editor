import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios-table',
  templateUrl: './relatorios-table.component.html',
  styleUrls: ['./relatorios-table.component.scss']
})
export class RelatoriosTableComponent implements OnInit {
  activeTab = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
