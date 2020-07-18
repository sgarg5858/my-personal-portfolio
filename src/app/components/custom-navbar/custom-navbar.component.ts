import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {NavbarService} from './navbar.service'
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css'],
  animations:[
    trigger('navbarLinksAnimation',[
      state('off',style({
        'opacity':0,
        'transform':'translateY(-100px)'
      })),
      state('on',style({
        'opacity':1
      })),
      transition('off => on',
      animate(1000,keyframes([
          style({
            'transform':'translateY(-100px)',
          'opacity':0,
          'offset':0
          }),
          style({
            'transform':'translateY(-50px)',
             'opacity':0.2,
             'offset':0.3
          }),
          style({
            'transform':'translateY(-20px)',
             'opacity':1,
             'offset':0.4
          }),
          style({
            'transform':'translateY(0px)',
             'opacity':1,
             'offset':0.5
          }),
          style({
            'transform':'translateY(-10px)',
          'opacity':1,
          'offset':0.8
          }),
          style({
            'transform':'translateY(0px)',
             'opacity':1,
             'offset':1
          }),
      ])))
    ])
    ,trigger('NavLinksHoverAnimation',[
      state('normal',style({
        'transform':'translateY(0)'
      })),
      state('hovered',style({
        'transform':'translateY(-8px)'
      })),
      transition('normal <=> hovered',animate(300))
    ])
  ]
})
export class CustomNavbarComponent implements OnInit {

  constructor(private navbarService:NavbarService) { }
  navbarItemsAnimationState='off';
  hoverAnimationState="normal";
  @ViewChild('sidenav')sidenav;
  menu=true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.navbarItemsAnimationState='on';
    },1);
  }

  changeStateofLink()
  {
    this.hoverAnimationState=="normal"?this.hoverAnimationState='hovered':this.hoverAnimationState='normal';
  }

  toggleButton()
  {
    this.sidenav.toggle();
    this.menu= !this.menu
  }
  closeButton()
  {
    this.sidenav.close();
    this.menu= !this.menu
  }
}
