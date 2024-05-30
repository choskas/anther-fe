import { useForm } from "react-hook-form";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { loginSchema } from "./lib/forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Input } from "./components/ui/input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/Auth";

function App() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const {user, password} = values
    if (user === 'admin' && password === 'admin') {
      setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTcwNDU2MDEsImV4cCI6MTc0ODU4MTYwMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jKBmEWciNeLMiFhRtsSWC3u7e2jakAI29aownkdTs5o");
      navigate("/dashboard", { replace: true });
    }
    console.log(values);
  }

  return (
    <section className="dark">
      <Card className="md:w-1/2 mt-[24px] mx-auto">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <img src="/assets/imgs/logo.png" alt="logo" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-4 gap-[18px]"
            >
              <FormField
                control={form.control}
                name="user"
                render={({ field }) => (
                  <FormItem className="col-span-4">
                    <FormLabel className="flex flex-start">Usuario</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-4">
                    <FormLabel className="flex flex-start">
                      Contraseña
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="col-start-4 col-end-5">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default App;
