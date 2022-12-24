export default {
  name: 'shop',
  title: 'Sklep',
  type: 'document',
  fields: [
    {
      name: 'title_pl',
      title: 'Tytuł PL',
      type: 'string',
    },
    {
      name: 'body_pl',
      title: 'Opis maszyny PL',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title_pl',
        maxLenght: 96,
      },
    },
    {
      name: 'date',
      type: 'datetime',
    },
    {
      name: 'title_en',
      title: 'Tytuł EN',
      type: 'string',
    },
    {
      name: 'body_en',
      title: 'Opis maszyny EN',
      type: 'text',
    },
    {
      name: 'shopImg',
      title: 'Zdjęcie maszyny',
      type: 'image',
    },
    {
      name: 'auction_link',
      title: 'Link do aukcji',
      type: 'string',
    },
  ],
};
