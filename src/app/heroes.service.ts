import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
@Injectable()
export class HeroesService {

  constructor(private messageService : MessageService) { }

}