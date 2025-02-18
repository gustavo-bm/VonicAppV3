import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import VonicLogoWhite from '../../assets/VONIC.png';

const SocialButton = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
  >
    <Icon className="text-white text-xl" />
  </a>
);

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={VonicLogoWhite} alt="Vonic" className="h-12 mb-4" />
            <div className="flex items-center space-x-2 text-white/80 mb-2">
              <FaMapMarkerAlt />
              <span>{t('footer.address')}</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80 mb-2">
              <FaPhone />
              <span>{t('footer.phone')}</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <FaEnvelope />
              <span>{t('footer.email')}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-white/80 hover:text-white transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-white/80 hover:text-white transition-colors">
                  {t('navigation.products')}
                </Link>
              </li>
              <li>
                <Link to="/parceiros" className="text-white/80 hover:text-white transition-colors">
                  {t('navigation.partners')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contato" className="text-white/80 hover:text-white transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
              <li>
                <a href="tel:+5515998024314" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.phone')}
                </a>
              </li>
              <li>
                <a href="mailto:marcos.moraes@vonicsystems.com.br" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="flex space-x-4 mb-6">
              <SocialButton
                icon={FaFacebook}
                href="https://facebook.com/vonicsystems"
              />
              <SocialButton
                icon={FaInstagram}
                href="https://instagram.com/vonicsystems"
              />
              <SocialButton
                icon={FaLinkedin}
                href="https://linkedin.com/company/vonic-systems"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 