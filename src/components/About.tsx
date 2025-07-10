
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      number: "20+",
      label: "Anos de Experiência"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      number: "5000+",
      label: "Clientes Satisfeitos"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      number: "24/7",
      label: "Atendimento"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      number: "3",
      label: "Unidades"
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Há mais de 20 anos no mercado automotivo, somos referência em qualidade e confiabilidade. 
                Nossa equipe de profissionais especializados trabalha com dedicação para manter seu veículo 
                sempre em perfeitas condições.
              </p>
              <p>
                Contamos com equipamentos de última geração e utilizamos apenas peças originais ou de 
                primeira linha, garantindo a durabilidade e segurança dos nossos serviços.
              </p>
              <p>
                Nossa missão é oferecer soluções completas em manutenção automotiva, desde serviços 
                preventivos até grandes reparos, sempre com transparência e preços justos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
