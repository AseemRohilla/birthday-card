import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ErrorSnackbarComponent } from 'src/app/error/error-snackbar/error-snackbar.component';

@Component({
  selector: 'app-view-birthdays',
  templateUrl: './view-birthdays.component.html',
  styleUrls: ['./view-birthdays.component.scss']
})
export class ViewBirthdaysComponent implements OnInit {

  employeeCount = 7;
  users;
  durationInSeconds = 5;
  colorsArr = ['#545b7b', '#9dd618', '#ca7c99', '#6fc4df', '#ea4a36', '#1261d2', '#0bc9fa', '#fea53a'];
  days = [{
    no: 1,
    name: 'Mon'
  },
  {
    no: 2,
    name: 'Tue'
  },
  {
    no: 3,
    name: 'Wed'
  },
  {
    no: 4,
    name: 'Thu'
  },
  {
    no: 5,
    name: 'Fri'
  },
  {
    no: 6,
    name: 'Sat'
  },
  {
    no: 7,
    name: 'Sun'
  }];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  addJson(inputVal) {
    try {
      const peopleArr = JSON.parse(inputVal);
      if (peopleArr && peopleArr.length > 0) {
        peopleArr.sort((a, b) => {
          return (new Date(a.birthday)).getTime() - (new Date(b.birthday)).getTime();
        });
        this.users = peopleArr.map(this.getInitials);
      }
    } catch (error) {
      this.throwError('Enter a valid JSON');
    }

  }
  getInitials(people) {
    const parts = people.name.split(' ');
    let initials = '';
    for (const part of parts) {
      if (part.length > 0 && part !== '') {
        initials += part[0];
      }
    }
    const dayNumber = new Date(people.birthday).getDay();
    if (!isNaN(dayNumber)) {
      people.dayNo = new Date(people.birthday).getDay();
    } else {
      throw new Error('Enter birthday is mm/dd/yyyy format only');
    }
    people.initials = initials;
    return people;
  }
  filterItemsOfType(day) {
    if (this.users) {
      return this.users.filter(x => x.dayNo === day);
    } else {
      return false;
    }
  }

  getRandomColor(i) {
    return this.colorsArr[i % 8];
  }

  updateBirthday(year: number) {
    if (!this.users) {
      this.throwError('Enter the user data first!');
      return;
    }
    if (year < 0 || year > 9999) {
      this.throwError('Enter a valid year');
      return;
    }
    this.users = this.users.map(user => {
      user.dayNo = new Date(new Date(user.birthday).setFullYear(year)).getDay();
      return user;
    });
  }
  throwError(message) {
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      data: message
    });
  }
}
