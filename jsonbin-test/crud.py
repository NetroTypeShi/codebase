import requests
import os
import dotenv 
from dotenv import load_dotenv
load_dotenv()

XMasterKey = os.getenv("X_MASTER_KEY")
XAccessKey = os.getenv("X_ACCESS_KEY")
bin_id = os.getenv("BIN_ID")


bin_id = "67458cf2e41b4d34e45ad25e"
XMasterKey = "$2a$10$.jho/9MKpmv.B90RPLcs/OfYOHxQz8y7Fcy.m5jTLzHMepKO9qany"
XAccessKey = "$2a$10$beAyfN2I7J9Ziwkz6tBTc.E3zBa99mAoHKSGLpozscT8vXF8b5fKW"
url_root = "https://api.jsonbin.io/v3"
route = f"/b/{bin_id}"
headers ={
    "X-Master-Key" : XMasterKey,
    "X-Access-Key" : XAccessKey
}
r = requests.get(url_root + route, headers=headers)
print(r.json())