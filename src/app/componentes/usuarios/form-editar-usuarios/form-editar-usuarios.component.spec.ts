import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarUsuariosComponent } from './form-editar-usuarios.component';

describe('FormEditarUsuariosComponent', () => {
  let component: FormEditarUsuariosComponent;
  let fixture: ComponentFixture<FormEditarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditarUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
