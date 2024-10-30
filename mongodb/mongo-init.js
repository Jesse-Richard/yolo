db = db.getSiblingDB("yolomy");

db.createUser({
    user: "jesse",
    pwd: "noisywater",
    roles: [
      {
        role: 'readWrite', 
        db: 'yolomy'
      },
    ],
  });

db.createCollection("Product");