import { Component, OnInit } from '@angular/core';
import {IBook} from '../interfaces/IBook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  books: IBook[]=[
    {title:'NodeJs', cover:'assets/asset-0.png',linkDownload:'#'},
    {title:'Angular', cover:'assets/asset-1.png',linkDownload:'#'},
    {title:'C++ toàn tập', cover:'assets/asset-2.png',linkDownload:'#'},
    {title:'MongoDB', cover:'assets/asset-3.png',linkDownload:'#'},
    {title:'Front-End cơ bản', cover:'assets/asset-4.png',linkDownload:'#'},
    {title:'Angular 2', cover:'assets/asset-1.png',linkDownload:'#'},
  ];
  keyword:String = '';
  changeOption(){    
    console.log("Đã click");
  }
  constructor() { }

  ngOnInit() {
  }

}
