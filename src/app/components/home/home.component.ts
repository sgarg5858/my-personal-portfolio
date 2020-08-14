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
        animate(1000,keyframes([
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
      transition('hide <=> show',animate(200))
    ]),
    trigger('rotateEmoji',[
      state('off',style({
        'transform':'rotate(-360deg)'
        
      })),
      state('on',style({
        'transform':'rotate(0) '
      })),
      transition('off  => on',animate(500))
    ]),
    trigger('skillsAnimation',[
      state('off',style({
        'opacity':0.3
      })),
      state('on',style({
        'opacity':1
      })),
      transition('off => on',animate(5000))
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
  showContactCard=false;
  rotateEmoji="off";
  skillsState="off";

  ngOnInit(): void {
    setTimeout(()=>{
      this.cardState="on";
      this.cardMovement="show";
    },1)
  }
  closeMainCard()
  {
    setTimeout(()=>{
      this.showMainCard=false;
      this.showSkillCard=true;
      setTimeout(()=>{
        this.skillsState='on';
        this.skillCardState='show';
        
      },1)
    },10);
  }
  openMainCard()
  {
    this.skillCardState='hide';
    this.rotateEmoji='off';
    
    setTimeout(()=>{
      this.showSkillCard=false;
      this.showMainCard=true;
      this.skillsState='off';
     setTimeout(()=>{
      this.rotateEmoji='on';
     },1)
    },100);
  }
}
