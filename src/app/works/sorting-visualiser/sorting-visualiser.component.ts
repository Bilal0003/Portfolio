import { Component, OnInit, Renderer2 } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-sorting-visualiser',
  standalone: true,
  imports: [],
  templateUrl: './sorting-visualiser.component.html',
  styleUrl: './sorting-visualiser.component.css'
})


export class SortingVisualiserComponent {
  array: number[];
  n: number;
  SortContainer: any;

  constructor(private renderer: Renderer2){
    this.n = 50;
    this.array = Array(this.n);
  }

  ngOnInit(){
    this.SortContainer = document.getElementById("sorting-container");

    for (let i=0; i < this.array.length; i++){
      this.array[i] = Math.random() * 1 + 0.05;
    }

    this.showBars();

  }

  showBars(){
    this.SortContainer.innerHTML = "";
    this.SortContainer = document.getElementById("sorting-container");
    

    for (let i = 0; i < this.array.length; i++){
      const bar = document.createElement("div");
      
      bar.style.height = this.array[i] * 300 + "px";
      bar.style.width = `${100 / this.array.length}%`;
      bar.style.backgroundColor = "white";
      bar.style.flex = "1";
      bar.style.display = "inline-flex";
      bar.style.margin = "0 1px";
      this.renderer.addClass(document.body, "bar");
      this.SortContainer.appendChild(bar);
    }

  }

}
