# CoddyCamp React amaliy vazifalari

Vite + React. Darslar bitta loyihada, yuqoridagi tanlov orqali ochiladi.

## Ishga tushirish

```sh
npm install
npm run dev -- --port 5173
```

Brauzer: http://localhost:5173. Production tekshiruvi: `npm run build`.

## Darslar

| Dars | Ochish | Kod |
|---|---|---|
| 3: birinchi komponent | `/?lesson=components` | `App.jsx`, `GameCard.jsx`: uch xil nom, emoji, reyting; uchta alohida chaqiruv |
| 4: useState/useEffect | `/?lesson=likes` | `LikesLesson.jsx`: like, boolean favorite, title `[likes]`, console `[]` |
| 6: Props | `/?lesson=props` | `games.js`, `App.jsx`: 7 o‘yin, map, key, genre props |
| 7: CRUD | `/?lesson=crud` | `CrudLesson.jsx`: qo‘shish, tahrirlash, Top, o‘chirish, bo‘sh holat |
| 8: fetch | `/?lesson=users` | `UsersLesson.jsx`: 10 haqiqiy foydalanuvchi, yuklanish, alohida `/userz` diagnostikasi |
| 9: POST/PUT/DELETE | `/?lesson=posts` | `PostsLesson.jsx`: haqiqiy so‘rovlar va har bir javob |
| 11: Router | `/?lesson=favorites` | `FavoritesLesson.jsx`: `/`, `/game/:id`, `/favorites`; state yuqorida |
| 12: AvtoIjara | `/?lesson=cars` | `CarsLesson.jsx`: `/add`, forma, validatsiya, spread, navigate, nusxada sort |
| 13: GameClub | `/?lesson=club` | `ClubLesson.jsx`: hero va tadbirlar; EventCard + map + props |

Routing darslarida avval darsni tanlang, keyin uning ichidagi Link orqali sahifalarni almashtiring. To‘g‘ridan-to‘g‘ri ochishda queryni saqlash mumkin: `/favorites?lesson=favorites`, `/add?lesson=cars`. State sahifa ichida navigatsiya qilinganda saqlanadi; brauzerni yangilash uni boshlang‘ich holatga qaytaradi.

## 12-dars: AI uchun aniq promptlar (Nima + Qanday + Qayerda)

Kod AI yordamida ushbu talablarga muvofiq tayyorlandi. Takrorlash va rivojlantirish uchun promptlar:

1. **Nima:** AvtoIjara uchun yangi mashina qo‘shish. **Qanday:** nom, kunlik narx va yil uchun controlled input; bo‘sh maydon va noto‘g‘ri sonlarni tekshir; `setCars([...cars, yangi])`, keyin `navigate('/')`. **Qayerda:** `CarsLesson.jsx` dagi `AddCar` va `/add` Route.
2. **Nima:** katalogda narx bo‘yicha saralash. **Qanday:** ikki yo‘nalishli select; `[...cars].sort(...)` bilan nusxani sarala, state massivini o‘zgartirma. **Qayerda:** `CarsLesson.jsx` dagi `Catalog`.

## 13-dars: saytni bo‘laklash

Sayt: **GameClub** — o‘yin klubi uchun kichik sayt.

Rejalashtirilgan sahifalar: Bosh sahifa, Barcha tadbirlar, Klub haqida, Aloqa.

Bosh sahifa bo‘limlari: navigatsiya, hero, yaqinlashayotgan tadbirlar, klub afzalliklari, aloqa/footer. Ushbu topshiriqda **hero** va **tadbirlar** to‘liq qurilgan.

### Prompt 1

**Nima:** GameClub bosh sahifasi uchun hero. **Qanday:** to‘q fon, aniq katta sarlavha, bitta qisqa tavsif va tadbirlar bo‘limiga olib boradigan ishlaydigan CTA; mobil ekranlarga mos. **Qayerda:** `ClubLesson.jsx` dagi birinchi section, uslublar `style.css` da.

### Prompt 2

**Nima:** yaqinlashayotgan uchta tadbir bo‘limi. **Qanday:** ma’lumotlarni massivda saqla, alohida `EventCard` komponentiga emoji, sarlavha, sana, matnni props bilan uzat, `map` va barqaror `key` ishlat. **Qayerda:** `ClubLesson.jsx` dagi `#events` section.

### Tekshiruv / tuzatish

CTA faqat bezak bo‘lib qolmasligi tekshirildi: `href="#events"` tegishli bo‘limga olib boradi. Unutilgan talab topilsa ishlatiladigan tuzatuvchi prompt: “GameClub kartochkalarini qo‘lda takrorlama; `ClubLesson.jsx` da `EventCard` va `events.map` orqali chiqargin, mavjud hero va CTA ishlashini saqla.” Bu oxirgi jumla tayyor tuzatish namunasi; mavjud kodda kartochkalar allaqachon map orqali chiqadi.

## Eslatmalar

- JSONPlaceholder sinov API: yozish amallari haqiqiy javob qaytaradi, ammo doimiy saqlamaydi.
- 404 diagnostikasi asosiy `/users` manzilini buzmaydi: alohida tugma bilan `/userz` so‘rovi yuboriladi, HTTP holati va console xabari ko‘rsatiladi.
- React StrictMode mount demonstratsiyasida ikki martalik development log bermasligi uchun yoqilmagan.
- Kodda `className`, barqaror ID, functional state update va o‘zgarmas massiv amallari ishlatiladi.
