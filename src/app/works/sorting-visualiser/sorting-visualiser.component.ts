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
  delay: number;

  constructor(private renderer: Renderer2){
    this.n = 50;
    this.array = Array(this.n);
    this.delay = 10;
    /* this.SortContainer = null; */
  }

  ngOnInit(){
    
    this.SortContainer = document.getElementById("sorting-container");
    
    for (let i=0; i < this.array.length; i++){
      this.array[i] = Math.random() * 1 + 0.05;
    }
    this.showBars();

  }

  showBars(moves?: any){
    /* if (!this.SortContainer) return; */
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


  async BS2(array: number[]) {
    let sorted = false;
    let c = 0;
    while (!sorted) {
      sorted = true;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          c = array[i];
          array[i] = array[i + 1];
          array[i + 1] = c;
          this.showBars({ indices: [i, i + 1] });
          await this.sleep(this.delay);
          sorted = false;
        }
      }
    }

    
}

  sleep(delay: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
  
  async runBtn(sort:any, ...args: any[]) {
    var running = true;
    await sort(...args);
    this.showBars();
    running = false;
  }
  
  playBS2() {
    this.runBtn(this.BS2.bind(this), this.array);
  }
}
