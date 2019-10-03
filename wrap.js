function wrap(line, maxLen) {
 if (line.length <= maxLen) {
     return line;
 }

 const indexofBlank = line.lastIndexOf(' ', maxLen);
 let split;
 let offset;

 if (indexofBlank > -1) {
     split = indexofBlank;
     offset = 1;
 } else {
     split = maxLen;
     offset = 0;
 }

 return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);

}

module.exports = wrap;
