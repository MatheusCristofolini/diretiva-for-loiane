import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-for',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.scss']
})
export class DiretivaForComponent implements OnInit {

  carros: string[] = [];

  constructor() {

    this.carros = ["Gol", "Voyage", "Palio", "Fox", "Celta"]
   }

  ngOnInit(): void {
  }

}
