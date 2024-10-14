import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ComputePipe } from './pipes/compute.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ComputePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-18-test';

  counter = 0;

  addHander() {
    this.counter++;
  }

  htmlRender(input?: number) {
    console.log(input);

    console.log('htmlRender');
    return '';
  }

  computeHandler(value: number) {
    console.log('compute is execute');

    return value + 1;
  }
}
