# Qualitaetssicherung fuer von Poncet Cloud

Stand: 17. Mai 2026

## Umfang

Geprueft wird die statische Demo-Website `von Poncet Cloud` mit folgenden Seiten:

- `index.html`
- `product.html`
- `pricing.html`
- `cart.html`
- `contact.html`
- `about.html`
- `accessibility.html`
- `copyright.html`
- `privacy.html`
- `license.html`
- `imprint.html`

## Durchgefuehrte Pruefungen

| Bereich | Methode | Ergebnis |
| --- | --- | --- |
| Seitenstruktur | Suche nach `h1` je HTML-Datei | Ziel: genau eine Hauptueberschrift pro Seite |
| Ueberschriftenstil | Suche nach Punkten in `h1` bis `h3` | Ziel: keine abschliessenden Punkte in Ueberschriften |
| Oesterreichischer Rechtsfokus | Begriffsaudit gegen deutsche Rechtsbegriffe | Ziel: keine TMG-, DDG-, BGB-, MStV- oder USt-IdNr.-Begriffe |
| Demo-Abgrenzung | Sichtpruefung Warenkorb, Datenschutz, Lizenz, Kontakt | Ziel: kein echter Vertrag, keine Zahlung, keine Serveruebermittlung |
| Barrierefreiheit | Strukturpruefung, Formularlabels, Skip-Link, Fokuszustand, Alt-Texte | Ziel: WCAG-2.2-AA-orientierte Umsetzung |
| Kontrast | WCAG-Leuchtdichteberechnung fuer Hauptfarbkombinationen | Ziel: normale Textkombinationen mindestens 4,5:1 |
| Responsive Layouts | Playwright Desktop und Mobile | Ziel: keine horizontalen Ueberlaeufe |
| Medienrechte | Abgleich `assets/images`, `assets/media`, `copyright.html`, `Bildnachweise_KI.md` und `Mediennachweise.md` | Ziel: jedes Medium dokumentiert |
| Externe Requests | statische Dateistruktur, keine CDN-Schriften, keine Analytics | Ziel: keine nicht dokumentierten Drittanbieter |

## Ergebnis der erneuten Validierung

Erneut validiert am 17. Mai 2026:

| Pruefung | Ergebnis |
| --- | --- |
| Deutsche Rechtsbegriffe im Website-Code | keine Treffer in HTML-Dateien |
| Deutsche Rechtsbegriffe in Nachweisen | nur erklaerende Audit-Regeln in `QS_Nachweise.md` |
| Punkte in `h1` bis `h3` | keine Treffer |
| `main#main-content` auf allen Seiten | bestanden |
| Skip-Link auf allen Seiten | bestanden |
| Lokale Links und Assets | 11 HTML-Dateien bestanden |
| Genau eine `h1` je Seite | 11 HTML-Dateien bestanden |
| Local Storage, Cookies, Analytics, Payment-Skripte | keine Treffer |
| Mediennachweise fuer alle Bild- und Video-Dateien | bestanden |
| Playwright Desktop 1440x1000 | 11 Seiten ohne horizontalen Overflow |
| Playwright Mobile 390x844 | 11 Seiten ohne horizontalen Overflow |
| Browser-Konsole | 0 Fehler, 0 Warnungen |
| Kontrastmatrix | dokumentiert in `Nachweise/Barrierefreiheit_Audit.md` |
| Marken-Vorrecherche | dokumentiert in `Nachweise/Markenrecherche.md` |

Neue Screenshots:

- `output/playwright/final-about-desktop.png`
- `output/playwright/final-imprint-mobile.png`

## Nachbesserungen nach Kritik

- `accessibility.html` verweist nun auf einen eigenen WCAG-orientierten Selbsttest.
- `Nachweise/Barrierefreiheit_Audit.md` dokumentiert Struktur, Tastatur, Medien, Formulare und Kontrastwerte.
- `style/style.css` verwendet ein dunkleres Akzentgruen, damit Weiss auf Akzentflaechen AA-konform bleibt.
- `privacy.html` enthaelt nun ein Verarbeitungsverzeichnis, Empfaenger/Auftragsverarbeitung, Drittlandtransfer, Betroffenenrechte, Sicherheitsmassnahmen, Loeschlogik und Rechtsgrundlagen; Warenkorb und Kontaktformular verweisen direkt darauf.
- `license.html` trennt Nutzungsrechte, Laufzeit/Support, Gewaehrleistung und Haftung klarer.
- `imprint.html` enthaelt Rechtsform, Gewerbewortlaut, genauere Behoerdenangabe und eine Offenlegungssektion.
- `Nachweise/Markenrecherche.md` enthaelt eine dokumentierte Web-Vorrecherche mit Risikobewertung.
 - `copyright.html` enthaelt eine ausdrueckliche Rechtekette und Rechtenachweis-Spalte.
 - `assets/media/cloud-time-lapse.webm` ist als weiteres Medienformat dokumentiert.

## Bekannte Grenzen

- Es wurde keine anwaltliche Rechtspruefung durchgefuehrt.
- Es wurde keine professionelle Screenreader-Studie mit Nutzerinnen und Nutzern durchgefuehrt.
- Ein produktiver Hostinganbieter ist noch nicht final dokumentiert; Serverlogs und Auftragsverarbeiter muessen vor echter Veroeffentlichung konkretisiert werden.
- Lighthouse/Axe kann lokal nachgezogen werden, wenn die Abgabeumgebung diese Tools bereitstellt.

## Soll-Kommandos fuer die erneute Validierung

```bash
rg -n "TMG|DDG|BGB|Deutschland|deutsch|Widerrufsrecht|Verbraucherstreitbeilegung|USt-IdNr|§ 5 TMG|§ 18 MStV" von Poncet Cloud
rg -n "<h[1-3][^>]*>[^<]*\\.</h[1-3]>" vonPoncetCloud/*.html
rg -n "<main(?![^>]*id=\"main-content\")" vonPoncetCloud/*.html
rg -n "skip-link" vonPoncetCloud/*.html
```

## Abgabehärte

Die Website ist als statische Hochschul-Demo abgabegeeignet, wenn README, Rechtsplan, QS-Nachweise, Markenrecherche und KI-Bildnachweise gemeinsam abgegeben werden. Fuer eine echte Veroeffentlichung bleiben anwaltliche Rechtspruefung, Hosting-Datenschutz, Auftragsverarbeitung und reale Unternehmensdaten offen.
