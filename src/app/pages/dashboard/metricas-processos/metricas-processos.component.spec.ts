import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricasProcessosComponent } from './metricas-processos.component';

describe('MetricasProcessosComponent', () => {
  let component: MetricasProcessosComponent;
  let fixture: ComponentFixture<MetricasProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricasProcessosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricasProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
