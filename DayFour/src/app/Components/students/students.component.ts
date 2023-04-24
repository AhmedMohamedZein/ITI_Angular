import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent {
  public students: {name: string, age: number, email: string}[] = [
    { name: "John Doe", age: 20, email: "john.doe@example.com" },
    { name: "Jane Smith", age: 22, email: "jane.smith@example.com" },
    { name: "Bob Johnson", age: 21, email: "bob.johnson@example.com" },
    { name: "Sara Lee", age: 23, email: "sara.lee@example.com" },
    { name: "Tom Jones", age: 20, email: "tom.jones@example.com" },
    { name: "Mary Brown", age: 22, email: "mary.brown@example.com" },
    { name: "Alex Lee", age: 21, email: "alex.lee@example.com" },
    { name: "Emily Davis", age: 23, email: "emily.davis@example.com" },
    { name: "Mike Chen", age: 20, email: "mike.chen@example.com" },
    { name: "Lisa Johnson", age: 22, email: "lisa.johnson@example.com" }
  ];

  
  
}
