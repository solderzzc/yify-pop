exports.getParams = function (params, baseURL) {
  var eztv = {};

  eztv.page = 1;
  eztv.previousDisabled = 'disabled';
  eztv.nextDisabled = '';
  eztv.previousPage = '#';

  // Update paging links
  if (params.set && params.set !== '') {
    eztv.page = parseInt(params.set);

    eztv.previousPage = baseURL + '/shows?set=' + (eztv.page - 1);

    if (eztv.page > 1) {
      eztv.previousDisabled = '';
    }

    eztv.nextPage = baseURL + '/shows?set=' + (eztv.page + 1);
  } else {
    eztv.nextPage = baseURL + '/shows?set=' + (eztv.page + 1);
  }

  eztv.url = geddy.config.eztvapiserver + '/shows/' + eztv.page;

  if (params.lastUpdated && params.lastUpdated !== '') {
    eztv.url = geddy.config.eztvapiserver + '/shows/last_updated/' + eztv.page;
  }

  if (params.search && params.search !== '') {
    eztv.url = geddy.config.eztvapiserver + '/shows/search/' + params.search + '/all';
    eztv.nextDisabled = 'disabled';
    eztv.nextPage = '#';
  }

  return eztv;
};
