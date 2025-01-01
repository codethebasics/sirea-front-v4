import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesConferenciaComponent } from './requisicoes-conferencia.component';

describe('RequisicoesConferenciaComponent', () => {
  let component: RequisicoesConferenciaComponent;
  let fixture: ComponentFixture<RequisicoesConferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisicoesConferenciaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RequisicoesConferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
