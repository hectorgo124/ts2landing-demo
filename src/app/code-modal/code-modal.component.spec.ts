import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeModalComponent } from './code-modal.component';

describe('CodeModalComponent', () => {
  let component: CodeModalComponent;
  let fixture: ComponentFixture<CodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
