import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricasSistemaComponent } from './metricas-sistema.component';

describe('MetricasSistemaComponent', () => {
  let component: MetricasSistemaComponent;
  let fixture: ComponentFixture<MetricasSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricasSistemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricasSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
