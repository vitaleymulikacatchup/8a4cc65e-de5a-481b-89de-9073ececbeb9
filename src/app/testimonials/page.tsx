"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { MessageCircle } from "lucide-react";

export default function TestimonialsPage() {
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
            {"name":"Услуги","id":"/services"},
            {"name":"Отзывы","id":"/testimonials"},
            {"name":"Контакты","id":"/contact"}
          ]}
          button={{"text":"Заказать стол","href":"/contact"}}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Отзывы наших гостей"
          description="Что говорят о нас те, кто уже побывал в Окуне"
          tag="Отзывы"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              "id":"1",
              "name":"Анна Петрова",
              "role":"Ресторанный критик",
              "company":"Гастрономический журнал",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732666959-8fmabf37.jpg",
              "imageAlt":"Анна Петрова"
            },
            {
              "id":"2",
              "name":"Михаил Соколов",
              "role":"Бизнесмен",
              "company":"CEO Tech Innovations",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732667830-xsznp0n9.jpg",
              "imageAlt":"Михаил Соколов"
            },
            {
              "id":"3",
              "name":"Екатерина Волкова",
              "role":"Food блогер",
              "company":"Кулинарные путешествия",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732668933-iz67h124.jpg",
              "imageAlt":"Екатерина Волкова"
            },
            {
              "id":"4",
              "name":"Дмитрий Рыбин",
              "role":"Шеф-повар",
              "company":"Морской бриз",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732669911-fhdacagy.jpg",
              "imageAlt":"Дмитрий Рыбин"
            },
            {
              "id":"5",
              "name":"Ольга Морская",
              "role":"Гастроном",
              "company":"Вкусные истории",
              "rating":5,
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732670964-8t7t1vrf.jpg",
              "imageAlt":"Ольга Морская"
            }
          ]}
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
                {"label":"Рыба и морепродукты","href":"/services"},
                {"label":"Фирменные блюда","href":"/services"},
                {"label":"Винная карта","href":"/services"},
                {"label":"Десерты","href":"/services"}
              ]
            },
            {
              "title":"О ресторане",
              "items":[
                {"label":"Наша история","href":"/about"},
                {"label":"Команда","href":"/about"},
                {"label":"Новости","href":"/about"},
                {"label":"Карьера","href":"/about"}
              ]
            },
            {
              "title":"Услуги",
              "items":[
                {"label":"Бронирование","href":"/contact"},
                {"label":"Банкеты","href":"/services"},
                {"label":"Доставка","href":"/services"},
                {"label":"Кейтеринг","href":"/services"}
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