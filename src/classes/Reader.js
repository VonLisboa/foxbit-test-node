"use strict";

import fs from "fs";


class TxtReader {
  readFile(file) {
    return new Promise(function (fulfill, reject) {
      fs.readFile(file, "utf8", function (err, data) {
        if (err) reject();
        else fulfill(data);
      });
    });
  }
}

export { TxtReader };
