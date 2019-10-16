import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const material = [MatButtonModule, MatToolbarModule, MatSidenavModule, FormsModule, MatListModule, MatIconModule, BrowserAnimationsModule];

@NgModule({
	imports: [material],
	exports: [material]
})
export class MaterialModule { }
