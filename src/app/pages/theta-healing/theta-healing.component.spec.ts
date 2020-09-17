import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetaHealingComponent } from './theta-healing.component';

describe('ThetaHealingComponent', () => {
  let component: ThetaHealingComponent;
  let fixture: ComponentFixture<ThetaHealingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThetaHealingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetaHealingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
