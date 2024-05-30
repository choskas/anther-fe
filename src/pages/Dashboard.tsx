import { DataTable } from "@/components/commons/data-table";
import useGapsTable from "@/components/dashboard/tables/hooks/useGapsTable";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const { table, columns } = useGapsTable();
  return (
    <section className="p-[48px]">
      <Card>
        <CardHeader className="font-light">
          Saldo en caja <p className="font-bold">$20</p>
        </CardHeader>
      </Card>
      <Tabs defaultValue="news" className="w-full mt-[24px]">
        <TabsList className="w-full flex justify-around">
          <TabsTrigger value="news">Novedades</TabsTrigger>
          <TabsTrigger value="flights">Vuelos</TabsTrigger>
          <TabsTrigger value="gaps-squawks">Gaps y Squawks</TabsTrigger>
          <TabsTrigger value="equipment">Equipos</TabsTrigger>
        </TabsList>
        <TabsContent value="news">
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Pendientes
            </CardTitle>
            <DataTable table={table} columns={columns} />
          </Card>
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Boletines
            </CardTitle>
            <DataTable table={table} columns={columns} />
          </Card>
        </TabsContent>
        <TabsContent value="flights">
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Vuelos sin reportar
            </CardTitle>
            <DataTable table={table} columns={columns} />
          </Card>
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Proximas reservaciones
            </CardTitle>
            <DataTable table={table} columns={columns} />
          </Card>
        </TabsContent>
        <TabsContent value="gaps-squawks">
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Gaps
            </CardTitle>
            <DataTable table={table} columns={columns} />
          </Card>
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Squawks
            </CardTitle>
            <DataTable table={table} columns={columns} />
          </Card>
        </TabsContent>
        <TabsContent value="equipment">
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Estatus de equipos
            </CardTitle>
            <DataTable table={table} columns={columns} />
          </Card>
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Mantenimientos
            </CardTitle>
            <DataTable table={table} columns={columns} />
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
