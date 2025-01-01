import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesPendentesComponent } from './requisicoes-pendentes.component';

describe('RequisicoesPendentesComponent', () => {
  let component: RequisicoesPendentesComponent;
  let fixture: ComponentFixture<RequisicoesPendentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisicoesPendentesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RequisicoesPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
