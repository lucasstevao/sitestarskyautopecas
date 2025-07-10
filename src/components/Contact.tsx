
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Instagram, MapPin, Clock, Mail, Truck } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços.', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/autopecas_oficina', '_blank');
  };

  const handleGuincho = () => {
    window.open('https://wa.me/5511888888888?text=EMERGÊNCIA - Preciso de guincho urgente!', '_blank');
  };

  return (
    <section id="contato" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos sempre prontos para atender você. Entre em contato conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Buttons */}
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <span>WhatsApp</span>
                </CardTitle>
                <CardDescription>
                  Fale conosco diretamente pelo WhatsApp para orçamentos e agendamentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <span>Instagram</span>
                </CardTitle>
                <CardDescription>
                  Acompanhe nossos trabalhos e novidades no Instagram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleInstagram} variant="outline" className="w-full border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white">
                  <Instagram className="mr-2 h-4 w-4" />
                  Seguir no Instagram
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-primary" />
                  <span>Guincho 24h</span>
                </CardTitle>
                <CardDescription>
                  Serviço de guincho disponível 24 horas para emergências
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleGuincho} variant="destructive" className="w-full bg-primary hover:bg-primary/90">
                  <Truck className="mr-2 h-4 w-4" />
                  Solicitar Guincho
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Endereço</h4>
                      <p className="text-muted-foreground">
                        Rua das Oficinas, 123<br />
                        Centro - São Paulo/SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Telefones</h4>
                      <p className="text-muted-foreground">
                        (11) 3333-4444<br />
                        (11) 99999-9999 (WhatsApp)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">E-mail</h4>
                      <p className="text-muted-foreground">
                        contato@autopecas.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Funcionamento</h4>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h<br />
                        <span className="text-primary font-semibold">Guincho: 24h todos os dias</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
