const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// const url = 'https://poshmark.com/search?query=nike&type=listings&src=dir';
const url = 'https://poshmark.com/vm-rest/posts?request={%22filters%22:{%22department%22:%22All%22,%22inventory_status%22:[%22available%22]},%22query_and_facet_filters%22:{%22department%22:%22All%22},%22query%22:%22nike%22,%22facets%22:[%22brand%22,%22color%22,%22department%22],%22experience%22:%22all%22,%22sizeSystem%22:%22us%22,%22count%22:%2248%22}&summarize=true&feature_extraction_setting=null&suggested_filters_count=40&end_of_search=false&disable_fallback=false&summarize=true&src=dir&pm_version=2023.4';
const data = [];

axios.get(url)
  .then((response) => {
    console.log(response.data)
    // const $ = cheerio.load(response.data);
    // const $body = $('body');
    // console.log($body + 'asdasdqqqq')
    // const $products = $body.find('.item__details')
    // const detail = $products.attr('')
    // console.log('products' + $products )
    // const $products_detail = $products.find('a.tile__covershot')
    // $products.each((i, div) => {
    //     console.log($(div).text());
    // });
    // const productElements = $('.tiles_container.m--t--1');


    // productElements.each((index, element) => {
    //   const unitPosition = $(element).attr('data-et-prop-unit_position');
    //   console.log(`Unit Position: ${unitPosition}`);

    //   const anchorTag = $(element).find('a');

    //   const anchorAttributes = anchorTag[0].attribs;
    //   for (const attributeName in anchorAttributes) {
    //     const attributeValue = anchorAttributes[attributeName];
    //     console.log(`${attributeName}: ${attributeValue}`);
    //   }
    fs.writeFileSync('results.json', JSON.stringify(response.data, null, 2));
    console.log('json done');
    //   console.log('----------------------');
    // });
  })
  .catch((error) => {
    console.error('Error fetching the page:', error);
  });