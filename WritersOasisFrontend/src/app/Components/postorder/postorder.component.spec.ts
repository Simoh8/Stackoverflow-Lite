import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostorderComponent } from './postorder.component';

describe('PostorderComponent', () => {
  let component: PostorderComponent;
  let fixture: ComponentFixture<PostorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PostorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
