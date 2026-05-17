# Barrierefreiheit-Audit fuer von Poncet Cloud

Stand: 17. Mai 2026

Dieses Dokument ergaenzt die Barrierefreiheitserklaerung der statischen Hochschul-Demo `von Poncet Cloud`. Es ist ein nachvollziehbarer Selbsttest und keine externe Zertifizierung.

## Pruefumfang

Gepruefte Seiten:

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

Zielstandard:

- WCAG 2.2 auf Konformitaetsstufe AA als technisches Ziel
- Oesterreichischer Kontext: Barrierefreiheitsgesetz fuer E-Commerce als Orientierung fuer einen echten Betrieb

## Manuelle Strukturpruefung

| Kriterium | Ergebnis | Nachweis |
| --- | --- | --- |
| Genau eine `h1` je Seite | bestanden | `find . -maxdepth 2 -type f -name '*.html' ... rg -o "<h1"` |
| Skip-Link vorhanden | bestanden | `.skip-link` in allen HTML-Dateien |
| `main#main-content` vorhanden | bestanden | alle Hauptseiten haben denselben Sprunganker |
| Navigation semantisch ausgezeichnet | bestanden | `nav aria-label="Hauptnavigation"` und Footer-Navigation |
| Aktuelle Seite markiert | bestanden auf Hauptseiten | `aria-current="page"` in Navigation |
| Formularfelder beschriftet | bestanden | Kontakt- und Warenkorbformular verwenden `label for` |
| Statusmeldungen fokussierbar | bestanden | `.form-status` mit `tabindex="-1"` und Fokus nach Submit |
| Alternativtexte fuer Inhaltsbilder | bestanden | alle eingebundenen `img`-Elemente haben `alt` |
| Keine automatisch startenden Sounds/Videos | bestanden | eingebundenes Video mit `controls`, kein `autoplay`, keine `audio`- oder `iframe`-Elemente |
| Keine reine Farbinformation | bestanden | Preise, Tarife, Hinweise und Status sind textlich benannt |

## Tastaturpruefung

| Bereich | Erwartung | Ergebnis |
| --- | --- | --- |
| Header-Navigation | Tab-Reihenfolge folgt sichtbarer Reihenfolge | bestanden |
| Skip-Link | wird beim ersten Tab sichtbar und springt zum Hauptinhalt | bestanden |
| Preislinks | Tarife sind per Tastatur erreichbar | bestanden |
| Warenkorbformular | Select, Number-Input, Textfelder, Radios, Checkbox und Button bedienbar | bestanden |
| Kontaktformular | Textfelder, Select, Textarea und Button bedienbar | bestanden |
| Seitlich scrollender About-Bereich | Inhalt ist scrollbar und Karten bleiben im DOM erreichbar | bestanden mit Einschraenkung: Screenreader-Test fuer echten Betrieb empfohlen |

## Kontrastmatrix

Berechnung nach WCAG-Formel fuer relative Leuchtdichte. Die wichtigsten Text-/Hintergrundkombinationen erreichen AA fuer normalen Text, soweit sie fuer normalen Text eingesetzt werden.

| Vordergrund | Hintergrund | Ratio | Bewertung |
| --- | --- | ---: | --- |
| `#071421` | `#ffffff` | 18.57:1 | AA/AAA bestanden |
| `#24384a` | `#ffffff` | 12.07:1 | AA/AAA bestanden |
| `#667789` | `#ffffff` | 4.60:1 | AA bestanden |
| `#0f5fc8` | `#ffffff` | 6.02:1 | AA bestanden |
| `#0a3f88` | `#ffffff` | 10.10:1 | AA/AAA bestanden |
| `#0b766d` | `#ffffff` | 5.49:1 | AA bestanden |
| `#075d55` | `#ffffff` | 7.76:1 | AA/AAA bestanden |
| `#473113` | `#fff8e8` | 11.56:1 | AA/AAA bestanden |
| `#ffffff` | `#0f5fc8` | 6.02:1 | AA bestanden |
| `#ffffff` | `#0a3f88` | 10.10:1 | AA/AAA bestanden |
| `#063b35` | `#e9fbf6` | 11.63:1 | AA/AAA bestanden |
| `#06251d` | `#6ee0c6` | 10.19:1 | AA/AAA bestanden |

Hinweis: `#c78424` wird als Fokus-/Akzentfarbe und Rahmenfarbe verwendet, nicht als normaler Fliesstext auf Weiss.

## Bekannte Grenzen

- Kein externer WCAG-Zertifizierungsbericht.
- Kein dokumentierter Test mit NVDA, JAWS oder VoiceOver.
- Kein produktiver Test mit echtem Hosting, echten Serverlogs oder realem Checkout.
- Dynamische Formularvalidierung ist minimal, weil die Formulare bewusst keine echte Serveruebermittlung ausloesen.

## Ergebnis

Die Demo ist nach dem dokumentierten Selbsttest abgabegeeignet und auf WCAG 2.2 AA ausgerichtet. Fuer einen echten oesterreichischen Webshop sollten ein automatisierter Axe-/WAVE-Test, ein Screenreader-Test und ein produktiver Test mit realem Hosting nachgezogen werden.
