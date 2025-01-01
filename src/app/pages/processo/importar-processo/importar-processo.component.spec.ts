import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarProcessoComponent } from './importar-processo.component';

describe('ImportarProcessoComponent', () => {
  let component: ImportarProcessoComponent;
  let fixture: ComponentFixture<ImportarProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportarProcessoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportarProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
