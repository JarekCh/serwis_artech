import React from 'react';

const PrivacyPolicy = ({ isEnglish }) => {
  return (
    <section className='p-5 '>
      <p className='text-center text-2xl'>
        <span>
          <strong>Polityka prywatności</strong>
        </span>
      </p>
      <strong>I. Postanowienia ogólne</strong>
      <ol className='list-decimal list-inside flex flex-col gap-2'>
        <li>
          Polityka prywatności określa, jak zbierane, przetwarzane i
          przechowywane są dane osobowe Użytkowników niezbędne do świadczenia
          usług drogą elektroniczną za pośrednictwem serwisu internetowego{' '}
          <span>[adres strony]</span> (dalej: Serwis).
        </li>
        <li>
          Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i
          rozwoju usług w nim oferowanych.
        </li>
        <li>
          Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane zgodnie
          z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
          27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
          przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
          takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie
          o ochronie danych, dalej RODO) oraz ustawą o ochronie danych osobowych
          z dnia 10 maja 2018 r.
        </li>
      </ol>
      <strong>II. Administrator danych</strong>
      <div>
        dministratorem danych osobowych zbieranych poprzez Serwis jest{' '}
        <span>[nazwa osoby prawnej/przedsiębiorcy/osoby fizycznej]</span>,
        adres: <span>[adres siedziby/zamieszkania]</span>, KRS:{' '}
        <span>[numer]</span>, NIP: <span>[numer]</span>, REGON:{' '}
        <span>[numer]</span>, adres poczty elektronicznej:{' '}
        <span>[adres e-mail]</span> (dalej: Administrator).
      </div>
      <strong>III. Cel zbierania danych osobowych</strong>
      <ol>
        <li>
          Dane osobowe wykorzystywane są w celu:
          <ul>
            <li>rejestracji konta i weryfikacji tożsamości Użytkownika,</li>
            <li>umożliwienia logowania do Serwisu,</li>
            <li>realizacji umowy dotyczącej usług i e-usług,</li>
            <li>
              komunikacji z Użytkownikiem (livechat, formularz kontaktowy itp.)
            </li>
            <li>
              wysyłki newslettera (po wyrażeniu zgody Użytkownika na jego
              otrzymywanie),
            </li>
            <li>prowadzenia systemu komentarzy,</li>
            <li>świadczenia usług społecznościowych,</li>
            <li>promocji oferty Administratora,</li>
            <li>marketingu, remarketingu, afiliacji,</li>
            <li>personalizacji Serwisu dla Użytkowników,</li>
            <li>działań analitycznych i statystycznych,</li>
            <li>windykacji należności,</li>
            <li>ustalenia i dochodzenia roszczeń albo obrony przed nimi.</li>
          </ul>
        </li>
        <li>
          Podanie danych jest dobrowolne, ale niezbędne do zawarcia umowy albo
          skorzystania z innych funkcjonalności Serwisu.
        </li>
      </ol>
      <strong>IV. Rodzaj przetwarzanych danych osobowych</strong>
      <div>
        Administrator może przetwarzać dane osobowe Użytkownika: imię i
        nazwisko, data urodzenia, adres zamieszkania, adres e-mail, numer
        telefonu, NIP.
      </div>
      <strong>V. Okres przetwarzania danych osobowych</strong>
      <div>Dane osobowe Użytkowników będą przetwarzane przez okres:</div>
      <ul>
        <li>
          gdy podstawą przetwarzania danych jest wykonanie umowy – do momentu
          przedawnienia roszczeń po jej wykonaniu,
        </li>
        <li>
          gdy podstawą przetwarzania danych jest zgoda – do momentu jej
          odwołania, a po odwołaniu zgody do przedawnienia roszczeń.
        </li>
      </ul>
      <div>
        W obu przypadkach termin przedawnienia wynosi 6 lat, a dla roszczeń
        o świadczenia okresowe i roszczeń dotyczących prowadzenia działalności
        gospodarczej – 3 lata (jeśli przepis szczególny nie stanowi inaczej).
      </div>
      <strong>VI. Udostępnianie danych osobowych</strong>
      <ol>
        <li>
          Dane osobowe Użytkowników mogą być przekazywane: podmiotom powiązanym
          z Administratorem, jego podwykonawcom, podmiotom współpracującym z
          Administratorem np. firmom obsługującym e-płatności, firmom
          świadczącym usługi kurierskie/pocztowe, kancelariom prawnym.
        </li>
        <li>
          Dane osobowe Użytkowników <span>nie będą/będą</span> przekazywane poza
          teren Europejskiego Obszaru Gospodarczego (EOG).
        </li>
      </ol>
      <strong>VII. Prawa Użytkowników</strong>
      <ol>
        <li>
          Użytkownik Serwisu ma prawo do: dostępu do treści swoich danych
          osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
          przenoszenia, wniesienia sprzeciwu wobec przetwarzania, cofnięcia
          zgody w każdej chwili (co nie ma wpływu na zgodność z prawem
          przetwarzania dokonanego w oparciu o zgodę przed jej cofnięciem).
        </li>
        <li>
          Zgłoszenie o wystąpieniu przez Użytkownika z uprawnieniem wynikającym
          z wymienionych praw należy przesłać na adres{' '}
          <span>[adres e-mail]</span>.
        </li>
        <li>
          Administrator spełnia lub odmawia spełnienia żądania niezwłocznie –
          maksymalnie w ciągu miesiąca od jego otrzymania.
        </li>
        <li>
          Użytkownik ma prawo złożyć skargę do Prezesa Urzędu Ochrony Danych
          Osobowych, jeśli uzna, że przetwarzanie narusza jego prawa i wolności
          (RODO).
        </li>
      </ol>
      <strong>VIII. Pliki cookies</strong>
      <ol>
        <li>
          Serwis zbiera informacje za pomocą plików cookies – sesyjnych, stałych
          i podmiotów zewnętrznych.
        </li>
        <li>
          Zbieranie plików cookies wspiera poprawne świadczenie usług w Serwisie
          i służy celom statystycznym.
        </li>
        <li>
          Użytkownik może określić zakres dostępu plików cookies do swojego
          urządzenia w ustawieniach przeglądarki.
        </li>
      </ol>
      <strong>IX. Zautomatyzowane podejmowanie decyzji i profilowanie</strong>
      <ol>
        <li>
          Dane Użytkowników nie mogą być przetwarzane w zautomatyzowany sposób
          tak, że na skutek tego mogłyby zapaść wobec nich jakiekolwiek decyzje.
        </li>
        <li>
          Dane Użytkowników mogą być profilowane celem dostosowania treści i
          personalizacji oferty po wyrażeniu przez nich zgody.
        </li>
      </ol>
      <strong>X. Postanowienia końcowe</strong>
      <ol>
        <li>
          Administrator ma prawo do wprowadzenia zmian w Polityce prywatności,
          przy czym prawa Użytkowników nie zostaną ograniczone.
        </li>
        <li>
          Informacja o wprowadzonych zmianach pojawi się w formie komunikatu
          dostępnego w Serwisie.
        </li>
        <li>
          W sprawach nieuregulowanych w niniejszej Polityce prywatności
          obowiązują przepisy RODO i przepisy prawa polskiego.
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicy;
