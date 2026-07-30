# AGENTS.md

## Projectoverzicht

Dit project heet **Autocalc**.

Autocalc is een eenvoudige Nederlandstalige website waarmee bezoekers hun autokosten kunnen berekenen.

De website berekent onder andere:

* brandstofkosten per maand;
* vaste autokosten per maand;
* onderhoud en afschrijving;
* totale kosten per maand;
* totale kosten per jaar;
* kosten per kilometer.

Dit is mijn eerste website. Houd wijzigingen daarom eenvoudig, overzichtelijk en goed uit te leggen.

## Technische opbouw

Gebruik uitsluitend:

* HTML;
* CSS;
* gewone JavaScript.

Huidige bestanden:

* `index.html` bevat de structuur en inhoud;
* `style.css` bevat het ontwerp en de responsive weergave;
* `script.js` bevat de berekeningen, invoercontrole en localStorage;
* `README.md` bevat algemene projectinformatie.

Gebruik geen:

* React;
* Vue;
* Angular;
* TypeScript;
* npm;
* Node.js;
* frameworks;
* externe libraries;
* buildproces;
* database;
* backend.

Voeg deze alleen toe wanneer dit uitdrukkelijk in de opdracht wordt gevraagd en duidelijk wordt uitgelegd waarom dit noodzakelijk is.

## Hosting

De repository staat op GitHub.

De website wordt automatisch gepubliceerd via Netlify.

De branch `main` is de live productieversie.

Een wijziging aan `main` kan daardoor direct gevolgen hebben voor de openbare website.

## Algemene regels

* Verander alleen wat in de opdracht wordt gevraagd.
* Behoud bestaande functies tenzij expliciet anders gevraagd.
* Voer geen grote herstructurering uit voor een kleine wijziging.
* Houd de code begrijpelijk voor een beginnende programmeur.
* Gebruik duidelijke namen voor variabelen en functies.
* Vermijd dubbele en onnodig ingewikkelde code.
* Houd zichtbare teksten in correct Nederlands.
* Gebruik eurobedragen in Nederlandse notatie.
* Behoud het bestaande visuele ontwerp waar mogelijk.
* Zorg dat de website goed blijft werken op mobiel en desktop.
* Plaats geen persoonsgegevens, wachtwoorden of API-sleutels in de code.
* Voeg geen tracking, cookies of externe scripts toe zonder expliciete opdracht.
* Verwijder nooit bestanden zonder duidelijke noodzaak.
* Wijzig geen formules buiten de gevraagde scope.

## HTML-regels

* Gebruik geldige en semantische HTML.
* Gebruik duidelijke labels bij alle invoervelden.
* Gebruik correcte invoertypen.
* Zorg dat knoppen het juiste `type` hebben.
* Zorg dat alle gebruikte ID’s uniek zijn.
* Controleer dat ID’s in HTML overeenkomen met de ID’s in JavaScript.
* Behoud een logische headingstructuur.
* Gebruik toegankelijke foutmeldingen.
* Gebruik geen inline JavaScript.
* Gebruik zo weinig mogelijk inline CSS.

## CSS-regels

* Behoud het huidige responsive ontwerp.
* Controleer wijzigingen op desktop en mobiel.
* Voorkom horizontaal scrollen.
* Gebruik bestaande CSS-variabelen waar mogelijk.
* Voeg geen onnodige animaties toe.
* Zorg voor voldoende kleurcontrast.
* Zorg dat toetsenbordfocus zichtbaar blijft.
* Verander de algemene stijl niet zonder expliciete opdracht.

## JavaScript-regels

* Gebruik gewone moderne JavaScript zonder framework.
* Voorkom JavaScript-fouten in de browserconsole.
* Controleer of HTML-elementen bestaan voordat ze worden gebruikt wanneer dat nodig is.
* Sta geen negatieve kosten toe.
* Voorkom delen door nul.
* Controleer lege en ongeldige invoer.
* Rond bedragen alleen af bij het tonen van de uitkomst.
* Rond tussenberekeningen niet onnodig af.
* Gebruik `textContent` voor gewone tekstuitvoer.
* Gebruik `innerHTML` alleen wanneer dit noodzakelijk en veilig is.
* Behoud localStorage-functionaliteit.
* Andere bezoekers mogen nooit de gegevens van een eerdere bezoeker ontvangen.
* LocalStorage mag alleen gegevens in de eigen browser opslaan.

## Rekenregels

Controleer altijd zorgvuldig het verschil tussen:

* kosten per maand;
* kosten per jaar;
* kilometers per maand;
* kilometers per jaar;
* prijs per liter;
* kilometers per liter;
* kosten per kilometer.

De huidige basisberekening is:

1. Liters per maand = kilometers per maand ÷ kilometers per liter.
2. Brandstofkosten per maand = liters per maand × brandstofprijs.
3. Jaarlijkse kosten worden gedeeld door 12.
4. Totale maandkosten zijn alle maandelijkse kosten bij elkaar.
5. Totale jaarkosten zijn maandkosten × 12.
6. Kosten per kilometer zijn totale maandkosten ÷ kilometers per maand.

Voorkom altijd delen door nul.

Verander deze formules alleen wanneer de opdracht dat expliciet vereist.

## Verplichte controles

Controleer na iedere relevante wijziging:

* opent `index.html` correct;
* wordt `style.css` correct geladen;
* wordt `script.js` correct geladen;
* zijn er geen JavaScript-fouten;
* werken de invoervelden;
* werkt de berekenknop;
* werkt de knop om invoer te wissen;
* werkt de voorbeeldknop;
* werkt localStorage;
* worden negatieve waarden geweigerd;
* wordt delen door nul voorkomen;
* werken komma- en puntinvoer waar relevant;
* worden maand- en jaarbedragen correct omgerekend;
* blijft de mobiele layout bruikbaar;
* blijven bestaande functies werken.

## Vast testvoorbeeld

Gebruik bij wijzigingen aan de berekening minimaal dit testgeval:

* kilometers per maand: 1.200;
* brandstofprijs: €2,10;
* verbruik: 1 op 20;
* verzekering: €50 per maand;
* wegenbelasting: €40 per maand;
* onderhoud: €600 per jaar;
* afschrijving: €300 per jaar;
* overige kosten: €10 per maand.

Verwachte uitkomst:

* liters per maand: 60;
* brandstofkosten per maand: €126;
* onderhoud per maand: €50;
* afschrijving per maand: €25;
* totale maandkosten: €301;
* totale jaarkosten: €3.612;
* kosten per kilometer: ongeveer €0,251.

Meld het wanneer de code een andere uitkomst geeft.

## Werkwijze voor Codex

Voer bij iedere opdracht deze stappen uit:

1. Lees eerst de relevante bestanden.
2. Bepaal welke bestanden aangepast moeten worden.
3. Geef kort aan wat je gaat wijzigen.
4. Voer alleen de gevraagde wijziging uit.
5. Controleer de code op fouten.
6. Voer relevante testgevallen uit.
7. Controleer of bestaande functies nog werken.
8. Geef een korte samenvatting van de wijzigingen.
9. Benoem welke bestanden zijn aangepast.
10. Benoem welke controles zijn uitgevoerd.

Bij een onduidelijke opdracht:

* kies de eenvoudigste oplossing die bij de huidige website past;
* voeg geen nieuwe technologie toe;
* maak geen grote aannames;
* vermeld belangrijke aannames in de samenvatting.

## Git-werkwijze

Werk bij voorkeur in een aparte branch.

Push niet rechtstreeks naar `main`, tenzij dit expliciet wordt gevraagd.

Gebruik duidelijke branchnamen, bijvoorbeeld:

* `feature/add-apk-costs`;
* `feature/copy-result`;
* `fix/calculation-validation`;
* `improve/mobile-layout`.

Gebruik duidelijke commitberichten, bijvoorbeeld:

* `Voeg APK-kosten toe aan calculator`;
* `Verbeter validatie van invoervelden`;
* `Herstel berekening kosten per kilometer`;
* `Verbeter mobiele weergave`.

Maak bij grotere wijzigingen een pull request naar `main`.

## Pull-requestbeschrijving

Neem in een pull request op:

### Wat is gewijzigd?

Beschrijf kort de wijziging.

### Waarom?

Beschrijf welk probleem wordt opgelost of welke functie wordt toegevoegd.

### Gewijzigde bestanden

Noem ieder aangepast bestand.

### Uitgevoerde controles

Noem welke tests en handmatige controles zijn uitgevoerd.

### Aandachtspunten

Noem eventuele beperkingen, aannames of risico’s.

## Niet doen

* Geen complete website herschrijven voor een kleine aanpassing.
* Geen frameworks installeren.
* Geen npm-project aanmaken.
* Geen code toevoegen die niet bij de opdracht hoort.
* Geen bestaande functies stilzwijgend verwijderen.
* Geen berekeningen veranderen zonder uitleg.
* Geen persoonlijke voorbeeldgegevens als vaste standaardwaarden gebruiken.
* Geen verzonnen reviews, bezoekersaantallen of keurmerken toevoegen.
* Geen API-sleutels in frontendcode plaatsen.
* Geen analytics of cookies toevoegen zonder expliciete toestemming.
* Geen directe wijzigingen aan productie uitvoeren zonder de gevolgen te vermelden.

## Uitleg aan de eigenaar

De eigenaar van dit project is een beginnende webontwikkelaar.

Leg na iedere wijziging kort uit:

* wat is aangepast;
* waar dit in de code staat;
* hoe de wijziging werkt;
* hoe deze later handmatig kan worden aangepast.

Gebruik eenvoudige en concrete taal.
