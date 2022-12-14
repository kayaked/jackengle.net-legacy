//"use strict";

// Raw Map Data (56x56)
const rawMap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 100, 100, 100, 100, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 100, 100, 100, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 100, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 100, 100, 100, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 100, 100, 0, 100, 100, 100, 0, 0, 100, 100, 100, 100, 100, 0, 0, 100, 100, 100, 0, 100, 100, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 100, 100, 100, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Configures canvas

const can = document.getElementById("main");
const ctx = can.getContext("2d");
can.width = 1024;
can.height = 576;
ctx.imageSmoothingEnabled = false;
var rats = 0;
var money = 0;
var ratPrice = 4;
var ratsList = [];
var npcList = [];

var bgm = document.getElementById("bgm");
var bgmPlayed = false;

// Define important variables and constants
const zoom = 5.00; // 500%
const tileDim = 16;
const mapWidth = 56;
const mapHeight = 56;
const offsetX = -1212;
const offsetY = -1200;
var ratDisplay = document.getElementById("rats");
var dayDisplay = document.getElementById("day");
var moneyDisplay = document.getElementById("money");
var dialogueDisplay = document.getElementById("dialogue-container");
const RAT_IDLING = 0;
const RAT_PACING_E = 1;
const RAT_PACING_W = 2;
const RAT_PACING_N = 3;
const RAT_PACING_S = 4;
const FRENCH = 0;
const VIETNAMESE = 1;
const PLAYER = 2;
var speed = 2;
var day = 1;
var gamelive = true;


// Define canvas's initial fill
ctx.fillStyle = "black";
ctx.fillRect(0,0,can.width,can.height);

// Define moving directions
var north = false;
var south = false;
var west = false;
var east = false;

// Load ingame images
const mapImage = new Image();
const playersprite = new Image();
const playerWalkDownSprite = new Image();
const playerWalkRightSprite = new Image();
const playerWalkLeftSprite = new Image();
const playerWalkUpSprite = new Image();
const foregroundImage = new Image();
const ratImage = new Image();
const vietNPCImage = new Image();
const frNPCImage = new Image();
const frNPCImage2 = new Image();
const ratDownImage = new Image();
const ratUpImage = new Image();
const ratLeftImage = new Image();
const ratRightImage = new Image();
mapImage.src = "./assets/hanoi19.png";
playersprite.src = "./assets/charIdle.png";
playerWalkDownSprite.src = "./assets/charDown.png";
playerWalkRightSprite.src = "./assets/charRight.png";
playerWalkLeftSprite.src = "./assets/charLeft.png";
playerWalkUpSprite.src = "./assets/charUp.png";
foregroundImage.src = "./assets/hanoi19fg.png";
ratImage.src = "./assets/ratIdle.png";
vietNPCImage.src = "./assets/vietNPC.png";
frNPCImage.src = "./assets/frenchNPC.png";
frNPCImage2.src = "./assets/frenchNPC2.png";
ratDownImage.src = "./assets/ratDown.png";
ratUpImage.src = "./assets/ratUp.png";
ratLeftImage.src = "./assets/ratLeft.png";
ratRightImage.src = "./assets/ratRight.png";
const ratImages = {
    RAT_IDLING: ratImage,
    RAT_PACING_E: ratRightImage,
    RAT_PACING_W: ratLeftImage,
    RAT_PACING_N: ratUpImage,
    RAT_PACING_S: ratDownImage
}

// Load sound effects
var diaSE = new Audio("./assets/crew1.wav");
diaSE.volume = 0.3;
var ratSE = new Audio("./assets/hurt.wav");
ratSE.volume = 0.2;

// Preliminary Collision Check Function for two Rectangles
function rectCollision(r1, r2) {
    if(r1.pos.x + r1.width >= r2.pos.x &&
        r1.pos.y + r1.height >= r2.pos.y &&
        r1.pos.x <= r2.pos.x + r2.width &&
        r1.pos.y <= r2.pos.y + r2.height) {
        return true;
    }
    return false;
}

// Define class Dialogue
class Dialogue {
    constructor({
        message = "",
        type = PLAYER,
        question = false,
        action,
        name
    }) {
        this.message = message;
        this.type = type;
        this.question = question;
        this.action = action;
        if(!name) {
            if(this.type == VIETNAMESE) this.name = "Vietnamese Citizen";
            if(this.type == FRENCH) this.name = "French Citizen";
            if(this.type == PLAYER) this.name = "You";
        } else {
            this.name = name;
        }
    }

