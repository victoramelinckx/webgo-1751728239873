
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas." subheadline="Transformamos tu negocio digitalmente con soporte 24/7, para que vendas más sin complicaciones." cta1="Empieza Ahora" />
<How step1Title="Envía tu solicitud" step1Desc="Completa el formulario en minutos." step2Title="Creamos tu web" step2Desc="Innovamos para atraer más clientes." step3Title="Lanzamiento en 24h" step3Desc="Tu web lista con soporte 24/7." />
<Aboutus headline="WebGo: Digitaliza y Crece" subheadline="Transforma tu negocio con páginas web que venden mientras te concentras en lo importante." beneficiotitulo1="Resultados Rápidos" beneficio1="Aumenta ventas online sin complicaciones." beneficiotitulo2="Gestión Sencilla" beneficio2="Nos encargamos de todo por ti." />
<Services heading="Digitaliza y Aumenta Tus Ventas" description="Rapidez, compromiso, innovación para llevar tu negocio al mundo online." services={[{"name":"Creación de E-commerce","icon":"shopping-cart","description":"Lanza tu tienda online en 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Aumenta tu visibilidad en línea."},{"name":"Gestión de Redes Sociales","icon":"share-alt","description":"Construye y compromete tu audiencia."},{"name":"Publicidad Digital","icon":"bullhorn","description":"Atrae clientes con anuncios efectivos."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Toma decisiones informadas con insights."},{"name":"Soporte Técnico 24/7","icon":"headset","description":"Asistencia continua para tu web."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web impactantes y funcionales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas rápidamente?","respuesta":"WebGo se especializa en transformar tu negocio a digital con rapidez. Nos enfocamos en implementar estrategias innovadoras que te permitan comenzar a vender online sin complicaciones."},{"pregunta":"¿Qué compromiso ofrece WebGo para asegurar el éxito de mi negocio en línea?","respuesta":"En WebGo, nos comprometemos a brindarte un servicio personalizado y continuo. Nos aseguramos de que cada paso hacia la digitalización esté alineado con tus objetivos, para que tu negocio prospere en el mundo online."},{"pregunta":"¿Qué innovaciones trae WebGo para mejorar mis ventas online?","respuesta":"WebGo introduce tecnología de vanguardia para optimizar tu presencia online. Usamos herramientas modernas y estrategias innovadoras que te permiten destacar en el mercado digital y atraer más clientes."},{"pregunta":"¿Cómo me beneficia trabajar con WebGo si no tengo experiencia en ventas online?","respuesta":"WebGo está diseñado para emprendedores como tú. Nos encargamos de todo el proceso de digitalización, por lo que no necesitas experiencia previa. Te guiamos en cada paso para que puedas centrarte en lo que mejor haces: dirigir tu negocio."},{"pregunta":"¿Cómo gestiona WebGo mi sitio web si no tengo tiempo para hacerlo yo mismo?","respuesta":"Con WebGo, puedes olvidarte del estrés de manejar un sitio web. Nos encargamos de todo, desde la creación hasta el mantenimiento, para que tú puedas concentrarte en crecer tu negocio."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio con Rapidez" 
                      description="Digitaliza tus ventas hoy y destaca online con nuestro compromiso e innovación."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
