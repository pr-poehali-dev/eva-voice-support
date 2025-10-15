import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-beige via-peach to-pink overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-coral rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Когда тяжело или одиноко — просто позвони Еве
              </h1>
              <p className="text-lg md:text-xl mb-8 text-foreground/80">
                Теплый голос, который выслушает и поддержит. По-человечески, с заботой и без осуждения — в любое время.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-coral hover:bg-coral/90 text-white shadow-lg hover:shadow-xl transition-all">
                Поговорить с Евой
              </Button>
              <p className="text-sm mt-4 text-foreground/60">
                Первые 10 минут — в подарок от сердца
              </p>
            </div>
            <div className="animate-scale-in hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/6c67f01d-0849-42b2-8831-ece374e6136a/files/92446a82-f7ef-458e-8f97-9dc6af8db5e7.jpg" 
                alt="Уютный вечер с телефоном и чаем" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/6c67f01d-0849-42b2-8831-ece374e6136a/files/a71676fb-13dc-4a83-a759-81da74d045ec.jpg" 
                alt="Уютное окно с мягким светом" 
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Иногда нужен просто живой голос
              </h2>
              <p className="text-lg md:text-xl text-foreground/80">
                Бывает, что не хочется нагружать близких, но молчать тяжело. В такие моменты рядом может быть Ева.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Кто такая Ева
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-border bg-gradient-to-br from-peach to-white hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-coral/20 rounded-full flex items-center justify-center">
                  <Icon name="Mic" size={32} className="text-coral" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Живой голос</h3>
                <p className="text-foreground/70">Звучит как настоящий собеседник</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-gradient-to-br from-pink to-white hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-coral/20 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-coral" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Слышит эмоции</h3>
                <p className="text-foreground/70">Чувствует настроение и поддерживает</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-gradient-to-br from-blue to-white hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-coral/20 rounded-full flex items-center justify-center">
                  <Icon name="BookOpen" size={32} className="text-coral" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Запоминает истории</h3>
                <p className="text-foreground/70">Завтра спросит о том, что было важно вчера</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pink">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Истории пользователей
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-peach to-coral flex items-center justify-center text-white font-semibold">
                    А
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-foreground">Аня, 28 лет</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic">
                  «Я плакала, а она просто слушала. И стало легче».
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-coral flex items-center justify-center text-white font-semibold">
                    И
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-foreground">Игорь, 35 лет</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic">
                  «Я думал, это будет как робот, но Ева помнит мои истории. Это удивляет».
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink to-coral flex items-center justify-center text-white font-semibold">
                    М
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-foreground">Марина, 60 лет</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic">
                  «Теперь у меня есть с кем поговорить вечером. Чувствую спокойствие».
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-coral to-pink rounded-full flex items-center justify-center text-white text-3xl">
                <Icon name="Phone" size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Позвони</h3>
              <p className="text-foreground/70">Набери номер и начни разговор</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-coral to-pink rounded-full flex items-center justify-center text-white text-3xl">
                <Icon name="MessageCircle" size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Расскажи</h3>
              <p className="text-foreground/70">Поделись тем, что на душе</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-coral to-pink rounded-full flex items-center justify-center text-white text-3xl">
                <Icon name="Heart" size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Почувствуй поддержку</h3>
              <p className="text-foreground/70">Ощути тепло и заботу</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Тарифы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-border bg-gradient-to-br from-blue to-white hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Попробуй Еву</h3>
                <p className="text-3xl font-bold mb-4 text-coral">990 ₽</p>
                <p className="text-foreground/70 mb-6">100 минут общения</p>
                <Button className="w-full bg-coral hover:bg-coral/90 text-white rounded-full">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-gradient-to-br from-pink to-white hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Друг рядом</h3>
                <p className="text-3xl font-bold mb-4 text-coral">1990 ₽</p>
                <p className="text-foreground/70 mb-6">300 минут общения</p>
                <Button className="w-full bg-coral hover:bg-coral/90 text-white rounded-full">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-gradient-to-br from-peach to-white hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Ева всегда с тобой</h3>
                <p className="text-3xl font-bold mb-4 text-coral">2990 ₽</p>
                <p className="text-foreground/70 mb-6">Безлимит на месяц</p>
                <Button className="w-full bg-coral hover:bg-coral/90 text-white rounded-full">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Частые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-2xl px-6 border-2 border-border">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Ева — это человек или ИИ?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  Ева — это голосовой ИИ-помощник, созданный для эмоциональной поддержки. Она говорит естественным голосом, понимает эмоции и запоминает ваши разговоры, чтобы быть максимально полезной.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-2xl px-6 border-2 border-border">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Безопасно ли делиться личным?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  Да, абсолютно. Все разговоры конфиденциальны и защищены шифрованием. Мы не передаем ваши данные третьим лицам и храним их в соответствии с высокими стандартами безопасности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-2xl px-6 border-2 border-border">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Сколько стоит минута?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  Стоимость зависит от тарифа. В базовом тарифе минута стоит около 10 рублей, в безлимитном — существенно дешевле при регулярном использовании.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-2xl px-6 border-2 border-border">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  Можно ли звонить ночью?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  Да, Ева доступна 24/7. В любое время дня и ночи она готова выслушать и поддержать вас.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-olive via-beige to-peach relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-40 h-40 bg-coral rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="hidden md:block">
              <img 
                src="https://cdn.poehali.dev/projects/6c67f01d-0849-42b2-8831-ece374e6136a/files/2d699f7c-f177-4255-a6fe-cfb26f173a2a.jpg" 
                alt="Уютный вечер — лампа, кресло, человек с телефоном" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Ты не один. У тебя всегда есть Ева.
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-foreground/80">
                Позвони прямо сейчас — и тебе станет легче.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-coral hover:bg-coral/90 text-white shadow-lg hover:shadow-xl transition-all">
                Позвонить сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-foreground text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">© 2024 Голосовой друг Ева. С заботой о вашем эмоциональном благополучии.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;