    add() {
        diaSE.play();
        let diaElem = document.createElement("p");
        let color = "#0A0";
        diaElem.innerText = "You: ";
        if(this.type == FRENCH) {
            color = "#00F";
            diaElem.innerText = this.name + ": ";
        }
        if(this.type == VIETNAMESE) {
            color = "#F00";
            diaElem.innerText = this.name + ": ";
        }

        diaElem.innerText += this.message;
        diaElem.style.color = color;
        let action = this.action;
        if(this.question) {
            diaElem.appendChild(document.createElement("br"));
            let yesButton = document.createElement("button");
            yesButton.innerText = "Yes";
            yesButton.onclick = function() {
                yesButton.parentElement.remove();
                action.yes();
            }
            diaElem.appendChild(yesButton);
            let noButton = document.createElement("button");
            noButton.innerText = "No";
            noButton.onclick = function() {
                noButton.parentElement.remove();
                action.no();
            }
            diaElem.appendChild(noButton);
        }
        dialogueDisplay.appendChild(diaElem);
    }
}

// Define class Sprite
class Sprite {
    constructor({
        pos,
        pspeed = 0,
        image,
        maxFrames = 1
    }) {
        this.pos = pos;
        this.home = {...pos}; // indicates the home position reference point for any sprite. If a sprite has movement, this is how it knows where to return to.
        this.image = image;
        this.pspeed = pspeed;
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.animationTick = 0;
        this.animationSpeed = 40; // Inverse, lower means faster!
        // lol
        try {
            this.image.onload = () => {
                this.width = this.image.width / this.maxFrames;
                this.height = this.image.height;
            }
        } catch (error) {

        }
    }

    // Method to call when drawing the sprite
    draw() {
        ctx.drawImage(
            this.image,
            this.frame * this.width, // Source image X pos
            0, // Source image Y pos
            this.image.width/this.maxFrames, // Source width of the image
            this.image.height, // Source height of the image
            this.pos.x,
            this.pos.y,
            this.image.width/this.maxFrames, // Width in the destination canvas. For us, it's the same as the width of our source image.
            this.image.height // Height in the destination canvas. For us, it's the same as the width of our source image.
            );
        
        if(this.maxFrames > 1) this.animationTick++; 

        // Animation speed controller by ticks
        if(this.animationTick % this.animationSpeed == 0) {
            this.frame++;
            if(this.frame > this.maxFrames-1) this.frame = 0;
        }
    }
}

// Definition of a collision block. Very similar to Sprite so could merge later
class Collision {
    constructor({pos}) {
        this.pos = pos;
        this.width = tileDim*zoom;
        this.height = tileDim*zoom;
    }

    debug() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.pos.x, this.pos.y, tileDim*zoom, tileDim*zoom);
    }
}

// Create background/foreground map sprite
const map = new Sprite({
    pos: {x: offsetX, y: offsetY},
    image: mapImage
});
const foreground = new Sprite({
    pos: {x: offsetX, y: offsetY},
    image: foregroundImage
});
// Create player sprite
const player = new Sprite({
    pos: {
        x: can.width/2 - playersprite.width/4-30, // Destination X pos for the sprite (splits the sprite in half per se to center)
        y: can.height/2 - playersprite.height/2 + 30 // Destination Y pos for the sprite
    },
    image: playersprite,
    maxFrames: 2
});

// Load collisions
collisionsList = [];
for(var i = 0; i < rawMap.length; i++) {
    if(rawMap[i]) {
        collisionsList.push(new Collision({
            pos: {x: (i % mapHeight) * (tileDim*zoom) + offsetX, y: (Math.floor(i/mapHeight)) * (tileDim*zoom) + offsetY}
        }));
    }
}

// Notify program globally of directions, when key down
var lockDir = "";
window.addEventListener("keydown", (event) => {
    if(!gamelive) return;
    if(event.code == "KeyW" || event.code == "ArrowUp") {
        lockDir = "north";
        north = true;
    } else if(event.code == "KeyA" || event.code == "ArrowLeft") {
        lockDir = "west";
        west = true;
    } else if(event.code == "KeyS" || event.code == "ArrowDown") {
        lockDir = "south";
        south = true;
    } else if(event.code == "KeyD" || event.code == "ArrowRight") {
        lockDir = "east";
        east = true;
    } else if(event.code == "ShiftLeft") {
        var ratColliding = -1;
        for(rat in ratsList) {
            if(rectCollision(ratsList[rat], player)) {
                ratColliding = rat;
            }
        };
        if(ratColliding != -1 && ratSpawnList[ratColliding][2]) {
            // rats here is the global variable determining how many rats we possess.
            // Distinct from rat, which is simply an iteration var for indexing which rat we are colliding with.
            rats++;
            if(day <= 5) ratDisplay.innerText = rats + " rats";
            else ratDisplay.innerText = rats + " rat tails";
            ratSpawnList[ratColliding][2] = false;
            if(!bgm.muted) ratSE.play();
        }
        var npcColliding = -1;
        for(npc in npcList) {
            if(rectCollision(npcList[npc], player)) {
                npcColliding = npc;
            }
        }
        // Checks what day it is and gives the corresponding dialogue
        if(npcColliding != -1 && npcSpawnList[npcColliding][2] && npcSpawnList[npcColliding][4]) {
            let dialogueDay = "1";
            Object.keys(npcSpawnList[npcColliding][4]).forEach(potentialDay => {
                if(parseInt(potentialDay) <= day && parseInt(potentialDay) > parseInt(dialogueDay)) {
                    dialogueDay = potentialDay;
                }
            });
            if(npcSpawnList[npcColliding][4][parseInt(dialogueDay)]) {
                dialogueDisplay.innerHTML = '';
                for(i in npcSpawnList[npcColliding][4][dialogueDay]) {
                    npcSpawnList[npcColliding][4][dialogueDay][i].add();
                }
            }
        }
    } else if(event.code == "KeyM") {
        // Mute/unmute music. Music can't autoplay in most browsers.
        if(!bgm.muted) {
            bgm.muted = true;
        } else {
            bgm.muted = false;
        }
    } else if(event.code == "Numpad8") {
        day++;
        dayDisplay.innerText = "Day: " + day;
    } else if(event.code == "Numpad2") {
        day--;
        if(day < 0) day = 0;
        dayDisplay.innerText = "Day: " + day;
    } else {
    }
})

