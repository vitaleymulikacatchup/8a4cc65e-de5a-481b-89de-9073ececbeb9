"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { DollarSign, Award, BookOpen, Sun, Star, Crown } from "lucide-react";

export default function ServicesPage() {
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

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Варианты обслуживания"
          description="Выберите подходящий формат для вашего визита"
          tag="Тарифы"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              "id":"lunch",
              "badge":"Популярный",
              "badgeIcon":Sun,
              "price":"от 890 ₽",
              "subtitle":"Бизнес-ланч",
              "features":[
                "Салат или суп",
                "Основное блюдо",
                "Напиток",
                "Десерт"
              ]
            },
            {
              "id":"dinner",
              "badge":"Рекомендуем",
              "badgeIcon":Star,
              "price":"от 1 890 ₽",
              "subtitle":"Ужин a la carte",
              "features":[
                "Полное меню",
                "Винное сопровождение",
                "Авторские блюда",
                "Индивидуальное обслуживание"
              ]
            },
            {
              "id":"banquet",
              "badge":"Премиум",
              "badgeIcon":Crown,
              "price":"от 4 500 ₽",
              "subtitle":"Банкетное обслуживание",
              "features":[
                "Персональный шеф-повар",
                "Отдельный зал",
                "Праздничное оформление",
                "Эксклюзивные блюда"
              ]
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Нам доверяют"
          description="Мы представлены на ведущих платформах и в рейтингах"
          tag="Партнеры"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732672295-kmitinol.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732673461-l27qjs25.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732674538-zdopdpro.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732675630-bfmkc3bi.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732676612-6u0fiu2k.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732677440-gjbmm6v8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732678329-agoxfmlu.jpg"
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Кулинарный блог"
          description="Секреты приготовления морепродуктов от наших шеф-поваров"
          tag="Блог"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              "id":"1",
              "category":"Рецепты",
              "title":"Искусство приготовления морепродуктов",
              "excerpt":"Узнайте секреты профессиональных шеф-поваров по приготовлению идеальных блюд из морепродуктов",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732679311-judecvu6.jpg",
              "imageAlt":"Руководство по приготовлению морепродуктов",
              "authorName":"Александр Морской",
              "authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732664338-koihp8q1.jpg",
              "date":"15 января 2025"
            },
            {
              "id":"2",
              "category":"Вина",
              "title":"Винные пары к морепродуктам",
              "excerpt":"Как правильно подбирать вина к различным блюдам из морепродуктов для идеальной гармонии вкусов",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732680414-otp4fqq8.jpg",
              "imageAlt":"Винные пары к морепродуктам",
              "authorName":"Елена Винтаж",
              "authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732665142-lcs8r40b.jpg",
              "date":"12 января 2025"
            },
            {
              "id":"3",
              "category":"Сезонность",
              "title":"Сезонное меню: зимние деликатесы",
              "excerpt":"Открывайте для себя лучшие зимние морепродукты и сезонные блюда в нашем обновленном меню",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732681199-m0e1zh3g.jpg",
              "imageAlt":"Сезонное меню",
              "authorName":"Игорь Гостеприимов",
              "authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732665975-5goe462a.jpg",
              "date":"10 января 2025"
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