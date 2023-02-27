import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicModelComponent } from './basic-model.component';

describe('BasicModelComponent', () => {
  let component: BasicModelComponent;
  let fixture: ComponentFixture<BasicModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