// Notify program globally of idling, when key up
window.addEventListener("keyup", (event) => {
    if(event.code == "KeyW" || event.code == "ArrowUp") {
        north = false;
    } else if(event.code == "KeyA" || event.code == "ArrowLeft") {
        west = false;
    } else if(event.code == "KeyS" || event.code == "ArrowDown") {
        south = false;
    } else if(event.code == "KeyD" || event.code == "ArrowRight") {
        east = false;
    } else {
    }
})

// Draw/Spawn Rats at random intervals, at certain locations
// Format: [XPos on grid, YPos on grid, rat here currently? (bool), rat pacing behavior, rat current direction]
var spawningLoc = null;
var ratSpawnList = [
    [11,15,false, RAT_PACING_E, RAT_PACING_E],
    [11,30,false, RAT_IDLING, RAT_IDLING],
    [41,33,false, RAT_PACING_W, RAT_PACING_W],
    [39,39,false, RAT_PACING_N, RAT_PACING_N],
    [9,41,false, RAT_PACING_W, RAT_PACING_W],
    [23,41,false, RAT_PACING_S, RAT_PACING_S],
    [41,41,false, RAT_PACING_E, RAT_PACING_E],
    [13,44,false, RAT_PACING_W, RAT_PACING_W],
    [30,44,false, RAT_IDLING, RAT_IDLING],
    [22,30,false,RAT_PACING_E,RAT_PACING_E],
    [12,26,false,RAT_IDLING,RAT_IDLING],
    [7,21,false,RAT_PACING_S,RAT_PACING_S],
    [19,47,false,RAT_PACING_E,RAT_PACING_E],
    [23,47,false,RAT_IDLING,RAT_IDLING],
    [40,35,false,RAT_PACING_W,RAT_PACING_W],
    [22,8,false,RAT_IDLING,RAT_IDLING],
    [23,8,false,RAT_IDLING,RAT_IDLING],
    [24,8,false,RAT_IDLING,RAT_IDLING],
    [25,8,false,RAT_IDLING,RAT_IDLING],
    [22,9,false,RAT_IDLING,RAT_IDLING],
    [23,9,false,RAT_IDLING,RAT_IDLING],
    [24,9,false,RAT_IDLING,RAT_IDLING],
    [25,9,false,RAT_IDLING,RAT_IDLING],
];
for(i in ratSpawnList) {
    //console.log({x: (ratSpawnList[i][0]) * (tileDim*zoom) + offsetX, y: (ratSpawnList[i][1]) * (tileDim*zoom) + offsetY});
    ratsList.push(new Sprite({
        pos: {x: (ratSpawnList[i][0]) * (tileDim*zoom) + offsetX+23, y: (ratSpawnList[i][1]) * (tileDim*zoom) + offsetY+23},
        image: ratImage,
        maxFrames: 2
    }));
}

// Update Rat Sprites
for(i in ratsList) {
    if(ratSpawnList[i][3] == RAT_PACING_E) {
        ratsList[i].width = 50;
        ratsList[i].height = 25;
        ratsList[i].image = ratRightImage;
    }
    else if(ratSpawnList[i][3] == RAT_PACING_W) {
        ratsList[i].width = 50;
        ratsList[i].height = 25;
        ratsList[i].image = ratLeftImage;
    }
    else if(ratSpawnList[i][3] == RAT_PACING_N) {
        ratsList[i].width = 20;
        ratsList[i].height = 45;
        ratsList[i].image = ratUpImage;
    }
    else if(ratSpawnList[i][3] == RAT_PACING_S) {
        ratsList[i].width = 20;
        ratsList[i].height = 45;
        ratsList[i].image = ratDownImage;
    } else {   
        ratsList[i].width = 34;
        ratsList[i].height = 34;
    }
}
function genRats() {
    spawningLoc = Math.floor(Math.random() * 22);
    if(ratSpawnList[spawningLoc][2]) return;
    ratSpawnList[spawningLoc][2] = true;
    
}
window.setInterval(genRats, 2.5*1000);


