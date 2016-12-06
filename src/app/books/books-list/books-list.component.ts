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
  booksInStoc:number=2;


  books:any[]=[{
      bookAuthor:"Tom Jones",
      bookTitle:"War and Peace 2",
      bookPrice:"$29.95",
      bookDescription:"Book of historical fiction",
      bookReviews:25,
      bookImageUrl:"app/assets/images/656.jpg",


  }]



  toggleImage():void{
    this.showImage = !this.showImage;
  }
}
