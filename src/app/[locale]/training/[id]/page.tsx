import Image from "next/image"
import { notFound } from "next/navigation"
import { getTrainingById } from "../../../../lib/trainings"
import { Link } from "@/i18n/routing"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  // Await params pour obtenir les valeurs
  const { id } = await params
  const t = await getTranslations()
  const training = await getTrainingById(id, t)

  if (!training) {
    return {
      title: "Formation non trouvée",
    }
  }

  return {
    title: `${training.title} | Formations`,
    description: training.description,
  }
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  // Await params pour obtenir les valeurs
  const { id } = await params
  const t = await getTranslations()
  const training = await getTrainingById(id, t)

  if (!training) {
    notFound()
  }

  return (
    <div className=" mx-auto py-8 ">
      <div className="bg-[#1b3d74] text-white pb-8 pt-28 px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">{training.title}</h1>
          <div className="flex items-center mt-4 text-sm">
            <Link href="/" className="hover:underline">
              {t("Header.Home")}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/Trainings" className="hover:underline">
              {t("Trainings.Trainings")}
            </Link>

            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{training.title.charAt(0).toUpperCase() + training.title.slice(1).toLowerCase()}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-8">
        <div className="mb-6">
          <Link href="/Trainings" className="inline-flex items-center text-[#1b3d74] hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("Trainings.Back_to_trainings")}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative aspect-video overflow-hidden rounded-lg mb-6">
              <Image
                src={training.image || "/placeholder.svg"}
                alt={training.alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {training.description && (
              <div className="prose max-w-none">
                <p className="text-lg mb-4">{training.description}</p>
              </div>
            )}

            {/* Contenu détaillé de la formation */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-[#1b3d74] mb-3">{t("Trainings.objectives")}</h2>
                <p>{t("objectives_description")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1b3d74] mb-3">{t("Trainings.program")}</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{t("module1")}</li>
                  <li>{t("module2")}</li>
                  <li>{t("module3")}</li>
                  <li>{t("module4")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-[#1b3d74] mb-3">{t("Trainings.prerequisites")}</h2>
                <p>{t("prerequisites_description")}</p>
              </section>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
              <h3 className="text-xl font-semibold text-[#1b3d74] mb-4">{t("Trainings.practical_information")}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">{t("Trainings.duration")}</h4>
                  <p>{t("duration_value")}</p>
                </div>

                <div>
                  <h4 className="font-medium">{t("Trainings.target_audience")}</h4>
                  <p>{t("target_audience_description")}</p>
                </div>

                <div>
                  <h4 className="font-medium">{t("Trainings.modalities")}</h4>
                  <p>{t("modalities_description")}</p>
                </div>

                <div>
                  <h4 className="font-medium">{t("Trainings.next_sessions")}</h4>
                  <ul className="mt-2 space-y-2">
                    <li>{t("session1")}</li>
                    <li>{t("session2")}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 w-full ">
                <Link
                  href="/Register"
                  className="block w-full bg-[#1b3d74] text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-[#152f58] transition-colors"
                >
                  {t("Trainings.register")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
