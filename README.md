# Project-6---Countries-API

##Intro to Countries API

Welcome to my Countries API. This API hosts country profiles with specific data on every country available in the [European Union's RESTCountries API](https://restcountries.eu/).

Technologies used include Express, Mongoose, and MongoDB.

##What You Will Find
Each country profile contains the following data:

- Name
- Capital City
- Population
- Currencies
- Languages

When queried, each endpoint will return data in the following format:

```
"name": "Afghanistan",
    "capital": "Kabul",
    "population": 27657145,
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }
    ],
    "languages": [
      {"name": "Pashto"},
      {"name": "Uzbek"},
      {"name": "Turkmen"}
    ],
```

## How To Find The Data

To learn about specific endpoints to access, check out the documentation for this API [on my Swagger](https://app.swaggerhub.com/apis/arjunrawal07/CountriesAPI/1.0.0).

## Some Background

Inspiration for making this API came from my passion for languages and previous career in U.S. foreign policy. Every time I learned a new language, I unlocked new sections of the world that I could visit and develop a deeper appreciation and understanding of a country's cultures and history.

### So what?

With this API, you can easily search for countries to poentially visit based on the languages you know or currency(ies) you have to spend. If all you have are Euros, for example, you can find all the countries that use the Euro and start making plans.

## Challenges

Actually accessing the data from the EU's API was pretty seamless after installing `node-fetch` on my local server.

#### Postman

The primary challenges I faced included working with Postman and generating the documentation. I worked with Postman for the first time, so after some trial/error, I was able to test my routes easily. It's a great tool!

#### Documentation and SwaggerHub

Because documentation is KEY, I wanted to write documentation in a readable and easy-to-digest way. I decided to use SwaggerHub for the first time. And, while I wrote the documentation using Swagger's editor (which is like a template you adapt to your API paths), I struggled with an alternate approach: attaching the Swagger package to my application, so that Swagger could auto-generate my documentation. I think Swagger is a great tool, but I will need to practice more with it to maximize its utility. The colors are nice too.
