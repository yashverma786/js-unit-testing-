var sum = function (a, b) {
  return a + b;
};

var addItemtoList = function (list, newItem) {
  list.push(newItem);
  return list;
};
addItemtoListimutable = function (list, newItem) {
  return list.concat([newItem]);
};

removeitem = function (list, index) {
  list.splice(index, 1);
  return list;
};

removeitemfromarray = function (list, index) {
  return list.filter(function (listitem, i) {
    return i !== index;
  });
};

updateitem = function (list, index, newItem) {
  list[index] = newItem;
  return list;
};

updateitemtoarray = function (list, index, newItem) {
  //clone array
  //add new item to clone array
  //return clone array
  var newlist = list.slice();
  newlist[index] = newItem;

  return newlist;
};

var addnewpropertytoobject = function (person, newItem) {
  person["name"] = newItem;
  return person;
};

var addnewpropertytoobjects = function (person, newItem) {
  person["name"] = newItem;
  //   return Object.assign({}, person, { name: newItem });     //both way works this and mentioned below
  return { ...person, name: newItem };
};
module.exports = {
  sum,
  addItemtoList,
  addItemtoListimutable,
  removeitem,
  removeitemfromarray,
  updateitem,
  updateitemtoarray,
  addnewpropertytoobject,
  addnewpropertytoobjects,
};
