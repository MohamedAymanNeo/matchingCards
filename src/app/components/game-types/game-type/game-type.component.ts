import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-game-type',
  templateUrl: './game-type.component.html',
  styleUrls: ['./game-type.component.scss']
})
export class GameTypeComponent implements OnInit {
  gameTypes: any= [];
  constructor(private router: Router, private typesService: FetchDataService) { }

  ngOnInit(): void {
    this.typesService.getTypes().subscribe((types: any) => {
      this.gameTypes = types
    })
  }

  goToGame(value: any) {    
    this.router.navigate(['/game/',value])
  }

}