// Functions defining actions that certain NPCs will take upon being interacted with.
function shipmentSellerYes() {
    if(money < 1) {
        return (new Dialogue({message: "Sorry, I want to help but have to support myself too. No money, no deal.", type: VIETNAMESE})).add();
    }
    money--;
    rats+=5;
    if(day <= 5) ratDisplay.innerText = rats + " rats";
    else ratDisplay.innerText = rats + " rat tails";
    moneyDisplay.innerText = "" + money + " cents";
    (new Dialogue({message: "Alright, there ya go kid. Pleasure doing business with you to stick it to those French scum!", type: VIETNAMESE})).add();
    (new Dialogue({message: "It's a pleasure!", type: PLAYER})).add();
}
function shipmentSellerNo() {
    (new Dialogue({message: "Okay, see you around!", type: VIETNAMESE})).add();
}
function breederYes() {
    if(money < 1) {
        return (new Dialogue({message: "Sorry, I want to help but have to support myself too. No money, no deal.", type: VIETNAMESE})).add();
    }
    rats+=3;
    money--;
    if(day <= 5) ratDisplay.innerText = rats + " rats";
    else ratDisplay.innerText = rats + " rat tails";
    moneyDisplay.innerText = "" + money + " cents";
}  
function breederNo() {
    (new Dialogue({message: "Okay, see you around!", type: VIETNAMESE})).add();
}
function buyerYes() {
    if(rats==0) return (new Dialogue({message: "You don't have any rats kid! Quit wasting my time!", type: FRENCH})).add();
    money+=ratPrice;
    rats--;
    if(day <= 5) ratDisplay.innerText = rats + " rats";
    else ratDisplay.innerText = rats + " rat tails";
    moneyDisplay.innerText = "" + money + " cents";
}
function buyerNo() {
    (new Dialogue({message: "Quit wasting my time!", type: FRENCH})).add();
}
function buyerBS() {
    (new Dialogue({message: "These are small mouse tails, taken from some villages! Quit wasting my time!", type: FRENCH})).add();
    (new Dialogue({message: "It was good money while it lasted. At least it showed we can easily outsmart these uptight foreigners.", type: VIETNAMESE})).add();
    (new Dialogue({message: "You said it.", type: PLAYER})).add();
}

var day1squaredialoguelist = [
    new Dialogue({message: "Our poster about the price of rats is certainly garnering some fanfare from these Annamites.", type: FRENCH, name: "French Officer (left)"}),
    new Dialogue({message: "They'll learn about money's true value in society and help them clean up around their filthy city for once!", type: FRENCH, name: "French Officer (middle)"}),
    new Dialogue({message: "Sure are doing us a big favor at least. That plague is trouble and I know it.", type: FRENCH, name: "French Officer (left)"}),
];
var day5squaredialoguelist = [
    new Dialogue({message: "1386 rats collected today! I do believe we can host the Exposition de Hanoi right on schedule if this keeps up!", type: FRENCH, name: "French Officer (left)"}),
    new Dialogue({message: "The world will see the glory of the French right here in Tonkin. So long as this plague subsides with the rat hunt.", type: FRENCH, name: "French Officer (middle)"})
]
var day8squaredialoguelist = [
    new Dialogue({message: "The vaccination tests we've been doing with the Annamites are absurd! Yersin is a madman with his tests and schemes to make this work.", type: FRENCH, name: "French Officer (right)"}),
    new Dialogue({message: "Seems like you haven't experienced the plague much firsthand. Its effects are terrifying enough that experiments simply have to be done on someone to stop its spread.", type: FRENCH, name: "French Officer (middle)"}),
    new Dialogue({message: "Thank goodness we're running this in the colonies where health comes before public opinion. This vaccine would never be created in the French Third Republic's mess.", type: FRENCH, name: "French Officer (left)"})
]
var day12squaredialoguelist = [
    new Dialogue({message: "Did you hear? Our rat-tail buyer was collecting MOUSE TAILS! Outrageous, and to think we are throwing money at them.", type: FRENCH, name: "French Officer (left)"}),
    new Dialogue({message: "Not to mention teaching them about public health maintenance and the value of money.", type: FRENCH, name: "French Officer (right)"}),
    new Dialogue({message: "Even after sorting this issue, there remains some who leave the rats alive to repopulate or import them!", type: FRENCH, name: "French Officer (middle)"}),
    new Dialogue({message: "The Chinese are commanding them, I'm sure of it.", type: FRENCH, name: "French Officer (right)"})
]
var day15squaredialoguelist = [
    new Dialogue({message: "Well, the Annamites aren't collecting rats any longer. Seems like 5 rats a cent won't do, but what did they expect after their scams?", type: FRENCH, name: "French Officer (left)"}),
    new Dialogue({message: "Yersin continues his worries about the plague, but the fact is that cases in Hanoi are low.", type: FRENCH, name: "French Officer (right)"}),
]

