import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageWidth: number = 100;
  showImage:boolean = true;
  bookAuthor: string = "Tom Jones";
  bookTitle: string = "War and Peace 2";
  bookPrice: string = "$29.95";
  bookDescription: string = "Book of historical fiction";
  bookReviews: number = 25;
  bookImageUrl: string = "app/assets/images/656.jpg";
  booksInStock:number = 2;


  toggleImage():void{
    this.showImage = !this.showImage;
  }
}
