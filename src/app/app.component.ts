import { Component, Output } from '@angular/core';
import { CsvReaderService } from './services/csv-reader.service';


import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // csvData;
  firstData: [{
    year,
    value
  }];
  @Output() csvData;
  // csvReader:FileReader = new FileReader(); 

  fileUploadChange = function (e) {
    // console.log(e, e.currentTarget.files[0]);
    // console.dir(e.currentTarget);
    this.getFile.readFile(e.currentTarget.files, (res) => {
      this.firstData = res[0].seriesData;
      console.log(this.firstData, res[0].seriesData);
      this.csvData = res;
      // this.csvData = this.getFile.parseCSV(res);
      // console.log(this.csvData);


      this.initSvg();
      this.initAxis();
      this.drawAxis();
      this.drawLine();
    });
  }

  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;

  // csvReader.onloadend = function() {

  // }
  constructor(public getFile: CsvReaderService) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
  }

  private initSvg() {
    this.svg = d3.select("svg")
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initAxis() {
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.firstData, (d) => new Date(d.year)));
    let maxYAxis = d3Array.max(this.firstData.map(function(d){return d.value}));
    this.y.domain([0, maxYAxis]);
  }

  private drawAxis() {

    this.svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3Axis.axisBottom(this.x));

    this.svg.append("g")
      .attr("class", "axis axis--y")
      .call(d3Axis.axisLeft(this.y))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)");
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x((d: any) => this.x(new Date(d.year)))
      .y((d: any) => this.y(d.value));

    this.svg.append("path")
      .datum(this.firstData)
      .attr("class", "line")
      .attr("d", this.line);
  }

}
