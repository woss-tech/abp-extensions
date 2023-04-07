import { formatDate } from '@angular/common';

export function formatDateTime(
  date: Date,
  format: string = 'yyyy-MM-dd HH:mm:ss'
) {
  return formatDate(date, format, 'zh_Hans');
}
