import React from 'react';
import { Mail, MapPin, Heart, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenGetInvolved: (tab?: 'learner' | 'volunteer' | 'partner') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGetInvolved }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* South Sudan National Dignity Ribbon (Black, Red, Green, Blue, Gold) */}
      <div className="h-1.5 w-full flex">
        <div className="flex-1 bg-stone-950" title="Black - The People" />
        <div className="flex-1 bg-red-600" title="Red - The Blood Shed for Freedom" />
        <div className="flex-1 bg-emerald-600" title="Green - The Fertile Land" />
        <div className="flex-1 bg-sky-600" title="Blue - Waters of the Nile" />
        <div className="flex-1 bg-amber-400" title="Gold - Star of Hope" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5 text-white font-display text-2xl font-extrabold tracking-tight">
              <span className="w-8 h-8 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center font-black text-sm">
                SS
              </span>
              <span>
                S.SUDAN <span className="text-amber-400 font-light">HOPE</span>
              </span>
            </a>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              An emerging community-focused initiative dedicated to creating hope, empowering communities,
              promoting education, developing skills, and improving the living conditions of people across South Sudan.
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Juba, Republic of South Sudan · Nationwide Grassroots Reach</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <a href="mailto:abednegobdauwuoi@gmail.com" className="hover:text-amber-400 underline">
                abednegobdauwuoi@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Transformative Programs
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Education & Literacy</a>
              </li>
              <li>
                <a href="#skills-academy" className="hover:text-amber-400 transition-colors">Solar & Technical Trades</a>
              </li>
              <li>
                <a href="#skills-academy" className="hover:text-amber-400 transition-colors">Garment Construction & Tailoring</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Cooperative Nile Agriculture</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">Vulnerable Family Safety Net</a>
              </li>
            </ul>
          </div>

          {/* Community Action */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Get Involved
            </div>
            <p className="text-xs text-stone-400">
              Whether you are an aspiring trainee, a diaspora professional, or a community volunteer, there is a place for your hands and heart.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => onOpenGetInvolved('learner')}
                className="px-3.5 py-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg transition-colors"
              >
                Apply as Trainee
              </button>
              <button
                onClick={() => onOpenGetInvolved('volunteer')}
                className="px-3.5 py-2 text-xs font-medium bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors border border-stone-700"
              >
                Volunteer or Mentor
              </button>
              <button
                onClick={() => onOpenGetInvolved('partner')}
                className="px-3.5 py-2 text-xs font-medium bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors border border-stone-700"
              >
                Partner with Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} S.SUDAN HOPE Initiative. Founded on the belief that every individual deserves the opportunity to learn, grow, and thrive.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
