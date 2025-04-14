"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Aquí normalmente enviarías los datos a un backend
    // Simulamos un envío exitoso con un timeout
    try {
      // Simulación de envío de datos
      console.log("Datos del formulario:", formData)

      // Esperar 1 segundo para simular el envío
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mostrar mensaje de éxito
      toast({
        title: "Consulta recibida",
        description: "Nos pondremos en contacto contigo a la brevedad.",
      })

      // Limpiar el formulario y mostrar mensaje de confirmación
      setFormSubmitted(true)
      setFormData({
        nombre: "",
        email: "",
        empresa: "",
        mensaje: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <div className="space-y-2">
        <h3 className="text-xl font-bold">Envíame un mensaje</h3>
        <p className="text-sm text-slate-500">
          Completa el formulario y me pondré en contacto contigo lo antes posible.
        </p>
      </div>

      {formSubmitted ? (
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
          <h4 className="font-medium text-lg mb-2">¡Gracias por tu mensaje!</h4>
          <p className="text-slate-600">Hemos recibido tu consulta y te contactaremos a la brevedad.</p>
          <Button variant="outline" className="mt-4" onClick={() => setFormSubmitted(false)}>
            Enviar otro mensaje
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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
                value={formData.nombre}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
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
              value={formData.empresa}
              onChange={handleChange}
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
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>
        </form>
      )}
    </div>
  )
}
