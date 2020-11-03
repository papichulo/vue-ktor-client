export function getMonitorering(systemId) {
    return `{
        "_id": "5ddedd14bd7c612cd56091a5",
        "systemId": "testSystem",
        "name": "Monitorering 2019",
        "description": "En monitorering genomförd 2019.",
        "createdBy": "David Simonsbacka",
        "createdDate": {
          "date": {
            "year": 2019,
            "month": 12,
            "day": 4
          },
          "time": {
            "hour": 21,
            "minute": 4,
            "second": 29,
            "nano": 565266000
          }
        }
      }`;
}

export function getMonitoreringtillfallen(monitoreringId) {
    return `[
        {
          "_id": "5de2c35f6664866f067dc5bb",
          "monitoreringId": "5ddedd14bd7c612cd56091a5",
          "sjukhusId": "12345",
          "userReference": "David Simonsbacka",
          "fromDate": "Dec 1, 2019, 12:00:00 AM",
          "toDate": "Dec 31, 2019, 12:00:00 AM",
          "registryUsesPD": false,
          "registreringar": [
            {
              "personId": "19121212-1212",
              "variabler": []
            },
            {
              "personId": "20121212-1212",
              "variabler": []
            }
          ]
        },
        {
          "_id": "5de2c3ce6664866f067dc5bc",
          "monitoreringId": "5ddedd14bd7c612cd56091a5",
          "sjukhusId": "12345",
          "userReference": "David Simonsbacka",
          "fromDate": "Dec 1, 2019, 12:00:00 AM",
          "toDate": "Dec 31, 2019, 12:00:00 AM",
          "registryUsesPD": false,
          "registreringar": [
            {
              "personId": "19121212-1212",
              "variabler": [
                {
                  "variabelName": "",
                  "variabelValue": ""
                }
              ]
            },
            {
              "personId": "20121212-1212",
              "variabler": [
                {
                  "variabelName": "",
                  "variabelValue": ""
                }
              ]
            }
          ]
        },
        {
          "_id": "5de2c3e76664866f067dc5bd",
          "monitoreringId": "5ddedd14bd7c612cd56091a5",
          "sjukhusId": "12345",
          "userReference": "David Simonsbacka",
          "fromDate": "Dec 1, 2019, 12:00:00 AM",
          "toDate": "Dec 31, 2019, 12:00:00 AM",
          "registryUsesPD": false,
          "registreringar": [
            {
              "personId": "19121212-1212",
              "variabler": [
                {
                  "variabelName": "name",
                  "variabelValue": "value"
                }
              ]
            },
            {
              "personId": "20121212-1212",
              "variabler": [
                {
                  "variabelName": "name1",
                  "variabelValue": "value1"
                }
              ]
            }
          ]
        },
        {
          "_id": "5de81343b820c956ce5faed8",
          "monitoreringId": "5ddedd14bd7c612cd56091a5",
          "sjukhusId": "12345",
          "userReference": "David Simonsbacka",
          "fromDate": "Dec 1, 2019, 12:00:00 AM",
          "toDate": "Dec 31, 2019, 12:00:00 AM",
          "registryUsesPD": false,
          "registreringar": [
            {
              "personId": "19121212-1212",
              "variabler": [
                {
                  "variabelName": "name",
                  "variabelValue": "value"
                }
              ]
            },
            {
              "personId": "20121212-1212",
              "variabler": [
                {
                  "variabelName": "name1",
                  "variabelValue": "value1"
                }
              ]
            }
          ]
        }
      ]`;
}

export function getMonitoreringtillfalle(id) {
    return `{
        "_id": "5de2c3e76664866f067dc5bd",
        "monitoreringId": "5ddedd14bd7c612cd56091a5",
        "sjukhusId": "12345",
        "userReference": "David Simonsbacka",
        "fromDate": "Dec 1, 2019, 12:00:00 AM",
        "toDate": "Dec 31, 2019, 12:00:00 AM",
        "registryUsesPD": false,
        "registreringar": [
          {
            "personId": "19121212-1212",
            "variabler": [
              {
                "variabelName": "name",
                "variabelValue": "value"
              }
            ]
          },
          {
            "personId": "20121212-1212",
            "variabler": [
              {
                "variabelName": "name1",
                "variabelValue": "value1"
              }
            ]
          }
        ]
      }`;
}

export function postMonitoreringtillfalle(monitoreringtillfalle) {
    return `{
        "_id": "5de2c3e76664866f067dc5bd",
        "monitoreringId": "5ddedd14bd7c612cd56091a5",
        "sjukhusId": "12345",
        "userReference": "David Simonsbacka",
        "fromDate": "Dec 1, 2019, 12:00:00 AM",
        "toDate": "Dec 31, 2019, 12:00:00 AM",
        "registryUsesPD": false,
        "registreringar": [
          {
            "personId": "19121212-1212",
            "variabler": [
              {
                "variabelName": "name",
                "variabelValue": "value"
              }
            ]
          },
          {
            "personId": "20121212-1212",
            "variabler": [
              {
                "variabelName": "name1",
                "variabelValue": "value1"
              }
            ]
          }
        ]
      }`;
}