function endgame() {
    gamelive = false;
    window.setTimeout(function() {
        dialogueDisplay.innerText = "Thanks for playing! We hope you enjoyed exploring colonial Hanoi and learning more about this microhistory!";
    }, 5000);
}

// NPC Spawner List
var npcSpawnList = [
    [39, 21, true, VIETNAMESE, {
        1: [
            new Dialogue({message: "Time to get hunting! The poster over there says 4 cents per dead rat by selling to the French!", type: PLAYER}),
            new Dialogue({message: "Go ahead without me, I think I've got a better idea we can try soon. Let's talk later.", type: VIETNAMESE})
        ],
        5: [new Dialogue({message: "Hey, the new rat shipment just arrived. I'm selling them 1 cent for 10 rats. You interested?", question: true, type: VIETNAMESE, action: {yes: shipmentSellerYes, no: shipmentSellerNo}})]
    }, "Seller"],
    [27, 12, true, VIETNAMESE, {
        1: [
            new Dialogue({message: "The French, after all these taxes, are giving us money for dead rats. I wouldn't even try to understand them if I were you.", type: VIETNAMESE}),
            new Dialogue({message: "Let's get hunting!", type: PLAYER})
        ],
        5: [
            new Dialogue({message: "I'm getting suspicious of this rat hunt ordeal. The French medicine for the plague is dangerous and we're risking our lives out there for their benefit!", type: VIETNAMESE}),
        ],
        9: [
            new Dialogue({message: "The prices for these rats are so low that taking rats from smugglers is hardly worth it!", type: VIETNAMESE})
        ],
        12: [
            new Dialogue({message: "These foreign officials were too arrogant to throw money around like this. I can't complain though, more for my family.", type: VIETNAMESE})
        ]
    }],
    [30,31,true, FRENCH, {
        1: day1squaredialoguelist,
        5: day5squaredialoguelist,
        8: day8squaredialoguelist,
        12: day12squaredialoguelist,
        15: day15squaredialoguelist
    }, "Type 2"],
    [31,30.5,true, FRENCH, {
        1: day1squaredialoguelist,
        5: day5squaredialoguelist,
        8: day8squaredialoguelist,
        12: day12squaredialoguelist,
        15: day15squaredialoguelist
    }],
    [32,31,true, FRENCH, {
        1: day1squaredialoguelist,
        5: day5squaredialoguelist,
        8: day8squaredialoguelist,
        12: day12squaredialoguelist,
        15: day15squaredialoguelist
    }, "Type 2"],
    [23,41,true,FRENCH, {
        1: [
            new Dialogue({message: "My family's worried sick about the plague about in our city; think of our children!", type: FRENCH, name: "Frenchman (left)"}),
            new Dialogue({message: "If a good man such as Rue Paul Bert passed away from this, how will my family ever be safe around so many rats?", type: FRENCH, name: "Frenchman (right)"})
        ],
        5: [
            new Dialogue({message: "That Swiss gentleman is close to developing a vaccination against the plague, did you hear?", type: FRENCH, name: "Frenchman (left)"}),
            new Dialogue({message: "I sure hope so. I need another glass, times like these are simply too much for me to bear.", type: FRENCH, name: "Frenchman (right)"})
        ],
        9: [
            new Dialogue({message: "My neighbor has fallen ill today, I'm praying to God it's nothing to do with the arrival of this terrible disease.", type: FRENCH, name: "Frenchman (right)"}),
            new Dialogue({message: "It will be alright, my friend. The talk of town is more rats are being hunted than ever before!", type: FRENCH, name: "French Man (left)"})
        ],
        12: [
            new Dialogue({message: "The absurdity of these Annamites! Here they are, cutting tails off living rats and claiming they disposed of the bodies!", type: FRENCH, name: "Frenchman (left)"}),
            new Dialogue({message: "It's as if they want to be infected!", type: FRENCH, name: "Frenchman (right)"}),
            new Dialogue({message: "There are even rumors they breed disease-riddled rats in their filthy quarter only for the tails.", type: FRENCH, name: "Frenchman (left)"})
        ]
    }],
    [24,41,true,FRENCH,{}, "Type 2"],
    [32,35,true,FRENCH,{ // This is the buyer!
        1: [
            new Dialogue({message: "I'm taking rats! Price you're looking at is 4 cents a rat. Want the money?", question: true, type: FRENCH, action: {yes: buyerYes, no: buyerNo}})
        ],
        5: [
            new Dialogue({message: "Hey coolie! 1 cent a rat is my offer for your hard work. Want the money?", question: true, type: FRENCH, action: {yes: buyerYes, no: buyerNo}})
        ],
        9: [
            new Dialogue({message: "A quarter cent per rat tail, a quarter cent per rat tail. That's what I have!", question: true, type: FRENCH, action: {yes: buyerYes, no: buyerNo}})
        ],
        14: [
            new Dialogue({message: "A fifth of a cent for each rat tail you bring me, no tricks and only the biggest tails will do.", question: true, type: FRENCH, action: {yes: buyerBS, no: buyerNo}})
        ],
        15: [
            new Dialogue({message: "Not taking any more offers, this is the end of your tricks. Go home!", type: FRENCH}),
            {add: endgame}
        ]
    }, "Buyer"],
    [31,34,true,VIETNAMESE,{
        1: [
            new Dialogue({message: "What is this all about?", type: PLAYER}),
            new Dialogue({message: "This is the guy who the poster's talking of! All we have to do is round up a few rats and turn them in! I've got one here.", type: VIETNAMESE}),
            new Dialogue({message: "Taking rats! I'm taking rats!", type: FRENCH})
        ],
        5: [
            new Dialogue({message: "I've got dozens of rat tails, all from right here in Hanoi."})
        ],
        10: [
            new Dialogue({message: "I have more than ever today sir, take these.", type:VIETNAMESE}),
            new Dialogue({message: "These are nothing but mouse and vole tails! Filthy!", type:FRENCH})
        ]
    }],
    [32,33.5,true,VIETNAMESE,{
        1: [
            new Dialogue({message: "Hmm.. what's going on here?", type: VIETNAMESE})
        ],
        5: [
            new Dialogue({message: "50 rats! I have 50 rat tails sir!", type: FRENCH, name: "Vietnamese Citizen"})
        ],
        10: [
            new Dialogue({message: "These prices are outrageous! I'm going back to my farm.", type: VIETNAMESE})
        ]
    }],
    [23.5, 10, true, VIETNAMESE, {
        1: [
            new Dialogue({message: "Time to get hunting! The poster over there says 4 cents per dead rat by selling to the French!", type: PLAYER}),
            new Dialogue({message: "Let's talk later. I have an idea of how we can outsmart these foreigners.", type: VIETNAMESE})
        ],
        5: [
            new Dialogue({message: "Hey, from my rat breeding farm you get 3 rats for a cent. I want to give them away but my family is in need! What do you say?", type: VIETNAMESE, question: true, action: {yes: breederYes, no: breederNo}})
        ],
        12: [
            new Dialogue({message: "This business isn't worth it anymore with this pushback from the French. I'm going to release these rats free and end my service.", type: VIETNAMESE})
        ]
    }, "Breeder"],
    [16,17.5,true,VIETNAMESE,{
        1: [
            new Dialogue({message: "These rats are hard to catch! I've only managed two so far in the entire city..", type: VIETNAMESE})
        ],
        5: [
            new Dialogue({message: "The breeder has really been helping me get cents out of the French recently. If you can find him, talk to him a bit.", type: VIETNAMESE}),
            new Dialogue({message: "Sure thing.", type: PLAYER})
        ]
    }],
    [41,35,true,FRENCH,{
        1: [
            new Dialogue({message: "Hello? Can I help you?", type: FRENCH})
        ],
        7: [
            new Dialogue({message: "Hey, don't trust any coolies trying to scam you by the coast. What they're doing is illegal and wrong, don't talk to them!", type: FRENCH})
        ]
    }]
]
// Here is where you can specify more conditions to add different sprite sheets to different NPCs
// the value in npcSpawnList[i][5] defines a more specific NPC.
for(i in npcSpawnList) {
    let npc = new Sprite({
        pos: {x: (npcSpawnList[i][0]) * (tileDim*zoom) + offsetX, y: (npcSpawnList[i][1]) * (tileDim*zoom) + offsetY},
        maxFrames: 2
    });
    if(npcSpawnList[i][3] == FRENCH) {
        npc.image = frNPCImage;
        npc.width = 52;
        npc.height = 94;
        if(npcSpawnList[i][5]) {
            if(npcSpawnList[i][5] == "Type 2") {
                npc.image = frNPCImage2;
                npc.width = 49;
            }
        }
    }
    if(npcSpawnList[i][3] == VIETNAMESE) {
        npc.image = vietNPCImage;
        npc.width = 52;
        npc.height = 89;
    }
    npcList.push(npc);
}

