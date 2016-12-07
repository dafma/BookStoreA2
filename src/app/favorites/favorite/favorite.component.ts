import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  fave:boolean = false;

  @Input()favorite:string;
  @Input()reviews:number;
  @Output()favoriteClicked:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onClick():void{
    this.favoriteClicked.emit(`The favorite ${this.favorite} was saved`);
    this.fave = !this.fave;
}
isSelected(fave:boolean):boolean{
  if(!fave || !this.fave){
    return false;
  }
  if(fave){
    return true;
  }
}
}
