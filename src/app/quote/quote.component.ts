import { Component, OnInit } from '@angular/core';
import {Quote}from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quote';
  quoteEntries:Quote[] = [
    new Quote('A quitter never wins and a winner never quits', '0', new Date(2020, 4, 3)),
    new Quote('red red wine', '0', new Date(2020,4,4) ), 
    new Quote('angular', '0', new Date(2020,5,5) )
 ];

  constructor() { }

  ngOnInit(): void {
  }

}
