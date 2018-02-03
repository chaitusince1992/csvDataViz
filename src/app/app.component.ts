import { Component, Output } from '@angular/core';
import { CsvReaderService } from './services/csv-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  // csvData;
  @Output() csvData;
  // csvReader:FileReader = new FileReader(); 

  fileUploadChange = function(e) {
    // console.log(e, e.currentTarget.files[0]);
    // console.dir(e.currentTarget);
    this.getFile.readFile(e.currentTarget.files, (res)=>{
        console.log(res);
        this.csvData = res;
        // this.csvData = this.getFile.parseCSV(res);
        // console.log(this.csvData);
    });
  }

  // csvReader.onloadend = function() {
      
  // }
  constructor(public getFile: CsvReaderService) {
  }

}
