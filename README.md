# ABN AMRO: Toegankelijkheidsverklaring
ABN AMRO wil een pagina met een toegankelijkheidsverklaring om te voldoen aan de nieuwe Europese wetgeving, de European Accessibility Act, die in 2025 ingaat voor onder andere banken.

https://irisvw.github.io/the-startup-responsive-interactive-website

LET OP: als je de website niet kunt zien omdat de browser denkt dat het een phishing site is, kun je dat omzeilen door op 'details' te klikken, gevolgd door 'deze onveilige site'/'this unsafe site' (ik beloof dat ik niet je bankgegevens probeer te stelen).

<img src="https://github.com/user-attachments/assets/f19f3c8a-edd9-463a-b932-b15c0826beb7" height="350">

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Ik heb een pagina gemaakt in de huisstijl van ABN AMRO. De pagina bevat een expandible navbar met dropdowns, met geanimeerde icoontjes die de staat van de dropdown representeren. Ook bevat de navbar een icoon voor een zoekbalk, die verandert in een volledige zoekbalk als je daar op klikt. De focus wordt dan automatisch op de zoekbalk gezet, zodat de gebruiker direct kan typen.

De footer bevat een collapsible sectie met meer linkjes ('snel zelf regelen'). De list-style-type is customized met :before elements, die een stukje naar rechts springen wanneer je er overheen hovert.

De pagina is mobile-first gebouwd en is responsive. Op smallere schermen is de navbar horizontaal scrollbaar. De headers zijn een kleinere lettergrootte, zodat ze mooi op het scherm passen. De onderdelen van de footer komen naast elkaar te staan op bredere schermen, en de grote headers worden groter.

Ik heb de pagina accessible gemaakt voor keyboard gebruikers door een skip link toe te voegen. Ook kunnen de dropdowns worden geopend met de enter toets, en ook weer gesloten met enter of escape. 
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
#### Desktop:
<img src="https://github.com/user-attachments/assets/19ef5098-81f5-4dd1-aea2-36bbbff43c07" height="350">
<img src="https://github.com/user-attachments/assets/3ed4a1d2-b5cc-409c-b72d-cc6f6e0fa6ea" height="350">

#### Mobile:
<img src="https://github.com/user-attachments/assets/666b0ed8-4196-491f-8058-d89c3621c71c" height="350">
<img src="https://github.com/user-attachments/assets/3ed0bb02-8e58-42f7-9a6f-57302c5c31b7" height="350">

#### Expandible navbar:
<img src="https://github.com/user-attachments/assets/e3098fcd-e8fb-40e4-9b90-47deedf3c326" height="350">

#### Expandible searchbar:
<img src="https://github.com/user-attachments/assets/ff948e58-1a41-41cb-b15e-f93bdc0fcd5c" height="350">


## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
#### HTML
- ##### Aria labels
Ik heb aria labels gebruikt om de website toegankelijk te maken voor screenreaders. Elke nav button heeft een aria-expanded attribute, waardoor duidelijk wordt dat het expandible is. Ook hebben ze de aria-controls attribute, die de id bevat van de subnav, waar de inhoud zich bevindt.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/index.html#L43-L45
- ##### Details element
Ik heb het `<details>` element gebruikt om de 'snel zelf regelen' sectie collapsible te maken.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/index.html#L194-L197
- 

#### CSS
- ##### Before & After
Ik heb het :before element gebruikt om de lijst van linkjes van geanimeerde pijltjes te voorzien.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/styles/style.css#L553-L567
- ##### :has selector
Ik heb de :has selector gebruikt om de icoontjes van de dropdown om te laten draaien wanneer de dropdown geopend of gesloten is.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/styles/style.css#L218-L228
- ##### :last-child selector
In de lijstjes van linkjes die van elkaar gescheiden staan met een verticale streep, heb ik het :last-child pseudo-element gebruikt om een uitzondering te maken voor het laatstje linkje in de lijst.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/styles/style.css#L529-L531
- ##### @starting-style
Ik heb @starting-style gebruikt om de zoekbalk geleidelijk te animeren van `display: none` naar `display: block`.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/styles/style.css#L289-L292
- ##### text-wrap: balance
Ik heb deze nieuwe CSS property gebruikt om de headers mooier weer te geven als het scherm te smal is om de tekstinhoud op één regel weer te geven.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/fc82dd4b42eafd7f49e2aa25dc6b911d67ed058d/styles/style.css#L111

#### JavaScript
- ##### Focus function

Ik heb de functie focus() gebruikt om de focus te verplaatsen naar de zoekbalk wanneer deze wordt geopend.
https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/scripts/searchbar.js#L9
- ##### Toggling aria attributes
Ik zet de aria-expanded van de navbar aan en uit met JavaScript.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/scripts/nav.js#L38-L42
- ##### querySelectorAll
Ik heb hier querySelectorAll gebruikt in combinatie met een sibling selector om alle subnavs te selecteren.

https://github.com/irisvw/the-startup-responsive-interactive-website/blob/dca2bb9f2805ff72f27f63903ae0127048ecc4b6/scripts/nav.js#L2

Voor bonuspunten:

![image](https://github.com/user-attachments/assets/52c55f53-9a61-44b8-8216-6c3b5f8faa01)


### Code conventies
HTML
- Gebruik tabs om in te springen.
- Gebruik een nieuwe regel voor block-level elementen.
- Gebruik dubbele quotes `"` voor attributes.

CSS
- Gebruik enkel lowercase letters en hyphens voor CSS class namen en custom variable namen.
- Gebruik geen ID selectors.
- Nest selectors niet meer dan drie levels diep.
- Nested selectors in een rule declaration komen als laatste. Voeg witruimte toe aan je rule declarations en nested selectors, en tussen aangrenzende nested selectors.
- Wanneer je meerdere selectors in een rule declaration gebruikt, zet je elke selector op zijn eigen regel.
- Zet een spatie voor de opening brace `{` in rule declarations.
- Zet de closing braces `}` van rule declarations op een nieuwe regel.
- Voeg witruimte toe tussen rule declarations.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


