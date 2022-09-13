# Store Locator
One of the most common features of a website is displaying a [Google Map](https://developers.google.com/maps/) highlighting one or more locations for a business, establishment, or some other entity with a physical presence.

This repo looks at a simple use case - displaying a number of locations for a business with a chain of stores. For this implementation I use a local business, check them out [Art Caffe](https://www.artcaffe.co.ke/). 

We'll also try identify the store location closest to a user-supplied starting point.

## To run a local instance
1. Enable the following 3 APIs on [Google Cloud](https://console.cloud.google.com/google/maps-apis/):
* Maps JavaScript API
* Places API
* Distance Matrix API 

2. Clone the repo 
```
$ git clone https://github.com/AMuriuki/google-maps-store-locator.git
```

3. Navigate to the project's root directory, create virtual env & initialize it.
```
$ cd google-maps-store-locator
$ python3 -m venv venv
$ . venv/bin/activate
```

4. Install requirements
```
pip install -r requirements.txt
```