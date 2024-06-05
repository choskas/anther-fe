import { DataTable } from '@/components/commons/data-table'
import useGapsTable from '@/components/dashboard/tables/hooks/useGapsTable'
import { Card, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'

async function getAllStudents() {
  const res = await api.students.$get()
  if (!res.ok) {
    throw new Error('server error')
  }
  const data = await res.json()
  return data.students[0]
}
export default function Dashboard() {
  const { table, columns } = useGapsTable()
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['get-all-students'],
    queryFn: getAllStudents
  })

  return (
    <section className="p-[48px] flex">
    <div className="w-2/3">
      <Card>
        <section className="font-light flex justify-between p-[24px]">
          <div>
            <h2 className="text-[18px]">¡Hola !</h2>
            <p>Bienvenid@ de nuevo a Anther</p>
          </div>
          <div>
            Saldo en caja <p className="font-bold">$20</p>
          </div>
        </section>
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
            <div className="p-[24px]">
              <DataTable table={table} columns={columns} />
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="flights">
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Vuelos sin reportar
            </CardTitle>
            <div className="p-[24px]">
              <DataTable table={table} columns={columns} />
            </div>
          </Card>
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Proximas reservaciones
            </CardTitle>
            <div className="p-[24px]">
              <DataTable table={table} columns={columns} />
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="gaps-squawks">
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Gaps
            </CardTitle>
            <div className="p-[24px]">
              <DataTable table={table} columns={columns} />
            </div>
          </Card>
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Squawks
            </CardTitle>
            <div className="p-[24px]">
              <DataTable table={table} columns={columns} />
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="equipment">
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Estatus de equipos
            </CardTitle>
            <div className="p-[24px]">
              <DataTable table={table} columns={columns} />
            </div>
          </Card>
          <Card className="mt-[24px]">
            <CardTitle className="my-[24px] text-left pl-[24px]">
              Mantenimientos
            </CardTitle>
            <div className="p-[24px]">
              <DataTable table={table} columns={columns} />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    <div className="w-1/3">
      <Card className="ml-[24px]">
        <CardTitle className="my-[24px] text-left pl-[24px]">
          Noticias
        </CardTitle>
        <ScrollArea className="h-72 w-full rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {Array.from({ length: 50 })
              .map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
              .map((tag) => (
                <>
                  <div key={tag} className="text-sm">
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  </section>
  )
}
