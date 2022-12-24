import React from 'react';

const PrivacyPolicy = () => {
  const ol = 'list-decimal list-inside flex flex-col gap-2 ml-3';
  const ul = 'list-disc list-inside flex flex-col gap-2 ml-3';

  return (
    <section className='p-5 '>
      <p className='text-center text-2xl mb-5'>
        <span>
          <strong>Polityka prywatności</strong>
        </span>
      </p>
      <div>
        <strong>I. Postanowienia ogólne</strong>
        <ol className={`${ol} my-3`}>
          <li>
            Polityka prywatności określa, jak zbierane, przetwarzane i
            przechowywane są dane osobowe Użytkowników niezbędne do świadczenia
            usług drogą elektroniczną za pośrednictwem serwisu internetowego{' '}
            <span>www.serwisartech.pl , www.naprawamaszyndopisania.pl, </span>.
          </li>
          <li>
            Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i
            rozwoju usług w nim oferowanych.
          </li>
          <li>
            Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane
            zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
            2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
            (ogólne rozporządzenie o ochronie danych, dalej RODO) oraz ustawą o
            ochronie danych osobowych z dnia 10 maja 2018 r.
          </li>
        </ol>
      </div>
      <div>
        <strong>II. Administrator danych</strong>
        <div className='ml-3 my-3'>
          Administratorem danych osobowych zbieranych poprzez Serwis jest{' '}
          <span>ARTECH SERWIS ROBERT CHARCHUŁA</span>, adres:{' '}
          <span>Ul. Ogrodowa, nr 50, Warszawa 00-873</span>, , NIP:{' '}
          <span>5222176854</span>, REGON: <span>015472753</span>, adres poczty
          elektronicznej: <span>biuro@serwisartech.pl</span>.
        </div>
      </div>
      <div className='my-3'>
        <strong>III. Cel zbierania danych osobowych</strong>
        <ol className={`${ol} mt-3`}>
          <li>
            Dane osobowe wykorzystywane są w celu:
            <ul className={`${ul}`}>
              <li className='mt-3 ml-3'>
                rejestracji konta i weryfikacji tożsamości Użytkownika,
              </li>
              <li className='ml-3'>umożliwienia logowania do Serwisu,</li>
              <li className='ml-3'>
                realizacji umowy dotyczącej usług i e-usług,
              </li>
              <li className='ml-3'>
                komunikacji z Użytkownikiem (livechat, formularz kontaktowy
                itp.)
              </li>
              <li className='ml-3'>
                wysyłki newslettera (po wyrażeniu zgody Użytkownika na jego
                otrzymywanie),
              </li>
              <li className='ml-3'>prowadzenia systemu komentarzy,</li>
              <li className='ml-3'>świadczenia usług społecznościowych,</li>
              <li className='ml-3'>promocji oferty Administratora,</li>
              <li className='ml-3'>marketingu, remarketingu, afiliacji,</li>
              <li className='ml-3'>personalizacji Serwisu dla Użytkowników,</li>
              <li className='ml-3'>działań analitycznych i statystycznych,</li>
              <li className='ml-3'>windykacji należności,</li>
              <li className='pb-3 ml-3'>
                ustalenia i dochodzenia roszczeń albo obrony przed nimi.
              </li>
            </ul>
          </li>
          <li>
            Podanie danych jest dobrowolne, ale niezbędne do zawarcia umowy albo
            skorzystania z innych funkcjonalności Serwisu.
          </li>
        </ol>
      </div>
      <div>
        <strong>IV. Rodzaj przetwarzanych danych osobowych</strong>
        <div className='pl-3 mt-3'>
          Administrator może przetwarzać dane osobowe Użytkownika: imię i
          nazwisko, data urodzenia, adres zamieszkania, adres e-mail, numer
          telefonu, NIP.
        </div>
      </div>
      <div className='my-3'>
        <strong>V. Okres przetwarzania danych osobowych</strong>
        <div className='mt-3 ml-3'>
          Dane osobowe Użytkowników będą przetwarzane przez okres:
        </div>
        <ul className={`${ul}`}>
          <li className='ml-3 mt-3'>
            gdy podstawą przetwarzania danych jest wykonanie umowy – do momentu
            przedawnienia roszczeń po jej wykonaniu,
          </li>
          <li className='pb-3 ml-3'>
            gdy podstawą przetwarzania danych jest zgoda – do momentu jej
            odwołania, a po odwołaniu zgody do przedawnienia roszczeń.
          </li>
        </ul>
        <div className='ml-3'>
          W obu przypadkach termin przedawnienia wynosi 6 lat, a dla roszczeń
          o świadczenia okresowe i roszczeń dotyczących prowadzenia działalności
          gospodarczej – 3 lata (jeśli przepis szczególny nie stanowi inaczej).
        </div>
      </div>
      <div>
        <strong>VI. Udostępnianie danych osobowych</strong>
        <ol className={`${ol}`}>
          <li className='mt-3'>
            Dane osobowe Użytkowników mogą być przekazywane: podmiotom
            powiązanym z Administratorem, jego podwykonawcom, podmiotom
            współpracującym z Administratorem np. firmom obsługującym
            e-płatności, firmom świadczącym usługi kurierskie/pocztowe,
            kancelariom prawnym.
          </li>
          <li>
            Dane osobowe Użytkowników <span>nie będą/będą</span> przekazywane
            poza teren Europejskiego Obszaru Gospodarczego (EOG).
          </li>
        </ol>
      </div>
      <div className='my-3'>
        <strong>VII. Prawa Użytkowników</strong>
        <ol className={`${ol}`}>
          <li className='mt-3'>
            Użytkownik Serwisu ma prawo do: dostępu do treści swoich danych
            osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
            przenoszenia, wniesienia sprzeciwu wobec przetwarzania, cofnięcia
            zgody w każdej chwili (co nie ma wpływu na zgodność z prawem
            przetwarzania dokonanego w oparciu o zgodę przed jej cofnięciem).
          </li>
          <li>
            Zgłoszenie o wystąpieniu przez Użytkownika z uprawnieniem
            wynikającym z wymienionych praw należy przesłać na adres{' '}
            <span>[adres e-mail]</span>.
          </li>
          <li>
            Administrator spełnia lub odmawia spełnienia żądania niezwłocznie –
            maksymalnie w ciągu miesiąca od jego otrzymania.
          </li>
          <li>
            Użytkownik ma prawo złożyć skargę do Prezesa Urzędu Ochrony Danych
            Osobowych, jeśli uzna, że przetwarzanie narusza jego prawa i
            wolności (RODO).
          </li>
        </ol>
      </div>
      <div>
        <strong>VIII. Pliki cookies</strong>
        <ol className={`${ol} my-3`}>
          <li>
            Serwis zbiera informacje za pomocą plików cookies – sesyjnych,
            stałych i podmiotów zewnętrznych.
          </li>
          <li>
            Zbieranie plików cookies wspiera poprawne świadczenie usług w
            Serwisie i służy celom statystycznym.
          </li>
          <li>
            Użytkownik może określić zakres dostępu plików cookies do swojego
            urządzenia w ustawieniach przeglądarki.
          </li>
        </ol>
      </div>
      <div className='my-3'>
        <strong>IX. Zautomatyzowane podejmowanie decyzji i profilowanie</strong>
        <ol className={`${ol} my-3`}>
          <li>
            Dane Użytkowników nie mogą być przetwarzane w zautomatyzowany sposób
            tak, że na skutek tego mogłyby zapaść wobec nich jakiekolwiek
            decyzje.
          </li>
          <li>
            Dane Użytkowników mogą być profilowane celem dostosowania treści i
            personalizacji oferty po wyrażeniu przez nich zgody.
          </li>
        </ol>
      </div>
      <div className='my-3'>
        <strong>X. Postanowienia końcowe</strong>
        <ol className={`${ol} my-3`}>
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
      </div>
    </section>
  );
};

export default PrivacyPolicy;
