type MenuNode = {
  databaseId: number;
  parentDatabaseId: number | null;
} & Record<string, unknown>;

type MenuTreeNode = MenuNode & {
  children: MenuTreeNode[];
};

export function buildMenuTree(nodes: MenuNode[]): MenuTreeNode[] {
  const map = new Map();
  const roots: MenuTreeNode[] = [];

  nodes.forEach((item) => {
    map.set(item.databaseId, { ...item, children: [] });
  });

  nodes.forEach((item) => {
    if (item.parentDatabaseId) {
      const parent = map.get(item.parentDatabaseId);
      if (parent) {
        parent.children.push(map.get(item.databaseId));
      }
    } else {
      roots.push(map.get(item.databaseId));
    }
  });

  return roots;
}
