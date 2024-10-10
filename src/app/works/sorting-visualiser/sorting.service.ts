import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortingService {
  constructor() {}

  initArray(n: number) {
    return Array.from({ length: n }, () => Math.random() * 1 + 0.05);
  }

  renderBars(
    sortContainer: any,
    array: number[],
    renderer: Renderer2,
    moves?: any
  ) {
    const MaxHeight = Math.max(...array);
    const containerHeight = sortContainer.clientHeight;

    for (let i = 0; i < array.length; i++) {
      const bar = renderer.createElement('div');
      renderer.setStyle(
        bar,
        'height',
        `${(array[i] / MaxHeight) * containerHeight - 10}px`
      );
      renderer.setStyle(bar, 'width', `${100 / array.length}%`);
      renderer.setStyle(bar, 'backgroundColor', 'rgba(255, 255, 255, 0.411)');
      renderer.setStyle(bar, 'flex', '1');
      renderer.setStyle(bar, 'display', 'inline-flex');
      renderer.setStyle(bar, 'alignItems', 'flex-end');

      if (moves && moves.indices.includes(i)) {
        renderer.setStyle(bar, 'backgroundColor', '#c778dd');
      }

      renderer.appendChild(sortContainer, bar);
    }
  }
}
