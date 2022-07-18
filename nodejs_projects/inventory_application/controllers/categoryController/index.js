

exports.create_category_get = (req, res, next) => {
  res.send('GET category Construction Page')
}

exports.create_category_post = (req, res, next) => {
  res.send('POST category Construction Page')
}

exports.categories_get = (req, res, next) => {
  res.render('category/categories', {title: 'All Iventory Categories', categories: []})
}

exports.category_get = (req, res, next) => {
  res.render('category/detail', {title: 'Category Detail Pagee', category: {}})
}

exports.update_category_get = (req, res, next) => {
  res.send('GET category Update Page')
}

exports.update_category_post = (req, res, next) => {
  res.send('POST category Update Page')
}

exports.delete_category_get = (req, res, next) => {
  res.send('GET category Delete Page')
}

exports.delete_category_post = (req, res, next) => {
  res.send('POST category Delete Page')
}

