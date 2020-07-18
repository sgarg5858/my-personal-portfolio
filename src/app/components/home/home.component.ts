import { Component, OnInit } from '@angular/core';
import { style, trigger, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('BounceandShadow',[
      state('off',style({
        'opacity':0.5
      })),
      state('on',style({
        'box-shadow':'0px 0px 40px rgba(0,0,0,0.17)',
        'opacity':1
      })),
      transition('off => start',[
        animate(5000,keyframes([
          style({
            'box-shadow':'0px 0px 5px rgba(0,0,0,0.17)',
            'opacity':0.6,
            'offset':0.2
          }),
          style({
            'box-shadow':'0px 0px 10px rgba(0,0,0,0.17)',
            'opacity':0.7,
            'offset':0.4
          }),
          style({
            'box-shadow':'0px 0px 20px rgba(0,0,0,0.17)',
            'opacity':0.8,
            'offset':0.6
          }),
          style({
            'box-shadow':'0px 0px 30px rgba(0,0,0,0.17)',
            'opacity':0.9,
            'offset':0.8
          }),
          style({
            'box-shadow':'0px 0px 40px rgba(0,0,0,0.17)',
            'opacity':1.0,
            'offset':1
          })
        ]))
      ])

    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }
  cardState="off"
  ngOnInit(): void {
    setTimeout(()=>{
      this.cardState="on"
    },1)
  }

}
