
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Settings, Zap, Shield, Car, Fuel } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Mecânica Geral",
      description: "Serviços completos de manutenção e reparo para todos os tipos de veículos."
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Motor e Transmissão",
      description: "Especialistas em reparos de motor, câmbio e sistemas de transmissão."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Elétrica Automotiva",
      description: "Diagnóstico e reparo de sistemas elétricos e eletrônicos veiculares."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Freios e Suspensão",
      description: "Manutenção e troca de sistemas de freio e suspensão para sua segurança."
    },
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Ar Condicionado",
      description: "Instalação, manutenção e reparo de sistemas de climatização automotiva."
    },
    {
      icon: <Fuel className="h-8 w-8 text-primary" />,
      title: "Injeção Eletrônica",
      description: "Diagnóstico e reparo de sistemas de injeção e gerenciamento do motor."
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos com qualidade e garantia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
