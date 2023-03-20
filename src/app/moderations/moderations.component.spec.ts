import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationsComponent } from './moderations.component';

import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('ModerationsComponent', () => {
  let component: ModerationsComponent;
  let fixture: ComponentFixture<ModerationsComponent>;
  let completionSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerationsComponent ],
      imports: [FormsModule, HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    completionSpy = spyOn(component, 'postCompletition').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

