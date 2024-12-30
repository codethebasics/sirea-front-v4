import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesAssinadasComponent } from './requisicoes-assinadas.component';

describe('RequisicoesAssinadasComponent', () => {
  let component: RequisicoesAssinadasComponent;
  let fixture: ComponentFixture<RequisicoesAssinadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisicoesAssinadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisicoesAssinadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
