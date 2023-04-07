import { ABP, BaseTreeNode, TreeNode } from '@abp/ng.core';

export function exist(route: BaseTreeNode<ABP.Route>, path: string): boolean {
  const list: TreeNode<ABP.Route>[] = [];
  getChildren(route, list);
  return list.findIndex((t) => t.path == path) > -1;
}

function getChildren(
  route: BaseTreeNode<ABP.Route>,
  list: BaseTreeNode<ABP.Route>[] = []
) {
  list.push(route);
  if (route.children.length > 0) {
    for (const item of route.children) {
      getChildren(item, list);
    }
  }
}
