import {AfterViewInit, Component, OnInit} from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap'
import SplitType from 'split-type'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  constructor() {
  }
  ngOnInit() {
    this.call();
  }
  call() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      repeat: true,
      multiplier: 0.9
    });

    const hehe = document.querySelectorAll('[title]');
    console.log(hehe);
    hehe.forEach( (element) => {
      const ourText = new SplitType(element as HTMLElement, { types: 'chars' })
      const chars = ourText.chars;

      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.25,
          duration: 2,
          delay: 1,
          ease: 'power4.out',
        }
      )
    })


  }
}
