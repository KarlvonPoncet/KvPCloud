# von Poncet Cloud

Statische Website für den Webshop der von Poncet Solutions GmbH. Verkauft wird von Poncet Cloud, eine SaaS-Anwendung für sichere Unternehmens-Workflows mit Dokumentenablage, Aufgabenverwaltung, Kundenverwaltung, Rollenrechten, Exportfunktionen und API-Zugang.

## Struktur

- `index.html`: Startseite
- `product.html`: Produktseite
- `pricing.html`: Tarife
- `cart.html`: Warenkorb und Checkout
- `about.html`: Unternehmen, Marke und Nizza-Klassen
- `accessibility.html`, `copyright.html`, `terms.html`, `license.html`, `privacy.html`, `imprint.html`: rechtliche Pflicht- und Nachweisseiten
- `evidence.html`: sichtbare Nachweise zu Barrierefreiheit, Medienrechten, Markenrecherche und Qualitätssicherung
- `contact.html`: Kontaktformular
- `style/style.css`: Gestaltung und responsive Layouts
- `js/main.js`: Tarifauswahl, Bestellübersicht und Formularstatus
- `assets/images/vonponcetcloud-dashboard.svg`: eigene Produktillustration
- `assets/images/vonponcet-cloud-generated-exact.svg`: Logo und Header-Icon nach Nutzerbild

## Nutzung

Die Website ist vollständig statisch und kann über `index.html` im Browser geöffnet oder auf einem statischen Hostingdienst veröffentlicht werden.

Finaler Abgabestand ist der Ordner `vonPoncetCloud/` mit den dortigen HTML-, CSS-, JavaScript-, Asset- und Nachweisdateien. `../Mein_Konzept.md` ist nur ein früheres Konzeptdokument und nicht die finale rechtliche Fassung.

## Demo-Abgrenzung

von Poncet Cloud ist eine Hochschul-Demo. Die Gesellschafts-, Register-, Marken-, Kontakt- und Bestelldaten sind fiktiv. Der Warenkorb ist ein Mock-Checkout: Es kommt kein Vertrag zustande, es erfolgt keine Zahlung und Formularinhalte werden nicht an einen Server übertragen. Kontakt- und Checkoutformulare enthalten sichtbare Datenschutzhinweise und verweisen auf `privacy.html`.

Die Preisangaben sind Demo-Bruttopreise für ein fiktives B2B-Angebot in Österreich. Im Warenkorb wird der enthaltene Umsatzsteueranteil beispielhaft ausgewiesen.

## Rechtliche Einordnung

Die rechtlichen Seiten orientieren sich an österreichischem Recht und vermeiden deutsche Pflichttexte. Grundlage der Ausarbeitung sind insbesondere:

- E-Commerce-Gesetz für Anbieterinformationen
- Unternehmensgesetzbuch für Unternehmensangaben
- Mediengesetz für Medieninhaber und grundlegende Richtung
- FAGG als Referenz für Fernabsatz- und Buttonpflichten, soweit ein echter Shop entstehen würde
- KSchG und VGG für Verbraucher-AGB, digitale Leistungen, Gewährleistung und unzulässige Klauseln
- DSGVO, DSG und TKG 2021 für Datenschutzerklärung, Verarbeitungsverzeichnis, Betroffenenrechte, Speicherzugriffe, Auftragsverarbeitung, Löschung und technische Sicherheit

Für eine echte Veröffentlichung bleiben anwaltliche Prüfung, echte Unternehmensdaten, konkrete Hostinganbieter, Auftragsverarbeitungsverträge, Löschkonzept, Transferbewertung und produktive Vertragsbedingungen offen.

## Nachweise

- `evidence.html`: sichtbare Website-Seite mit den abgaberelevanten Nachweisen
- `Nachweise/Bildnachweise_KI.md`: Dokumentation der KI-generierten Bilder, Modellangabe und Nutzung
- `Nachweise/Barrierefreiheit_Audit.md`: WCAG-orientierter Selbsttest mit Tastatur-, Struktur- und Kontrastpruefung
- `Nachweise/Markenrecherche.md`: Markenformen, Nizza-Klassen und Recherchelogik
- `Nachweise/QS_Nachweise.md`: technische und inhaltliche Prüfliste
- `../Oesterreichischer_Rechtsplan.md`: Rechtsplan zur österreichischen Einordnung
- `../Umsetzungsbewertung_Exzellenz.md`: Bewertung und Kritik der Umsetzung

## Validierung

Für die Abgabe wurden Struktur, Demo-Abgrenzung, Rechtsbegriffe, Überschriften, Mediennachweise, Datenschutzhinweise an Formularen und responsive Darstellung geprüft. Die Website setzt keine externen Fonts, Analytics-Skripte oder Zahlungsanbieter ein. Die wichtigsten Nachweise sind nicht nur in Markdown dokumentiert, sondern direkt auf `evidence.html` sichtbar.
