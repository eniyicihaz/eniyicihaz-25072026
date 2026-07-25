export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

export interface TreeViewProps {
  items: TreeNode[];
  showLines?: boolean;
  showIcons?: boolean;
  class?: string;
}