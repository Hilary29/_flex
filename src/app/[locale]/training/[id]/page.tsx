import Image from "next/image"
import { notFound } from "next/navigation"
import { getTrainingById } from "../../../../lib/trainings"
import { Link } from "@/i18n/routing"
import { ArrowLeft } from "lucide-react"
import { getTranslations } from "next-intl/server"

export async function generateMetadata({ params }: { params: { id: string; locale: string } }) {
  const t = await getTranslations()
  const training = await getTrainingById(params.id, t)

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

export default async function page({ params }: { params: { id: string; locale: string } }) {
  const t = await getTranslations()
  const training = await getTrainingById(params.id, t)

  if (!training) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/Trainings" className="inline-flex items-center text-[#1b3d74] hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {("back_to_trainings")}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-[#1b3d74] mb-4">{training.title}</h1>

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
              <h2 className="text-2xl font-semibold text-[#1b3d74] mb-3">{t("objectives")}</h2>
              <p>{t("objectives_description")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1b3d74] mb-3">{t("program")}</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t("module1")}</li>
                <li>{t("module2")}</li>
                <li>{t("module3")}</li>
                <li>{t("module4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1b3d74] mb-3">{t("prerequisites")}</h2>
              <p>{t("prerequisites_description")}</p>
            </section>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
            <h3 className="text-xl font-semibold text-[#1b3d74] mb-4">{t("practical_info")}</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">{t("duration")}</h4>
                <p>{t("duration_value")}</p>
              </div>

              <div>
                <h4 className="font-medium">{t("target_audience")}</h4>
                <p>{t("target_audience_description")}</p>
              </div>

              <div>
                <h4 className="font-medium">{t("modalities")}</h4>
                <p>{t("modalities_description")}</p>
              </div>

              <div>
                <h4 className="font-medium">{t("next_sessions")}</h4>
                <ul className="mt-2 space-y-2">
                  <li>{t("session1")}</li>
                  <li>{t("session2")}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-[#1b3d74] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#152f58] transition-colors">
                {t("register_button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
