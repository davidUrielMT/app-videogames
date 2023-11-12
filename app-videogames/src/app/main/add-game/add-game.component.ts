import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  group!: FormGroup  

  constructor() {}

  ngOnInit(): void {
    this.group = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required, Validators.email]),
      descpiption: new FormControl('', Validators.required),
      downloads: new FormControl('', Validators.required)
    })
    
  }

}
