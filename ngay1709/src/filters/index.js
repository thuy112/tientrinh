//Kiến thức: Filters, Filter có tham số, Global Filter & Local Filter registration

import Vue from 'vue';

// Global Filter: Viết hoa chữ cái đầu
Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

// Global Filter có tham số: Định dạng tiền tệ kèm đơn vị
Vue.filter('currencyFormat', function (value, symbol = 'đ') {
  if (typeof value !== 'number') return value;
  return value.toLocaleString('vi-VN') + ' ' + symbol;
});