import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router

  ) {
    // http://localhost:4200/portifolio/1
    this.activeRoute.params.subscribe(
      resposta => console.log(resposta)
    )

    // http://localhost:4200/portifolio/1?{name=mateus&token=123}
    this.activeRoute.firstChild ?.params.subscribe(
      resposta => console.log(resposta)
    )

    // http://localhost:4200/portifolio/1?{name=mateus&token=123}
    this.activeRoute.queryParams.subscribe(
      resposta => console.log(resposta)
    )

  }



  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
