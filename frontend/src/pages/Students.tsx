import { DataTable } from "@/components/commons/data-table";
import { formatMoney } from "@/lib/formatters";
import { getAllStudents } from "@/services/students";
import { StudentsT } from "@/services/students/types";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

const Students = () => {
  const [students, setStudents] = useState<StudentsT[]>([]);

  const onFetchStudents = async () => {
    const response = await getAllStudents();
    setStudents(response);
  };
console.log(students, 'hey')
  const columns: ColumnDef<StudentsT>[] = [
    {
      accessorKey: "first_name",
      header: ({ column }) => {
        return <p className="text-center">Nombre</p>;
      },
      cell: ({row}) => {
        return <p> {row.getValue('first_name')} {row.getValue('last_name')} </p>
      }

    },
    {
        accessorKey: "email",
        header: ({ column }) => {
          return <p className="text-center">Email</p>;
        },
  
      },
    {
      accessorKey: "credit",
      header: ({ column }) => {
        return <p className="text-center">Saldo</p>;
      },
      cell: ({row}) => {
        return <p> {formatMoney(row.getValue('credit'), true)} </p>
      }
    },
  ];

  const table = useReactTable({
    data: students,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // onSortingChange: setSorting,
    // getSortedRowModel: getSortedRowModel(),
    // onColumnFiltersChange: setColumnFilters,
    // getFilteredRowModel: getFilteredRowModel(),
    // state: {
    //   sorting,
    //   columnFilters,
    // },
  });

  useEffect(() => {
    onFetchStudents();
  }, []);
  return (
    <section className="p-[24px]">
      <DataTable table={table} columns={columns} />
    </section>
  );
};

export default Students;
