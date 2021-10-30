![Fantasy Portfilio League](https://github.com/pesto-students/n8-fpl-eta-fe/blob/demo/small-fixes/src/assets/logo-long-light.svg)

# Fantasy Portfolio League - React App

[![Netlify Status](https://api.netlify.com/api/v1/badges/a95a6607-715b-465d-a86d-f39f6e86a094/deploy-status)](https://app.netlify.com/sites/fpleague/deploys)

## Table of Content 
1. [Introduction](#introduction)
2. [Features](#features)
3. [Demo Credentials](#demo)
3. [Documents](#documents)
3. [Technical Details ](#technical-details)
4. [Tools and Libraries](#tools-and-libraries)
4. [Installation](#installation)
5. [Contact](#contact)
6. [License](#license)


## Introduction 

### Status Quo
The retail participation in Indian stock markets is rising. A SBI report, pointing out that 44.7 lakh retails investor accounts have been added during the two months of the initial lockdown due to pandemic .The number of individual investors in the market has increased by 142 lakh in FY21, with 122.5 lakh new accounts at CDSL and 19.7 lakh in NSDL. Also, the share of individual investors in total turnover on the stock exchange has risen to 45% from 39% in Mar’20, as shown by NSE data.

We believe the reason for the jump in the numbers has been due to increased household savings, generated due to the pandemic that the new investors are putting into stocks.

Further we believe that we have a huge untapped potential for introducing the young age population to Investing in Indian Companies. These too serve as our idea users to learn and grow using our platform.

### Product Opportunity
While the retail investors are investing a majority of them are completely new to the Stocks Market and so there lies an opportunity to provide a  platform for them to learn by investing without substantially losing their hard earned money. 

### How does it work ?
Fantasy Premier League (FPL) is a stock portfolio challenge platform. Each challenge will have a criteria to select and create a portfolio of 5 stocks. The challenge has a cut off date, before which participants can submit their portfolio and an end date on which the user with maximum return on the portfolio will be rewarded in the form of coupons and discounts.

To participate in the challenge the users will have to subscribe to the app. Once subscribed, they will be provided with more tickets each month for the challenges that month. With 1 ticket they can participate in 1 challenge.

## Features 


## Demo Credentials 
app : Fantasy Portfolio League (https://fpleague.netlify.app) \
username: demo@pesto.com \
password: demopresto

## Documents 




## Technical Details
### Technologies and API's
| Tech / API  | Description |
| ------------- | ------------- |
| Sentry  | Capture logs of the site  |
| TradingView  | Charting and Stock Details Application  |
| AlphaVantage | Stock Search and Base Price Data |
| Firebase Authentication | User and Login Management |
| Firebase Firestore | Application Database |
| Firebase Realtime Database | Live calculations |
| Nodejs | Application Server |


### Tools and Libraries 
| Library  | Description |
| ------------- | ------------- |
| reactjs  | Frontend Library  |
| redux  | State Management Library  |
| material ui| Base UI framework |
| redux persist | Persist redux state to Browser Local Storage|
| axios | API call and management |
| firebase | access and integrate firebase services |
| alphavantage | access aplhavantage api |
| react-circular-progressbar | used for challenge status component |


### Env variables
> **_Please Note:_**  All env variables to be prenended with `REACT_APP`

| Variable  | Description |
| ------------- | ------------- |
| GOOGLE_API_KEY  | firebase access key  |
| GOOGLE_AUTHDOMAIN  | firebase authdomain key  |
| GOOGLE_PROJECTID| firebase project id |
| GOOGLE_STORAGEBUCKET | firebase storage bucket |
| GOOGLE_MESSAGING_SENDERID | firebase key for notifications |
| GOOGLE_APPID | google app id |
| GOOGLE_MEASUREMENTID | google measurement key for resource use measurement |
| API_SERVER | nodejs deployment |
| ALPHAVANTAGE_KEY | alphavantage api key |
| ALPHAVANTAGE_URL | alphavantage url |
| DATABASE_URL | firebase realtime database url |


