import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Building2, Calendar, Mail, Phone, Users, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Building2 className="h-6 w-6 mr-2" />
          <span className="font-bold">Felipe Gattas</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#servicios">
            Servicios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#experiencia">
            Experiencia
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonios">
            Testimonios
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Consultoría Empresarial Estratégica
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Ayudo a empresas a optimizar sus operaciones, aumentar su rentabilidad y alcanzar sus objetivos
                  estratégicos con soluciones personalizadas y efectivas.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="gap-1" asChild>
                    <Link href="http://calendly.com/felipegattas">
                      Agendar una consulta <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline">Ver servicios</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Consultor Empresarial"
                  className="rounded-lg object-cover"
                  height="400"
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Servicios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Soluciones que ofrezco</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Servicios especializados para ayudar a tu empresa a crecer y prosperar en el mercado actual.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <BarChart3 className="h-8 w-8" />
                  <CardTitle className="text-lg">Análisis Estratégico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Evaluación completa de tu negocio para identificar oportunidades de mejora y desarrollar planes
                    estratégicos efectivos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Users className="h-8 w-8" />
                  <CardTitle className="text-lg">Gestión de Equipos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Optimización de la estructura organizacional y desarrollo de liderazgo para maximizar el rendimiento
                    de tus equipos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Building2 className="h-8 w-8" />
                  <CardTitle className="text-lg">Transformación Empresarial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Implementación de cambios organizacionales para adaptarse a nuevos mercados y tecnologías
                    emergentes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Settings className="h-8 w-8" />
                  <CardTitle className="text-lg">Optimización de Procesos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sistematización y mejora de procesos operativos para aumentar la eficiencia, reducir costos y
                    mejorar la calidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="experiencia" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Experiencia</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trayectoria Profesional</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experiencia sólida en finanzas, gestión de proyectos y operaciones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-8">
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6" />
                  <div className="font-semibold">Agosto 2021 - Actualidad</div>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-bold">Hikru LLC, Head of Finance</h3>
                  <p className="text-muted-foreground mt-2">
                    Liderando la estrategia financiera y operativa de la compañía, optimizando procesos y desarrollando
                    planes de crecimiento sostenible.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6" />
                  <div className="font-semibold">Junio 2019 - Julio 2021</div>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-bold">ArchGroup, Supervisor & Project Manager</h3>
                  <p className="text-muted-foreground mt-2">
                    Supervisión de equipos multidisciplinarios y gestión de proyectos estratégicos, logrando mejoras
                    significativas en eficiencia y resultados.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6" />
                  <div className="font-semibold">2019</div>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-bold">Edenor, Sr. Analyst</h3>
                  <p className="text-muted-foreground mt-2">
                    Análisis financiero y operativo para una de las principales empresas de distribución eléctrica,
                    implementando mejoras en procesos críticos.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6" />
                  <div className="font-semibold">2018</div>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-bold">Seaplate Maritime Agency, Sr. Doc. Area & Operations</h3>
                  <p className="text-muted-foreground mt-2">
                    Gestión de documentación y operaciones marítimas, optimizando flujos de trabajo y mejorando la
                    eficiencia operativa.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6" />
                  <div className="font-semibold">2016 - 2017</div>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-bold">Piano Bank, Junior Executive</h3>
                  <p className="text-muted-foreground mt-2">
                    Desarrollo de habilidades en el sector bancario, participando en proyectos de mejora de procesos y
                    atención al cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen mis clientes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Resultados comprobados que han transformado negocios.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 relative">
                      <Image src="/images/ariel-cessario.png" alt="Ariel Cessario" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Ariel Cessario</CardTitle>
                      <CardDescription>Coordinador Cert.ar, Co-Founder AAM</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "Felipe nos acompaño durante los seis meses que estuvimos haciendo el primer curso de expansión con
                    AAM Solutions, fue un placer estar trabajando con el, siempre con todas las pilas y con mucho
                    conocimiento. Mas que recomendable como profesional y persona!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 relative">
                      <Image src="/images/ximena-fernandez.png" alt="Ximena Fernández" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Ximena Fernández</CardTitle>
                      <CardDescription>Subgerente Comercial- Credex Latam</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "Recomiendo a Felipe por su gran compromiso y habilidades técnicas que ha demostrado en su trabajo
                    con Credex. Cuenta con una gran disponibilidad y sentido de urgencia. Además de lo anterior, es una
                    persona muy grata, y muy cordial para interactuar."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-12 w-12 relative">
                      <Image src="/images/luciano-spinelli.png" alt="Luciano Spinelli" fill className="object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Luciano Spinelli</CardTitle>
                      <CardDescription>Founder Bloop</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "Felipe fue Speaker en un evento que organicé para hablar sobre la internacionalización, y la verdad
                    que fue un lujo tenerlo. Dejó muchas enseñanzas, hablando al detalle de cada tema, y respondió sin
                    problemas las preguntas del público."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Contacto</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Listo para transformar tu negocio?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctame hoy para comenzar a trabajar en el futuro de tu empresa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">felipegatt@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-muted-foreground">+54 11 6676 1693</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Building2 className="h-6 w-6" />
                  <div>
                    <h3 className="font-semibold">Oficina</h3>
                    <p className="text-muted-foreground">Sarmiento 999, Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 bg-background p-6 rounded-lg">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Envíame un mensaje</h3>
                  <p className="text-sm text-muted-foreground">
                    Completa el formulario y me pondré en contacto contigo lo antes posible.
                  </p>
                </div>
                <form action="mailto:felipegatt@gmail.com" method="post" encType="text/plain" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="nombre"
                      >
                        Nombre
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        name="email"
                        placeholder="tu@email.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="empresa"
                    >
                      Empresa
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="empresa"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="mensaje"
                    >
                      Mensaje
                    </label>
                    <textarea
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="mensaje"
                      name="mensaje"
                      placeholder="¿Cómo puedo ayudarte?"
                    />
                  </div>
                  <Button className="w-full" type="submit">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-muted-foreground">© 2025 Felipe Gattas. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
