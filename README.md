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

* [Flask-cors](https://pypi.org/project/Flask-Cors/) : It allows a Flask application to handle resource requests from other domains, which is essential for building a web application that interacts with external services through an API.

`pip install flask-cors`


Additionally, you need to open [Chrome Web Store](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?utm_source=ext_sidebar&hl=en-US) and search for *CORS* (Cross- Origin Resource Sharing) is a security feature implemented in the Google Chrome web browser (and other browsers) to control and manage HTTP requests and responses between different domains or websites.

Simply activate the add-on and perform the request. CORS or Cross-Origin Resource Sharing is blocked in modern browsers by default (in JavaScript APIs). Installing this add-on will allow you to unblock this feature. Please note that, when the add-on is added to your browser, it is inactive by default (toolbar icon is grey C letter). If you want to activate the add-on, please open the toolbar popup and press the toggle button on the left side. The icon will turn to an orange C letter.

### Data Sourcing

Stock data for *Apple, Nvidia, Microsoft, Google (Alphabet Inc.), and Meta Platforms, Inc.* for the period January to September 2023 was obtained using the Python library from Yahoo Finance  [yfinance](https://pypi.org/project/yfinance/) that provides a simple and powerful interface for accessing real-time and historical financial data for a variety of assets, including stocks.

Using this library, we were able to access detailed information on the stock performance of these companies, including opening and closing prices, trading volumes, highest and lowest price per day and more. This allowed us to analyze and visualize the evolution of share prices throughout the first nine months of 2023, which in turn facilitated the study of trends and patterns in the financial market.

In the folder called [Stock_data]((https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)) you can find the files with the databases that were obtained for each of the actions:

  * [AAPL_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)
  * [GOOGL_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)
  * [META_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)
  * [MSFT_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)
  * [Merged_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data) 
  * [NVDA_historical_stock_data_daily.csv](https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)

### PostgreSQL
Once we have the data of the stocks. We are going to follow the following steps, taking into account the files found in the folder called `Postgres_Database`:

1. **Create a Database**: It will use the creation of the PostgreSQL database to store structured data in tables, which makes it easier to organize and recover.To do this, the query found in the following file was used [Create_database.sql](https://github.com/ricardodelosrios/Project--3/blob/main/Postgres_Database/Create_database.sql).
2. **Create tables**: In the file called [Create_tables.sql](https://github.com/ricardodelosrios/Project--3/blob/main/Postgres_Database/Create_tables.sql), there are the queries to create the following tables:

      * tickers
      * stocks
      * AAPL_data
      * GOOGL_data
      * META_data
      * MSFT_data
      * NVDA_data
        
3. **Import data**: Once it created the tables, it will import the data from the files that are in the [Stock_data]((https://github.com/ricardodelosrios/Project--3/tree/main/Stock_data)) folder.

### API web

The API allows you to consult information about stocks and their respective tickers, as well as retrieve stock volume data for specific dates.
In the folder called [API](https://github.com/ricardodelosrios/Project--3/tree/main/API) you will find the following files that will help you run the program:

  * [.gitignore](https://github.com/ricardodelosrios/Project--3/tree/main/API): contains te `.env` file.
            
  * [stock_api.py](https://github.com/ricardodelosrios/Project--3/tree/main/API):contains the code to create the API.

#### How does the web API work?

* **Loading Environment Variables**: Before you begin, you will need to create a file called `env` to load database credentials from an environment (.env) file to keep passwords and connection information secure. You can use the following line of code:
`DATABASE_URL=postgresql+psycopg2://postgres:Password@localhost:5432/project3`
* **Running the command python -m stock_api**:is used to execute a Flask application in a specific module named stock_api. This method of execution is useful when you have a Flask project organized as a package rather than an independent script, in this case, the stock_api.py file.
`python -m stock_api`
* **Creating a Database Connection**: Next, create a connection to the database using SQLAlchemy and the information provided in the .env file.
* **Flask application initialization**: A Flask application is initialized, which is used to create a web API.
* **Flask Routes**: The application defines several routes (endpoints) that respond to different types of queries:
    * **"/" (Home Page)**: When you access the root of the application, you get a list of the routes available in the API.
    * **"/api/v1.0/tickers"**: (Get tickers) This path returns a list of stock ticker names stored in the database.
    * **"/api/v1.0/stock"**: (Get Stock): This path allows you to query information about stocks. You can specify a ticker to obtain information about a specific stock or not provide a ticker to obtain information about all stocks.
    * **"/api/v1.0/volume"**: - This path allows you to check the stock volume for a specific date. You can provide a date or not, and you will get volume data for that date or all dates, respectively.

### Web page
In the folder called [Webpage](https://github.com/ricardodelosrios/Project--3/tree/main/Webpage) you can find the following files that were used to build the website:

1. [Index.html](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/index.html): This HTML code defines the basic structure of a web page that will be used to display visualizations related to stock stocks. Specific visualizations will be generated and managed using JavaScript, and external libraries are included to make them easier to create. The user will be able to select an action and see related visualizations on the web page.
2. [styles.css](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/styles.css):This CSS file is used to define the appearance and layout of a web page. Controls elements such as body margin, container layout, graphics styling, floating element cleanup, and header and footer appearance. The styles defined here are applied to specific HTML elements on the page to achieve the desired layout.
3. [Plotly_charts](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/Plotly_charts): This code creates an interactive web application that displays candlestick charts for financial stocks. Users can select a stock from a drop-down menu and view the corresponding candlestick chart. Data is loaded from a CSV file using Pandas, and the interface and charts are created and updated with Dash and Plotly.
4. [scripts.js](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/styles.css):This code is a setup to initialize a TradingView widget on a web page. A TradingView widget is a tool that allows you to display financial charts and data related to assets, such as stocks, currencies or cryptocurrencies.
5. [visualization_1.js](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/visualization/visualization_1.js): This code is a JavaScript function that is used to update a **candlestick chart** on a web page when a user selects an action from a dropdown list.
   **Function**: `updateCandlestickChart(selectedStock)`
6. [visualization_2.js](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/visualization/visualization_2.js):This code is a JavaScript function that is used to update a **bar chart** on the web page when a user selects an action from a drop-down list.
   **Function**: `updateBarChart(selectedStock)`
7. [visualization_3.js](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/visualization/visualization_3.js):This code is a JavaScript function used to update a **pie chart** on a web page when a user selects an action from a drop-down list.
    **Function**: `updatePieChart(selectedStock, '2023-01-03')`
8. [indicators.js](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/visualization/indicators.js):This code is a JavaScript function used to load data from an API, calculate technical indicators (RSI and MACD) from the data, and create an interactive chart of technical indicators on a web page.
    **Function**:`updateIndicatorsChart(selectedStock)`
9. [ticker.js](https://github.com/ricardodelosrios/Project--3/blob/main/Webpage/visualization/ticker.js): This code is a sequence of JavaScript operations used to load data from an API, populate a dropdown list, and then call all functions to update graphics on a web page.    

### Data Componenent 

![image](https://github.com/ricardodelosrios/Project--3/assets/135395351/4c948047-94ad-45e5-b66e-00d7a40cb93b)


### Overall Analysis 


### Slides Link

The presentation is available at the following link.[Finance Stocks](https://www.canva.com/design/DAFvrgyDjnY/aRJiXVg-kai4ImBi2jGwnw/view?utm_content=DAFvrgyDjnY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)



### Developers

| [<img src="https://avatars.githubusercontent.com/u/133066908?v=4" width=115><br><sub>Ricardo De Los Rios</sub>](https://github.com/ricardodelosrios) | [<img src="https://avatars.githubusercontent.com/u/135395351?v=4" width=115><br><sub>Lina Orjuela</sub>](https://github.com/LM202345) | [<img src="https://avatars.githubusercontent.com/u/134927163?v=4" width=115><br><sub>Alex H</sub>](https://github.com/Alex-WRK) |[<img src="https://avatars.githubusercontent.com/u/135670783?v=4" width=115><br><sub>Maria Kouider</sub>](https://github.com/mariakouider) |
| :---: | :---: | :---: | :---: |



