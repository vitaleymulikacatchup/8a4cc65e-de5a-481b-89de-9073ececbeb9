"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import Link from "next/link";
import { Fish, Star, ChefHat } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Ресторан морепродуктов Окунь"
          description="Откройте для себя изысканные морепродукты в атмосфере элегантности и комфорта. Наши шеф-повара готовят только из свежайших ингредиентов."
          tag="Добро пожаловать"
          tagIcon={Fish}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732647582-ez7fsec4.jpg"
          imageAlt="Интерьер ресторана Окунь"
          imagePosition="right"
          buttons={[
            {"text":"Забронировать стол","href":"/contact"},
            {"text":"Наше меню","href":"/menu"}
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Традиции и качество"
          description={[
            "Ресторан «Окунь» — это место, где морские традиции встречаются с современным кулинарным искусством. Уже более 15 лет мы радуем гостей свежайшими морепродуктами и авторскими блюдами.",
            "Наша философия проста: только лучшие ингредиенты, профессиональное мастерство и внимание к каждой детали. Каждое блюдо — это произведение искусства, созданное с любовью к морской кухне."
          ]}
          buttons={[
            {"text":"Наша история","href":"/about"}
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="Что делает нас особенными"
          description="Откройте для себя уникальные особенности ресторана Окунь"
          tag="Наши преимущества"
          tagIcon={Star}
          textboxLayout="default"
          features={[
            {
              "id":"1",
              "title":"Свежесть каждый день",
              "description":"Ежедневные поставки морепродуктов прямо с рыболовецких судов гарантируют непревзойденную свежесть каждого блюда.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732649781-ee1vfgb5.jpg",
              "imageAlt":"Свежие морепродукты"
            },
            {
              "id":"2",
              "title":"Изысканная подача",
              "description":"Наши шеф-повара создают не просто блюда, а настоящие произведения кулинарного искусства с безупречной подачей.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732650840-czw5we61.jpg",
              "imageAlt":"Изысканная подача блюд"
            },
            {
              "id":"3",
              "title":"Винное сопровождение",
              "description":"Тщательно подобранная коллекция вин идеально дополняет каждое блюдо из морепродуктов в нашем меню.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732651871-idjcj5ts.jpg",
              "imageAlt":"Винное сопровождение"
            },
            {
              "id":"4",
              "title":"Панорамный вид",
              "description":"Насладитесь трапезой с видом на море в нашем ресторане с панорамными окнами и террасой.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732652942-6z7edq4y.jpg",
              "imageAlt":"Вид на море"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Фирменные блюда"
          description="Попробуйте наши самые популярные морепродукты"
          tag="Меню"
          tagIcon={ChefHat}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              "id":"1",
              "name":"Лосось на гриле",
              "price":"1 890 ₽",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732658101-uprjrqcu.jpg",
              "imageAlt":"Лосось на гриле"
            },
            {
              "id":"2",
              "name":"Лобстер Термидор",
              "price":"3 200 ₽",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732659004-j95qd05p.jpg",
              "imageAlt":"Лобстер Термидор"
            },
            {
              "id":"3",
              "name":"Ассорти морепродуктов",
              "price":"2 450 ₽",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732660014-i0atej61.jpg",
              "imageAlt":"Ассорти морепродуктов"
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