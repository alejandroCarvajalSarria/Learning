import { TestBed, fakeAsync } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { DataService } from '../services/data.service';
import { ContentChildren } from '@angular/core';

describe('Component: User', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    let fixture: any = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not fetch data successfully', () => {
    let fixture: any = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService: DataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'fetchInfo')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined)
  });

  it('should fetch data successfully', fakeAsync(() => {
    let fixture: any = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService: DataService = fixture.debugElement.injector.get(DataService);
     spyOn(dataService, 'fetchInfo')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    })
  }));

}); 
