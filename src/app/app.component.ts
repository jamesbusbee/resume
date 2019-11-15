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
    },

    {
      title: 'Food Prep Chef/Dishwasher',
      company: 'Goodfellas Drafthouse',
      date: 'May 2016-August 2018'
    }
  ];
  skills = [
    {
      skillName: 'Web Development',
      skill1: 'AJAX, Travis CI',
      skill2: 'Angular, EC6 JS',
      skill3: 'Bootstrap, Material',
    },
      {
      skillName: 'Databases',
      skill1: 'SolarWinds Query Language',
      skill2: 'SQL',
      skill3: 'XML'
    }
    ];
  skills2 = [
    {
      skillName: 'Programming',
      skill1: 'Bash Scripting',
      skill2: 'C++',
      skill3: 'Python RESTful API'
    },
      {
      skillName: 'Misc.',
      skill1: 'performed SolidFire server install into rack',
      skill2: 'familiar with computer hardware components',
      skill3: 'Experience with Microsoft Office Suite'
    }
  ];
}
