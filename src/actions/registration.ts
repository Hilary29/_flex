"use server"

import nodemailer from "nodemailer"

type RegistrationData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  program: string
  category: "simple" | "vip"
  type: "longue" | "courte"
  additionalInfo?: string
}

export async function submitRegistration(data: RegistrationData): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Envoyer un email
    await sendEmail(data)

    // 2. Envoyer un message WhatsApp
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
  // Configurer le transporteur d'email
  // Note: Dans un environnement de production, utilisez des variables d'environnement
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Remplacez par votre serveur SMTP
    port: 587,
    secure: false, // true pour 465, false pour les autres ports
    auth: {
      user: "keubouhilary@gmail.com", // Remplacez par votre email
      pass: "uxvb qlpl lvak uvqx", // Remplacez par votre mot de passe
    },
  })

  // Traduire les valeurs en français pour l'email
  const programNames: Record<string, string> = {
    computer_science: "Informatique",
    maintenance: "Maintenance",
    business: "Business",
    entrepreneurship: "Entrepreneuriat",
    marketing: "Marketing Digital",
    design: "Design Graphique",
  }

  // Préparer le contenu de l'email
  const emailContent = `
    <h2>Nouvelle Inscription à la Formation</h2>
    <p><strong>Nom complet:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Téléphone:</strong> ${data.phone}</p>
    <p><strong>Adresse:</strong> ${data.address}</p>
    <p><strong>Programme:</strong> ${programNames[data.program] || data.program}</p>
    <p><strong>Catégorie:</strong> ${data.category === "simple" ? "Simple" : "VIP"}</p>
    <p><strong>Type de formation:</strong> ${data.type === "longue" ? "Formation longue" : "Formation courte"}</p>
    ${data.additionalInfo ? `<p><strong>Informations supplémentaires:</strong> ${data.additionalInfo}</p>` : ""}
  `

  // Envoyer l'email
  await transporter.sendMail({
    from: " Formulaire de <flexacademy.cm>",
    to: "keubouhilary@gmail.com", // Remplacez par l'email du destinataire
    subject: `Nouvelle inscription: ${data.firstName} ${data.lastName}`,
    html: emailContent,
  })
}

async function sendWhatsAppMessage(data: RegistrationData) {
  // Pour envoyer un message WhatsApp, vous pouvez utiliser l'API WhatsApp Business
  // Voici un exemple utilisant l'API WhatsApp Cloud via fetch

  // Note: Ceci est un exemple et nécessite un compte WhatsApp Business et un accès à l'API
  // Dans un environnement de production, utilisez des variables d'environnement pour les clés d'API

  try {
    // Traduire les valeurs en français pour le message WhatsApp
    const programNames: Record<string, string> = {
      computer_science: "Informatique",
      maintenance: "Maintenance",
      business: "Business",
      entrepreneurship: "Entrepreneuriat",
      marketing: "Marketing Digital",
      design: "Design Graphique",
    }

    // Formater le message pour WhatsApp
    const message = `
*Nouvelle Inscription à la Formation*

*Nom:* ${data.firstName} ${data.lastName}
*Email:* ${data.email}
*Téléphone:* ${data.phone}
*Adresse:* ${data.address}
*Programme:* ${programNames[data.program] || data.program}
*Catégorie:* ${data.category === "simple" ? "Simple" : "VIP"}
*Type:* ${data.type === "longue" ? "Formation longue" : "Formation courte"}
${data.additionalInfo ? `*Informations supplémentaires:* ${data.additionalInfo}` : ""}
    `.trim()

    // Exemple d'implémentation avec l'API WhatsApp Business
    // Dans un environnement réel, vous devriez utiliser l'API officielle de WhatsApp Business
    console.log("Message WhatsApp qui serait envoyé:", message)

    // Simulation d'envoi de message WhatsApp
    // Dans un environnement de production, remplacez ce code par l'intégration réelle de l'API WhatsApp
    /*
    const response = await fetch('https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: 'RECIPIENT_PHONE_NUMBER', // Le numéro de téléphone du destinataire
        type: 'text',
        text: {
          body: message
        }
      }),
    })
    
    const result = await response.json()
    console.log('Résultat de l\'envoi WhatsApp:', result)
    */
  } catch (error) {
    console.error("Erreur lors de l'envoi du message WhatsApp:", error)
    throw new Error("Échec de l'envoi du message WhatsApp")
  }
}
