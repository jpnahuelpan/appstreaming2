#!/usr/bin/env python
# -*- coding: utf-8 -*-
# Autor: Juan Pablo Nahuelpán

import socketio
from random import randint
import time

sio = socketio.Server(cors_allowed_origins="*")
app = socketio.WSGIApp(sio)


@sio.event
def connect(sid, environ):
    print('connect ', sid)


@sio.event
def disconnect(sid):
    print('disconnect ', sid)


@sio.event
def graph_connect(sid, data):
    time.sleep(1)
    print(data)
    y1 = randint(1, 10)
    y2 = randint(1, 10)
    sio.emit('graph_front', {"y1": y1, "y2": y2}, to=sid)
