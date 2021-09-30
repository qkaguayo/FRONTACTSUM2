import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrotarjetaComponent } from './registrotarjeta.component';

describe('RegistrotarjetaComponent', () => {
  let component: RegistrotarjetaComponent;
  let fixture: ComponentFixture<RegistrotarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrotarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrotarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
