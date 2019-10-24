import React from 'react';

export default () => (
  <figure class="center pa0 flex justify-around flex-wrap bg-tertiary">
    <pre>{`Grid Lines


+---+---+---+---+---+---+ 1
|   |   |   |   |   |   |
|   |   |   |   |   |   |
|   |   |   |   |   |   |
+-------+---+-----------+ 2
|   |xxx|   |   |   |   |
|   |xxx|<-- Grid Cell  |
|   |xxx|   |   |   |   |
+-----------------------+ 3
|   |   |   |   |   |   |
|   |   |   |   |   |   |
|   |   |   |   |   |   |
+---+---+---+---+---+---+ 4
1   2   3   4   5   6   7`}</pre>

    <pre>{`
Row Tracks


+---+---+---+---+---+---+
|xxxxxxxxxxxxxxxxxxxxxxx|
|xxxxxxxxxxxxxxxxxxxxxxx|
|xxxxxxxxxxxxxxxxxxxxxxx|
+-----------------------+
|   |   |   |   |   |   |
|   |   |   |   |   |   |
|   |   |   |   |   |   |
+-----------------------+
|   |   |   |   |   |   |
|   |   |   |   |   |   |
|   |   |   |   |   |   |
+---+---+---+---+---+---+`}</pre>

    <pre>{`
Column Tracks


+---+---+---+---+---+---+
|xxx|   |   |   |   |   |
|xxx|   |   |   |   |   |
|xxx|   |   |   |   |   |
+xxx--------------------+
|xxx|   |   |   |   |   |
|xxx|   |   |   |   |   |
|xxx|   |   |   |   |   |
+xxx--------------------+
|xxx|   |   |   |   |   |
|xxx|   |   |   |   |   |
|xxx|   |   |   |   |   |
+---+---+---+---+---+---+`}</pre>

    <figcaption class="clip">
      The grid gives us numbered lines to use when positioning items. A grid
      track is the space between any two lines on the grid.
    </figcaption>
  </figure>
);
