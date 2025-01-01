import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudeSistemaComponent } from './saude-sistema.component';

describe('SaudeSistemaComponent', () => {
  let component: SaudeSistemaComponent;
  let fixture: ComponentFixture<SaudeSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudeSistemaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
