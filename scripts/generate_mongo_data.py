'''
Generate teletraffic data and insert into mongodb.
'''

import json
import datetime
import random
import numpy as np
import pandas as pd
from pymongo import MongoClient


MONGO_CLIENT = MongoClient(connect=False)
START_YEAR = 2017
START_MONTH = 4  # April
NUM_MONTHS = 2
DEVICE_MAP = [
    {
        'type': 'router',
        'number': 5
    },
    {
        'type': 'switch',
        'number': 5
    },
    {
        'type': 'gateway',
        'number': 5
    },
    {
        'type': 'call_server',
        'number': 15
    }
]


def get_devices():
    d = {'devices': []}
    for device_entry in DEVICE_MAP:
        device_type = device_entry['type']
        num_devices = device_entry['number']
        for i in range(1, num_devices + 1):
            name = device_type + '_' + str(i)  # e.g. router_3
            d['devices'].append({'name': name, 'type': device_type})
    return d


def get_datetimes():
    start_dt = datetime.datetime(year=START_YEAR, month=START_MONTH, day=1,
                                 hour=0, second=0, minute=0)
    end_dt = start_dt + datetime.timedelta(days=30*NUM_MONTHS)
    return [d.to_datetime() for d in pd.date_range(start=start_dt, end=end_dt,
                                                   freq='H')]


def get_uptime_ts(n):
    ''' return list of length n: [1, 1, ..., 0, 1] (1 for up and 0 for down) '''
    rand_num = random.random()
    # 20% of devices are down once
    if rand_num < .2:
        uptime = []
        index_1 = random.randint(0, n - 1)
        index_2 = random.randint(0, n - 1)
        down_indices = sorted([index_1, index_2])
        for i in range(n):
            if down_indices[0] < i < down_indices[1]:
                uptime.append(0)
            else:
                uptime.append(1)
    else:
        uptime = [1 for i in range(n)]
    return uptime


def get_cpu_ts(n, uptime, datetimes):
    ''' CPU usage list. Pretty volatile. '''
    max_cpu = random.random() * 100
    cpu_ts = [max_cpu]
    for i in range(1, n):
        cpu_ts.append(max(min(cpu_ts[i - 1] + random.random() * 10 - 5, 100),
                          0))
    return [cpu_ts[i] if uptime[i] == 1 else 0 for i in range(n)]

def get_mem_ts(n, uptime, datetimes):
    ''' Memory busy hour usage list. Moderately volatile. '''
    max_memory = random.random() * 100
    mem_ts = []
    weekend = set([5, 6])
    for i in range(n):
        dt = datetimes[i]
        if 6 < dt.hour < 16 and dt.weekday() not in weekend:  # busy hour
            mem_ts.append(max(min(max_memory + random.random() * 10 - 5, 100),
                              0))
        else:  # idle hour
            mem_ts.append(random.random() * max_memory / 2)
    return [mem_ts[i] if uptime[i] == 1 else 0 for i in range(n)]


def get_disk_ts(n, uptime):
    ''' Disk usage list. Doesn't change rapidly. '''
    max_disk = random.random() * 100
    disk_ts = [max_disk]
    for i in range(1, n):
        disk_ts.append(min(disk_ts[i - 1] + random.random() - .5, 100))
    return [disk_ts[i] if uptime[i] == 1 else 0 for i in range(n)]


def get_ts(devices):
    ts = []
    datetimes = get_datetimes()
    n = len(datetimes)
    for device in devices['devices']:
        uptime = get_uptime_ts(n)
        ts.append({
            'name': device['name'],
            'type': device['type'],
            'datetimes': datetimes,
            'cpu': get_cpu_ts(n, uptime, datetimes),
            'memory': get_mem_ts(n, uptime, datetimes),
            'disk': get_disk_ts(n, uptime),
            'uptime': uptime
        })
    return ts


def main():
    metrics = {'metrics': ['cpu', 'memory', 'disk_usage', 'uptime']}
    devices = get_devices()
    ts = get_ts(devices)

    # import pprint
    # pprint.pprint(metrics, indent=2)
    # pprint.pprint(devices, indent=2)
    # pprint.pprint(ts, indent=2)

    db = MONGO_CLIENT['reporting']
    teletraffic_collection = db['teletraffic']
    teletraffic_collection.insert_one(metrics)
    teletraffic_collection.insert_one(devices)
    teletraffic_collection.insert_many(ts)


if __name__ == '__main__':
    main()
