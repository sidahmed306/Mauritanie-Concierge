import json

def update_lang(file, navbar_tours, tours_data):
    try:
        with open(file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: {file} not found")
        return
    
    # Update Navbar
    if 'Navbar' in data:
        # Insert tours between services and about. We resynthesize the ordered dict for neatness
        new_nav = {}
        for k, v in data['Navbar'].items():
            new_nav[k] = v
            if k == 'services':
                new_nav['tours'] = navbar_tours
        if 'tours' not in new_nav:
            new_nav['tours'] = navbar_tours
        data['Navbar'] = new_nav

    # Update Footer Links
    if 'Footer' in data:
        data['Footer']['tours'] = navbar_tours
        
    data['Tours'] = tours_data

    with open(file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

en_tours = {
    "pageTitle": "Discover the Magic of Mauritania",
    "pageSubtitle": "Expertly crafted itineraries for unforgettable journeys",
    "includedTitle": "What's Included in Every Tour",
    "notIncludedTitle": "Not Included",
    "bookWhatsApp": "Book on WhatsApp",
    "viewDetails": "View Details",
    "mostPopular": "MOST POPULAR",
    "priceFrom": "From {price} per person",
    "whatsAppPrefix": "Hello, I am interested in booking the {tour} {duration} tour. Please send me more information.",
    "included": [
      "Airport pickup and drop-off",
      "All transportation in 4x4 vehicles",
      "Accommodation (hotel or desert camp)",
      "English/French/Arabic speaking guide",
      "All meals mentioned in itinerary",
      "Water and snacks during travel",
      "SIM card on arrival"
    ],
    "notIncluded": [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities"
    ],
    "packages": {
      "classic": {
        "title": "Classic Mauritania",
        "duration": "7 days",
        "route": "Nouakchott → Atar → Chinguetti → Terjit → Nouakchott",
        "price": "$800",
        "highlights": [
          "Day 1: Arrival Nouakchott, airport pickup, check-in, city tour",
          "Day 2: Drive to Atar, visit ancient city, traditional lunch",
          "Day 3: Chinguetti - UNESCO Site, ancient libraries, sand dunes",
          "Day 4: Full day in desert, camel ride, Sahara night camp",
          "Day 5: Terjit Oasis, natural springs swimming, picnic",
          "Day 6: Return to Atar, local market, artisan crafts",
          "Day 7: Drive back to Nouakchott, departure"
        ]
      },
      "richat": {
        "title": "Richat Structure Adventure",
        "duration": "5 days",
        "route": "Nouakchott → Atar → Richat → Atar → Nouakchott",
        "price": "$650",
        "highlights": [
          "Day 1: Arrival Nouakchott, rest and briefing",
          "Day 2: Drive to Atar, visit ancient city",
          "Day 3: 4x4 expedition to Richat Structure (Eye of Africa)",
          "Day 4: Explore surrounding desert, Ouadane ancient city",
          "Day 5: Return to Nouakchott, departure"
        ]
      },
      "banc": {
        "title": "Banc d'Arguin & Coast",
        "duration": "4 days",
        "route": "Nouakchott → Banc d'Arguin National Park → Nouakchott",
        "price": "$500",
        "highlights": [
          "Day 1: Arrival Nouakchott, coastal tour",
          "Day 2: Banc d'Arguin National Park (UNESCO), flamingo boat trip",
          "Day 3: Nouamghar village, traditional fishing, beach lunch",
          "Day 4: Return Nouakchott, departure"
        ]
      },
      "full": {
        "title": "Full Mauritania Explorer",
        "duration": "14 days",
        "route": "Nouakchott → Banc d'Arguin → Atar → Chinguetti → Terjit → Richat → Ouadane → Tidjikja → Nouakchott",
        "price": "$1,800",
        "highlights": [
          "Complete grand tour combining all major destinations expertly.",
          "Includes Richat Structure, Tidjikja, and Banc d'Arguin.",
          "Extended desert stays and profound cultural immersion."
        ]
      },
      "business": {
        "title": "Business & City",
        "duration": "2 days",
        "route": "Nouakchott only",
        "price": "$200",
        "highlights": [
          "Airport VIP pickup",
          "Hotel assistance",
          "City tour (National Museum, Grande Mosquée)",
          "Business meeting support",
          "Departure assistance"
        ]
      }
    }
}

fr_tours = {
    "pageTitle": "Découvrez la Magie de la Mauritanie",
    "pageSubtitle": "Des itinéraires conçus par des experts pour des voyages inoubliables",
    "includedTitle": "Ce qui est inclus dans chaque circuit",
    "notIncludedTitle": "Non Inclus",
    "bookWhatsApp": "Réserver sur WhatsApp",
    "viewDetails": "Voir les détails",
    "mostPopular": "LE PLUS POPULAIRE",
    "priceFrom": "À partir de {price} par personne",
    "whatsAppPrefix": "Bonjour, je suis intéressé par la réservation du circuit {tour} de {duration}. Pourriez-vous m'envoyer plus d'informations ?",
    "included": [
      "Transferts aéroport aller-retour",
      "Tous les transports en 4x4",
      "Hébergement (hôtel ou camp dans le désert)",
      "Guide parlant français/anglais/arabe",
      "Tous les repas mentionnés dans l'itinéraire",
      "Eau et collations pendant le voyage",
      "Carte SIM à l'arrivée"
    ],
    "notIncluded": [
      "Vols internationaux",
      "Assurance voyage",
      "Dépenses personnelles",
      "Activités optionnelles"
    ],
    "packages": {
      "classic": {
        "title": "Classique Mauritanie",
        "duration": "7 jours",
        "route": "Nouakchott → Atar → Chinguetti → Terjit → Nouakchott",
        "price": "800 $",
        "highlights": [
          "Jour 1: Arrivée Nouakchott, transfert, installation, visite de la ville",
          "Jour 2: Route vers Atar, visite de l'ancienne ville, repas traditionnel",
          "Jour 3: Chinguetti - Site UNESCO, anciennes bibliothèques, dunes",
          "Jour 4: Journée complète dans le désert, bivouac, méharée",
          "Jour 5: Oasis de Terjit, baignade dans les sources naturelles",
          "Jour 6: Retour à Atar, marché local, artisanat",
          "Jour 7: Retour à Nouakchott, départ"
        ]
      },
      "richat": {
        "title": "Aventure Structure de Richat",
        "duration": "5 jours",
        "route": "Nouakchott → Atar → Richat → Atar → Nouakchott",
        "price": "650 $",
        "highlights": [
          "Jour 1: Arrivée Nouakchott, repos et briefing",
          "Jour 2: Route vers Atar, visite",
          "Jour 3: Expédition en 4x4 vers l'Oeil de l'Afrique (Richat)",
          "Jour 4: Exploration du désert, ancienne ville de Ouadane",
          "Jour 5: Retour à Nouakchott, départ"
        ]
      },
      "banc": {
        "title": "Banc d'Arguin & Côte",
        "duration": "4 jours",
        "route": "Nouakchott → Parc National du Banc d'Arguin → Nouakchott",
        "price": "500 $",
        "highlights": [
          "Jour 1: Arrivée Nouakchott, tour côtier",
          "Jour 2: Parc National (UNESCO), balade en bateau, oiseaux migrateurs",
          "Jour 3: Village de Nouamghar, pêche traditionnelle des Imraguens",
          "Jour 4: Retour Nouakchott, départ"
        ]
      },
      "full": {
        "title": "Le Grand Tour de Mauritanie",
        "duration": "14 jours",
        "route": "Nouakchott → Banc d'Arguin → Atar → Chinguetti → Terjit → Richat → Ouadane → Tidjikja → Nouakchott",
        "price": "1 800 $",
        "highlights": [
          "Le grand circuit complet combinant avec expertise toutes les destinations majeures.",
          "Inclut la Structure de Richat, Tidjikja et le Banc d'Arguin.",
          "Immersion culturelle profonde et bivouacs étendus dans le désert."
        ]
      },
      "business": {
        "title": "Business & Ville",
        "duration": "2 jours",
        "route": "Nouakchott uniquement",
        "price": "200 $",
        "highlights": [
          "Accueil aéroport VIP",
          "Assistance hôtelière",
          "Visite de ville (Musée National, Grande Mosquée)",
          "Soutien aux réunions d'affaires",
          "Assistance au départ"
        ]
      }
    }
}

ar_tours = {
    "pageTitle": "اكتشف سحر موريتانيا",
    "pageSubtitle": "مسارات رحلات مصممة بعناية لرحلات لا تُنسى",
    "includedTitle": "ما هو مشمول في كل جولة",
    "notIncludedTitle": "غير مشمول",
    "bookWhatsApp": "احجز عبر واتساب",
    "viewDetails": "عرض التفاصيل",
    "mostPopular": "الأكثر شعبية",
    "priceFrom": "تبدأ من {price} للشخص الواحد",
    "whatsAppPrefix": "مرحباً، أود حجز الجولة السياحية: {tour} لمدة {duration}. يرجى إرسال المزيد من المعلومات.",
    "included": [
      "نقل من وإلى المطار",
      "جميع وسائل النقل في سيارات دفع رباعي مسلحة",
      "الإقامة (فندق أو مخيم صحراوي)",
      "مرشد سياحي يتحدث العربية/الفرنسية/الإنجليزية",
      "جميع الوجبات المذكورة في خطة الرحلة",
      "توفير المياه والوجبات الخفيفة أثناء السفر",
      "بطاقة SIM محلية عند الوصول"
    ],
    "notIncluded": [
      "رحلات الطيران الدولية",
      "تأمين السفر",
      "النفقات الشخصية",
      "الأنشطة الاختيارية"
    ],
    "packages": {
      "classic": {
        "title": "موريتانيا الكلاسيكية",
        "duration": "7 أيام",
        "route": "نواكشوط → أطار → شنقيط → ترجيت → نواكشوط",
        "price": "$800",
        "highlights": [
          "اليوم 1: الوصول إلى نواكشوط، الاستقبال، جولة بالمدينة",
          "اليوم 2: التوجه إلى أطار، زيارة المدينة القديمة، غداء تقليدي",
          "اليوم 3: شنقيط - موقع يونسكو، المكتبات القديمة، الكثبان الرملية",
          "اليوم 4: يوم كامل في الصحراء، ركوب الجمال، تخييم ليلي",
          "اليوم 5: واحة ترجيت، السباحة في الينابيع، غداء في الطبيعة",
          "اليوم 6: العودة إلى أطار، السوق المحلي والمشغولات اليدوية",
          "اليوم 7: العودة إلى نواكشوط، المغادرة"
        ]
      },
      "richat": {
        "title": "مغامرة قلب الريشات",
        "duration": "5 أيام",
        "route": "نواكشوط → أطار → عين إفريقيا → أطار → نواكشوط",
        "price": "$650",
        "highlights": [
          "اليوم 1: الوصول لنواكشوط، راحة ومعلومات إرشادية",
          "اليوم 2: القيادة إلى أطار، زيارة المدينة",
          "اليوم 3: رحلة 4x4 إلى قلب الريشات (عين أفريقيا)",
          "اليوم 4: استكشاف الصحراء ومدينة وادان التاريخية",
          "اليوم 5: العودة إلى نواكشوط، المغادرة"
        ]
      },
      "banc": {
        "title": "حوض أركين والساحل",
        "duration": "4 أيام",
        "route": "نواكشوط → محمية حوض أركين → نواكشوط",
        "price": "$500",
        "highlights": [
          "اليوم 1: الوصول لنواكشوط وجولة ساحلية",
          "اليوم 2: حوض أركين، رحلة قوارب، مشاهدة الطيور المهاجرة",
          "اليوم 3: قرية نوامغار، الصيد التقليدي لمجتمع إيمراغن",
          "اليوم 4: العودة إلى نواكشوط، المغادرة"
        ]
      },
      "full": {
        "title": "رحلة استكشاف موريتانيا الشاملة",
        "duration": "14 يوماً",
        "route": "نواكشوط → أركين → أطار → شنقيط → ترجيت → قلب الريشات → وادان → تجكجة → نواكشوط",
        "price": "$1,800",
        "highlights": [
          "الجولة الكبرى الشاملة التي تجمع كافة الوجهات السياحية الرئيسية.",
          "تتضمن زيارة تقاطع الريشات وتجكجة وحوض أركين.",
          "إقامة صحراوية عميقة وتجربة ثقافية غامرة بالكامل."
        ]
      },
      "business": {
        "title": "الأعمال والمدينة",
        "duration": "يومان",
        "route": "مدينة نواكشوط فقط",
        "price": "$200",
        "highlights": [
          "استقبال المطار لكبار الشخصيات",
          "المساعدة في الحجوزات الفندقية",
          "جولة بالمدينة (المتحف الوطني، المسجد الكبير)",
          "تنسيق ودعم اجتماعات العمل",
          "المساعدة في المغادرة"
        ]
      }
    }
}

update_lang('messages/en.json', "Tours", en_tours)
update_lang('messages/fr.json', "Circuits", fr_tours)
update_lang('messages/ar.json', "جولات سياحية", ar_tours)
print("Translations updated!")
