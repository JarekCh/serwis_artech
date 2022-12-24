export default {
  name: 'service',
  title: 'service',
  type: 'object',
  fields: [
    {
      name: 'title_pl',
      title: 'Tytuł serwisu',
      type: 'string',
    },
    {
      name: 'text_pl',
      title: 'Opis serwisu',
      type: 'text',
    },
    {
      name: 'title_en',
      title: 'Tytuł serwisu en',
      type: 'string',
    },
    {
      name: 'text_en',
      title: 'Opis serwisu en',
      type: 'text',
    },
    {
      name: 'service_pl',
      title: 'Wykonywane czynności przez serwis PL',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'service_en',
      title: 'Wykonywane czynności przez serwis EN',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
