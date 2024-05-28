"use client";

import {
  ColumnDef,
  flexRender,
  Table as TableType,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  table: TableType<TData>;
  searchOnColumn?: string;
  onPreviousPage?: (page: number) => void;
  onNextPage?: (page: number) => void;
}

export function DataTable<TData, TValue>({
  columns,
  table,
  searchOnColumn,
  onPreviousPage,
  onNextPage
}: DataTableProps<TData, TValue>) {
  return (
    <>
      {searchOnColumn && (
        <div className="flex items-center py-4">
          <Input
            placeholder={`Búsqueda por ${searchOnColumn}`}
            value={
              (table.getColumn(searchOnColumn)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn(searchOnColumn)
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => {
            const previousPage = table.getState().pagination.pageIndex - 1 
            onPreviousPage && onPreviousPage(previousPage)
            return table.previousPage()
          }}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={() => {
            const nextPage = table.getState().pagination.pageIndex + 1 
            onNextPage && onNextPage(nextPage)
            return table.nextPage()

          }}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </>
  );
}
