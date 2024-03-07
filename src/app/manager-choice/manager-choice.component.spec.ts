import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerChoiceComponent } from './manager-choice.component';

describe('ManagerChoiceComponent', () => {
  let component: ManagerChoiceComponent;
  let fixture: ComponentFixture<ManagerChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
