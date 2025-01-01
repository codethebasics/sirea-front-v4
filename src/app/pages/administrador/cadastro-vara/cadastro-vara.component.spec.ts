import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVaraComponent } from './cadastro-vara.component';

describe('CadastroVaraComponent', () => {
  let component: CadastroVaraComponent;
  let fixture: ComponentFixture<CadastroVaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroVaraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroVaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
