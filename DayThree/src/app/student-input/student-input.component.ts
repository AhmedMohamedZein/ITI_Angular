import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.css']
})
export class StudentInputComponent {
  public studentName = "";
  public studentAge = "";
  @Output() public getStudent = new EventEmitter ();
  
  addStudent() {
      let student = { name : this.studentName , age : +this.studentAge };
      if ( this.studentName.length >= 3 &&  (+this.studentAge < 40 &&  +this.studentAge > 20) ){
        this.getStudent.emit(student); // send to the parent
      }
      this.studentName = "";
      this.studentAge = "";
  }
}
