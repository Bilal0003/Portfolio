import { NgIf, NgStyle, isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  Renderer2,
  NgModule,
  Inject,
  PLATFORM_ID,
  OnDestroy,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { withNavigationErrorHandler } from '@angular/router';
import { isInt8Array } from 'util/types';

@Component({
  selector: 'app-sorting-visualiser',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sorting-visualiser.component.html',
  styleUrl: './sorting-visualiser.component.css',
})
export class SortingVisualiserComponent {
  array!: number[];
  n: number;
  SortContainer: any;
  delay: number;
  running: boolean;
  isSorted: boolean;
  runningError: any;
  StopRequested: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.n = 100;
    this.delay = 10;
    this.running = false;
    this.SortContainer = null;
    this.isSorted = false;
    this.runningError = null;
    this.StopRequested = false;
  }

  initArray() {
    this.array = Array.from({ length: this.n }, () => Math.random() * 1 + 0.05);
  }

  ngOnInit() {
    /*  this.SortContainer = document.getElementById("sorting-container");
    this.runningError = document.getElementById("runningError"); */

    this.SortContainer = this.renderer.selectRootElement(
      '#sorting-container',
      true
    );
    this.runningError = this.renderer.selectRootElement('#runningError', true);
    this.initArray();
    this.showBars();

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
      setTimeout(() => this.playShuffle(), this.delay);
    }

    /* window.scrollTo(0,0);
    setTimeout(() => this.playShuffle(), this.delay) */
  }

  showBars(moves?: any) {
    if (!this.SortContainer) return;
    this.SortContainer.innerHTML = '';

    const MaxHeight = Math.max(...this.array);
    const containerHeight = this.SortContainer.clientHeight;

    for (let i = 0; i < this.array.length; i++) {
      const bar = this.renderer.createElement('div');
      this.renderer.setStyle(
        bar,
        'height',
        `${(this.array[i] / MaxHeight) * containerHeight - 10}px`
      );
      this.renderer.setStyle(bar, 'width', `${100 / this.array.length}%`);
      this.renderer.setStyle(
        bar,
        'backgroundColor',
        'rgba(255, 255, 255, 0.411)'
      );
      this.renderer.setStyle(bar, 'flex', '1');
      this.renderer.setStyle(bar, 'display', 'inline-flex');
      this.renderer.setStyle(bar, 'alignItems', 'flex-end');

      if (moves && moves.indices.includes(i)) {
        this.renderer.setStyle(bar, 'backgroundColor', '#c778dd');
      }

      this.renderer.appendChild(this.SortContainer, bar);
    }
  }

  DispErrorMsg() {
    this.renderer.setProperty(
      this.runningError,
      'innerHTML',
      'Array currently being manipulated, please wait for the operations to complete.'
    );
    this.renderer.addClass(this.runningError, 'vibrate');
  }

  StopRunning() {
    this.StopRequested = true;
    this.running = false;
    console.log('stop requested');
  }

  async BS2(array: number[]) {
    this.isSorted = false;
    let c = 0;
    while (!this.isSorted && !this.StopRequested) {
      this.isSorted = true;

      for (let i = 1; i < array.length; i++) {
        if (this.StopRequested) {
          console.log('BS2 sorting stoped');
          return;
        }

        if (array[i] < array[i - 1]) {
          c = array[i];
          array[i] = array[i - 1];
          array[i - 1] = c;
          this.showBars({ indices: [i, i - 1] });
          await this.sleep(this.delay);
          this.isSorted = false;
        }
      }
    }
    if (!this.StopRequested) {
      this.isSorted = true;
      this.showBars();
    }
  }

  sleep(delay: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  async runBtn(sort: any, ...args: any[]) {
    this.running = true;
    this.StopRequested = false;
    //let swaps = sort(...args);

    try {
      await sort(...args);
      this.showBars();
    } finally {
      this.running = false;
      this.StopRequested = false;
      this.runningError.innerHTML = '';
      this.runningError.classList.remove('vibrate');
    }
  }

  playBS2() {
    if (this.running) this.DispErrorMsg();
    if (!this.isSorted && !this.running)
      this.runBtn(this.BS2.bind(this), this.array);
  }

  playMerge() {
    if (this.running) this.DispErrorMsg();
    if (!this.isSorted && !this.running)
      this.runBtn(this.mergeSort.bind(this), this.array, 0, this.array.length);
  }

  playSelectionSort() {
    if (this.running) this.DispErrorMsg();
    if (!this.isSorted && !this.running)
      this.runBtn(this.SelectionSort.bind(this), this.array);
  }

  playShuffle() {
    if (this.running) this.DispErrorMsg();
    if (!this.running) this.runBtn(this.shuffle.bind(this), this.array);
  }

  async mergeSort(arr: number[], start: number, end: number) {
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
      if (!this.running || this.StopRequested) {
        this.running = false;
        this.isSorted = false;
        return;
      }

      arr[i + start] = cache[i];
      await this.sleep(this.delay); // Adjust the delay as needed
      this.showBars({ indices: [i + start] }); // Refresh the visualization for each swap
      /* playNote(200 + array[i] * 500);
      playNote(200 + array[start] * 500); */
    }
    // to hide the staggering pink highlight on the last sorted bar
    this.showBars();

    if (!this.StopRequested) {
      this.isSorted = true;
    }
  }

  async SelectionSort(array: number[]) {
    for (let i = 0; i < this.array.length - 1; i++) {
      if (this.StopRequested) {
        console.log('Stop requested SS.');
        return;
      }
      let min = i;
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[j] < this.array[min]) min = j;
      }
      if (min !== i) {
        let temp = this.array[i];
        this.array[i] = this.array[min];
        this.array[min] = temp;
        this.showBars({ indices: [i, min] });
        await this.sleep(this.delay);
      }
    }
  }

  Shufflecurrent() {
    if (!this.running) {
      this.shuffle(this.array);
      this.isSorted = false;
      this.showBars();
    }
  }

  async shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      await this.sleep(this.delay);
      this.showBars();
    }
    this.isSorted = false;
    return array;
  }

  updateDelay() {
    this.delay = Number(
      (this.renderer.selectRootElement('#time-slider') as HTMLInputElement)
        ?.value
    );

    /* this.renderer.setProperty(
      this.runningError,
      'innerHTML',
      'Array currently being manipulated, please wait for the operations to complete.'
    );
    this.renderer.addClass(this.runningError, 'vibrate'); */
  }

  /*  updateWidth() {
    let width = Number((document.getElementById("container")as HTMLInputElement)?.value);
    this.SortContainer!.style.setProperty("--width", width + "%");
    this.SortContainer!.style.color = "red";
  } */

  updateArraySize() {
    const slider = this.renderer.selectRootElement(
      '#size-slider',
      true
    ) as HTMLInputElement;
    this.n = Number(slider.value);

    this.isSorted = false;
    this.initArray();
    this.showBars();
  }
}
