import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }
  showSuccess(detail: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail, life: 3000 });
  }

  showError(summary: string, detail: string) {
    this.messageService.add({ severity: 'error', summary, detail, life: 3000 });
  }

  showWarning(detail: string) {
    this.messageService.add({ severity: 'warn', summary: 'Warning', detail, life: 3000 });
  }
}
