import type { TrainingType } from "../app/[locale]/home/components/training-card"
import { useTranslations } from "next-intl";
// Exemple de données de formations
// Dans un cas réel, ces données viendraient probablement d'une API ou d'une base de données
export const getTrainingsData = (
  t: ReturnType<typeof useTranslations>
): TrainingType[] => [
  {
    id: "graphic-design",
    title: t("Trainings.GRAPHIC_DESIGN"),
    image: "/infographie.png",
    alt: "Woman sitting in front of a laptop",
    description:
      "Graphic design is in high demand across various industries, offering career opportunities in fields like marketing, advertising, web development, and branding.",
  },
  {
    id: "web-development",
    title: t("Trainings.WEB_DEVELOPMENT"),
    image: "/developpement_web.png",
    alt: "Codes on a PC",
    description:
      "Learning web development opens up endless opportunities to create dynamic, interactive websites and applications, empowering you to bring your ideas to life and shape the digital world.",
  },
  {
    id: "office-secretary",
    title: t("Trainings.OFFICE_SECRETARY"),
    image: "/secretaratbureatque.png",
    alt: "Woman sitting presenting something",
    description:
      "Office secretary skills can provide you with essential organizational and communication abilities, opening doors to a wide range of administrative roles and making you an invaluable asset in any professional setting.",
  },
  {
    id: "executive-secretary",
    title: t("Trainings.EXECUTIVE_SECRETARY"),
    image: "/secretaratdedrecrton.png",
    alt: "Woman sitting presenting something",
    description:
      "Becoming an executive secretary will equip you with valuable organizational and communication skills, opening doors to exciting career opportunities and the chance to make a real impact in any organization.",
  },
  {
    id: "accounting-secretary",
    title: t("Trainings.ACCOUNTING_SECRETARY"),
    image: "/secretaratcomptable.png",
    alt: "Woman sitting in front of a laptop",
    description:
      "Mastering accounting secretary skills will empower you with essential financial knowledge, making you a key asset to any organization and opening up a range of career opportunities in the financial and administrative fields.",
  },
  {
    id: "digital-marketing",
    title: t("Trainings.DIGITAL_MARKETING"),
    image: "/maretngdgtal.png",
    alt: "Woman sitting in front of a laptop",
    description:
      "Learning digital marketing empowers you to connect with people, drive results, and stay at the forefront of industry trends in an ever-evolving digital landscape.",
  },
  {
    id: "logistics-transport",
    title: t("Trainings.LOGISTICS_AND_TRANSPORT"),
    image: "/logstcsettransport.png",
    alt: "People beside the port",
    description:
      "Step into the dynamic world of logistics and transport, where you'll navigate supply chains, optimize routes, and master last-mile delivery to keep goods moving efficiently across the globe.",
  },
  {
    id: "custom-transit",
    title: t("Trainings.CUSTOM_AND_TRANSIT"),
    image: "/douanettransit.png",
    alt: "Beside the port",
    description:
      "By learning logistics and transport, you gain the expertise to manage the flow of goods and services efficiently across the globe, contributing to smoother operations, cost savings, and better customer experiences.",
  },
  {
    id: "it-maintenance",
    title: t("Trainings.IT_MAINTENANCE"),
    image: "/maintenance.png",
    alt: "Man repairing a PC",
    description:
      "Mastering IT maintenance empowers you to keep systems running efficiently, solve technical issues quickly, and play a vital role in supporting the technology that drives businesses and everyday life.",
  },
  {
    id: "community-management",
    title: t("Trainings.COMMUNITY_MANAGEMENT"),
    image: "/communtymanagement.png",
    alt: "People discussing on a project",
    description:
      "Community management gives you the opportunity to create and nurture vibrant, engaged spaces where people can connect, share ideas, and work together to build something meaningful.",
  },
  {
    id: "video-editing",
    title: t("Trainings.VIDEO_EDITING"),
    image: "/montagevdeo.png",
    alt: "Camera image",
    description:
      "Video editing allows you to transform raw footage into captivating stories, giving you the power to engage audiences and communicate ideas in a dynamic and creative way.",
  },
  {
    id: "telecommunication",
    title: t("Trainings.TELECOMMUNICATION"),
    image: "/telecpmmuncaton.png",
    alt: "Signals",
    description:
      "Step into the world of telecommunication, where concepts like bandwidth, 5G, and IoT are transforming industries and creating endless opportunities for those ready to innovate!",
  },
];
/**
 * Récupère toutes les formations disponibles
 */
export async function getAllTrainings(t: ReturnType<typeof useTranslations>): Promise<TrainingType[]> {
  // Simuler un délai de chargement pour démontrer le composant loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 500))

  return getTrainingsData(t)
}

/**
 * Récupère une formation spécifique par son ID
 */
export async function getTrainingById(
  id: string,
  t: ReturnType<typeof useTranslations>
): Promise<TrainingType | undefined> {
  // Simuler un délai de chargement pour démontrer le composant loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 500))

  return getTrainingsData(t).find((training) => training.id === id)
}
