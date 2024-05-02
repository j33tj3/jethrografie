import { ReactNode } from "react";

export const Terms = () => {
  return (
    <>
      <TermsSection>
        <TermsTitle>Artikel 1 - Toepasselijkheid</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten
            tussen Jethrografie, gevestigd te Haarlem, KVK-nummer 53918134, en
            de opdrachtgever, hierna te noemen &quot;klant&quot;, tenzij
            schriftelijk anders is overeengekomen.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 2 - Beschikbaarheid</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Jethrografie is beschikbaar voor opdrachten buiten reguliere
            kantooruren, voornamelijk in de avonden en weekenden, vanwege het
            parttime karakter van de onderneming.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 3 - Opdrachten</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Opdrachten dienen tijdig en schriftelijk te worden overeengekomen
            tussen Jethrografie en de klant.
          </TermsListItem>
          <TermsListItem>
            De aard, duur, locatie en eventuele bijzondere wensen dienen
            duidelijk te worden vastgelegd in de opdracht.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 4 - Tarieven en Betaling</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            De tarieven van Jethrografie worden voorafgaand aan de opdracht
            schriftelijk aan de klant kenbaar gemaakt.
          </TermsListItem>
          <TermsListItem>
            Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij
            schriftelijk anders overeengekomen.
          </TermsListItem>
          <TermsListItem>
            Bij niet tijdige betaling is de klant in verzuim en is Jethrografie
            gerechtigd om wettelijke rente en incassokosten in rekening te
            brengen.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 5 - Annulering en Wijzigingen</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Bij annulering van een opdracht door de klant binnen 48 uur voor
            aanvang van de opdracht is de klant verplicht om 50% van het
            overeengekomen tarief te betalen.
          </TermsListItem>
          <TermsListItem>
            Wijzigingen in de opdracht dienen tijdig en schriftelijk te worden
            doorgegeven en zijn afhankelijk van beschikbaarheid bij
            Jethrografie.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 6 - Aansprakelijkheid</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Jethrografie is niet aansprakelijk voor schade ontstaan tijdens of
            als gevolg van de uitvoering van de opdracht, tenzij er sprake is
            van opzet of grove nalatigheid aan de zijde van Jethrografie.
          </TermsListItem>
          <TermsListItem>
            De klant is verantwoordelijk voor het verkrijgen van eventuele
            benodigde toestemmingen, vergunningen of licenties voor de
            uitvoering van de opdracht.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 7 - Intellectueel Eigendom</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Alle intellectuele eigendomsrechten op de door Jethrografie gemaakte
            foto&apos;s blijven bij Jethrografie, tenzij schriftelijk anders is
            overeengekomen.
          </TermsListItem>
          <TermsListItem>
            De klant verkrijgt slechts een gebruiksrecht op de foto&apos;s voor
            de overeengekomen doeleinden.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 8 - Klachten</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Klachten over de uitvoering van de opdracht dienen zo spoedig
            mogelijk, doch uiterlijk binnen 7 dagen na voltooiing van de
            opdracht, schriftelijk te worden gemeld aan Jethrografie.
          </TermsListItem>
          <TermsListItem>
            Indien de klacht gegrond wordt bevonden, zal Jethrografie naar beste
            vermogen de klacht binnen een redelijke termijn oplossen.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 9 - Toepasselijk Recht en Geschillen</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Op deze algemene voorwaarden en alle overeenkomsten tussen
            Jethrografie en de klant is Nederlands recht van toepassing.
          </TermsListItem>
          <TermsListItem>
            Geschillen tussen Jethrografie en de klant zullen worden voorgelegd
            aan de bevoegde rechter.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <TermsSection>
        <TermsTitle>Artikel 10 - Slotbepalingen</TermsTitle>
        <TermsListOrdered>
          <TermsListItem>
            Indien enige bepaling van deze algemene voorwaarden nietig of
            vernietigbaar wordt geacht, blijven de overige bepalingen
            onverminderd van kracht.
          </TermsListItem>
          <TermsListItem>
            Deze algemene voorwaarden kunnen te allen tijde door Jethrografie
            worden gewijzigd. De gewijzigde voorwaarden treden in werking op het
            moment van publicatie.
          </TermsListItem>
        </TermsListOrdered>
      </TermsSection>
      <p>Opgesteld op 31 januari 2024.</p>
    </>
  );
};

const TermsSection = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-y-4 text-base">{children}</div>;
};

const TermsTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-xl font-bold">{children}</h2>;
};

const TermsListOrdered = ({ children }: { children: ReactNode }) => {
  return <ol className="list-decimal pl-6 [&+ul]:ml-6">{children}</ol>;
};

const _TermsListUnordered = ({ children }: { children: ReactNode }) => {
  return <ul className="list-disc pl-6">{children}</ul>;
};

const TermsListItem = ({ children }: { children: ReactNode }) => {
  return <li className="">{children}</li>;
};
