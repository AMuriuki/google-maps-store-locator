import os


class Config(object):
    MAPS_API_KEY = os.environ.get('MAPS_API_KEY')
