import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingVisualiserComponent } from './sorting-visualiser.component';

describe('SortingVisualiserComponent', () => {
  let component: SortingVisualiserComponent;
  let fixture: ComponentFixture<SortingVisualiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingVisualiserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingVisualiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
