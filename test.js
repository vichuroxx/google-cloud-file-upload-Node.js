// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');
 
// Your Google Cloud Platform project ID
const projectId = 'Enter you project id here';
 
// Creates a client
const storage = new Storage({
  projectId: projectId,
});
 
// The name for the new bucket
const filename = 'enter local file url eg ./cd/1.pdf';
const bucketName = 'enter the name of bucket you have created';
 
// Creates the new bucket
storage
  .bucket(bucketName).upload(filename)
  .then(() => {
    console.log(`Bucket ${bucketName} created.`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });