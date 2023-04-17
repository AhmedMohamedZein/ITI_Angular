import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Three';
  public studentData: { name: string; age: number }[] = []

  transferData (data :any) {
    this.studentData.push (data) ;
  }
}