// Tick Days By Every 2 Minutes
function incrementDay() {
    if(day>=15) clearInterval(incrementDay);
    day++;
    dayDisplay.innerText = "Day: " + day;
    if(day <= 4) ratPrice = 4;
    else if(day <= 8) ratPrice = 1;
    else if(day <= 13) ratPrice = 0.25;
    else ratPrice = 0.01;
}
window.setInterval(incrementDay, 45*1000);

// Very lengthy function designed to update a rat's position based on its spawning context and sprite.
// TODO: Condense?
function updateRatPos(ratSprite, ratSpawner) {
    if(!ratSpawner[2]) return;
    if(ratSpawner[3] == RAT_PACING_E && ratSpawner[4] == RAT_PACING_E) {
        if(ratSprite.pos.x >= ratSprite.home.x + 160) {
            ratSpawner[4] = RAT_PACING_W;
            ratSprite.pos.x = ratSprite.home.x + 160;
            ratSprite.image = ratLeftImage;
        } else {
            ratSprite.pos.x++;
        }
    }
    else if(ratSpawner[3] == RAT_PACING_E && ratSpawner[4] == RAT_PACING_W) {
        if(ratSprite.pos.x <= ratSprite.home.x) {
            ratSpawner[4] = RAT_PACING_E;
            ratSprite.pos.x = ratSprite.home.x;
            ratSprite.image = ratRightImage;
        } else {
            ratSprite.pos.x--;
        }
    }
    else if(ratSpawner[3] == RAT_PACING_W && ratSpawner[4] == RAT_PACING_W) {
        if(ratSprite.pos.x <= ratSprite.home.x - 160) {
            ratSpawner[4] = RAT_PACING_E;
            ratSprite.pos.x = ratSprite.home.x - 160;
            ratSprite.image = ratRightImage;
        } else {
            ratSprite.pos.x--;
        }
    }
    else if(ratSpawner[3] == RAT_PACING_W && ratSpawner[4] == RAT_PACING_E) {
        if(ratSprite.pos.x >= ratSprite.home.x) {
            ratSpawner[4] = RAT_PACING_W;
            ratSprite.pos.x = ratSprite.home.x;
            ratSprite.image = ratLeftImage;
        } else {
            ratSprite.pos.x++;
        }
    } else if(ratSpawner[3] == RAT_PACING_S && ratSpawner[4] == RAT_PACING_S) {
        if(ratSprite.pos.y >= ratSprite.home.y + 160) {
            ratSpawner[4] = RAT_PACING_N;
            ratSprite.pos.y = ratSprite.home.y + 160;
            ratSprite.image = ratUpImage;
        } else {
            ratSprite.pos.y++;
        }
    }
    else if(ratSpawner[3] == RAT_PACING_S && ratSpawner[4] == RAT_PACING_N) {
        if(ratSprite.pos.y <= ratSprite.home.y) {
            ratSpawner[4] = RAT_PACING_S;
            ratSprite.pos.y = ratSprite.home.y;
            ratSprite.image = ratDownImage;
        } else {
            ratSprite.pos.y--;
        }
    }
    else if(ratSpawner[3] == RAT_PACING_N && ratSpawner[4] == RAT_PACING_N) {
        if(ratSprite.pos.y <= ratSprite.home.y - 160) {
            ratSpawner[4] = RAT_PACING_S;
            ratSprite.pos.y = ratSprite.home.y - 160;
            ratSprite.image = ratDownImage;
        } else {
            ratSprite.pos.y--;
        }
    }
    else if(ratSpawner[3] == RAT_PACING_N && ratSpawner[4] == RAT_PACING_S) {
        if(ratSprite.pos.y >= ratSprite.home.y) {
            ratSpawner[4] = RAT_PACING_N;
            ratSprite.pos.y = ratSprite.home.y;
            ratSprite.image = ratUpImage;
        } else {
            ratSprite.pos.y++;
        }
    }
}

