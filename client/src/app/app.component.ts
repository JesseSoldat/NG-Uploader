import {Component, OnInit, ElementRef, Input} from '@angular/core';
import {Http, Response} from '@angular/http';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

const URL = '/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private http: Http, private el: ElementRef){}

  ngOnInit(){
  	this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};
  	this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
  		console.log('ImageUploaded: ',item,status,response);
  	};
  }

  upload(){

  }
}
