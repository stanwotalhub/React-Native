import Categories from './Categories';
import Meal from './Meal';
import ReportTypes from './ReportType';
import DetailsData from './DetalsData';

export const DetailsDATA = [
    new DetailsData('1', '1', 'JMD000001', 'Aman Saharan', '9995566220', '13000', '1300', '11700'),
    new DetailsData('2', '1', 'JMD000001', 'Puneet Rajput', '9995560000', '10000', '2000', '8000'),
    new DetailsData('3', '2', 'JMD000001', 'Karan Chahal', '9995578945', '13000', '1300', '11700'),
    new DetailsData('4', '3', 'JMD000001', 'Sonu Brar', '9995566236', '13000', '1300', '11700'),
    new DetailsData('5', '4', 'JMD000001', 'Deepti Mandi', '999888888', '13000', '1300', '11700'),
    new DetailsData('6', '4', 'JMD000001', 'Ruby Mehta', '9995547854', '20000', '3000', '17000'),
    new DetailsData('7', '1', 'JMD000001', 'Aman Saharan', '9995566220', '13000', '1300', '11700'),
    new DetailsData('8', '1', 'JMD000001', 'Puneet Rajput', '9995560000', '10000', '2000', '8000'),
    new DetailsData('9', '2', 'JMD000001', 'Karan Chahal', '9995578945', '13000', '1300', '11700'),
    new DetailsData('10', '3', 'JMD000001', 'Sonu Brar', '9995566236', '13000', '1300', '11700'),
    new DetailsData('11', '4', 'JMD000001', 'Deepti Mandi', '999888888', '13000', '1300', '11700'),
    new DetailsData('12', '4', 'JMD000001', 'Ruby Mehta', '9995547854', '20000', '3000', '17000'),
    new DetailsData('13', '1', 'JMD000001', 'Aman Saharan', '9995566220', '13000', '1300', '11700'),
    new DetailsData('14', '1', 'JMD000001', 'Puneet Rajput', '9995560000', '10000', '2000', '8000'),
    new DetailsData('15', '2', 'JMD000001', 'Karan Chahal', '9995578945', '13000', '1300', '11700'),
    new DetailsData('16', '3', 'JMD000001', 'Sonu Brar', '9995566236', '13000', '1300', '11700'),
    new DetailsData('17', '4', 'JMD000001', 'Deepti Mandi', '999888888', '13000', '1300', '11700'),
    new DetailsData('18', '4', 'JMD000001', 'Ruby Mehta', '9995547854', '20000', '3000', '17000'),
];

export const REPORTTYPES = [
    new ReportTypes('1', 'OPD', '1'),
    new ReportTypes('2', 'Test', '1'),
    new ReportTypes('3', 'Operation Theater', '1'),
    new ReportTypes('4', 'Discount', '1'),
];

export const CATEGORIES = [
    new Categories('c1', 'Italian', '#f5428d'),
    new Categories('c2', 'Quick and Easy', '#f54242'),
    new Categories('c3', 'Hamburgers', '#f5a442'),
    new Categories('c4', 'German', '#f5d142'),
    new Categories('c5', 'Indian', '#ff0000'),
    new Categories('c6', 'South', '#f5d142'),
    new Categories('c7', 'Korian', '#f5d142'),
    new Categories('c8', 'western', '#f5d142'),
    new Categories('c9', 'western', '#f5d142'),
    new Categories('c10', 'western', '#f5d142'),
];

export const MealsData = [
    new Meal('m1', 'c1', 'Nutirito', 'Cheap', 'Easy', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '15 Minute', true),
    new Meal('m2', 'c1', 'Jisto', 'Cheap', 'Hard', 'https://images.unsplash.com/photo-1606727974448-3bb1d0cb0deb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '30 Minute', false),
    new Meal('m3', 'c1', 'Bloty', 'Cheap', 'Medium', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '10 Minute', false),
    new Meal('m4', 'c1', 'Handy cam sity peristy moso costo jolomy londu fish', 'Pricy', 'Easy', 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80', '40 Minute', false),
    new Meal('m5', 'c2', 'Pisto', 'Cheap', 'Hard', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '30 Minute', false),
    new Meal('m6', 'c2', 'Scurota', 'Cheap', 'Medium', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '10 Minute', false),
    new Meal('m7', 'c2', 'Toster', 'Pricy', 'Easy', 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80', '40 Minute', false),
    new Meal('m8', 'c3', 'Nutirito', 'Cheap', 'Easy', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '15 Minute', true),
    new Meal('m9', 'c3', 'Jisto', 'Cheap', 'Hard', 'https://images.unsplash.com/photo-1606727974448-3bb1d0cb0deb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '30 Minute', false),
    new Meal('m10', 'c3', 'Bloty', 'Cheap', 'Medium', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '10 Minute', false),
    new Meal('m11', 'c3', 'Handy cam sity peristy moso costo jolomy londu fish', 'Pricy', 'Easy', 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80', '40 Minute', false),
    new Meal('m12', 'c3', 'Pisto', 'Cheap', 'Hard', 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '30 Minute', false),
    new Meal('m13', 'c3', 'Scurota', 'Cheap', 'Medium', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '10 Minute', false),
    new Meal('m14', 'c3', 'Toster', 'Pricy', 'Easy', 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80', '40 Minute', false),
    new Meal('m15', 'c4', 'Scurota', 'Cheap', 'Medium', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', '10 Minute', false),
    new Meal('m16', 'c4', 'Toster', 'Pricy', 'Easy', 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80', '40 Minute', false),

]