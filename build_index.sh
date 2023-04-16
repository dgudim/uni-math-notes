#!/bin/bash

FILE="index.html"
FOLDER="./uni"

echo "" > $FILE
echo "<!DOCTYPE html>
<html lang=\"\">

  <head>
    <meta charset=\"utf-8\">
    <title>Uni math topics</title>
  </head>

  <body>
    <header></header>
    <main>
      <h1>Topics:</h1>
      </div>
      <div>
          <ul>" >> $FILE

for f in $(find $FOLDER -name "*.html")
do
TITLE=$(cat $f | grep -m 1 "<title>" | sed 's/<title>//g; s/<\/title>//g;' | xargs)
echo "              <li><a href=\"$f\">$TITLE</a></li>" >> $FILE
done

echo "          </ul>
        </div>
    </main>

  </body>

</html>" >> $FILE
