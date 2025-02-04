import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/app/components/ui/table";
import { ReactNode } from "react";

export default function WedTable<T extends { id?: string | number }>({
  list = [],
  items = {},
}: {
  list?: T[];
  items?: {
    [key: string]: {
      title: ReactNode;
      // eslint-disable-next-line no-unused-vars
      cell: (value: T) => ReactNode;
    };
  };
}) {
  const headers = Object.entries(items);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {Object.entries(items).map((item) => {
            return <TableHead key={item[0]}>{item[1].title}</TableHead>;
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {list.map((cell) => {
          return (
            <TableRow key={cell.id}>
              {headers.map(([key, value]) => {
                return <TableCell key={key}>{value.cell(cell)}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
