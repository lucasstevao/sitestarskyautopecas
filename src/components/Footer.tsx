
import { Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">AutoPeças & Oficina</h3>
            <p className="text-muted-foreground mb-4">
              Há mais de 20 anos oferecendo os melhores serviços automotivos e peças de qualidade. 
              Sua confiança é nossa maior conquista.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" 
                 className="text-green-500 hover:text-green-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/autopecas_oficina" target="_blank" rel="noopener noreferrer"
                 className="text-pink-500 hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mecânica Geral</li>
              <li>Elétrica Automotiva</li>
              <li>Ar Condicionado</li>
              <li>Freios e Suspensão</li>
              <li>Guincho 24h</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 3333-4444</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Rua das Oficinas, 123<br />Centro - São Paulo/SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AutoPeças & Oficina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
