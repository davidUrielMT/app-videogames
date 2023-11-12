import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit{
  @Input() car!: ICar;
  @Output() buyEvent: EventEmitter<ICar> = new EventEmitter<ICar>();
  @Output() noInterestedEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  onBuy() {
    this.buyEvent.emit(this.car)
  }

  onNotInterested() {
    this.noInterestedEvent.emit('No estoy interesado')
  }
}
