import { Component, OnInit, Renderer2 } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { withNavigationErrorHandler } from '@angular/router';

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
  running: boolean;

  constructor(private renderer: Renderer2){
    this.n = 50;
    /* this.array = Array(this.n); */
    this.array = Array.from({ length: this.n }, () => Math.random() * 1 + 0.05);
    this.delay = 10;
    this.running = false;
    this.SortContainer = null; 
  }

  ngOnInit(){
    
   
    this.SortContainer = document.getElementById("sorting-container");
    this.showBars();

    let i = 0;
    do {this.Shufflecurrent(); i++} while( i < 4);

  }

  showBars(moves?: any){
    if (!this.SortContainer) return; 
    this.SortContainer.innerHTML = "";
    this.SortContainer = document.getElementById("sorting-container");

    const MaxHeight = Math.max(...this.array);
    const containerHeight = this.SortContainer.clientHeight;

    for (let i = 0; i < this.array.length; i++){
      const bar = document.createElement("div");
      bar.style.height = `${((this.array[i] / MaxHeight) * containerHeight) - 10}px`;
      bar.style.width = `${100 / this.array.length}%`;
      bar.style.backgroundColor = "rgba(255, 255, 255, 0.411)";
      bar.style.flex = "1";
      bar.style.display = "inline-flex";
      bar.style.alignItems = "flex-end";

      /* bar.style.margin = "0 1px"; */
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
    this.running = true;
    await sort(...args);
    this.showBars();
    this.running = false;
  }
  
  playBS2() {
    this.runBtn(this.BS2.bind(this), this.array);
  }

  playMerge() {
    this.runBtn(this.mergeSort.bind(this), this.array, 0, this.array.length);
  }

  async mergeSort(arr: number[], start:number, end:number) {
    if (start >= end - 1) return;
    const mid = start + Math.floor((end - start) / 2);
  
    await this.mergeSort(arr, start, mid);
    await this.mergeSort(arr, mid, end);
  
    const cache = Array(end - start).fill(arr[0]);
    let k = mid;
  
    for (let i = start, r = 0; i < mid; r++, i++) {
      if (!this.running) return;
      while (k < end && arr[k] < arr[i]) {
        cache[r] = arr[k];
        r++;
        k++;
      }
      cache[r] = arr[i];
    }
  
    for (let i = 0; i < k - start; i++) {
      if (!this.running) return;
      arr[i + start] = cache[i];
      await this.sleep(this.delay); // Adjust the delay as needed
      this.showBars({ indices: [i + start] }); // Refresh the visualization for each swap
      /* playNote(200 + array[i] * 500);
      playNote(200 + array[start] * 500); */
    }
  }

  async SelectionSort(array: number[]) {
    for (let i = 0; i < array.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) min = j;
      }
      if (min !== i) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
        this.showBars({ indices: [i, min] });
        await this.sleep(50);
      }
    }
  }

  playSelectionSort() {
    this.runBtn(this.SelectionSort.bind(this), this.array);
  }

  Shufflecurrent() {
    const Shuffeled = this.shuffle(this.array);
    this.showBars();
  }
  
  async shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      await this.sleep(this.delay);
      this.showBars();
    }
    return array;
  }


}
