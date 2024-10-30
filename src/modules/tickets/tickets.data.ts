const initialTickets = {
  tickets: [
    {
      price: 58880,
      carrier: 'U6',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2025-07-02T00:39:27.036Z',
          duration: 1186,
          stops: ['DEL', 'DOH']
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2025-08-23T01:43:16.821Z',
          duration: 806,
          stops: []
        }
      ]
    },
    {
      price: 15340,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2025-04-09T21:14:55.963Z',
          duration: 964,
          stops: ['DOH']
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2026-02-24T05:08:06.359Z',
          duration: 1371,
          stops: ['DEL', 'IST', 'HKG']
        }
      ]
    },
    {
      price: 30510,
      carrier: 'AK',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2025-05-08T21:59:48.793Z',
          duration: 844,
          stops: []
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2026-04-14T09:30:55.398Z',
          duration: 1311,
          stops: ['JNB', 'HKG', 'DEL']
        }
      ]
    },
    {
      price: 61850,
      carrier: 'UT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2024-10-01T06:34:35.094Z',
          duration: 735,
          stops: []
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2024-12-30T08:01:32.002Z',
          duration: 1359,
          stops: ['IST', 'HKG', 'DOH']
        }
      ]
    },
    {
      price: 51710,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2025-03-13T02:54:46.486Z',
          duration: 1015,
          stops: ['JNB', 'DXB']
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2026-01-30T17:12:58.266Z',
          duration: 1243,
          stops: ['IST', 'IST']
        }
      ]
    }
  ],
  stop: true
}

export default initialTickets
