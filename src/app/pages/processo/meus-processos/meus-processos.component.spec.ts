import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusProcessosComponent } from './meus-processos.component';

describe('MeusProcessosComponent', () => {
  let component: MeusProcessosComponent;
  let fixture: ComponentFixture<MeusProcessosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusProcessosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusProcessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
