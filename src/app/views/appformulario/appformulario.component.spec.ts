import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppformularioComponent } from './appformulario.component';

describe('AppformularioComponent', () => {
  let component: AppformularioComponent;
  let fixture: ComponentFixture<AppformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppformularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
