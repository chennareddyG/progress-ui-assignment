import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoCardComponent } from './info-card/info-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progress-ui-assignment';
  progressValue: number = 0;
  showProgressBar: boolean = false;
  toggleProgress: boolean = false;
  color = '#0091e5';

  constructor(private snackBar:MatSnackBar) {}

  showSuccessMessage() {
  this.snackBar.openFromComponent(InfoCardComponent, {
    data: 'Success',
    horizontalPosition: 'end',
    verticalPosition: 'bottom',
    panelClass: ['success-message'],
    duration: 100000
  })
  }
  startProgressBar() {
    this.showProgressBar = true;
    this.toggleProgress = true;
    this.updateProgressBar();
  }
  updateProgressBar() {
    if (this.progressValue < 100) {
      setTimeout(() => {
        this.progressValue += 1;
        this.updateProgressBar();
      }, 80); 
    } else {
      this.showProgressBar = false;
      this.progressValue = 0;
      this.showSuccessMessage();
    }
  }
}
