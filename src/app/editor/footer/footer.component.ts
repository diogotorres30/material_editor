import {Component, OnInit} from '@angular/core';
import {EditorComponent} from '../editor.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line:max-line-length

  constructor(public editorComponent: EditorComponent) {
  }

  ngOnInit(): void {
  }

}
