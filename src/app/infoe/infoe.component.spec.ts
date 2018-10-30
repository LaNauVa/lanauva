import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoeComponent } from './infoe.component';

describe('InfoeComponent', () => {
  let component: InfoeComponent;
  let fixture: ComponentFixture<InfoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
