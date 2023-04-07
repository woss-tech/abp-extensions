import {
  ABP,
  BaseTreeNode,
  ConfigStateService,
  eLayoutType,
  EnvironmentService,
  RoutesService,
  SubscriptionService,
  TreeNode,
} from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { exist } from '@lopos/ng.core.extension';
import { LayoutService } from '../../services';
import { getNodeLevel } from '../../utils';

@Component({
  selector: 'lopos-application-layout',
  templateUrl: './application-layout.component.html',
  styleUrls: ['./application-layout.component.less'],
  providers: [LayoutService, SubscriptionService],
})
export class ApplicationLayoutComponent {
  static type = eLayoutType.application;

  constructor(private routesService: RoutesService, private router: Router, private environmentService : EnvironmentService) {}

  isCollapsed = false;

  isSubmenu(node: TreeNode<ABP.Route>) {
    return !node?.isLeaf || this.routesService.hasChildren(node.name);
  }

  get routes() {
    return this.routesService.visible;
  }

  padding(node: ABP.Route) {
    if (this.isCollapsed) return 0;
    const level = getNodeLevel(node, this.routesService.flat);
    return level * 24;
  }

  selected(node: ABP.Route): boolean {
    return node.path == this.router.url;
  }

  opened(node: BaseTreeNode<ABP.Route>): boolean {
    return exist(node, this.router.url);
  }

  collapsedChange($event: any) {
    this.isCollapsed = $event;
  }

  get appName(){
    return this.environmentService.getEnvironment().application.name;
  }
}
