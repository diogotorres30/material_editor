import { Component, OnInit } from '@angular/core';
import {EditorComponent} from '../editor.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public editorComponent: EditorComponent) { }

  ngOnInit(): void {
  }

}
