import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.scss']
})
export class UpcomingGamesComponent implements OnInit{

  lastCars!: ICar[];

  constructor() { }

  ngOnInit(): void {
    this.lastCars = [
      {
        title: 'LEVEL UP!',
        fecha: 'Próximamente',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et delectus? Quos rem minus, numquam architecto esse, quia, impedit velit facilis eaque voluptatibus nobis nostrum asperiores! Quisquam laborum dolorem a!',
        image: '../../../assets/images/games/game6.jpg'
      },
      {
        title: 'THE TREND',
        fecha: 'Próximamente',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora. Repellendus deserunt adipisci ea suscipit iure temporibus distinctio perspiciatis harum possimus saepe. Harum est sapiente ratione quis impedit, cum delectus?',
        image: '../../../assets/images/games/game6.jpg'
      },
      {
        title: '-> STARS',
        fecha: 'Próximamente',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, voluptatum repellat vitae iusto laudantium magni? Qui dignissimos totam, praesentium consequatur repellat adipisci aspernatur veritatis, animi fugiat, amet alias neque aperiam.',
        image: '../../../assets/images/games/game6.jpg'
      },
      {
        title: '-> STARS',
        fecha: 'Próximamente',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, voluptatum repellat vitae iusto laudantium magni? Qui dignissimos totam, praesentium consequatur repellat adipisci aspernatur veritatis, animi fugiat, amet alias neque aperiam.',
        image: '../../../assets/images/games/game6.jpg'
      },
    ]
  }

  onByEvent(event: ICar) {
    console.log('Comprear', event);
    
  }

  onNotInterestedEvent(event: string) {
    console.log('No estoy interesado', event);
    
  }

}
