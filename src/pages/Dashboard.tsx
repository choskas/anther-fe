import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
    return (
       <section className="p-[48px]">
        <Card>
            <CardHeader className="font-light">Saldo en caja <p className="font-bold">$20</p></CardHeader>

        </Card>
        <Card className="mt-[24px]">
            <CardTitle>Pendientes</CardTitle>
        </Card>
       </section>
    )
}