import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes-messages',
  templateUrl: './heroes-messages.component.html',
  styleUrls: ['./heroes-messages.component.css']
})
export class HeroesMessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}