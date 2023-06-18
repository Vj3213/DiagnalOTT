import {apiData} from './data';

interface PageData {
  name: string;
  'poster-image': string;
}

interface ContentItems {
  content: Array<PageData>;
}

interface ApiData {
  title: string;
  'total-content-items': number;
  'page-num-requested': number;
  'page-size-requested': number;
  'page-size-returned': number;
  'content-items': ContentItems;
}

const getPageData = (pageNo: number, pageSize: number): Array<PageData> => {
  const startingIndex: number = (pageNo - 1) * pageSize;
  return apiData.splice(startingIndex, pageSize);
};

export const getApiData = (
  pageNo: number = 1,
  pageSize: number = 20,
): ApiData => {
  const pageData = getPageData(pageNo, pageSize);

  return {
    title: 'Romantic Comedy',
    'total-content-items': 54,
    'page-num-requested': pageNo,
    'page-size-requested': pageSize,
    'page-size-returned': pageData.length,
    'content-items': {
      content: pageData,
    },
  };
};
