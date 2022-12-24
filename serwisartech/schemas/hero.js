export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  initialValue: {
    isNotify: false,
  },
  fields: [
    {
      name: 'isNotify',
      title: 'Czy wyświetlić powiadomienie??',
      type: 'boolean',
    },
    {
      name: 'notification',
      title: 'Powiadomienie',
      type: 'text',
    },
    {
      name: 'title_pl',
      title: 'O nas PL',
      type: 'string',
    },
    {
      name: 'text_pl',
      title: 'O nas tekst PL',
      type: 'text',
    },
    {
      name: 'title_en',
      title: 'O nas EN',
      type: 'string',
    },
    {
      name: 'text_en',
      title: 'O nas tekst EN',
      type: 'text',
    },
  ],
};
