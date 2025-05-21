"use server"

import nodemailer from "nodemailer"

type RegistrationData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  hasLaptop: "yes" | "no";
  session: string;
  center: string;
  category: "simple" | "vip";
  software: string;
  softwareStartDate: string;
  trainingStartDate: string;
  trainingTerm: "longue" | "courte";
  trainingMessage?: string;
  vipTrainingTraining?: string;
  vipTrainingStartDate?: string;
  vipTrainingTerm?: "longue" | "courte";
  vipTrainingMessage?: string;
  specialTrainingTraining?: string;
  specialTrainingStartDate?: string;
  specialTrainingTerm?: "longue" | "courte";
  specialTrainingMessage?: string;
}

export async function submitRegistration(data: RegistrationData): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Envoyer un email
    await sendEmail(data)

    // 2. Envoyer un message Whats altruistApp
    await sendWhatsAppMessage(data)

    return { success: true }
  } catch (error) {
    console.error("Erreur lors de la soumission:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Une erreur inconnue est survenue",
    }
  }
}

async function sendEmail(data: RegistrationData) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "keubouhilary@gmail.com",
      pass: "uxvb qlpl lvak uvqx",
    },
  })

  const programNames: Record<string, string> = {
    computer_science: "Informatique",
    maintenance: "Maintenance",
    business: "Business",
    entrepreneurship: "Entrepreneuriat",
    marketing: "Marketing Digital",
    design: "Design Graphique",
  }

  const emailContent = `
    <h2>Nouvelle Inscription à la Formation</h2>
    <p><strong>Nom complet:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Téléphone:</strong> ${data.phoneNumber}</p>
    <p><strong>Adresse:</strong> ${data.address}</p>
    <p><strong>Possède un ordinateur portable:</strong> ${data.hasLaptop === "yes" ? "Oui" : "Non"}</p>
    <p><strong>Session:</strong> ${data.session}</p>
    <p><strong>Centre:</strong> ${data.center}</p>
    <p><strong>Catégorie:</strong> ${data.category === "simple" ? "Simple" : "VIP"}</p>
    <p><strong>Programme:</strong> ${programNames[data.software] || data.software}</p>
    <p><strong>Date de début du logiciel:</strong> ${data.softwareStartDate}</p>
    <p><strong>Date de début de la formation:</strong> ${data.trainingStartDate}</p>
    <p><strong>Durée de la formation:</strong> ${data.trainingTerm === "longue" ? "Formation longue" : "Formation courte"}</p>
    ${data.trainingMessage ? `<p><strong>Message concernant la formation:</strong> ${data.trainingMessage}</p>` : ""}
    ${data.vipTrainingTraining ? `<p><strong>Formation VIP:</strong> ${data.vipTrainingTraining}</p>` : ""}
    ${data.vipTrainingStartDate ? `<p><strong>Date de début de la formation VIP:</strong> ${data.vipTrainingStartDate}</p>` : ""}
    ${data.vipTrainingTerm ? `<p><strong>Durée de la formation VIP:</strong> ${data.vipTrainingTerm === "longue" ? "Formation longue" : "Formation courte"}</p>` : ""}
    ${data.vipTrainingMessage ? `<p><strong>Message concernant la formation VIP:</strong> ${data.vipTrainingMessage}</p>` : ""}
    ${data.specialTrainingTraining ? `<p><strong>Formation spéciale:</strong> ${data.specialTrainingTraining}</p>` : ""}
    ${data.specialTrainingStartDate ? `<p><strong>Date de début de la formation spéciale:</strong> ${data.specialTrainingStartDate}</p>` : ""}
    ${data.specialTrainingTerm ? `<p><strong>Durée de la formation spéciale:</strong> ${data.specialTrainingTerm === "longue" ? "Formation longue" : "Formation courte"}</p>` : ""}
    ${data.specialTrainingMessage ? `<p><strong>Message concernant la formation spéciale:</strong> ${data.specialTrainingMessage}</p>` : ""}
  `

  await transporter.sendMail({
    from: "Formulaire de <flexacademy.cm>",
    to: "keubouhilary@gmail.com",
    subject: `Nouvelle inscription: ${data.firstName} ${data.lastName}`,
    html: emailContent,
  })
}

async function sendWhatsAppMessage(data: RegistrationData) {
  try {
    const programNames: Record<string, string> = {
      computer_science: "Informatique",
      maintenance: "Maintenance",
      business: "Business",
      entrepreneurship: "Entrepreneuriat",
      marketing: "Marketing Digital",
      design: "Design Graphique",
    }

    const message = `
*Nouvelle Inscription à la Formation*

*Nom:* ${data.firstName} ${data.lastName}
*Email:* ${data.email}
*Téléphone:* ${data.phoneNumber}
*Adresse:* ${data.address}
*Possède un ordinateur portable:* ${data.hasLaptop === "yes" ? "Oui" : "Non"}
*Session:* ${data.session}
*Centre:* ${data.center}
*Catégorie:* ${data.category === "simple" ? "Simple" : "VIP"}
*Programme:* ${programNames[data.software] || data.software}
*Date de début du logiciel:* ${data.softwareStartDate}
*Date de début de la formation:* ${data.trainingStartDate}
*Durée de la formation:* ${data.trainingTerm === "longue" ? "Formation longue" : "Formation courte"}
${data.trainingMessage ? `*Message concernant la formation:* ${data.trainingMessage}` : ""}
${data.vipTrainingTraining ? `*Formation VIP:* ${data.vipTrainingTraining}` : ""}
${data.vipTrainingStartDate ? `*Date de début de la formation VIP:* ${data.vipTrainingStartDate}` : ""}
${data.vipTrainingTerm ? `*Durée de la formation VIP:* ${data.vipTrainingTerm === "longue" ? "Formation longue" : "Formation courte"}` : ""}
${data.vipTrainingMessage ? `*Message concernant la formation VIP:* ${data.vipTrainingMessage}` : ""}
${data.specialTrainingTraining ? `*Formation spéciale:* ${data.specialTrainingTraining}` : ""}
${data.specialTrainingStartDate ? `*Date de début de la formation spéciale:* ${data.specialTrainingStartDate}` : ""}
${data.specialTrainingTerm ? `*Durée de la formation spéciale:* ${data.specialTrainingTerm === "longue" ? "Formation longue" : "Formation courte"}` : ""}
${data.specialTrainingMessage ? `*Message concernant la formation spéciale:* ${data.specialTrainingMessage}` : ""}
    `.trim()

    console.log("Message WhatsApp qui serait envoyé:", message)
    // Intégration réelle de l'API WhatsApp si nécessaire
  } catch (error) {
    console.error("Erreur lors de l'envoi du message WhatsApp:", error)
    throw new Error("Échec de l'envoi du message WhatsApp")
  }
}