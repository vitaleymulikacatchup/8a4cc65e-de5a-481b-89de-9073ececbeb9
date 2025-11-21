"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="animatedGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {"name":"Главная","id":"/"},
            {"name":"О нас","id":"/about"},
            {"name":"Меню","id":"/menu"},
            {"name":"Отзывы","id":"/testimonials"},
            {"name":"Контакты","id":"/contact"}
          ]}
          logoText="Окунь"
          button={{"text":"Заказать стол","href":"/contact"}}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Бронирование"
          title="Забронируйте столик"
          description="Свяжитесь с нами для бронирования столика или получения дополнительной информации о наших услугах"
          tagIcon={Calendar}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732681975-6ndfi19b.jpg"
          imageAlt="Ресторан Окунь"
          mediaPosition="right"
          inputPlaceholder="Ваш email"
          buttonText="Забронировать"
          termsText="Нажимая кнопку, вы соглашаетесь с нашими условиями бронирования и политикой конфиденциальности."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Окунь"
          copyrightText="© 2025 | Ресторан Окунь"
          columns={[
            {
              "title":"Меню",
              "items":[
                {"label":"Рыба и морепродукты","href":"/menu"},
                {"label":"Фирменные блюда","href":"/products"},
                {"label":"Винная карта","href":"/wine"},
                {"label":"Десерты","href":"/desserts"}
              ]
            },
            {
              "title":"О ресторане",
              "items":[
                {"label":"Наша история","href":"/about"},
                {"label":"Команда","href":"/team"},
                {"label":"Новости","href":"/blog"},
                {"label":"Карьера","href":"/careers"}
              ]
            },
            {
              "title":"Услуги",
              "items":[
                {"label":"Бронирование","href":"/contact"},
                {"label":"Банкеты","href":"/banquets"},
                {"label":"Доставка","href":"/delivery"},
                {"label":"Кейтеринг","href":"/catering"}
              ]
            }
          ]}
          socialLinks={[
            {"icon":"Instagram","href":"https://instagram.com/okun_restaurant","ariaLabel":"Instagram"},
            {"icon":"Facebook","href":"https://facebook.com/okun.restaurant","ariaLabel":"Facebook"},
            {"icon":"Twitter","href":"https://twitter.com/okun_rest","ariaLabel":"Twitter"},
            {"icon":"Youtube","href":"https://youtube.com/okun_restaurant","ariaLabel":"YouTube"}
          ]}
        />
      </div>
    </ThemeProvider>
  );
}