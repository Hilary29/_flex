"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { submitRegistration } from "@/actions/registration"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  phoneNumber: z.string().min(8, { message: "Veuillez entrer un numéro de téléphone valide" }),
  address: z.string().min(5, { message: "L'adresse doit contenir au moins 5 caractères" }),
  hasLaptop: z.enum(["yes", "no"], { required_error: "Veuillez indiquer si vous avez un ordinateur portable" }),
  session: z.string({ required_error: "Veuillez sélectionner une session" }),
  center: z.string({ required_error: "Veuillez sélectionner un centre de formation" }),
  category: z.enum(["simple", "vip"], { required_error: "Veuillez sélectionner une catégorie" }),
  software: z.string({ required_error: "Veuillez sélectionner un logiciel ou programme" }),
  softwareStartDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Veuillez entrer une date valide (YYYY-MM-DD)" }),
  trainingStartDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Veuillez entrer une date valide (YYYY-MM-DD)" }),
  trainingTerm: z.enum(["longue", "courte"], { required_error: "Veuillez sélectionner une durée de formation" }),
  trainingMessage: z.string().optional(),
  vipTrainingTraining: z.string().optional(),
  vipTrainingStartDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Veuillez entrer une date valide (YYYY-MM-DD)" }).optional(),
  vipTrainingTerm: z.enum(["longue", "courte"]).optional(),
  vipTrainingMessage: z.string().optional(),
  specialTrainingTraining: z.string().optional(),
  specialTrainingStartDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Veuillez entrer une date valide (YYYY-MM-DD)" }).optional(),
  specialTrainingTerm: z.enum(["longue", "courte"]).optional(),
  specialTrainingMessage: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      hasLaptop: undefined,
      session: "",
      center: "",
      category: undefined,
      software: "",
      softwareStartDate: "",
      trainingStartDate: "",
      trainingTerm: undefined,
      trainingMessage: "",
      vipTrainingTraining: "",
      vipTrainingStartDate: "",
      vipTrainingTerm: undefined,
      vipTrainingMessage: "",
      specialTrainingTraining: "",
      specialTrainingStartDate: "",
      specialTrainingTerm: undefined,
      specialTrainingMessage: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    try {
      const result = await submitRegistration({
        ...data,
        category: data.category,
      })
      if (result.success) {
        toast({
          title: "Inscription réussie!",
          description: "Vos informations ont été envoyées avec succès.",
        })
        form.reset()
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: result.error || "Une erreur s'est produite lors de l'envoi du formulaire.",
        })
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du formulaire.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Formulaire d&apos;Inscription</CardTitle>
          <CardDescription>
            Veuillez remplir tous les champs obligatoires pour vous inscrire à nos formations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrez votre prénom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrez votre nom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input placeholder="+237 6 12 34 56 78" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre adresse complète" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hasLaptop"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Possédez-vous un ordinateur portable ?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Oui</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">Non</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="session"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Session de Formation</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une session" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="session1">Session 1</SelectItem>
                        <SelectItem value="session2">Session 2</SelectItem>
                        <SelectItem value="session3">Session 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Choisissez la session de formation souhaitée</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="center"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Centre de Formation</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un centre" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Douala">Douala</SelectItem>
                        <SelectItem value="Yaoundé">Yaoundé</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Choisissez le centre de formation le plus proche</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Catégorie de Formation</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="simple" />
                          </FormControl>
                          <FormLabel className="font-normal">Simple</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="vip" />
                          </FormControl>
                          <FormLabel className="font-normal">VIP</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="software"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Programme de Formation</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un programme" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="computer_science">Informatique</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="entrepreneurship">Entrepreneuriat</SelectItem>
                        <SelectItem value="marketing">Marketing Digital</SelectItem>
                        <SelectItem value="design">Design Graphique</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Choisissez le domaine de formation qui vous intéresse</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="softwareStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date de début du logiciel</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="trainingStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date de début de la formation</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="trainingTerm"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Durée de la Formation</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="longue" />
                          </FormControl>
                          <FormLabel className="font-normal">Formation longue</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="courte" />
                          </FormControl>
                          <FormLabel className="font-normal">Formation courte</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="trainingMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message concernant la formation</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ajoutez des informations sur la formation"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vipTrainingTraining"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Formation VIP</FormLabel>
                    <FormControl>
                      <Input placeholder="Spécifiez la formation VIP (si applicable)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="vipTrainingStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date de début de la formation VIP</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vipTrainingTerm"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Durée de la Formation VIP</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="longue" />
                            </FormControl>
                            <FormLabel className="font-normal">Formation longue</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="courte" />
                            </FormControl>
                            <FormLabel className="font-normal">Formation courte</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="vipTrainingMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message concernant la formation VIP</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ajoutez des informations sur la formation VIP"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialTrainingTraining"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Formation Spéciale</FormLabel>
                    <FormControl>
                      <Input placeholder="Spécifiez la formation spéciale (si applicable)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="specialTrainingStartDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date de début de la formation spéciale</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="specialTrainingTerm"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Durée de la Formation Spéciale</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="longue" />
                            </FormControl>
                            <FormLabel className="font-normal">Formation longue</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="courte" />
                            </FormControl>
                            <FormLabel className="font-normal">Formation courte</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="specialTrainingMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message concernant la formation spéciale</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ajoutez des informations sur la formation spéciale"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "S'inscrire"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-500">
          Vos données personnelles seront traitées conformément à notre politique de confidentialité
        </CardFooter>
      </Card>
      <Toaster />
    </>
  )
}