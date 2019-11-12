import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';
  jobs = [
        {
          title: 'Systems Engineer Internship',
          company: 'American Eagle',
          date: 'June 2019-August2019'
        }
        ,

      {
        title: 'Food Prep Chef/Dishwasher',
        company: 'Goodfellas Drafthouse',
        date: 'May 2016-August 2018'
      }
  ];
  skills = {
    webDev:
    [
      {
        1: 'AJAX',
        2: 'Angular',
        3: 'Bootstrap',
        4: 'PHP',
        5: 'EC6 Javascript',
        6: 'Travis CI'
      }
    ],
    database:
    [
      {
        1: 'Excel',
        2: 'SQL',
        3: 'XML'
      }
    ],
    programming:
    [
      {
        1: 'C++',
        2: 'Bash Scripting',
        3: 'Python'
      }
    ],
    hardware:
    [
      {
        1: 'performed server install into rack',
        2: 'familiar with computer hardware components'
      }
    ]
  };
}
