export const menuDataList = {
filters: [
  { name: "All", subcategories: [] }, // Bộ lọc "All" không có danh mục con
  { name: "Vorspeisen", subcategories: ["All", "Vorspeisen"] },
  { name: "Salate", subcategories: ["All", "Salate"] },
  { name: "Suppen", subcategories: ["All", "Suppen"] },
  {
    name: "Sushi",
    // Tự động lấy tất cả các tên danh mục con từ trong 'items'
    subcategories: [
      "All",
      "Mittagsmenü (Mo-Fr, 12-15 Uhr)",
      "Nigiri Sushi (2 Stück)",
      "Temaki (2 Stück)",
      "Nori Maki (12 Stück)",
      "Ura Maki (Inside-Out Rolle - 8 Stück)",
      "Sakura Spezial Rollen",
      "Sashimi",
      "Sakura Kombination Menü",
      "Sushi - Tempura Rolle"
    ]
  },
  {
    name: "Warme Gerichte",
    subcategories: [
      "All",
      "Menü des Hauses",
      "Asiatische warme Gerichte",
      "Spezial warmes Kűches"
    ]
  },
  { name: "Desserts", subcategories: ["All", "Desserts"] },
  { name: "Extras", subcategories: ["All", "Extras"] },
  {
    name: "Getränke",
    subcategories: [
      "All",
      "Hausgemachte frische Limonade",
      "Alkoholfreie Getränke kalt",
      "Alkoholfreie Getränke warm",
      "Bier",
      "Offene Weine",
      "Flaschen Weine",
      "Schaumwein",
      "Japanische alkoholische Getränke"
    ]
  }
],
  "menu": [
    {
      "categoryImage":null,
      "category": "Vorspeisen",
      "subcategories": [
        {
          "name": "Vorspeisen",
          "items": [
            { "id": "011", "image": null, "name": "Kimchi", "description": "eingelegter Chinakohl (scharf)", "price": "4,50 €" },
            { "id": "012", "image": null, "name": "Edamame", "description": "Salzige, gekochte japanische sojabohnen", "price": "4,30 €" },
            { "id": "013", "image": null, "name": "Yaki Tori", "description": "Hühnerfleischspieße mit Teriyaki-Sauce (2 St)", "price": "4,20 €" },
            { "id": "014", "image": null, "name": "Age Schumei", "description": "gebackene Krabbenteigtaschen (5 St)", "price": "5,10 €" },
            { "id": "015", "image": null, "name": "Nem Cuốn Sommerrolle", "description": "Frisches Reispapier mit verschiedenen Kräutern, frischen Salat und a) Garnelen 5.50€ - b) Hühnerfleisch 4,70€ - c) Auf Wunsch auch mit Tofu 4,50€ d) Oder Avocado 4,60€ (Wegan) (2 St.)", "price": "ab 4,50 €" },
            { "id": "016", "image": null, "name": "Harumaki", "description": "Mini Frühlingsrolle (6 st.)", "price": "4,20 €" },
            { "id": "017", "image": null, "name": "Nem ran", "description": "Frühlingsrolle (3 St.), mit Schweinefleisch und Fischsoße", "price": "4,90 €" },
            { "id": "017A", "image": null, "name": "Gyuza 5 St.", "description": "Frittierte Teigtaschen mit Hühnerfleisch oder nur Gemüse (Vegan)", "price": "5,50 €" },
            { "id": "018", "image": null, "name": "Gebackene Wantan", "description": "asiatische Teigwaren (5 St.)", "price": "4,50 €" },
            { "id": "018A", "image": null, "name": "Gebackene Tempura Garnele (2.St)", "description": "mit süßer Chili Soße", "price": "5,30 €" }
          ]
        }
      ]
    },
    {
      "categoryImage":null,
      "category": "Salate",
      "subcategories": [
        {
          "name": "Salate",
          "items": [
            { "id": "019", "image": null, "name": "Kaiso Salat", "description": "gemischter Salat mit Seetang, Surimi(7) und jap. Sesamdressing", "price": "7,90 €" },
            { "id": "020", "image": null, "name": "Sakura Salat", "description": "gemischter Salat mit geb. Hühnerbrust und Sakura Soße", "price": "7,90 €" },
            { "id": "021", "image": null, "name": "Chuka", "description": "jap. Eingelegter Seetang mit Gurken", "price": "4,40 €" },
            { "id": "022", "image": null, "name": "Vegi. Salat", "description": "Gemischter Salat mit Avocados und eingelegtem Seetang", "price": "7,20 €" },
            { "id": "022A", "image": null, "name": "Lachstatar", "description": "mit Avovado und Spezial Sauce", "price": "12,90 €" },
            { "id": "022B", "image": null, "name": "Rindfleisch Salat", "description": "mit Glassnudeln und gemischter Gemüse", "price": "11,50 €" }
          ]
        }
      ]
    },
    {
      "categoryImage":null,
      "category": "Suppen",
      "subcategories": [
        {
          "name": "Suppen",
          "items": [
            { "id": "023", "image": null, "name": "Miso Suppe", "description": "jap. Sojapastensuppe mit Tofu und Seetang und Lauchzwiebeln", "price": "4,20 €" },
            { "id": "024", "image": null, "name": "Miso Sake", "description": "Sojapastensuppe mit Lachs und Seetang und Lauchzwiebeln", "price": "4,80 €" },
            { "id": "025", "image": null, "name": "Wantan Suppe", "description": "asiatische Teigwaren-Suppe mit Gemüse", "price": "4,80 €" },
            { "id": "026", "image": null, "name": "Tori-Su Suppe", "description": "(oder mit Lachs) Würzig-saure Hühnefleischsuppe mit frischen Champignons, Tomaten, asiat. Wurzen und Koriander", "price": "4,80 €" },
            { "id": "027", "image": null, "name": "Tori-Kokos Suppe", "description": "(oder mit Lachs) Hühnefleischsuppe mit Kokosmilch, frischen Champignons, Tomaten, asiat. Wurzen und Koriander.", "price": "4,80 €" },
            { "id": "028", "image": null, "name": "Seafood Suppe", "description": "Würzig-saure Meeresfrüchten Suppe mit Tomaten, Garnelen, Paprika, asiat. Wurzeln und Koriander.", "price": "5,40 €" },
            { "id": "029", "image": null, "name": "Buddha Suppe", "description": "Tofusuppe mit Kokosmilch, frischen Champignons, Tomaten, asiat. Wurzeln und Koriander", "price": "4,50 €" },
            { "id": "030", "image": null, "name": "Saure-scharf Suppe", "description": "mit Entefleish und Gemüse", "price": "4,20 €" }
          ]
        }
      ]
    },
    {
      "categoryImage":null,
      "category": "Sushi",
      "subcategories": [
        {
          "name": "Mittagsmenü (Mo-Fr, 12-15 Uhr)",
          "items": [
            { "id": "01", "image": null, "name": "Menü A", "description": "Sake Maki, Sake Butterfisch, und Kani Kama\" und Tamago Nigiri", "price": "11,40 €" },
            { "id": "02", "image": null, "name": "Menü B", "description": "Sake Maki, Avocado Maki, Sake, Maguro und Ebi Nigiri", "price": "12,40 €" },
            { "id": "03", "image": null, "name": "Menü C", "description": "4 St.Ura Maki Kaviar mit Lachs, Sake, Maguro, Ebi und Kani Kama\" Nigiri", "price": "12,40 €" },
            { "id": "04", "image": null, "name": "Menü D", "description": "4 St.Ura Maki Kaviar, 4 St. Ura Maki Sesam, Ebi, Sake und Maguro Nigiri", "price": "12,40 €" },
            { "id": "05", "image": null, "name": "Menü E", "description": "4 St. Sake Ura Maki, Sake Avocado Maki, 2 St. Sake und 2 St. Maguro Nigiri", "price": "18,00 €" },
            { "id": "06", "image": null, "name": "Menü F", "description": "Vegan Green Rice Ura Maki, Avocado Maki und Kappa Maki.", "price": "13,20 €" },
            { "id": "07", "image": null, "name": "Menü G", "description": "4 St. Sake Ura Ten Maki, 4 St. Unagi Ten Ura Maki", "price": "13,00 €" },
            { "id": "08", "image": null, "name": "Menü H", "description": "4 St. New York Rolle, 4 St. Ura Maki Kaviar Sake, Butterfisch und Maguro Nigiri", "price": "15,40 €" },
            { "id": "09", "image": null, "name": "Menü I für 2 Personen", "description": "California Maki, Ura Maki Kaviar, Sake Ura Maki, Unagi Ura Sesam, 2 Sake, 2 Ebi und 2 Maguro Nigiri", "price": "39,20 €" },
            { "id": "10", "image": null, "name": "Menü J", "description": "Sake und Maguro Sashimi frischer Lachs und Thunfisch in Scheinben (10.St)", "price": "20,90 €" }
          ]
        },
        {
          "name": "Nigiri Sushi (2 Stück)",
          "items": [
            { "id": "031", "image": null, "name": "Sake", "description": "Lachs", "price": "4,20 €" },
            { "id": "032", "image": null, "name": "Maguro", "description": "Thunfisch", "price": "4,60 €" },
            { "id": "033", "image": null, "name": "Ebi", "description": "Großgarnele", "price": "4,20 €" },
            { "id": "034", "image": null, "name": "Ama Ebi", "description": "süße Grönlandgarnele", "price": "3,50 €" },
            { "id": "035", "image": null, "name": "Kani", "description": "Krebsfleisch", "price": "4,70 €" },
            { "id": "036", "image": null, "name": "Osinko", "description": "eingelegter jap. Rettich", "price": "3,30 €" },
            { "id": "037", "image": null, "name": "Ikura", "description": "Lachsrogen", "price": "5,50 €" },
            { "id": "038", "image": null, "name": "Unagi", "description": "gegrillter Aal", "price": "5,20 €" },
            { "id": "039", "image": null, "name": "Tai", "description": "Tilapia-Barsch", "price": "3,70 €" },
            { "id": "040", "image": null, "name": "Hotate Gai", "description": "Jakobsmuscheln", "price": "5,00 €" },
            { "id": "041", "image": null, "name": "Hokki Gai", "description": "Hornmuscheln", "price": "5,00 €" },
            { "id": "042", "image": null, "name": "Ika", "description": "Tintenfisch", "price": "3,30 €" },
            { "id": "043", "image": null, "name": "Tako", "description": "Oktopus", "price": "3,50 €" },
            { "id": "044", "image": null, "name": "Tamago", "description": "jap. Eierkuchen", "price": "3,30 €" },
            { "id": "045", "image": null, "name": "Kami Kama", "description": "Krebsfleischimitat", "price": "3,20 €" },
            { "id": "046", "image": null, "name": "Inari", "description": "Sojabohnentasche (süß)", "price": "3,50 €" },
            { "id": "047", "image": null, "name": "Mutzu", "description": "Butterfisch", "price": "3,70 €" },
            { "id": "048", "image": null, "name": "Shitake", "description": "jap. Eingelegter Pilz", "price": "3,30 €" },
            { "id": "049A", "image": null, "name": "Saba", "description": "Makrele", "price": "3,50 €" },
            { "id": "049B", "image": null, "name": "Avocado", "description": "", "price": "3,50 €" }
          ]
        },
        {
          "name": "Temaki (2 Stück)",
          "items": [
            { "id": "050", "image": null, "name": "California Temaki", "description": "mit Kani Kama und Avocado", "price": "6,60 €" },
            { "id": "051", "image": null, "name": "Sake-Avocado Temaki", "description": "mit Lachs und Avocado", "price": "7,00 €" },
            { "id": "052", "image": null, "name": "Ebi Avocado Temaki", "description": "mit Großgarnele und Avocado", "price": "7,40 €" },
            { "id": "053", "image": null, "name": "Maguro Kimchi Temaki", "description": "mit Thunfisch und Kimchi Soße (scharf)", "price": "7,90 €" },
            { "id": "054", "image": null, "name": "Unagi Temaki", "description": "mit Unagi und Avocado", "price": "8,10 €" },
            { "id": "055", "image": null, "name": "Salmon Skin Temaki", "description": "mit Lachshaut und Avocado", "price": "6,50 €" }
          ]
        },
        {
          "name": "Nori Maki (12 Stück)",
          "items": [
            { "id": "061", "image": null, "name": "Kappa Maki", "description": "mit Gurken", "price": "5,90 €" },
            { "id": "062", "image": null, "name": "Osinko Maki", "description": "mit eingelegtem Rettich", "price": "5,90 €" },
            { "id": "063", "image": null, "name": "Avocado Maki", "description": "mit Avocado", "price": "6,90 €" },
            { "id": "064", "image": null, "name": "Kanpyo Maki", "description": "mit Kürbisstreifen", "price": "5,90 €" },
            { "id": "065", "image": null, "name": "Shitake Maki", "description": "mit jap. Eingelegten Pilzen", "price": "5,90 €" },
            { "id": "066", "image": null, "name": "Tekka Maki", "description": "mit Thunfisch", "price": "7,50 €" },
            { "id": "067", "image": null, "name": "Sake Maki", "description": "mit Lachs", "price": "7,40 €" },
            { "id": "068", "image": null, "name": "Ebi Maki", "description": "mit Garnele", "price": "7,40 €" },
            { "id": "069", "image": null, "name": "Kani Maki", "description": "mit Krebsfleischimitat", "price": "6,60 €" },
            { "id": "070", "image": null, "name": "Unagi Maki", "description": "mit Aal", "price": "7,70 €" },
            { "id": "071", "image": null, "name": "Tamago Maki", "description": "Mit jap. Eierkuchen", "price": "6,60 €" },
            { "id": "072", "image": null, "name": "Sake Avocado Maki", "description": "mit Lachs und Avocado", "price": "7,40 €" },
            { "id": "073", "image": null, "name": "California Maki", "description": "mit Kani Kama und Avocado", "price": "7,00 €" },
            { "id": "074", "image": null, "name": "Salmon Skin Maki", "description": "mit gegrillter Lachshaut und Avocado", "price": "7,20 €" },
            { "id": "075", "image": null, "name": "Futo Maki (8St.)", "description": "große Rolle mit verschiedenen Füllungen", "price": "9,90 €" },
            { "id": "076", "image": null, "name": "Ebi Ten Maki (8St.)", "description": "mit gebackenen Großgarnelen und Avocado", "price": "10,90 €" }
          ]
        },
        {
          "name": "Ura Maki (Inside-Out Rolle - 8 Stück)",
          "items": [
            { "id": "080", "image": null, "name": "California Ura Maki Kaviar", "description": "mit Kani Kama und Avocado außen mit Masago (auf Wunsch mit Mayonnaise)", "price": "7,00 €" },
            { "id": "081", "image": null, "name": "California Ura Maki Sesam", "description": "mit Kani Kama und Avocado außen Sesam (auf Wunsch mit Mayonnaise )", "price": "6,00 €" },
            { "id": "082", "image": null, "name": "Sakura Ura Maki", "description": "mit Lachs und Acocado außen Kaviar", "price": "7,80 €" },
            { "id": "083", "image": null, "name": "Unagi Ura Maki Kaviar", "description": "mit Aal und Avocado, außen Kaviar", "price": "8,80" },
            { "id": "084", "image": null, "name": "Unagi Ura Maki Sesam", "description": "mit Aal und Avocado, außen Sesam", "price": "8,40" },
            { "id": "085", "image": null, "name": "Maguro Kimchi Rolle", "description": "mit Thunfisch, Kimchisoße und Gurke, außen Kaviar", "price": "8,50" },
            { "id": "086", "image": null, "name": "Roma Ura Maki", "description": "mit Basilikum, Lachs, Mozzarella und Avocado, frischem Gemüse außen Kaviar", "price": "8,50" },
            { "id": "087", "image": null, "name": "Yasai Ura Maki", "description": "mit Mozzarella, Basilikum und Avocado frischem Gemüse außen Sesam", "price": "7,50" },
            { "id": "088", "image": null, "name": "Ebi Spicy Ura Maki", "description": "mit gekochten und gekochten Garnelen und Chilisoße, (scharf), außen Kaviar", "price": "7,90" },
            { "id": "089", "image": null, "name": "Spicy Tuna Ura Maki", "description": "mit Gekochtem Thunfisch, Chili, Lauchzwiebeln und Mayonnaise, außen Kaviar", "price": "8,00" }
          ]
        },
        {
          "name": "Sakura Spezial Rollen",
          "items": [
            { "id": "090", "image": null, "name": "Sake Ura Maki", "description": "Ura In-Out Rolle mit Lachs, Avocado und Kaviar (d,o)", "price": { "4 St.": "6,90 €", "8 St.": "13,40 €" } },
            { "id": "092", "image": null, "name": "Sake Ten Ura Maki", "description": "mit gebackener Garnele, außen mit Kaviar und Lachs (a,b,d,f,o)", "price": { "4 St.": "8,00 €", "8 St.": "14,90 €" } },
            { "id": "094", "image": null, "name": "Ebi Ten Ura Maki", "description": "mit gebackener Garnele und Avocado, Gurken und frischkäse, außen mit Kaviar und Sesam (a,b,f,k,o)", "price": { "4 St.": "6,80 €", "8 St.": "12,90 €" } },
            { "id": "096", "image": null, "name": "Tori Maki", "description": "Seetangrolle mit gegrilltem Hühnerfleisch, Gurken und Röstzwiebeln (c,f)", "price": { "4 St.": "5,20 €", "8 St.": "9,50 €" } },
            { "id": "098", "image": null, "name": "Midori Rolle", "description": "Rolle mit Thunfisch, Süße Chili-Soße, Lauch, Gurken, außen mit Wasabi Kaviar (d,f,k,o)", "price": { "4 St.": "6,20 €", "8 St.": "10,20 €" } },
            { "id": "100", "image": null, "name": "Big Green Roll", "description": "Rolle mit Lachs, Unagi, Avocado und Gurken, außen mit Wasabi Kaviar (d,f,k,o)", "price": { "4 St.": "6,90 €", "8 St.": "11,50 €" } },
            { "id": "102", "image": null, "name": "Seattle Roll", "description": "Rolle mit Lachs, Unagi, Avocado, Gurken und Frischkäse, außen Sesam (a,b,k,o)", "price": { "4 St.": "6,50 €", "8 St.": "10,50 €" } },
            { "id": "104", "image": null, "name": "King Las Vegas Roll", "description": "Rolle mit Lachs, Frischkäse, gebackener Großgamele, Gurken, außen gelbes Tobiko", "price": { "4 St.": "9,50 €", "8 St.": "16,50 €" } },
            { "id": "106", "image": null, "name": "Philadelphia Rolle", "description": "Seetangrolle mit Lachs, Gurken, Lauch und Frischkäse (f,g,k)", "price": { "4 St.": "5,90 €", "8 St.": "10,20 €" } },
            { "id": "108", "image": null, "name": "Unagi Ten Ura Maki", "description": "umgedrehte Rolle mit gebackener Garnele und Avocado, außen mit Kaviar und Aal (a,b,o)", "price": { "4 St.": "8,50 €", "8 St.": "14,90 €" } },
            { "id": "110", "image": null, "name": "Avo Ura Maki", "description": "Ura In-Out Rolle mit Gurken, Avocado und Sesam (k)", "price": "9,50 €" },
            { "id": "111", "image": null, "name": "Avo Ura Ten Maki", "description": "mit gebackener Garnele und Avocado, Gurken und frischkäse, außen mit Kaviar und Avocado (a,b,k,o)", "price": "11,90 €" },
            { "id": "112", "image": null, "name": "Green Rice Ura Maki", "description": "mit gekochtem Lachs, Chili, Lauchzwiebeln und Mayonnaise, umhüllt mit einer knusprigen Panade (d,f,o)", "price": "9,10 €" },
            { "id": "113", "image": null, "name": "Green Rice Ura Ten Maki", "description": "mit gebackener Garnele, Avocado, grünem Spargel Umhüllt mit einer knusprigen Panade (a,b,f,o)", "price": "10,90 €" },
            { "id": "114", "image": null, "name": "Ura Inari Maki", "description": "mit Frischkäse, Avocado, grünem Spargel Umhüllt mit einer Tofu-Mantel (f,g,o)", "price": "9,40 €" },
            { "id": "115", "image": null, "name": "Ura Inari Buddha Maki", "description": "mit Shitake, Kürbisstreifen und Sesam Umhüllt mit einer Tofu-Mantel (f,k,o)", "price": "9,20 €" },
            { "id": "116", "image": null, "name": "Mango Ura Maki", "description": "mit gekochtem Lachs, Frischkäse, Avocado Umhüllt mit einer Mango-Mantel (d,f,g,o)", "price": "9,90 €" },
            { "id": "117", "image": null, "name": "Mango Ura Ten Maki", "description": "Kaviar und Frischkäse, Avocado, grünem Spargel Umhüllt mit einer Mango-Mantel mit gebackener Garnele, (a,b,d,f,g,o)", "price": "11,90 €" },
            { "id": "118", "image": null, "name": "Maguro Ura Maki", "description": "Umhüllt mit Thunfisch, Kaviar und Frischkäse, grünem Spargel (d,f,g,o)", "price": "11,90 €" },
            { "id": "119", "image": null, "name": "Ura Kani Maki", "description": "Mit Kani Tempura, Avocado, Gurken, Mayonnaise außen Kaviar und Spezial Soße (11,a,d,f,o)", "price": { "4 St.": "5,50 €", "8 St.": "9,70 €" } },
            { "id": "121", "image": null, "name": "Ura Kamo Maki", "description": "Ura In-Out Rolle mit Ente Avocado und Kaviar (c,f,o)", "price": { "4 St.": "5,90 €", "8 St.": "9,70 €" } },
            { "id": "123", "image": null, "name": "Maguro Ura Spezial", "description": "Ura Maki mit Maguro, Chili Soße und grünem Spargel (d,f,o)", "price": { "4 St.": "6,60 €", "8 St.": "10,70 €" } },
            { "id": "125", "image": null, "name": "Ura Salmon Skin Maki", "description": "mit gegrillter Lachshaut, Mozzarella und Avocado (d,g,o)", "price": "7,50 €" },
            { "id": "126", "image": null, "name": "Ura Tori Maki", "description": "mit gegrilltem Hühnerfleisch grünem Spargel (c,f,o)", "price": "9,10 €" }
          ]
        },
        {
          "name": "Sashimi",
          "items": [
            { "id": "138", "image": null, "name": "Sake Sashimi", "description": "frischer Lachs in Scheiben (d) (10 St.)", "price": "19,70 €" },
            { "id": "139", "image": null, "name": "Maguro Sashimi", "description": "frischer Thunfisch in Scheiben (d) (10 St.)", "price": "20,40 €" },
            { "id": "140", "image": null, "name": "Sashimi Komori", "description": "kleine Portion verschiedener Fisch in Scheiben (b,d)", "price": "22,40 €" },
            { "id": "141", "image": null, "name": "Sashimi Moriawase", "description": "verschiedener Fisch in Scheiben (b,d)", "price": "26,40 €" }
          ]
        },
        {
          "name": "Sakura Kombination Menü",
          "items": [
            { "id": "142", "image": null, "name": "Kombination 142", "description": "Mini Tempura Rolle (mit Lachs) (8 St.) Sake, Maguro, Kani Kama \" und Butterfisch Nigiri", "price": "11,30 €" },
            { "id": "143", "image": null, "name": "Kombination 143", "description": "Sake Maki, California Maki, Sake, Maguro und Ebi Nigiri", "price": "11,40 €" },
            { "id": "144", "image": null, "name": "Kombination 144", "description": "California Inside Out (mit Karviar), Ebi Ten Maki, Nigiri Sake Maguro Ebi Mutzu und Ikura.", "price": "18,40 €" },
            { "id": "145", "image": null, "name": "Kombination 145", "description": "Lachs Inside Out, Unagi Maki, 2x Sake Nigiri", "price": "17,50 €" },
            { "id": "146", "image": null, "name": "Kombination 146", "description": "Sake Avocado Maki, Avocado Maki, Sake, Unagi, Ebi Nigiri", "price": "11,70 €" },
            { "id": "147", "image": null, "name": "Kombination 147", "description": "Ebi Ten Maki, 2x Sake, 2x Ebi, 2x Unagi Nigiri", "price": "16,50 €" },
            { "id": "148", "image": null, "name": "Kombination 148", "description": "Chicago Rolle (4 St.), Seatle Rolle (4 St.), Teka Maki, Sake, Ebi und Butterfisch Nigiri", "price": "16,50 €" },
            { "id": "149", "image": null, "name": "Kombination 149", "description": "Ura California Maki Kaviar, Sake, Maguro, Ebi, Kani Kama, Unagi und Ikura Nigiri", "price": "17,90 €" },
            { "id": "150", "image": null, "name": "Kombination 150", "description": "Sake Maki, California Maki, Philadelphia (4 St.),", "price": "11,40 €" },
            { "id": "151", "image": null, "name": "Kombination 151", "description": "Lachs Inside Out, Sake Avocado Maki, 2x Sake, 2x Ebi und 2x Unagi Nigiri", "price": "19,10 €" },
            { "id": "152", "image": null, "name": "Kombination 152", "description": "Lachs Inside Out, Sake Maki.", "price": "16,00 €" },
            { "id": "153", "image": null, "name": "Kombination 153", "description": "California Maki, Inside-Out (Sesam), California Maki, Avocado Maki.", "price": "11,00 €" },
            { "id": "154", "image": null, "name": "Kombination 154", "description": "Vegetarische Kombination Yasai Ura Maki, Avocado Maki, Kampyo Maki", "price": "10,90 €" },
            { "id": "155", "image": null, "name": "Kombination 155", "description": "Philadelphia Rolle (4 St.), Ebi Ten Ura Maki (4St.), Sake Ten Ura Maki (4 St) Sake, Unagi und Ebi Nigiri", "price": "18,90 €" },
            { "id": "156", "image": null, "name": "Kombination 156", "description": "Vegi. Kombination mit. Tofu. I.O Kappa maki, Shitake, Avocado und Osinko Nigiri", "price": "12,80 €" },
            { "id": "157", "image": null, "name": "Kombination 157", "description": "Vegi. Kombination mit green Rice. I.O Kappa maki, Avocado maki, Shitake und Avocado Nigiri", "price": "13,80 €" },
            { "id": "158", "image": null, "name": "Kombination 158", "description": "Vegi. Kombination mit. Tofu. I.0 8.st, Avocado I.O 4.st, Sesam I.O Spargel 4.st Kappa maki, Avocado Maki, Shitake, Osinko, Inari und Avocado Nigiri", "price": "25,40 €" },
            { "id": "159", "image": null, "name": "Menü für 2 Personen", "description": "Kombination mit. Tofu. I.O 4.st, I.O Mango Ten Maki 4.st, I.O Maguro 4.st Avocado Maki, Sake Avocado Maki, Sake, Maguro, Ebi und Unagi Nigiri", "price": "28,80 €" },
            { "id": "160", "image": null, "name": "Menü für 2 Personen", "description": "Kombination mit. Maguro Spargel I.O, Green Rice Ten I.O, Avocado maki, Sake Avocado Maki, Sake, Maguro, Ebi, Unagi Nigiri", "price": "31,80 €" },
            { "id": "161", "image": null, "name": "Menü für 2-3 Personen", "description": "Kombination mit. Mango Ten I.O, Green Rice Ten. I.O, Maguro Spargel. I.O, Tori. I.O, Sake Avocado maki, Sake, Maguro, Ebi, Unagi Nigiri mit Miso Suppe.", "price": "50,90 €" },
            { "id": "162", "image": null, "name": "Sakura Platte für 3-5 Personen", "description": "16 x verschiedene Nigiri (8 Sorten nach Wahl oder nach Empfehlung des Sushi Meisters), Sake Ura Maki, Ebi Ten Ura Maki, Unagi Ura Maki Sesam, Tekka Maki, Sake Maki und Avocado Maki, King Las Vegas Roll (4St.) mit Miso Suppe.", "price": "78,90 €" },
            { "id": "163", "image": null, "name": "Menü für 2 Personen", "description": "Ura California Maki Kaviar, Philadelphia Rolle (4 St.), Unagi Ura Maki Sesam, 2 Sake, 2 Ebi, 2 Maguro und 2 Butterfisch Nigiri mit Miso Suppe.", "price": "38,50 €" },
            { "id": "164", "image": null, "name": "Menü für 2 Personen", "description": "Sakura Ura Maki, Ura California Maki Sesam, Alaska Rolle(4 St.), Sake Avocado Maki, Tekka Maki, 2 Sake, 2 Ebi und 2 Unagi Nigiri mit Miso Suppe.", "price": "41,00 €" },
            { "id": "165", "image": null, "name": "Menü für 2 Personen", "description": "Alaska Rolle(4 St.), Philadelphia Rolle (4 St.), King Las Vegas Rolle (4 St.), Sake Ura Maki (4 St.) Avocado Maki, Kappa Maki, 2 Sake, 2 Ebi, 2 Maguro, 2 Unagi Nigiri, dazu 4 Scheiben Lachs Sashimi mit Miso Suppe.", "price": "51,90 €" }
          ]
        },
        {
          "name": "Sushi - Tempura Rolle",
          "items": [
            { "id": "170", "image": null, "name": "Alaska Tempura Roll", "description": "Rolle mit Lachs Avocado, Gurken, Aal, mit Käse gebacken", "price": { "5 St.": "7,50 €", "10 St.": "12,80 €" } },
            { "id": "172", "image": null, "name": "Xenia Roll (Mittel scharf)", "description": "panierte Rolle mit Krebsfleisch, Chili, Lauch, Gurken und Mayonnaise", "price": { "5 St.": "7,50 €", "10 St.": "12,80 €" } },
            { "id": "174", "image": null, "name": "Buddha Roll Vegetarische", "description": "panierte Rolle mit Gurken, Avocado, Kürbis, Sesam und Mozzarella", "price": { "5 St.": "6,00 €", "10 St.": "10,80 €" } },
            { "id": "176", "image": null, "name": "Chicago Roll", "description": "panierte Rolle mit Surimi, Gurken, Avocado, Flugfischrogen, Spezial-Sauce", "price": { "5 St.": "7,10 €", "10 St.": "11,80 €" } },
            { "id": "178", "image": null, "name": "New York Roll (Mittel scharf)", "description": "panierte Rolle mit Butterfisch, Chili, Lauch, Gurken, Spezial-Sauce", "price": { "5 St.": "7,10 €", "10 St.": "11,80 €" } },
            { "id": "180", "image": null, "name": "Spicy Tuna Tempura Rolle (scharf)", "description": "mit gekochtem Thunfisch, Mayonnaise, Chili, Lauch", "price": { "5 St.": "7,50 €", "10 St.": "12,80 €" } },
            { "id": "182", "image": null, "name": "Mini Sake Tempura Rolle (8 St.)", "description": "mit Lachs, Lauch und Mayonnaise", "price": "5,50 €" },
            { "id": "183", "image": null, "name": "Mini Thuna Tempura Rolle (8 St.)", "description": "mit gekochtem Thunfisch, Lauch und scharf", "price": "5,50 €" },
            { "id": "184", "image": null, "name": "Mini Buddha Tempura Rolle (8 St.)", "description": "mit Mozzarella, Basilikum", "price": "4,70 €" }
          ]
        }
      ]
    },
    {
      "categoryImage":null,
      "category": "Warme Gerichte",
      "subcategories": [
        {
          "name": "Menü des Hauses",
          "items": [
            { "id": "127", "image": null, "name": "Hühnerspieß Menü", "description": "gegrillter Hühnerspieß auf Reis, dazu Miso Suppe, Kimchi (f,g,k,o)", "price": "11,70 €" },
            { "id": "128", "image": null, "name": "Unagi Don", "description": "gegrilltes Aalfilet in auf Reis, dazu Miso Suppe, Kimchi (d,f,k,o)", "price": "18,20 €" },
            { "id": "129", "image": null, "name": "Sake Don", "description": "frische Lachsscheiben und Kaviar auf Sushi Reis, dazu Miso Sake Suppe, Kimchi (d,f,k,o)", "price": "19,00 €" },
            { "id": "130", "image": null, "name": "Sake (Lachs) Bowl", "description": "Gebratener Lachs mit frischem Salat, Kimchi, eingelegtem Seetang, Edamame, Avocado und Reis (Mit hausgemachter süsser Sojasauce) (a,b,k,o)", "price": "14,90 €" },
            { "id": "131", "image": null, "name": "Sakura Udon", "description": "jap. Weizennudeln-Suppe mit verschiedenen Meeresfrüchten (4,a,d,f,o)", "price": "13,50 €" },
            { "id": "132", "image": null, "name": "Wantan Nudeln", "description": "jap. Nudeln-Suppe mit Soja oder Miso Geschmack, dazu Wantan Teigtaschen (4,a,b,f,g,o)", "price": "12,50 €" },
            { "id": "133", "image": null, "name": "Ente Udon", "description": "jap. Weizennudeln-Suppe mit Ente Kross. und Gemüse, asiat. Kräutern (4,a,c,o)", "price": "14,50 €" },
            { "id": "134", "image": null, "name": "Sakura Rindfleisch Ramen", "description": "jap.Ramennudeln-Suppe mit Rindfleisch und Gemüse, asiat. Kräutern (4,a,c,f,o)", "price": "13,90 €" },
            { "id": "135", "image": null, "name": "Garnele Ramen", "description": "jap.Ramennudeln-Suppe mit Garnele Ramen (scharf) und Gemüse, asiat. Kräutern (4,b,f,o)", "price": "14,50 €" },
            { "id": "136", "image": null, "name": "Schweine Bowl", "description": "Gebratener Schweinenacken mit frischem Salat, Kimchi, eingelegtem Seetang, Edamame, Avocado und Reis (Mit hausgemachter süsser Sojasauce) (4,d,f,g,o)", "price": "13,50 €" },
            { "id": "137", "image": null, "name": "Chirashi Sushi", "description": "verschiedene frische Fischscheiben auf Sushi-Reis, dazu Miso Suppe (b,d,f,k,o)", "price": "19,40 €" }
          ]
        },
        {
          "name": "Asiatische warme Gerichte",
          "items": [
            { "id": "185", "image": null, "name": "Gebratene Nudeln mit Gemüse", "description": "", "price": "7,50 €" },
            { "id": "186", "image": null, "name": "Gebratenes Gemüse mit rotem Curry, Kokosmilch, Reis und: Hühnerfleisch", "description": "", "price": "12,10 €" },
            { "id": "187", "image": null, "name": "Gebratenes Gemüse mit rotem Curry, Kokosmilch, Reis und: gebackener Hühnerbrust", "description": "", "price": "12,40 €" },
            { "id": "188", "image": null, "name": "Gebratenes Gemüse mit rotem Curry, Kokosmilch, Reis und: Ente Kross", "description": "", "price": "13,90 €" },
            { "id": "189", "image": null, "name": "Gebratenes Gemüse mit rotem Curry, Kokosmilch, Reis und: Rindfleisch", "description": "", "price": "14,50 €" },
            { "id": "190", "image": null, "name": "Gebratenes Gemüse mit rotem Curry, Kokosmilch, Reis und: Tofu", "description": "", "price": "11,60 €" },
            { "id": "191", "image": null, "name": "Gebratenes Gemüse mit rotem Curry, Kokosmilch, Reis und: Garnelen", "description": "", "price": "14,00 €" },
            { "id": "192", "image": null, "name": "Gebratenes Saisongemüse mit Reis und: Hühnerfleisch", "description": "", "price": "13,10 €" },
            { "id": "193", "image": null, "name": "Gebratenes Saisongemüse mit Reis und: Ente Kross", "description": "", "price": "13,90 €" },
            { "id": "194", "image": null, "name": "Gebratenes Saisongemüse mit Reis und: Tofu", "description": "", "price": "11,60 €" },
            { "id": "195", "image": null, "name": "Gebratenes Saisongemüse mit Reis und: Garnelen", "description": "", "price": "14,00 €" },
            { "id": "196", "image": null, "name": "Gebratene Nudeln mit Gemüse und: Hühnerfleisch", "description": "", "price": "12,00 €" },
            { "id": "197", "image": null, "name": "Gebratene Nudeln mit Gemüse und: gebackener Hühnerbrust", "description": "", "price": "12,10 €" },
            { "id": "198", "image": null, "name": "Gebratene Nudeln mit Gemüse und: Ente Kross", "description": "", "price": "14,00 €" },
            { "id": "199", "image": null, "name": "Gebratenes Gemüse Süß-Saure Soße mit Reis und: gebackener Hühnerbrust", "description": "", "price": "12,00 €" },
            { "id": "200", "image": null, "name": "Gebratenes Gemüse Süß-Saure Soße mit Reis und: Ente Kross", "description": "", "price": "13,60 €" },
            { "id": "201", "image": null, "name": "Gebratenes Gemüse Süß-Saure Soße mit Reis und: Rindfleisch", "description": "", "price": "14,00 €" },
            { "id": "202", "image": null, "name": "Gebratener Reis mit Gemüse und: Hühnerfleisch", "description": "", "price": "12,40 €" },
            { "id": "203", "image": null, "name": "Gebratener Reis mit Gemüse und: gebackenem Hühnerbrust", "description": "", "price": "12,60 €" },
            { "id": "204", "image": null, "name": "Gebratener Reis mit Gemüse und: Ente Kross", "description": "", "price": "14,20 €" }
          ]
        },
        {
          "name": "Spezial warmes Kűches",
          "items": [
            { "id": "205", "image": null, "name": "Gebratener Lachs Curry", "description": "Gebratener Lachs in Scheiben mit asiat. Gemüse, rotem Curry und, Kokosmilch (mild oder scharf) mit Reis", "price": "15,10 €" },
            { "id": "206", "image": null, "name": "Gebratener Lachs Chili", "description": "Gebratener Lachs mit asiat. Gemüse, Chili und Pfeffeschorten (sehr scharf)", "price": "15,10 €" },
            { "id": "207", "image": null, "name": "Gebratener Lachs Mango", "description": "Gebratener Lachs auf Mango-Soße mit Kokosmilch, rotem Curry, frischen Mangostücken, Paprika, Dill und Thai Basilikum.", "price": "15,50 €" },
            { "id": "208", "image": null, "name": "Mango Ente (mild oder scharf)", "description": "Knusprig gebackene Ente auf Mango - Soße mit Kokosmilch, rotem Curry, frischen Mangostücken, Paprika und Thai Basilikum.", "price": "15,20 €" },
            { "id": "216a", "image": null, "name": "Gebratene Gemüse mit grünem Curry, Kokosmilch, Reis und : Ente Kross", "description": "", "price": "14,40 €" },
            { "id": "216b", "image": null, "name": "Gebratene Gemüse mit grünem Curry, Kokosmilch, Reis und : Gebackener Hühnerfleisch", "description": "", "price": "12,60 €" },
            { "id": "216c", "image": null, "name": "Gebratene Gemüse mit grünem Curry, Kokosmilch, Reis und : Rindfleisch", "description": "", "price": "14,40 €" },
            { "id": "216d", "image": null, "name": "Gebratene Gemüse mit grünem Curry, Kokosmilch, Reis und : Gebratener Lachs", "description": "", "price": "15,10 €" },
            { "id": "217a", "image": null, "name": "Gegrillter Lachs mit gem.Salat und Teri Yaki Soße: Mit Reis", "description": "", "price": "14,70 €" },
            { "id": "217b", "image": null, "name": "Gegrillter Lachs mit gem.Salat und Teri Yaki Soße: Süßkartoffel- Pommes", "description": "", "price": "15,10 €" },
            { "id": "218", "image": null, "name": "Gegrilltes Hühnerbrustfilet mit gem.Salat,Reis und Teri Yaki Soße", "description": "", "price": "12,70 €" }
          ]
        }
      ]
    },
    {
      "categoryImage":null,
      "category": "Desserts",
      "subcategories": [
        {
          "name": "Desserts",
          "items": [
            { "id": "209", "image": null, "name": "Macha Eis", "description": "Jap. 'Grüner Tee' Eis (g,o)", "price": "6,40 €" },
            { "id": "210", "image": null, "name": "Daifuku Mochi", "description": "Jap. Reiskuchen mit Roten Bohnen Und Vanille Eis (g,o)", "price": "3,90 €" },
            { "id": "211", "image": null, "name": "Gebackene Bananen", "description": "Mit Honig Und Vanille Eis (a,g,o)", "price": "4,10 €" },
            { "id": "211B", "image": null, "name": "Jap. gemischter", "description": "Mochi Eis mit Obst (3 St)", "price": "6,00 €" }
          ]
        }
      ]
    },
    {
      "categoryImage":null,
      "category": "Extras",
      "subcategories": [
        {
          "name": "Extras",
          "items": [
            { "id": "212", "image": null, "name": "Portion Sushi Reis", "description": "", "price": "3,00 €" },
            { "id": "213", "image": null, "name": "Portion gekochtes Reis", "description": "", "price": "2,50 €" },
            { "id": "214", "image": null, "name": "Portion Ingwer", "description": "", "price": {"klein": "1,50 €", "groß": "3,00 €"} }
          ]
        }
      ]
    },
    {
      "categoryImage":null,
      "category": "Getränke",
      "subcategories": [
        {
          "name": "Hausgemachte frische Limonade",
          "items": [
            { "id": "230", "image": null, "name": "Saigon Calpico Trink 0.3l", "description": "Frische Limetten, Calpico (jap. Trinkjoghurt), Minze, brauner Zucker und Crushed Ice", "price": "5,20 €" },
            { "id": "231", "image": null, "name": "Sweet Orange 0.3l", "description": "Frische Ingwer, Orange Zitronengras, Zimt, Minze brauner Zucker und Crushed Ice", "price": "5,20 €" },
            { "id": "232", "image": null, "name": "Peach Orange Ice Tea 0.3l", "description": "Frische Orange, Minze, Pfirsichtee Tea, Zitronengras, Zimt, brauner Zucker und Crushed Ice", "price": "5,20 €" },
            { "id": "233", "image": null, "name": "Vietnam's Eiskaffee 0.3l", "description": "Espresso auf feinem Eis und vietnamesischer süße Kondensmilch", "price": "4,40 €" },
            { "id": "234", "image": null, "name": "Sakura der Zeit 0.3l", "description": "Frische Limetten, brauner Zucker Soda, Minze, Zitronengras Crushed Ice", "price": "5,20 €" },
            { "id": "235", "image": null, "name": "Sweet Lychee Fruit 0.3l", "description": "Litschi, Limetten, Minze, Zitronengras brauner Zucker und Crushed Ice", "price": "5,20 €" },
            { "id": "236", "image": null, "name": "Mojito 0.3l", "description": "Limette, Rohrzucker, Minze, Havana 3 Yanos, Soda.", "price": "7,40 €" },
            { "id": "237", "image": null, "name": "Aperol Sprit", "description": "Aperol, Proseco, Orange scheiben und Crushed Ice.", "price": "7,40 €" }
          ]
        },
        {
          "name": "Alkoholfreie Getränke kalt",
          "items": [
            { "id": "401", "image": null, "name": "Mineral wasser", "description": "0,20l", "price": "2,70€" },
            { "id": "402", "image": null, "name": "Coca Cola", "description": "0,20l", "price": "2,70€" },
            { "id": "403", "image": null, "name": "Coca Cola Light", "description": "0,20l", "price": "2,70€" },
            { "id": "404", "image": null, "name": "Fanta", "description": "0,20l", "price": "2,70€" },
            { "id": "405", "image": null, "name": "Sprite", "description": "0,20l", "price": "2,70€" },
            { "id": "406", "image": null, "name": "Apfelsaft Naturtrüb", "description": "0,20l", "price": "3,00€" },
            { "id": "407", "image": null, "name": "Orangensaft", "description": "0,25l", "price": "3,00€" },
            { "id": "408", "image": null, "name": "Vitamalz", "description": "0,25l", "price": "3,20€" },
            { "id": "409", "image": null, "name": "Kirschsaft", "description": "0,20l", "price": "3,00€" },
            { "id": "410", "image": null, "name": "Bitter Lemon", "description": "0,20l", "price": "3,00€" },
            { "id": "411", "image": null, "name": "Calpico (jap. Trinkjoghurt)", "description": "0,20l", "price": "4,40€" },
            { "id": "412", "image": null, "name": "Apfelschorle", "description": "0,20l", "price": "3,00€" },
            { "id": "413", "image": null, "name": "Tonic Water, Ginger All", "description": "0,20l", "price": "2,90€" },
            { "id": "414", "image": null, "name": "Spezi", "description": "0,20l", "price": "2,70€" },
            { "id": "415", "image": null, "name": "Bionade", "description": "0,25l", "price": "2,90€" },
            { "id": "416", "image": null, "name": "Mineralwasser", "description": "0,75l", "price": "6,80€" },
            { "id": "417", "image": null, "name": "Asiatische Getränke", "description": "0,20l", "price": "3,00€" },
            { "id": "418", "image": null, "name": "Mango Lassi", "description": "0,30l", "price": "4,90€" },
            { "id": "419", "image": null, "name": "Avocado Lassi", "description": "0,30l", "price": "4,60€" }
          ]
        },
        {
          "name": "Alkoholfreie Getränke warm",
          "items": [
            { "id": "421", "image": null, "name": "Sencha (jap. grüner Tee)", "description": "Kännchen", "price": "3,50€" },
            { "id": "422", "image": null, "name": "Jasmin Tee", "description": "Kännchen", "price": "3,50€" },
            { "id": "423", "image": null, "name": "Schwarzer Tee", "description": "Tasse", "price": "2,50€" },
            { "id": "424", "image": null, "name": "Jasmin Tee", "description": "Tasse", "price": "2,50€" },
            { "id": "425", "image": null, "name": "Kaffee", "description": "Tasse", "price": "2,50€" },
            { "id": "426", "image": null, "name": "Ingwer Tee mit Zitrone Scheiben, Honig und Minze", "description": "Glass", "price": "4,30€" },
            { "id": "427", "image": null, "name": "Sweet Ginger, Ingwer Tee mit Orangen und Zimt", "description": "Glass", "price": "4,70€" }
          ]
        },
        {
          "name": "Bier",
          "items": [
            { "id": "430", "image": null, "name": "Warsteiner Pils von Fass 0,3l", "description": "Glass 0,30l", "price": "3,70€" },
            { "id": "431", "image": null, "name": "Warsteiner Pils von Fass 0,5l", "description": "Glass 0,50l", "price": "4,90€" },
            { "id": "432", "image": null, "name": "Sapporo Bier (jap.Bier)", "description": "Flasche 0,33l", "price": "3,90€" },
            { "id": "433", "image": null, "name": "Kirin Bier (Jap. Bier)", "description": "Flasche 0,33l", "price": "3,90€" },
            { "id": "434", "image": null, "name": "Weizenbier", "description": "Flasche 0,53l", "price": "3,90€" },
            { "id": "435", "image": null, "name": "Alkoholfreies Bier", "description": "Flasche 0,33l", "price": "3,50€" }
          ]
        },
        {
          "name": "Offene Weine",
          "items": [
            { "id": "441", "image": null, "name": "Weißwein: Soave DOC", "description": "0,20l", "price": "4,40€" },
            { "id": "442", "image": null, "name": "Weißwein: Französische Chardonnay", "description": "0,20l", "price": "4,40€" },
            { "id": "443", "image": null, "name": "Weißwein: Vollrads Riesling", "description": "0,20l", "price": "4,70€" },
            { "id": "444", "image": null, "name": "Weißwein: Grauburgunder", "description": "0,20l", "price": "5,00€" },
            { "id": "445", "image": null, "name": "Weißwein: Sauvignon blanc", "description": "0,20l", "price": "5,00€" },
            { "id": "446", "image": null, "name": "Weißwein: Weißweinschorle", "description": "0,20l", "price": "4,30€" },
            { "id": "447", "image": null, "name": "Rotwein: Chianti DOC", "description": "0,20l", "price": "4,00€" },
            { "id": "448", "image": null, "name": "Rotwein: Bordeaux Devages", "description": "0,20l", "price": "4,00€" },
            { "id": "449", "image": null, "name": "Rotwein: Merlot IGP", "description": "0,20l", "price": "4.70€" },
            { "id": "450", "image": null, "name": "Rotwein: Rose Cep.de Solei", "description": "0,20l", "price": "5.00€" }
          ]
        },
        {
          "name": "Flaschen Weine",
          "items": [
            { "id": "451", "image": null, "name": "Weißwein: Französische Chardonnay", "description": "0,75l", "price": "13,20€" },
            { "id": "452", "image": null, "name": "Weißwein: Grauburgunder", "description": "0,75l", "price": "15,20€" },
            { "id": "453", "image": null, "name": "Weißwein: Sauvignon Blanc", "description": "0,75l", "price": "16,60€" },
            { "id": "454", "image": null, "name": "Rotwein: Spätburgunder", "description": "0,75l", "price": "20,60€" },
            { "id": "455", "image": null, "name": "Rotwein: Bordeaux J.Degaves", "description": "0,75l", "price": "12,80€" },
            { "id": "456", "image": null, "name": "Rotwein: Carbernet Sauvignon", "description": "0,75l", "price": "20,60€" }
          ]
        },
        {
          "name": "Schaumwein",
          "items": [
            { "id": "457", "image": null, "name": "Prosecco DOC Extra Dry", "description": "0,20l", "price": "8,60€" },
            { "id": "458", "image": null, "name": "Moet & Chandon Champagne", "description": "0,75l", "price": "70,00€" }
          ]
        },
        {
          "name": "Japanische alkoholische Getränke",
          "items": [
            { "id": "459", "image": null, "name": "Kann-Sake", "description": "0,12l", "price": "4,60€" },
            { "id": "460", "image": null, "name": "Masu-Sake", "description": "0,12l", "price": "4,60€" },
            { "id": "461", "image": null, "name": "Japanischer Pflaumenwein", "description": "5 cl", "price": "4,60€" },
            { "id": "462", "image": null, "name": "Schochu", "description": "2 cl", "price": "3,80€" }
          ]
        }
      ]
    }
  ]
}