import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAppsComponent } from './complete-apps.component';

describe('CompleteAppsComponent', () => {
  let component: CompleteAppsComponent;
  let fixture: ComponentFixture<CompleteAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