// Animate game
function playerAnimRefresh() {
    requestAnimationFrame(playerAnimRefresh);

    // Draw Map
    map.draw();

    // Draw Collision Barriers
    ctx.globalAlpha = 0.0;
    collisionsList.forEach(collis => {
        collis.debug();
    })
    ctx.globalAlpha = 1.0;


    // Update Rat Positions and Draw
    for(i in ratsList) {
        updateRatPos(ratsList[i], ratSpawnList[i]);
        if(ratSpawnList[i][2]) ratsList[i].draw();
    }

    // Draw NPCs
    npcList.forEach(npc => {
        npc.draw();
    });

    // Draw Player
    player.draw();

    // Draw Foreground
    foreground.draw();

    // Moves the background and the collision positions with each directional condition
    // Checks for lockDir, which essentially gives a singular current direction not allowing multiple at once
    let colliding = false;
    playerFixedHB = {...player, height: player.height-55, width: player.width-30, pos: {x: player.pos.x + 15, y: player.pos.y + 55}};
    if(north && !south && lockDir == "north") {
        // Animate player walking when direction held
        player.image = playerWalkUpSprite;

        // Collision block - Moves entire map and collision tiles by first moving the player to test
        playerFixedHB.pos.y = playerFixedHB.pos.y - speed;
        colliding = false;
        // First checks all collisions with new pos
        collisionsList.forEach(collis => {
            if(rectCollision(playerFixedHB, collis)) {
                colliding = true;
            }
        });
        // If not colliding, move the player back and move all the blocks
        if(!colliding) {
            collisionsList.forEach(collis => {
                collis.pos.y = collis.pos.y + speed;
            });
            ratsList.forEach(rat => {
                rat.pos.y = rat.pos.y + speed;
                rat.home.y = rat.home.y + speed;
            });
            map.pos.y = map.pos.y + speed;
            foreground.pos.y = foreground.pos.y + speed;
            npcList.forEach(npc => {
                npc.pos.y = npc.pos.y + speed;
            });
            colliding = false;
        }
        playerFixedHB.pos.y = playerFixedHB.pos.y + speed;
    }
    if(south && !north && lockDir == "south") {
        // Animate player walking when direction held
        player.image = playerWalkDownSprite;

        // Collision block - Moves entire map and collision tiles by first moving the player to test
        playerFixedHB.pos.y = playerFixedHB.pos.y + speed;
        colliding = false;
        // First checks all collisions with new pos
        collisionsList.forEach(collis => {
            if(rectCollision(playerFixedHB, collis)) {
                colliding = true;
            }
        });
        // If not colliding, move the player back and move all the blocks
        if(!colliding) {
            collisionsList.forEach(collis => {
                collis.pos.y = collis.pos.y - speed;
            });
            ratsList.forEach(rat => {
                rat.pos.y = rat.pos.y - 2;
                rat.home.y = rat.home.y - speed;
            });
            npcList.forEach(npc => {
                npc.pos.y = npc.pos.y - speed;
            });
            map.pos.y = map.pos.y - speed;
            foreground.pos.y = foreground.pos.y - speed;
            colliding = false;
        }
        playerFixedHB.pos.y = playerFixedHB.pos.y - speed;
    }
    if(east && !west && lockDir == "east") {
        // Animate player walking when direction held
        player.image = playerWalkRightSprite;

        // Collision block - Moves entire map and collision tiles by first moving the player to test
        playerFixedHB.pos.x = playerFixedHB.pos.x + speed;
        colliding = false;
        // First checks all collisions with new pos
        collisionsList.forEach(collis => {
            if(rectCollision(playerFixedHB, collis)) {
                colliding = true;
            }
        });
        // If not colliding, move the player back and move all the blocks
        if(!colliding) {
            collisionsList.forEach(collis => {
                collis.pos.x = collis.pos.x - speed;
            });
            ratsList.forEach(rat => {
                rat.pos.x = rat.pos.x - speed;
                rat.home.x = rat.home.x - speed;
            });
            npcList.forEach(npc => {
                npc.pos.x = npc.pos.x - speed;
            });
            map.pos.x = map.pos.x - speed;
            foreground.pos.x = foreground.pos.x - speed;
            colliding = false;
        }
        playerFixedHB.pos.x = playerFixedHB.pos.x - speed;
    }
    if(west && !east && lockDir == "west") {
        // Animate player walking when direction held
        player.image = playerWalkLeftSprite;

        // Collision block - Moves entire map and collision tiles by first moving the player to test
        playerFixedHB.pos.x = playerFixedHB.pos.x - speed;
        colliding = false;
        // First checks all collisions with new pos
        collisionsList.forEach(collis => {
            if(rectCollision(playerFixedHB, collis)) {
                colliding = true;
            }
        });
        // If not colliding, move the player back and move all the blocks
        if(!colliding) {
            collisionsList.forEach(collis => {
                collis.pos.x = collis.pos.x + speed;
            });
            ratsList.forEach(rat => {
                rat.pos.x = rat.pos.x + speed;
                rat.home.x = rat.home.x + speed;
            });
            npcList.forEach(npc => {
                npc.pos.x = npc.pos.x + speed;
            });
            map.pos.x = map.pos.x + 2;
            foreground.pos.x = foreground.pos.x + speed;
            colliding = false;
        }
        playerFixedHB.pos.x = playerFixedHB.pos.x + speed;
    }
    // Resets the player's sprite sheet if stationary. Accounts for opposite directions being held.
    if(
        (((south && north) || (!south && !north)) && ((east && west) || (!east && !west)))
    ) {
        player.image = playersprite;
    }
}
playerAnimRefresh();
//start screen
function mapStart(){
    const canStart = document.getElementById("start-screen")
    const ctxStart = canStart.getContext("2d");
    canStart.width = 1024;
    canStart.height = 576;
    ctxStart.fillStyle = "black";
    ctxStart.fillRect(0,0,can.width,can.height);
    }
    mapStart();
function startGame(){
    let startDiv = document.getElementById("start-screen");
    let gameCanvas = document.getElementById("main");
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    bgm.muted = false;
    bgm.play();

}


