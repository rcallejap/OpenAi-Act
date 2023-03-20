import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesgenerationComponent } from './imagesgeneration.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('ImagesgenerationComponent', () => {
  let component: ImagesgenerationComponent;
  let fixture: ComponentFixture<ImagesgenerationComponent>;
  let completionSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesgenerationComponent ],
      imports: [FormsModule, HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesgenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    completionSpy = spyOn(component, 'postCompletition').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
