import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistroUsuariosCuentaComponent } from './form-registro-usuarios-cuenta.component';

describe('FormRegistroUsuariosCuentaComponent', () => {
  let component: FormRegistroUsuariosCuentaComponent;
  let fixture: ComponentFixture<FormRegistroUsuariosCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegistroUsuariosCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistroUsuariosCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
