import {AfterViewInit, Component, OnInit} from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap'
declare var $: any; // Import jQuery
import SplitType from 'split-type'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  showPreLoader = false;
  constructor() {
  }
  ngOnInit() {

    // Handle left arrow click
    $(".arrowhead-left").click(function () {
      $("#myCarousel").carousel("prev");
    });

    // Handle right arrow click
    $(".arrowhead-right").click(function () {
      $("#myCarousel").carousel("next");
    });

    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;

    images.forEach((image) => {
      if (image.complete) {
        imagesLoaded++;
        this.preLoaderTimeout();
      } else {
        image.addEventListener('load', () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            this.preLoaderTimeout();
          }
        });
      }
    });

    // If all images are already loaded, initialize immediately
    if (imagesLoaded === images.length) {
      this.preLoaderTimeout();
    }
  }


  preLoaderTimeout() {
    setTimeout(() => {
      this.showPreLoader = false; // Hide the preloader after the delay
      this.call();
    }, 5400); // Adjust the delay time as needed
  }


  call() {
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector('[data-scroll-container]') as HTMLElement,
    //   smooth: true,
    //   repeat: true,
    //   multiplier: 0.9
    // });

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
