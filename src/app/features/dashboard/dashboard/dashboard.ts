import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Api } from '../../../core/services/api';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard {
  apiService = inject(Api)
  products$ = this.apiService.get<any>('/products');
}
