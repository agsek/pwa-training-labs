/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO 3.8 - push a message using the web push library

const webPush = require('web-push');

// const pushSubscription = {
//   "endpoint": "https://android.googleapis.com/gcm/send/fB5rpw39nng:APA91bE5MA5ZK_IwUWh3v7_2bSRarYZ6jdsvec3xL5HKqLSqNfEey3-0CTB99zlhDpM_ZLeLlJ06PiVQr6-J-c1wdJCSZitiVRgPHb6W80E-_BJWcsknt0DvjLySvNkHQG8uacWNb4rV",
//   "expirationTime": null,
//   "keys": {
//     "p256dh": "BCAmWZJYxSXPdk65EGnd7deAkCbmwCD48uZECoKjT1-p9djwn2W_KjNmWVmigtPdvcDXHKsxpz7wPKP_1yODTNo","auth":"YJ6FU8DVimja5udl_GjYFg"
//   }
// };

const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cXfxcTsyYQ4:APA91bEK43MUrhrpac6lny1VrhB6VV7_74qNqe-PF-giOHnOv4chXZKUl66ov1jIMBqjGtp44oUwXzjxbUxuX5gR1YBhbgsVUYQu0I8OwQYPvxzhMr2Lw0bsB5F9Eh6mMz6aIYQa7a48",
  "expirationTime": null,
  "keys": {
    "p256dh": "BLKITFjfeRhIbIVoeF7NowaejVis-c2masaQ1T-htVwVGzWAHGAtS4HVSKyp3F4ckGXEAdfEfqv32uaXGJee9zE","auth":"ZBLJwj_TKo1j5BgFPIWd4g"
  }
};

const vapidPublicKey = 'BN28tUa4ktjX5_IyBkDVccVXVaJ7Mbb1lXztLWfO_LV2TmhbQvlN5iiOVXd4euHNMNj9rlkPXQvccqHQlIQomvQ';
const vapidPrivateKey = 'AQNrRp8LvbigGycCVj-omD_zF8ANLMZ5xGGnnpiLyj4';

const payload = 'Here is a payload!';

const options = {
  // gcmAPIKey: 'AAAAbmWk_7E:APA91bFHWN1cmcBg_Acub0UDZkEM66zRbAXqub5gz3lzwBYqNhP49v-9nkcKpblRdpH0hlvut-hgaj3e7DsCcNG7XFiB_DnP3w_qtWgz0CFRo4GHmpm29RCex4T_egjVqOkOjDNVE_OE',
  TTL: 60,

  vapidDetails: {
    subject: 'mailto: YOUR_EMAIL_ADDRESS',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }
};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);
