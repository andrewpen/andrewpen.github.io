import pymongo
from pymongo import MongoClient

# pprint library is used to make the output look more pretty
from pprint import pprint

# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string

client = pymongo.MongoClient("mongodb+srv://andrewpen:pendleton@napm.hmj5g.mongodb.net/napm?retryWrites=true&w=majority")
db = client.test


# Issue the serverStatus command and print the results
serverStatusResult=db.command("serverStatus")
pprint(serverStatusResult)