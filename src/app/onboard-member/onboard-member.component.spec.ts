import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardMemberComponent } from './onboard-member.component';

describe('OnboardMemberComponent', () => {
  let component: OnboardMemberComponent;
  let fixture: ComponentFixture<OnboardMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
