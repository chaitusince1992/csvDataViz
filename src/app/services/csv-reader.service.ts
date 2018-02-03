import { Injectable } from '@angular/core';

@Injectable()
export class CsvReaderService {
  constructor() { 

  }
  readFile(csvFile:any, callback:Function) {
    console.log(csvFile);
    let parseCSV = this.parseCSV;
    var file:File = csvFile[0];
    var csvReader:FileReader = new FileReader();
    csvReader.onloadend = function() {
      // console.log(arguments, this.result, csvReader);
      console.log(csvReader);
      // return csvReader.result;
      // callback(csvReader.result);
      callback(parseCSV(csvReader.result));
    }
    csvReader.readAsText(file);
    // console.dir(csvReader);
  }

  parseCSV(text:String) {
    // console.log(text);
    var seriesArray = [];
    let lines = text.split('\n');
    lines.forEach(function(row) {
      let series = row.split(',');
      console.log(series[0]);
      let seriesDataArray = [];
      for(let i=1;i<series.length;i++) {
        seriesDataArray.push({
          year: series[i].split('|')[0],
          value: series[i].split('|')[1]
        });
      }
      seriesArray.push({
        seriesName: series[0],
        seriesData: seriesDataArray
      });
    })
    // console.log(seriesArray);  
    return seriesArray;  
  }

}
