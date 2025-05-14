import React from 'react'
import RegistrationForm from '../home/components/RegistrationForm'
import Header from '../home/components/Header'

const page = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-32 px-4 sm:px-6 lg:px-8">
        <Header/>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Inscription à l&apos;École de Formation</h1>
          <p className="mt-3 text-lg text-gray-600">
            Remplissez le formulaire ci-dessous pour vous inscrire à nos programmes de formation
          </p>
        </div>
        <RegistrationForm />
      </div>
    </main>
  )
}

export default page
