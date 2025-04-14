import Link from "next/link"
import { ArrowRight, BarChart3, Building2, Calendar, Mail, Phone, Users, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageCarousel } from "@/components/image-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background elements - oscurecido ligeramente */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-fixed"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute top-40 left-[10%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 right-[20%] w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 text-sm bg-white bg-opacity-50 backdrop-blur-sm rounded-full text-slate-700 mb-2">
                  Consultoría Estratégica
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Consultoría Empresarial Estratégica
                </h1>
                <p className="text-slate-700 md:text-xl">
                  Ayudo a empresas a optimizar sus operaciones, aumentar su rentabilidad y alcanzar sus objetivos
                  estratégicos con soluciones personalizadas y efectivas.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button
                    className="gap-1 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600"
                    asChild
                  >
                    <Link href="http://calendly.com/felipegattas">
                      Agendar una consulta <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-slate-300 hover:bg-slate-100">
                    Ver servicios
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-[500px]">
                  <ImageCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] bg-fixed"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Servicios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Soluciones que ofrezco</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Servicios especializados para ayudar a tu empresa a crecer y prosperar en el mercado actual.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg">Análisis Estratégico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    Evaluación completa de tu negocio para identificar oportunidades de mejora y desarrollar planes
                    estratégicos efectivos.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg">Gestión de Equipos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    Optimización de la estructura organizacional y desarrollo de liderazgo para maximizar el rendimiento
                    de tus equipos.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg">Transformación Empresarial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    Implementación de cambios organizacionales para adaptarse a nuevos mercados y tecnologías
                    emergentes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg">Optimización de Procesos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500">
                    Sistematización y mejora de procesos operativos para aumentar la eficiencia, reducir costos y
                    mejorar la calidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="experiencia" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-300/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white bg-opacity-70 backdrop-blur-sm px-3 py-1 text-sm">
                  Experiencia
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trayectoria Profesional</h2>
                <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experiencia sólida en finanzas, gestión de proyectos y operaciones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-8">
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="font-semibold">Agosto 2021 - Actualidad</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold">Hikru LLC, Head of Finance</h3>
                  <p className="text-slate-500 mt-2">
                    Liderando la estrategia financiera y operativa de la compañía, optimizando procesos y desarrollando
                    planes de crecimiento sostenible.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="font-semibold">Junio 2019 - Julio 2021</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold">ArchGroup, Supervisor & Project Manager</h3>
                  <p className="text-slate-500 mt-2">
                    Supervisión de equipos multidisciplinarios y gestión de proyectos estratégicos, logrando mejoras
                    significativas en eficiencia y resultados.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="font-semibold">2019</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold">Edenor, Sr. Analyst</h3>
                  <p className="text-slate-500 mt-2">
                    Análisis financiero y operativo para una de las principales empresas de distribución eléctrica,
                    implementando mejoras en procesos críticos.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="font-semibold">2018</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold">Seaplate Maritime Agency, Sr. Doc. Area & Operations</h3>
                  <p className="text-slate-500 mt-2">
                    Gestión de documentación y operaciones marítimas, optimizando flujos de trabajo y mejorando la
                    eficiencia operativa.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-slate-700" />
                  </div>
                  <div className="font-semibold">2016 - 2017</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold">Piano Bank, Junior Executive</h3>
                  <p className="text-slate-500 mt-2">
                    Desarrollo de habilidades en el sector bancario, participando en proyectos de mejora de procesos y
                    atención al cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-5 bg-fixed"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Testimonios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen mis clientes</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Resultados comprobados que han transformado negocios.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-14 w-14 relative border-2 border-slate-200 shadow-sm">
                      <img
                        src="/images/ariel-cessario.png"
                        alt="Ariel Cessario"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Ariel Cessario</CardTitle>
                      <CardDescription>Coordinador Cert.ar, Co-Founder AAM</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-slate-200">"</div>
                    <p className="text-sm text-slate-600 pt-2 pl-4">
                      Felipe nos acompaño durante los seis meses que estuvimos haciendo el primer curso de expansión con
                      AAM Solutions, fue un placer estar trabajando con el, siempre con todas las pilas y con mucho
                      conocimiento. Mas que recomendable como profesional y persona!
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-14 w-14 relative border-2 border-slate-200 shadow-sm">
                      <img
                        src="/images/ximena-fernandez.png"
                        alt="Ximena Fernández"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Ximena Fernández</CardTitle>
                      <CardDescription>Subgerente Comercial- Credex Latam</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-slate-200">"</div>
                    <p className="text-sm text-slate-600 pt-2 pl-4">
                      Recomiendo a Felipe por su gran compromiso y habilidades técnicas que ha demostrado en su trabajo
                      con Credex. Cuenta con una gran disponibilidad y sentido de urgencia. Además de lo anterior, es
                      una persona muy grata, y muy cordial para interactuar.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden h-14 w-14 relative border-2 border-slate-200 shadow-sm">
                      <img
                        src="/images/luciano-spinelli.png"
                        alt="Luciano Spinelli"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Luciano Spinelli</CardTitle>
                      <CardDescription>Founder Bloop</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-slate-200">"</div>
                    <p className="text-sm text-slate-600 pt-2 pl-4">
                      Felipe fue Speaker en un evento que organicé para hablar sobre la internacionalización, y la
                      verdad que fue un lujo tenerlo. Dejó muchas enseñanzas, hablando al detalle de cada tema, y
                      respondió sin problemas las preguntas del público.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-300/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white bg-opacity-70 backdrop-blur-sm px-3 py-1 text-sm">
                  Contacto
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Listo para transformar tu negocio?</h2>
                <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctame hoy para comenzar a trabajar en el futuro de tu empresa.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              <div className="space-y-6 bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Mail className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-slate-600">felipegatt@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Phone className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-slate-600">+54 11 6676 1693</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Oficina</h3>
                    <p className="text-slate-600">Sarmiento 999, Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Envíame un mensaje</h3>
                  <p className="text-sm text-slate-500">
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
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="mensaje"
                      name="mensaje"
                      placeholder="¿Cómo puedo ayudarte?"
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600"
                    type="submit"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t border-slate-200 px-4 md:px-6 bg-white">
        <p className="text-xs text-slate-500">© 2025 Felipe Gattas. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-slate-500 hover:text-slate-700" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-slate-500 hover:text-slate-700" href="#">
            Política de privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
