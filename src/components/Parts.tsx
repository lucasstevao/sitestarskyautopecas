
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Truck, Clock, Star, Disc, CircleGauge } from 'lucide-react';

const Parts = () => {
  const categories = [
    {
      title: "Motor",
      description: "Peças para motor, filtros, óleos e componentes internos",
      items: "500+ itens"
    },
    {
      title: "Freios",
      description: "Pastilhas, discos, lonas e fluidos de freio originais",
      items: "200+ itens"
    },
    {
      title: "Suspensão",
      description: "Amortecedores, molas, buchas e componentes de direção",
      items: "300+ itens"
    },
    {
      title: "Elétrica",
      description: "Baterias, alternadores, motores de partida e componentes",
      items: "400+ itens"
    },
    {
      title: "Pneus",
      description: "Pneus de todas as marcas e medidas para seu veículo",
      items: "150+ modelos"
    },
    {
      title: "Acessórios",
      description: "Som automotivo, alarmes, películas e muito mais",
      items: "100+ itens"
    }
  ];

  const features = [
    {
      icon: <Package className="h-6 w-6 text-primary" />,
      title: "Peças Originais",
      description: "Trabalhamos apenas com peças originais e de primeira linha"
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Entrega Rápida",
      description: "Entregamos em até 24h na região metropolitana"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Garantia",
      description: "Todas as peças com garantia de fábrica"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Melhor Preço",
      description: "Preços competitivos e condições especiais para oficinas"
    }
  ];

  return (
    <section id="pecas" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Auto Peças</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temos as melhores peças para o seu veículo com garantia e preços competitivos
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {category.items}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline" className="w-full">
                  Ver Catálogo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Por que escolher nossas peças?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parts;
