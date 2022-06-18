import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-type',
  templateUrl: './game-type.component.html',
  styleUrls: ['./game-type.component.scss']
})
export class GameTypeComponent implements OnInit {
  types:any = [
    {type: 'social', id: 'social'},
    {type: 'numbers', id: 'numbers'},
    {type: 'flags', id: 'flags'},
    {type: 'animals', id: 'animals'},
    {type: 'food', id: 'food'},
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToGame(value: any) {
    // console.log(value);
    
    this.router.navigate(['/game/',value])
  }

}
