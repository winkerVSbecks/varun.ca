const gridLines = `Grid Lines


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
1   2   3   4   5   6   7`;

const rowTracks = `Row Tracks


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
+---+---+---+---+---+---+`;

const columnTracks = `Column Tracks


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
+---+---+---+---+---+---+`;

export default {
  gridLines,
  rowTracks,
  columnTracks,
};
