"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText, Scale, FileCheck, Search, GraduationCap, Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar o corpo do e-mail
    const subject = encodeURIComponent("Contato via Site BDG Licitações");
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.telefone}\n\n` +
      `Mensagem:\n${formData.mensagem}`
    );
    
    // Abrir cliente de e-mail
    window.location.href = `mailto:guilherme.licitacoes@hotmail.com?subject=${subject}&body=${body}`;
    
    // Limpar formulário após envio
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: ""
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, como posso te ajudar?");
    window.open(`https://api.whatsapp.com/send?phone=5518998154084&text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content - Acessibilidade */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded-lg"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header/Navbar */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm shadow-lg z-50 border-b border-gray-800" role="banner">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-lg">
                <h1 className="text-2xl font-bold text-white">BDG</h1>
                <p className="text-xs text-gray-400">Licitações e Assessoria</p>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a 
                href="#home" 
                className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                aria-label="Ir para início"
              >
                Início
              </a>
              <a 
                href="#sobre" 
                className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                aria-label="Ir para sobre nós"
              >
                Sobre Nós
              </a>
              <a 
                href="#servicos" 
                className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                aria-label="Ir para serviços"
              >
                Serviços
              </a>
              <a 
                href="#contato" 
                className="text-gray-300 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                aria-label="Ir para contato"
              >
                Contato
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden py-4 space-y-2" role="navigation" aria-label="Menu mobile">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Ir para início"
              >
                Início
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Ir para sobre nós"
              >
                Sobre Nós
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Ir para serviços"
              >
                Serviços
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Ir para contato"
              >
                Contato
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section with Background Image */}
        <section 
          id="home" 
          className="pt-20 min-h-screen flex items-center relative bg-black"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          aria-label="Seção principal"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75" aria-hidden="true"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center text-white animate-fade-in">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Excelência em Licitações e Assessoria para o crescimento da sua empresa
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                A BDG Licitações e Assessoria é uma empresa especializada em oferecer soluções estratégicas e completas para empresas que desejam participar de processos licitatórios com segurança, eficiência e competitividade. Nosso objetivo é simplificar o acesso às oportunidades do setor público, transformando licitações em verdadeiras ferramentas de crescimento empresarial.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Com experiência sólida e conhecimento aprofundado das normas e legislações que regem os processos de compras governamentais, atuamos como parceiros dos nossos clientes em todas as etapas: desde a identificação das melhores oportunidades de licitação, passando pela análise criteriosa dos editais, até a preparação de propostas e recursos administrativos.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Falar no WhatsApp"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Fale no WhatsApp
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Sobre Nós Section */}
        <section id="sobre" className="py-20 bg-gray-100" aria-labelledby="sobre-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="sobre-heading" className="text-3xl sm:text-4xl font-bold text-black mb-4">Sobre Nós</h2>
              <div className="w-24 h-1 bg-black mx-auto" aria-hidden="true"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-gray-800 leading-relaxed mb-16">
              <p className="text-lg">
                A BDG Licitações e Assessoria nasceu com o propósito de transformar o cenário das licitações públicas para empresas que desejam crescer com segurança, estratégia e eficiência. Atuamos como parceiros dos nossos clientes, oferecendo suporte completo em todas as etapas do processo licitatório — desde a identificação de oportunidades até a entrega final da proposta.
              </p>
              <p className="text-lg">
                Com experiência consolidada e profundo conhecimento das leis e normas que regem os processos de compras governamentais, nossa equipe está preparada para orientar empresas de diferentes portes e segmentos, garantindo que cada cliente esteja devidamente habilitado e competitivo para disputar contratos públicos.
              </p>
              <p className="text-lg">
                Nosso trabalho é pautado pela ética, pela transparência e pela busca constante por excelência. Acreditamos que a licitação não deve ser um obstáculo, mas sim uma oportunidade de expansão e fortalecimento empresarial.
              </p>
            </div>

            {/* Missão, Visão, Valores */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4">Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Oferecer soluções completas e personalizadas em licitações e assessoria, promovendo segurança jurídica, agilidade e competitividade para nossos clientes em processos públicos.
                </p>
              </article>

              <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4">Visão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecida como referência em assessoria de licitações no estado de São Paulo, contribuindo para o crescimento sustentável de empresas que atuam no setor público.
                </p>
              </article>

              <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-4">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li><strong>Ética:</strong> Agimos com integridade em todas as relações.</li>
                  <li><strong>Transparência:</strong> Comunicação clara e honesta.</li>
                  <li><strong>Eficiência:</strong> Foco em resultados e agilidade.</li>
                  <li><strong>Inovação:</strong> Atualização constante.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-20 bg-white" aria-labelledby="servicos-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="servicos-heading" className="text-3xl sm:text-4xl font-bold text-black mb-4">Nossos Serviços</h2>
              <div className="w-24 h-1 bg-black mx-auto" aria-hidden="true"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Serviço 1 */}
              <article className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Consultoria em Licitações</h3>
                <p className="text-gray-700 leading-relaxed">
                  Orientação completa para empresas que desejam participar de processos licitatórios de forma segura e estratégica. Nossa consultoria inclui análise detalhada dos editais, identificação de oportunidades compatíveis com o perfil da empresa e suporte em todas as etapas do processo.
                </p>
              </article>

              {/* Serviço 2 */}
              <article className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Assessoria Jurídica e Administrativa</h3>
                <p className="text-gray-700 leading-relaxed">
                  Suporte jurídico e administrativo para elaboração de recursos, impugnações e defesas. Trabalhamos para proteger os interesses da sua empresa, assegurando que seus direitos sejam respeitados e que você tenha respaldo técnico em situações de contestação.
                </p>
              </article>

              {/* Serviço 3 */}
              <article className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Preparação de Documentos e Propostas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cuidamos da organização e elaboração de toda a documentação exigida, garantindo conformidade com as normas legais e administrativas. Auxiliamos na construção de propostas competitivas, claras e bem estruturadas.
                </p>
              </article>

              {/* Serviço 4 */}
              <article className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Busca de Licitações</h3>
                <p className="text-gray-700 leading-relaxed">
                  Monitoramos constantemente os principais portais e sistemas de compras públicas para identificar licitações que estejam alinhadas ao perfil e às necessidades da sua empresa. Essa busca ativa permite acesso rápido às melhores oportunidades.
                </p>
              </article>

              {/* Serviço 5 */}
              <article className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1 border border-gray-200">
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Treinamentos e Capacitações</h3>
                <p className="text-gray-700 leading-relaxed">
                  Oferecemos treinamentos e capacitações voltados para empresários, gestores e equipes que desejam dominar os processos licitatórios. Nossos cursos abordam desde conceitos básicos até estratégias avançadas.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-20 bg-gray-100" aria-labelledby="contato-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="contato-heading" className="text-3xl sm:text-4xl font-bold text-black mb-4">Entre em Contato</h2>
              <div className="w-24 h-1 bg-black mx-auto" aria-hidden="true"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-6">Informações de Contato</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Estamos prontos para atender você e sua empresa. Entre em contato conosco e descubra como podemos ajudar no crescimento do seu negócio através das licitações públicas.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefone/WhatsApp</h4>
                      <a 
                        href="tel:+5518998154084" 
                        className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black rounded"
                        aria-label="Ligar para (18) 99815-4084"
                      >
                        (18) 99815-4084
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                      <a 
                        href="mailto:guilherme.licitacoes@hotmail.com" 
                        className="text-gray-700 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black rounded break-all"
                        aria-label="Enviar e-mail para guilherme.licitacoes@hotmail.com"
                      >
                        guilherme.licitacoes@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <address className="text-gray-700 not-italic">
                        Rua das Américas, 580<br />
                        Jardim Paulista<br />
                        17890-202 – Junqueirópolis/SP
                      </address>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Guilherme Durães Baroni</h4>
                  <p className="text-gray-700">Responsável Técnico</p>
                </div>
              </div>

              {/* Formulário */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-black mb-6">Envie sua Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome completo"
                      aria-required="true"
                      aria-describedby="nome-desc"
                    />
                    <span id="nome-desc" className="sr-only">Digite seu nome completo</span>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="seu@email.com"
                      aria-required="true"
                      aria-describedby="email-desc"
                    />
                    <span id="email-desc" className="sr-only">Digite seu endereço de e-mail</span>
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="(00) 00000-0000"
                      aria-required="true"
                      aria-describedby="telefone-desc"
                    />
                    <span id="telefone-desc" className="sr-only">Digite seu número de telefone</span>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Como podemos ajudar você?"
                      aria-required="true"
                      aria-describedby="mensagem-desc"
                    />
                    <span id="mensagem-desc" className="sr-only">Digite sua mensagem</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
                    aria-label="Enviar mensagem de contato"
                  >
                    <Send className="w-5 h-5" aria-hidden="true" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BDG</h3>
              <p className="text-gray-400">Licitações e Assessoria</p>
              <p className="text-gray-400 mt-4 text-sm">
                Excelência em licitações para o crescimento da sua empresa.
              </p>
            </div>

            <nav aria-label="Links rápidos do rodapé">
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a 
                    href="#home" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label="Ir para início"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a 
                    href="#sobre" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label="Ir para sobre nós"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a 
                    href="#servicos" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label="Ir para serviços"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a 
                    href="#contato" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label="Ir para contato"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a 
                    href="tel:+5518998154084" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                    aria-label="Ligar para (18) 99815-4084"
                  >
                    (18) 99815-4084
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:guilherme.licitacoes@hotmail.com" 
                    className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded break-all"
                    aria-label="Enviar e-mail"
                  >
                    guilherme.licitacoes@hotmail.com
                  </a>
                </li>
                <li>Junqueirópolis/SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} BDG Licitações e Assessoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-110 z-40 focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
          aria-label="Voltar ao topo da página"
        >
          <ArrowUp className="w-6 h-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
