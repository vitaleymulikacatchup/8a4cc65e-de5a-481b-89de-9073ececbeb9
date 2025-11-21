"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import Link from "next/link";
import { TrendingUp, Users } from "lucide-react";

export default function AboutPage() {
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

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Наши достижения"
          description="Цифры, которые говорят о нашем качестве"
          tag="Статистика"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              "id":"1",
              "value":"15+",
              "description":"Лет превосходного сервиса"
            },
            {
              "id":"2",
              "value":"50 000+",
              "description":"Довольных гостей"
            },
            {
              "id":"3",
              "value":"4.9★",
              "description":"Средняя оценка"
            },
            {
              "id":"4",
              "value":"12",
              "description":"Наград и премий"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Наша команда"
          description="Знакомьтесь с профессионалами, которые создают волшебство"
          tag="Команда"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              "id":"1",
              "name":"Александр Морской",
              "role":"Шеф-повар",
              "description":"15 лет опыта в приготовлении морепродуктов. Обладатель престижных кулинарных наград.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732664338-koihp8q1.jpg",
              "imageAlt":"Шеф-повар Александр Морской",
              "socialLinks":[
                {"icon":"Instagram","url":"https://instagram.com/chef_morskoy"},
                {"icon":"Linkedin","url":"https://linkedin.com/in/chef-morskoy"}
              ]
            },
            {
              "id":"2",
              "name":"Елена Винтаж",
              "role":"Сомелье",
              "description":"Сертифицированный сомелье с глубокими знаниями винного искусства и идеальными сочетаниями.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732665142-lcs8r40b.jpg",
              "imageAlt":"Сомелье Елена Винтаж",
              "socialLinks":[
                {"icon":"Instagram","url":"https://instagram.com/elena_vintage"},
                {"icon":"Globe","url":"https://elena-vintage.com"}
              ]
            },
            {
              "id":"3",
              "name":"Игорь Гостеприимов",
              "role":"Управляющий",
              "description":"Профессионал ресторанного бизнеса, обеспечивающий безупречный сервис для каждого гостя.",
              "imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763732665975-5goe462a.jpg",
              "imageAlt":"Управляющий Игорь Гостеприимов",
              "socialLinks":[
                {"icon":"Mail","url":"mailto:igor@okun-restaurant.ru"},
                {"icon":"Phone","url":"tel:+7495123456"}
              ]
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