import { Component, OnInit } from '@angular/core';
//import {IBook} from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  favoriteMessage: string="";
  showMessage: string = 'test';
  imageWidth: number = 100;
  showImage:boolean = true;
  booksInStoc:number=2;


  books:any[]=[{
      bookAuthor:"Tom Jones",
      bookTitle:"War and Peace 2",
      bookPrice:29.95,
      bookDescription:"Book of historical fiction dddssddssdsdasddddddd",
      publishedOn: new Date('02/11/1921'),
      inStock: "yes",
      bookReviews:25,
      bookImageUrl:"app/assets/images/656.jpg",

  },
  {
      bookAuthor:"Mike Jones",
      bookTitle:"War and Peace 3",
      bookPrice:19.95,
      bookDescription:"Book of historical fiction dddssddssdsdasddddddd",
      publishedOn: new Date('02/11/1921'),
      inStock: "yes",
      bookReviews:25,
      bookImageUrl:"app/assets/images/656.jpg",

  }]
onFavoriteClicked(message:string): void{
  this.favoriteMessage = message;
}

  toggleImage():void{
    this.showImage = !this.showImage;
  }

  onNotifyClicked(message:string):void{
    this.showMessage = message;

  }

}
