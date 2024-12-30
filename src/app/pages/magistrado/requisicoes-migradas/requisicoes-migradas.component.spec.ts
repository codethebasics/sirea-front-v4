import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesMigradasComponent } from './requisicoes-migradas.component';

describe('RequisicoesMigradasComponent', () => {
  let component: RequisicoesMigradasComponent;
  let fixture: ComponentFixture<RequisicoesMigradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisicoesMigradasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisicoesMigradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
