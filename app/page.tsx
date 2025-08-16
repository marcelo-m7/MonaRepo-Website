"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Layout from "@/components/layout"
import { Brain, Zap, Shield, Users, ArrowRight, CheckCircle } from "lucide-react"
import { useTranslation, Trans } from "react-i18next"

const Index = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: Brain,
      title: t("index.why.features.ai.title"),
      description: t("index.why.features.ai.desc"),
    },
    {
      icon: Zap,
      title: t("index.why.features.fast.title"),
      description: t("index.why.features.fast.desc"),
    },
    {
      icon: Shield,
      title: t("index.why.features.secure.title"),
      description: t("index.why.features.secure.desc"),
    },
    {
      icon: Users,
      title: t("index.why.features.support.title"),
      description: t("index.why.features.support.desc"),
    },
  ]

  const solutions = [
    {
      name: "Boteco Pro",
      description: "Sistema completo de gestão para restaurantes e bares com analytics de IA e gestão de inventário.",
      features: ["Gestão de Pedidos", "Controle de Estoque", "Dashboard Analytics", "Gestão de Funcionários"],
      gradient: "from-brand-purple to-brand-blue",
    },
    {
      name: "AssisTina AI",
      description:
        "Assistente de IA personalizada que aprende as necessidades do seu negócio e automatiza tarefas rotineiras.",
      features: [
        "Processamento de Linguagem Natural",
        "Automação de Tarefas",
        "Capacidades de Aprendizado",
        "Integração Personalizada",
      ],
      gradient: "from-brand-blue to-brand-purple",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
              <Trans
                i18nKey="index.hero.headline"
                components={[
                  <br key="lb" />,
                  <span
                    key="gradient"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
                  />,
                ]}
              />
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">{t("index.hero.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary">
                  {t("index.hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  size="lg"
                  className="bg-white text-brand-purple hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl text-lg transition-all ease-in-out duration-300"
                >
                  {t("index.hero.viewSolutions")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">{t("index.why.title")}</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">{t("index.why.description")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-soft hover:shadow-soft-lg transition-all ease-in-out duration-300 card-hover rounded-2xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">{t("index.solutions.title")}</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">{t("index.solutions.description")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-0 shadow-soft hover:shadow-soft-lg transition-all ease-in-out duration-300 card-hover rounded-2xl overflow-hidden"
              >
                <div className={`h-4 bg-gradient-to-r ${solution.gradient}`}></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">{solution.name}</h3>
                  <p className="text-neutral-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-700">
                        <CheckCircle className="h-5 w-5 text-brand-blue mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/solutions">
                    <Button className="btn-secondary w-full">
                      {t("index.learnMore")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t("index.cta.title")}</h2>
          <p className="text-xl text-blue-100 mb-8">{t("index.cta.description")}</p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-brand-purple hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl text-lg transition-all ease-in-out duration-300"
            >
              {t("index.cta.getStarted")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Index
