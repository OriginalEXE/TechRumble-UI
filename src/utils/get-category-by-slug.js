import { frameworks as javascriptFrameworks } from '../const/javascript-frameworks';

const getCategoryBySlug = ({
  slug,
}) => {
  const slugToCategoryMap = {
    'javascript-frameworks': {
      name: 'JavaScript Frameworks',
      category: 'JavaScriptFrameworks',
      cards: javascriptFrameworks,
    },
  };

  if (slugToCategoryMap[slug] === undefined) {
    return null;
  }

  return slugToCategoryMap[slug];
};

export default getCategoryBySlug;
