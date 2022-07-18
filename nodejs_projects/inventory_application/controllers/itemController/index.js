

exports.create_item_get = (req, res, next) => {
  res.render('item/form', {title: 'Add a New Item', item: {}, categories: []})
}

exports.create_item_post = (req, res, next) => {
  res.send('POST Item Construction Page')
}

exports.items_get = (req, res, next) => {
  res.render('item/items', {title: 'All Iventory Items', items: []})
}

exports.item_get = (req, res, next) => {
  res.render('item/detail', {title: 'Item Detail Pagee', item: {}})
}

exports.update_item_get = (req, res, next) => {
  res.send('GET Item Update Page')
}

exports.update_item_post = (req, res, next) => {
  res.send('POST Item Update Page')
}

exports.delete_item_get = (req, res, next) => {
  res.send('GET Item Delete Page')
}

exports.delete_item_post = (req, res, next) => {
  res.send('POST Item Delete Page')
}

