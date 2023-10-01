[
    {
      "_id": {
        "$oid": "65033c77bb95e1a3aa3b7a84"
      },
      "name": "Laptop",
      "discription": "Hello bangladesh",
      "price": "124"
    },
    {
      "_id": {
        "$oid": "65033f13ab51886d39b83e56"
      },
      "name": "Laptop1"
    },
    {
      "_id": {
        "$oid": "65033f13ab51886d39b83e57"
      },
      "name": "Laptop2"
    },
    {
      "_id": {
        "$oid": "6517068b481fe4479eaeaebc"
      },
      "name": "Poco",
      "discription": "Hello india",
      "price": "1244"
    },
    {
      "_id": {
        "$oid": "65170695e05b1186cd9a91a4"
      },
      "name": "Poco",
      "discription": "Hello india",
      "price": "1244"
    },
    {
      "_id": {
        "$oid": "651707cacc1e168579e91855"
      },
      "Age": 24
    }
  ]



// 2 ===================
db.MyEmployes.drop({})

// 3 ==================
db.brands.insertOne({laptop:"Hp1"})

// 4 ==================
db.brands.remove({laptop:"Hp1"})