// const getCountries: {
//   tags: ["Countries"];
//   description: "Returns all countries from the system that the user has access to";
//   operationId: "getCountries";
//   security: [
//     {
//       bearerAuth: [];
//     }
//   ];
//   responses: {
//     "200": {
//       description: "A list of countries and their profiles.";
//       content: {
//         "application/json": {
//           schema: {
//             type: "array";
//             items: {
//               country_name: {
//                 type: "string";
//                 description: "Country Name";
//                 example: "Afghanistan";
//               };
//               country_capital: {
//                 type: "string";
//                 description: "Country Capital City";
//                 example: "Kabul";
//               };
//               country_population: {
//                 type: "number";
//                 description: "Population Number";
//                 example: "27657145";
//               };
//               country_currencies: {
//                 type: "array";
//                 description: "Currencies the country accepts";
//               };
//               country_languages: {
//                 type: "array";
//                 description: "Languages used in country";
//               };
//             };
//           };
//         };
//       };
//     };
//   };
// };
