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

function App() {
  const navigate = useNavigate();
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
      navigate('/dashboard')
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="dark">
      <Card>
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
