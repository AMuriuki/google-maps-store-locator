from app import app
from flask import render_template
from config import Config


@app.route('/')
def index():
    maps_api_key = Config.MAPS_API_KEY
    return render_template('index.html', title='Home | Store Locator', maps_api_key=maps_api_key)
