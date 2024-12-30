import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSecaoSubsecaoComponent } from './cadastro-secao-subsecao.component';

describe('CadastroSecaoSubsecaoComponent', () => {
  let component: CadastroSecaoSubsecaoComponent;
  let fixture: ComponentFixture<CadastroSecaoSubsecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroSecaoSubsecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroSecaoSubsecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
