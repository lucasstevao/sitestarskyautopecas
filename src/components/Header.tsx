
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary text-secondary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">AutoPeças & Oficina</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#pecas" className="hover:text-primary transition-colors">Peças</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          {/* Emergency Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="destructive" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-4 w-4" />
              Emergência 24h
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#inicio" className="block hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="block hover:text-primary transition-colors">Serviços</a>
            <a href="#pecas" className="block hover:text-primary transition-colors">Peças</a>
            <a href="#sobre" className="block hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="block hover:text-primary transition-colors">Contato</a>
            <Button variant="destructive" className="w-full bg-primary hover:bg-primary/90 mt-4">
              <Phone className="mr-2 h-4 w-4" />
              Emergência 24h
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
