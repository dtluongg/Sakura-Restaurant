// --- Dữ liệu chung & Liên hệ ---
export const contactData = {
  restaurantName: "Sakura Restaurant",
  address: "Clayallee 352\n14169 Berlin - Zehlendorf",
  phone: "030 8129 4647",
  email: "info@sakuraberlin.de", // Giả định
  website: "www.sakuraberlin.de",
  openHours: "Mo.-So.: 12-22 Uhr",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.14856002446!2d13.26194481571477!3d52.44390197980007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85a4a5b4f2c5d%3A0x8e8071a1c97a3120!2sClayallee%20352%2C%2014169%20Berlin%2C%20Germany!5e0!3m2!1sen!2s!4v1663000000000!5m2!1sen!2s", // Link map tới địa chỉ thật
};

export const navLinks = [
    { id: 'home', title: 'Startseite', to: 'hero' },
    { id: 'about', title: 'Über Uns', to: 'about' },
    { id: 'menu', title: 'Speisekarte', to: 'menu' },
    { id: 'specials', title: 'Sonderangebote', to: 'specials' },
    // { id: 'events', title: 'Veranstaltungen', to: 'events' },
    { id: 'gallery', title: 'Galerie', to: 'gallery' },
    { id: 'contact', title: 'Kontakt', to: 'contact' },
];

// hero data
export const heroData = {
  title: "Herzlich Willkommen!", // "Chào mừng nồng nhiệt!"
  subtitle: "Authentische japanische Atmosphäre und köstliches Essen.", // "Không khí Nhật Bản đích thực và những món ăn ngon tuyệt."
  button1: "SPEISEKARTE", // "THỰC ĐƠN"
  button2: "TISCH RESERVIEREN", // "ĐẶT BÀN"
};

// ... sau này chúng ta sẽ thêm menuData, aboutData ở đây
export const aboutData = {
  heading: "Willkommen im japanischen Restaurant Sakura!", // "Chào mừng đến với nhà hàng Nhật Bản Sakura!"
  paragraph1: "Wir freuen uns auf Ihren Besuch. Unser Team bemüht sich um eine nette, authentische Atmosphäre und stellt sich als Ziel Sie mit leckerem Essen zu verwöhnen.", // "Chúng tôi rất mong chờ chuyến thăm của bạn. Đội ngũ của chúng tôi luôn nỗ lực tạo ra một không khí thân thiện, đích thực và đặt mục tiêu verwöhnen bạn với những món ăn ngon."
  listItems: [
    "Frische Zutaten von höchster Qualität.", // "Nguyên liệu tươi ngon chất lượng cao nhất."
    "Traditionelle Rezepte mit moderner Note.", // "Công thức truyền thống với nét chấm phá hiện đại."
    "Einzigartiges Ambiente für jeden Anlass.", // "Không gian độc đáo cho mọi dịp."
  ],
};

// Dữ liệu cho section "Why Choose Us"
import whyUsImage1 from '../assets/whyUs/whyUs-1.jpg';
import whyUsImage2 from '../assets/whyUs/whyUs-2.jpg';
import whyUsImage3 from '../assets/whyUs/whyUs-3.jpg';

export const whyUsData = {
  superTitle: "UNSERE PHILOSOPHIE", // "TRIẾT LÝ CỦA CHÚNG TÔI"
  title: "Was Uns Besonders Macht", // "Điều Gì Làm Nên Sự Đặc Biệt"
  cards: [
    { number: "01", title: "Frische & Qualität", description: "Wir verwenden nur die besten und frischesten Zutaten für unsere Gerichte.", image: whyUsImage1 }, // "Tươi ngon & Chất lượng"
    { number: "02", title: "Authentizität", description: "Erleben Sie den echten Geschmack Japans durch unsere traditionell zubereiteten Speisen.", image: whyUsImage2 }, // "Tính xác thực"
    { number: "03", title: "Gastfreundschaft", description: "Fühlen Sie sich bei uns wie zu Hause. Ihre Zufriedenheit ist unser höchstes Ziel.", image: whyUsImage3 }, // "Lòng hiếu khách"
  ]
};

// Menu Data:
// import image món ăn
import lobsterBisque from '../assets/menu/lobster-bisque.jpg';
import crabCake from '../assets/menu/crab-cake.jpg';
import tuscanGrilled from '../assets/menu/tuscan-grilled.jpg';
import greekSalad from '../assets/menu/greek-salad.jpg';
import breadBarrel from '../assets/menu/bread-barrel.jpg';
import caesarSelections from '../assets/menu/caesar-selections.jpg';
import mozzarellaStick from '../assets/menu/mozzarella-stick.jpg';
import spinachSalad from '../assets/menu/spinach-salad.jpg';
export const menuData = {
  superTitle: "SPEISEKARTE", // "THỰC ĐƠN"
  title: "Entdecken Sie unsere Vielfalt", // "Khám phá sự đa dạng của chúng tôi"
  filters: ["All", "Vorspeisen", "Sushi Menü", "Warme Gerichte", "Getränke"],
  items: [
    { id: 1, image: lobsterBisque, title: "Kimchi (011)", description: "Eingelegter Chinakohl (scharf)", price: "4,50 €", category: "Vorspeisen" },
    { id: 2, image: crabCake, title: "Miso Suppe (023)", description: "Sojapastensuppe mit Tofu und Seetang", price: "4,20 €", category: "Vorspeisen" },
    { id: 3, image: tuscanGrilled, title: "Sake Nigiri (031)", description: "Handgeformte Fischhäppchen (2 Stück)", price: "4,20 €", category: "Sushi Menü" },
    { id: 4, image: greekSalad, title: "California Ura Maki Kaviar (080)", description: "Mit Kani Kama und Avocado, außen mit Masago", price: "7,00 €", category: "Sushi Menü" },
    { id: 5, image: breadBarrel, title: "Hühnerspieß Menü (127)", description: "Gegrillter Hühnerspieß auf Reis, dazu Miso Suppe, Kimchi", price: "11,70 €", category: "Warme Gerichte" },
    { id: 6, image: caesarSelections, title: "Saigon Calpico (230)", description: "Frische Limetten, Calpico (jap. Trinkjoghurt), Minze", price: "5,20 €", category: "Getränke" },
    // ... Bạn có thể thêm các món khác vào đây
  ],
};

