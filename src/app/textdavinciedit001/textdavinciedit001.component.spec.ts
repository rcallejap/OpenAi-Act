import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textdavinciedit001Component } from './textdavinciedit001.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('Textdavinciedit001Component', () => {
  let component: Textdavinciedit001Component;
  let fixture: ComponentFixture<Textdavinciedit001Component>;
  let completionSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textdavinciedit001Component ],
      imports: [FormsModule, HttpClientModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textdavinciedit001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    completionSpy = spyOn(component, 'postCompletition').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});