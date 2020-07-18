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
        'box-shadow':'0px 0px 50px rgba(0,0,0,0.17)',
        'opacity':1
      })),
      transition('off <=> start',[
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
            'box-shadow':'0px 0px 50px rgba(0,0,0,0.17)',
            'opacity':1.0,
            'offset':1
          })
        ]))
      ])

    ]),
    trigger('cardAnimation',[
      state('hide',style({
        'transform':'translateY(-1000px)'
        
      })),
      state('show',style({
        'transform':'translateY(0px) '
      })),
      transition('hide <=> show',animate(800))
    ]),
    trigger('skillCardAnimation',[
      state('hide',style({
        'transform':'translateY(1000px)'
        
      })),
      state('show',style({
        'transform':'translateY(0px) '
      })),
      transition('hide <=> show',animate(800))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }
  cardState="off";
  cardMovement="hide";
  skillCardState='hide';
  showMainCard=true;
  showSkillCard=false;

  ngOnInit(): void {
    setTimeout(()=>{
      this.cardState="on";
      this.cardMovement="show";
    },1)
  }
  closeMainCard()
  {
    this.cardState="off";
    this.cardMovement="hide";
    setTimeout(()=>{
      this.showMainCard=false;
      this.showSkillCard=true;
      setTimeout(()=>{
        this.skillCardState='show';
      },1)
    },501);
  }
  openMainCard()
  {
    this.skillCardState='hide';
    setTimeout(()=>{
      this.showSkillCard=false;
      this.showMainCard=true;
      this.cardState="on";
     setTimeout(()=>{
      this.cardMovement="show";
     },1)
    },501);
  }
}
