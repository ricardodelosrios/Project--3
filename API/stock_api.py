import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask import request

import os
from dotenv import load_dotenv

#################################################
# Database Setup
#################################################
load_dotenv()
# the .env file must be include in your local repo to run, it must contain next varaible:
# DATABASE_URL=postgresql+psycopg2://postgres:'your_password'@localhost:5432/project3
db_url = os.getenv("DATABASE_URL")
engine = create_engine(db_url)

Base = automap_base()
Base.prepare(autoload_with=engine)

# Save reference to the table
Ticker = Base.classes.tickers
Stock = Base.classes.stocks

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/tickers<br/>"
        f"/api/v1.0/stocks<br/>"
        f"/api/v1.0/stocks?ticker=MSFT"
    )


@app.route("/api/v1.0/tickers")
def names():
    session = Session(engine)

    """Return a list of all ticker names"""
    # Query all tickers
    results = session.query(Ticker.ticker, Ticker.name).all()

    if results:
        all_names = []
        for ticker, name in results:
            ticker_dict = {}
            ticker_dict["ticker"] = ticker
            ticker_dict["name"] = name
            all_names.append(ticker_dict)
        session.close()
        return jsonify(all_names)
    else:
        session.close()
        return jsonify({"error": "Tickers not found"}), 404


@app.route("/api/v1.0/stock")
def stock():
    session = Session(engine)

    """Return a list with all stockes of selected ticker or all in no ticker selected"""
    ticker = request.args.get('ticker')

    if ticker:
        results = session.query(Stock.date, Stock.ticker, Stock.open, Stock.high, Stock.low, Stock.close, Stock.volume, Stock.dividends, Stock.stocksplits).filter_by(ticker = ticker).all()

        if results:
            all_stocks = []
            for date, ticker, open, high, low, close, volume, dividends, stocksplits in results:
                stock_dict = {}
                stock_dict["date"] = date
                stock_dict["ticker"] = ticker
                stock_dict["open"] = open
                stock_dict["high"] = high
                stock_dict["low"] = low
                stock_dict["close"] = close
                stock_dict["volume"] = volume
                stock_dict["dividends"] = dividends
                stock_dict["stocksplits"] = stocksplits
                all_stocks.append(stock_dict)

            session.close()
            return jsonify(all_stocks)

        else:
            session.close()
            return jsonify({"error": "Stocks for Ticker not found"}), 404
    else:
        # If no symbol parameter is provided, return all ticker names
        results = session.query(Stock.date, Stock.ticker, Stock.open, Stock.high, Stock.low, Stock.close, Stock.volume, Stock.dividends, Stock.stocksplits).all()

        if results:
            all_stocks = []
            for date, ticker, open, high, low, close, volume, dividends, stocksplits in results:
                stock_dict = {}
                stock_dict["date"] = date
                stock_dict["ticker"] = ticker
                stock_dict["open"] = open
                stock_dict["high"] = high
                stock_dict["low"] = low
                stock_dict["close"] = close
                stock_dict["volume"] = volume
                stock_dict["dividends"] = dividends
                stock_dict["stocksplits"] = stocksplits
                all_stocks.append(stock_dict)

            session.close()
            return jsonify(all_stocks)
        else:
            session.close()
            return jsonify({"error": "Stocks not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
