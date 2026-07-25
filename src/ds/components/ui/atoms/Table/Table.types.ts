export interface TableColumn {
  key: string;
  label: string;
}

export interface TableRow {
  [key: string]: string | number | boolean | null | undefined;
}

export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  striped?: boolean;
  hoverable?: boolean;
  class?: string;
}