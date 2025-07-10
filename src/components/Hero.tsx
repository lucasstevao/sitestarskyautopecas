
import { Button } from '@/components/ui/button';
import { Wrench, Car, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-r from-secondary to-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sua Oficina de Confiança
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Peças automotivas, serviços especializados e atendimento 24 horas. 
            Mais de 20 anos cuidando do seu veículo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90">
              <Wrench className="mr-2 h-5 w-5" />
              Nossos Serviços
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              <Car className="mr-2 h-5 w-5" />
              Ver Peças
            </Button>
            <Button size="lg" variant="destructive" className="bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-5 w-5" />
              Guincho 24h
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
