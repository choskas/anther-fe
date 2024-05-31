import { SortingState, ColumnFiltersState, ColumnDef, useReactTable, getCoreRowModel, getPaginationRowModel } from "@tanstack/react-table";
import { useState } from "react";

const useGapsTable = () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  
    const data = [
      {
        title: "example",
        description: "exampledescription",
        create_at: "2021-10-10",
      },
    ];
    const columns: ColumnDef<{
      title: string;
      description: string;
      create_at: string;
    }>[] = [
      // {
      //   accessorKey: "userId",
      //   header: ({ column }) => {
      //     return (
      //       <Button
      //         variant="ghost"
      //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      //       >
      //         ID Usuario
      //         <ArrowUpDown className="ml-2 h-4 w-4" />
      //       </Button>
      //     )
      //   },
      // },
      {
        accessorKey: "title",
        header: "Titulo",
      },
      {
        accessorKey: "description",
        header: ({ column }) => {
          return <p className="text-center">Descripción</p>;
        },
      },
      {
        accessorKey: "created_at",
        header: ({ column }) => {
          return <p className="text-center">Creado el</p>;
        },
      },
      // {
      //   accessorKey: "email",
      //   header: ({ column }) => {
      //     return (
      //       <Button
      //         variant="ghost"
      //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      //       >
      //         Email
      //         <ArrowUpDown className="ml-2 h-4 w-4" />
      //       </Button>
      //     )
      //   },
      // },
      // {
      //   accessorKey: "username",
      //   header: ({ column }) => {
      //     return (
      //       <Button
      //         variant="ghost"
      //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      //       >
      //         Usuario
      //         <ArrowUpDown className="ml-2 h-4 w-4" />
      //       </Button>
      //     )
      //   },
      // },
    ];
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      // onSortingChange: setSorting,
      // getSortedRowModel: getSortedRowModel(),
      // onColumnFiltersChange: setColumnFilters,
      // getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting,
        columnFilters,
      },
    });
    return {
        table,
        columns
    }
}

export default useGapsTable;