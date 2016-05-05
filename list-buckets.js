var async = require('async');

// 1. Load the module
var aws = require('aws-sdk');

// 2. configure it (ENV vars need to be set for AWS creds)
aws.config.update({region: 'eu-west-1'});

// 3. Use it!
var s3 = new aws.S3();
s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});
