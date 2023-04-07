import { ABP } from '@abp/ng.core';

export function getNodeLevel(
  node: ABP.Route,
  tree: ABP.Route[],
  level: number = 0
): number {
  level += 1;
  const parent = tree.find((t) => t.name == node.parentName);
  if (parent == null || parent == undefined) {
    return level;
  }
  return getNodeLevel(parent, tree, level);
}
