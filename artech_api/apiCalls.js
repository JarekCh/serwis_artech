import { client } from './client.js';

const functions = {};

functions.getSiteContent = () => {
  return client.fetch(`*[_type == "site"]
  {
    hero,    
    service,
  }`);
};

functions.getShopContent = () => {
  return client.fetch(
    `*[_type == "shop" ] | order(date desc) {        
        title_pl,
        body_pl,
        title_en,
        body_en,
        'image':shopImg{'url':asset->url},
        date,
        auction_link,
        'slug':slug.current,
    }`
  );
};

functions.getTypewritersContent = (lowRangeFilter, highRangeFilter) => {
  return client.fetch(`*[_type == "typewriters" ] | order(date desc) [${lowRangeFilter}...${highRangeFilter}]
  { date,
    title_pl,
    body_pl,
    title_en,
    body_en,
    'slug':slug.current,
    'images':typewritersImgs[]{'url':asset->url}}`);
};

functions.getSingleWritersContent = (slug) => {
  return client.fetch(`*[slug.current == '${slug}']
      { 'slug':slug.current,
        title_pl,
        body_pl,
        title_en,
        body_en,
        'images':typewritersImgs[]{'url':asset->url},
        date,
      }`);
};

export default functions;