// Specials Data:
import specialDish1 from '../assets/specials/special-1.jpg';
import specialDish2 from '../assets/specials/special-2.jpg';
import specialDish3 from '../assets/specials/special-3.jpg';
export const specialsData = {
  superTitle: "ANGEBOTE",
  title: "Entdecken Sie unsere Angebote",
  items: [
    { tabTitle: "Menü A (01)", contentTitle: "Sake Maki, Sake, Butterfisch", contentP1: "Ein klassisches Set für Liebhaber von frischem Fisch.", contentP2: "Inklusive Misosuppe. Nur gültig von Montag bis Freitag, 12-15 Uhr.", image: specialDish1 },
    { tabTitle: "Menü B (02)", contentTitle: "Sake Maki, Avocado Maki, Sake, Maguro", contentP1: "Eine ausgewogene Kombination aus Maki und Nigiri.", contentP2: "Inklusive Misosuppe. Nur gültig von Montag bis Freitag, 12-15 Uhr.", image: specialDish2 },
    { tabTitle: "Menü für 2 (09)", contentTitle: "California Maki, Ura Maki Kaviar...", contentP1: "Ein reichhaltiges Menü, perfekt zum Teilen.", contentP2: "Inklusive 2 Misosuppen. Nur gültig von Montag bis Freitag, 12-15 Uhr.", image: specialDish3},
    // ... Thêm các tab khác nếu muốn
  ],
};

// data events
import eventsBg from '../assets/events/events-bg.jpg';
import birthdayParty from '../assets/events/event-birthday.jpg';
import privateParty from '../assets/events/event-private.jpg';
import customParty from '../assets/events/event-custom.jpg';
export const eventsData = {
  superTitle: "SERVICE",
  title: "Lieferung & Partyservice", // "Giao hàng & Dịch vụ tiệc"
  background: eventsBg,
  slides: [
    { image: customParty, title: "Partyservice ab 100€", price: "", description: "Planen Sie eine Feier? Wir stellen Ihnen gerne individuelle Sushi-Platten und Menüs zusammen.", listItems: ["Für Geburtstage, Firmenfeiern und mehr.", "Frische und Qualität garantiert.", "Bitte bestellen Sie 3 Tage vorher."] },
    { image: birthdayParty, title: "Geburtstagsfeiern", price: "Individuell", description: "Feiern Sie Ihren besonderen Tag bei uns im Restaurant. Wir bieten spezielle Menüs und eine tolle Atmosphäre.", listItems: ["Platz für kleine und große Gruppen.", "Dekorationsservice auf Anfrage.", "Kontaktieren Sie uns für ein Angebot."] },
    { image: privateParty, title: "Private Feiern", price: "Individuell", description: "Mieten Sie einen Teil unseres Restaurants für Ihre private Veranstaltung. Genießen Sie Exklusivität und erstklassigen Service.", listItems: ["Diskreter und professioneller Service.", "Individuelle Menüabsprache.", "Ideal für Geschäftsessen oder Familientreffen."] },
  ],
};

// data gallerys
import gallery1 from '../assets/gallery/gallery-1.jpg';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import gallery4 from '../assets/gallery/gallery-4.jpg';
import gallery5 from '../assets/gallery/gallery-5.jpg';
import gallery6 from '../assets/gallery/gallery-6.jpg';
import gallery7 from '../assets/gallery/gallery-7.jpg';
import gallery8 from '../assets/gallery/gallery-8.jpg';

export const galleryData = {
  superTitle: "GALLERY",
  title: "Einblicke in unser Restaurant", // "Một vài góc nhìn về nhà hàng của chúng tôi"
  images: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8],
};

// footer Data:
export const footerData = {
  usefulLinks: [
    { title: "Startseite", href: "#" },
    { title: "Über uns", href: "#about" }, // "Về chúng tôi"
    { title: "Speisekarte", href: "#menu" }, // "Thực đơn"
    { title: "AGB", href: "#" }, // "Điều khoản dịch vụ"
    { title: "Datenschutz", href: "#" }, // "Chính sách bảo mật"
  ],
  ourServices: [
    { title: "Partyservice", href: "#events" },
    { title: "Lieferung", href: "#" }, // Giao hàng
    { title: "Tischreservierung", href: "#contact" }, // Đặt bàn
    { title: "Mittagsmenü", href: "#specials" },
  ],
  newsletter: {
    title: "Unser Newsletter",
    description: "Abonnieren Sie unseren Newsletter für die neuesten Nachrichten und Angebote!", // "Đăng ký nhận bản tin của chúng tôi để cập nhật tin tức và ưu đãi mới nhất!"
  },
  copyright: `© Copyright ${new Date().getFullYear()} Sakura Restaurant. All Rights Reserved`,
  credits: "Designed by BootstrapMade, DTL & Gemini",
};