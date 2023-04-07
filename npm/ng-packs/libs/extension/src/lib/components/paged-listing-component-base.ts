import { PagedResultDto } from '@abp/ng.core';

export abstract class PagedListingComponentBase<TEntity> {
  loading = false;

  pageSize = 20;

  pageIndex = 1;

  sorting?: string | undefined;

  protected data: PagedResultDto<TEntity> = { items: [], totalCount: 0 };

  get total() {
    return this.data.totalCount || 0;
  }

  get items() {
    return this.data.items || [];
  }

  get skipCount() {
    return (this.pageIndex - 1) * this.pageSize;
  }

  get maxResultCount() {
    return this.pageSize;
  }

  protected abstract hookToQuery(): void;

  public handlerPageIndexChange($event: any) {
    this.pageIndex = $event;
    this.hookToQuery();
  }

  public handlerPageSizeChange($event: any) {
    this.pageSize = $event;
    this.hookToQuery();
  }

  public handlerSortChanged($event: any, column: string) {
    if ($event != null) {
      this.sorting = `${column} ${$event.replace('end', '')}`;
      this.hookToQuery();
    }
  }
}
