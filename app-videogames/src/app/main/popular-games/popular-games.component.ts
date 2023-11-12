import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car.interface';


@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.scss']
})
export class PopularGamesComponent implements OnInit{


  lastCars!: ICar[];

  constructor() { }

  ngOnInit(): void {
    this.lastCars = [
      {
        title: 'LEVEL UP!   ⭐️⭐️⭐️⭐️⭐️',
        fecha: 'Lanzamiento: 21/05/2023',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, et delectus? Quos rem minus, numquam architecto esse, quia, impedit velit facilis eaque voluptatibus nobis nostrum asperiores! Quisquam laborum dolorem a!',
        image: '../../../assets/images/games/game1.jpg'
      },
      {
        title: 'THE TREND   ⭐️⭐️⭐️⭐️⭐️',
        fecha: 'Lanzamiento: 06/12/2018',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempora. Repellendus deserunt adipisci ea suscipit iure temporibus distinctio perspiciatis harum possimus saepe. Harum est sapiente ratione quis impedit, cum delectus?',
        image: '../../../assets/images/games/game4.jpg'
      },
      {
        title: '-> STARS   ⭐️⭐️⭐️⭐️',
        fecha: 'Lanzamiento: 28/09/2021',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, voluptatum repellat vitae iusto laudantium magni? Qui dignissimos totam, praesentium consequatur repellat adipisci aspernatur veritatis, animi fugiat, amet alias neque aperiam.',
        image: '../../../assets/images/games/game3.jpg'
      },
      {
        title: 'PIXEL ROCK   ⭐️⭐️⭐️⭐️',
        fecha: 'Lanzamiento: 02/08/2022',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
        image: '../../../assets/images/games/game5.jpg'
      },
      {
        title: '-> STARS   ⭐️⭐️⭐️⭐️',
        fecha: 'Lanzamiento: 21-05-2022',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi, beatae, quaerat laborum quia ab similique officia voluptate explicabo excepturi natus! Recusandae sequi eos sit aut asperiores tempore accusamus sapiente.',
        image: '../../../assets/images/games/game3.jpg'
      },
      {
        title: 'PLAY OVER   ⭐️⭐️⭐️',
        fecha: 'Lanzamiento: 21/01/2017',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit vitae doloribus! Dolore expedita ipsam error vel consequatur commodi debitis, id ullam exercitationem aperiam maiores sapiente suscipit asperiores distinctio vitae.',
        image: '../../../assets/images/games/game2.jpg'
      },
      {
        title: 'PIXEL ROCK   ⭐️⭐️⭐️⭐️',
        fecha: 'Lanzamiento: 30/02/2019',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur cum, nulla inventore tempora ipsam ducimus! Porro facere a accusamus sit, ducimus, nam doloribus quis mollitia ipsam fugit fugiat, necessitatibus dolor.',
        image: '../../../assets/images/games/game5.jpg'
      },
      {
        title: 'THE TREND   ⭐️⭐️⭐️⭐️⭐️',
        fecha: 'Lanzamiento: 15/12/2023',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi, beatae, quaerat laborum quia ab similique officia voluptate explicabo excepturi natus! Recusandae sequi eos sit aut asperiores tempore accusamus sapiente.',
        image: '../../../assets/images/games/game4.jpg'
      },
      
    ];
  }

  onByEvent(event: ICar) {
    console.log('Comprear', event);
    
  }

  onNotInterestedEvent(event: string) {
    console.log('No estoy interesado', event);
    
  }

}
