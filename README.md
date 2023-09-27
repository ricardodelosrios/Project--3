# Project 3 -  Group 1

- Alex H
- Maria Kouider
- Lina Orjuela
- Ricardo Andrés De los ríos Hernández

## Industry: Finance

### Introduction

In this project, the analysis of the historical stock prices of the five main companies in the technology industry (**Apple, Nvidia, Microsoft, Google (Alphabet Inc.) and Meta Platforms, Inc.**) will be carried out. To understand the trends, patterns and underlying dynamics of the tech industry giants.

This academic exercise seeks to harness the power of programming languages and tools such as JavaScript, Python, PostgreSQL, along with libraries such as sqlalchemy, dotenv, Flask, D3.js, Plotly and Widget. Through these tools we delve into the analysis of historical stock prices (January to September 2023).

### Question

#### ¿What are the historical stock prices over 9 months of the top 5 biggest technology industry players?

### Motivation
The need to understand how these leading companies in the technology sector have evolved in terms of market value in the period from January to September 2023. This data can be useful for investors, financial analysts, and people interested in the dynamics of the stock market, as it would allow them to identify patterns, trends, and investment opportunities based on the past performance of these companies. Additionally, it could help evaluate the impact of specific events, such as product launches, industry news, or changes in company management.
 
### Why people would visit our webpage? 
- Gain insight on historical performance of stocks and get an analysis for top 5 biggest technology industry players.
- Provide analysis.
- Visual representation that help to prove the provided analysis.

### Installation

Open a terminal window and run the following commands:

* [psycopg2](https://pypi.org/project/psycopg2/) : is a module that allows Python applications to establish a connection with PostgreSQL databases. In fact, psycopg2 is a PostgreSQL driver designed for Python programmers, opening the door to communicating with PostgreSQL databases through code.

`pip install psycopg2`
`pip install psycopg2-binary`

* [SQLAlchemy]([https://pypi.org/project/psycopg2/](https://pypi.org/project/SQLAlchemy/)) : SQLAlchemy is a powerful object-relational mapping (ORM) library that makes it easy to interact with relational databases from Python applications.

`pip install SQLAlchemy`

* [Python-dotenv](https://pypi.org/project/python-dotenv/) : It is used to install the python-dotenv library in Python. This library is a useful tool for loading configurations and environment variables from .env files into your Python projects.

`pip install python-dotenv`

* [Flask](https://pypi.org/project/Flask/) : It is used to install the Flask web framework in Python. Flask is a lightweight and flexible web microframework used to create fast and easy web applications in Python.

`pip install Flask`


Additionally, you need to open [Chrome Web Store](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?utm_source=ext_sidebar&hl=en-US) and search for *CORS* (Cross- Origin Resource Sharing) is a security feature implemented in the Google Chrome web browser (and other browsers) to control and manage HTTP requests and responses between different domains or websites.

Simply activate the add-on and perform the request. CORS or Cross-Origin Resource Sharing is blocked in modern browsers by default (in JavaScript APIs). Installing this add-on will allow you to unblock this feature. Please note that, when the add-on is added to your browser, it is inactive by default (toolbar icon is grey C letter). If you want to activate the add-on, please open the toolbar popup and press the toggle button on the left side. The icon will turn to an orange C letter.

### Data Sourcing

Stock data for *Apple, Nvidia, Microsoft, Google (Alphabet Inc.), and Meta Platforms, Inc.* for the period January to September 2023 was obtained using the Python library from Yahoo Finance  [yfinance](https://pypi.org/project/yfinance/) that provides a simple and powerful interface for accessing real-time and historical financial data for a variety of assets, including stocks.

Using this library, we were able to access detailed information on the stock performance of these companies, including opening and closing prices, trading volumes, highest and lowest price per day and more. This allowed us to analyze and visualize the evolution of share prices throughout the first nine months of 2023, which in turn facilitated the study of trends and patterns in the financial market.

In the folder called [Stock_data]([https://pypi.org/project/yfinance/](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)) you can find the files with the databases that were obtained for each of the actions:

      * [AAPL_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)
      * [GOOGL_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)
      * [META_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)
      * [MSFT_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)
      * [Merged_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data) **********
      * [NVDA_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)

### PostgreSQL
Once we have the data of the stocks. We are going to follow the following steps, taking into account the files found in the folder called `Postgres_Database`:

1. Create a Database: We will use the creation of the PostgreSQL database to store structured data in tables, which makes it easier to organize and recover.To do this, the query found in the following file was used [Postgres_Database/Create_database.sql](https://github.com/ricardodelosrios/Project--3/tree/main/Postgres_Database).


### Data Componenent 
![Alt text](https://github.com/ricardodelosrios/Project--3/blob/main/Images/Data%20Component.jpeg)

### How to naviguate our webpage ? 
- Dropdown:
- 

### Visualization - Candlestick Chart 



### Visualization - Bar Chart 


### Visualization - Pie Chart 


### Overall Analysis 


### Slides Link



