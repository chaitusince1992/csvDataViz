import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CsvReaderService } from './services/csv-reader.service';
import { DataListComponent } from './data-list/data-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CsvReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
