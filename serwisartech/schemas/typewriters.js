export default {
  name: 'typewriters',
  title: 'Maszyny do pisania',
  type: 'document',
  fields: [
    {
      name: 'title_pl',
      title: 'Tytuł PL',
      type: 'string',
    },
    {
      name: 'body_pl',
      title: 'Opis naprawy PL',
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
      title: 'Opis naprawy EN',
      type: 'text',
    },
    {
      name: 'typewritersImgs',
      title: 'Zdjęcia maszyn',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
