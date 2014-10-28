/**
  @author David Piegza

  Implements a simple graph drawing with force-directed placement in 2D and 3D.

  It uses the force-directed-layout implemented in:
  https://github.com/davidpiegza/Graph-Visualization/blob/master/layouts/force-directed-layout.js

  Drawing is done with Three.js: http://github.com/mrdoob/three.js

  To use this drawing, include the graph-min.js file and create a SimpleGraph object:

  <!DOCTYPE html>
  <html>
    <head>
      <title>Graph Visualization</title>
      <script type="text/javascript" src="path/to/graph-min.js"></script>
    </head>
    <body onload="new Drawing.SimpleGraph({layout: '3d', showStats: true, showInfo: true})">
    </bod>
  </html>

  Parameters:
  options = {
    layout: "2d" or "3d"

    showStats: <bool>, displays FPS box
    showInfo: <bool>, displays some info on the graph and layout
              The info box is created as <div id="graph-info">, it must be
              styled and positioned with CSS.


    selection: <bool>, enables selection of nodes on mouse over (it displays some info
               when the showInfo flag is set)


    limit: <int>, maximum number of nodes

    numNodes: <int> - sets the number of nodes to create.
    numEdges: <int> - sets the maximum number of edges for a node. A node will have
              1 to numEdges edges, this is set randomly.
  }


  Feel free to contribute a new drawing!

 */

var Drawing = Drawing || {};

Drawing.SimpleGraph = function(options) {
  var options = options || {};

  this.layout = options.layout || "2d";
  this.layout_options = options.graphLayout || {};
  this.show_stats = options.showStats || false;
  this.show_info = options.showInfo || false;
  this.show_labels = options.showLabels || false;
  this.selection = options.selection || false;
  this.limit = options.limit || 10;
  this.nodes_count = options.numNodes || 20;
  this.edges_count = options.numEdges || 10;

  var camera, controls, scene, renderer, interaction, geometry, object_selection;
  var stats;
  var info_text = {};
  var graph = new Graph({limit: options.limit});

  var geometries = [];

  var that=this;

  init();
  createGraph();
  animate();

  function init() {
    // Three.js initialization
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 1000000);
    camera.position.z = 5000;

    controls = new THREE.TrackballControls(camera);

    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 5.2;
    controls.panSpeed = 1;

    controls.noZoom = false;
    controls.noPan = false;

    controls.staticMoving = false;
    controls.dynamicDampingFactor = 0.3;

    controls.keys = [ 65, 83, 68 ];

    controls.addEventListener('change', render);

    scene = new THREE.Scene();

    // Node geometry
    if(that.layout === "3d") {
      geometry = new THREE.SphereGeometry( 25, 26, 27 );
    } else {
      geometry = new THREE.SphereGeometry( 50, 50, 0 );
    }

    // Create node selection, if set
    if(that.selection) {
      object_selection = new THREE.ObjectSelection({
        domElement: renderer.domElement,
        selected: function(obj) {
          // display info
          if(obj != null) {
            info_text.select = "Node " + obj.id;
          } else {
            delete info_text.select;
          }
        },
        clicked: function(obj) {
        }
      });
    }

    document.body.appendChild( renderer.domElement );

    // Stats.js
    if(that.show_stats) {
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0px';
      document.body.appendChild( stats.domElement );
    }

    // Create info box
    if(that.show_info) {
      var info = document.createElement("div");
      var id_attr = document.createAttribute("id");
      id_attr.nodeValue = "graph-info";
      info.setAttributeNode(id_attr);
      document.body.appendChild( info );
    }
  }


  /**
   *  Creates a graph with random nodes and edges.
   *  Number of nodes and edges can be set with
   *  numNodes and numEdges.
   */
  function createGraph() {

var node0 = new Node(0);
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);
var node8 = new Node(8);
var node9 = new Node(9);
var node10 = new Node(10);
var node11 = new Node(11);
var node12 = new Node(12);
var node13 = new Node(13);
var node14 = new Node(14);
var node15 = new Node(15);
var node16 = new Node(16);
var node17 = new Node(17);
var node18 = new Node(18);
var node19 = new Node(19);
var node20 = new Node(20);
var node21 = new Node(21);
var node22 = new Node(22);
var node23 = new Node(23);
var node24 = new Node(24);
var node25 = new Node(25);
var node26 = new Node(26);
var node27 = new Node(27);
var node28 = new Node(28);
var node29 = new Node(29);
var node30 = new Node(30);
var node31 = new Node(31);
var node32 = new Node(32);
var node33 = new Node(33);
var node34 = new Node(34);
var node35 = new Node(35);
var node36 = new Node(36);
var node37 = new Node(37);
var node38 = new Node(38);
var node39 = new Node(39);
var node40 = new Node(40);
var node41 = new Node(41);
var node42 = new Node(42);
var node43 = new Node(43);
var node44 = new Node(44);
var node45 = new Node(45);
var node46 = new Node(46);
var node47 = new Node(47);
var node48 = new Node(48);
var node49 = new Node(49);
var node50 = new Node(50);
var node51 = new Node(51);
var node52 = new Node(52);
var node53 = new Node(53);
var node54 = new Node(54);
var node55 = new Node(55);
var node56 = new Node(56);
var node57 = new Node(57);
var node58 = new Node(58);
var node59 = new Node(59);
var node60 = new Node(60);
var node61 = new Node(61);
var node62 = new Node(62);
var node63 = new Node(63);
var node64 = new Node(64);
var node65 = new Node(65);
var node66 = new Node(66);
var node67 = new Node(67);
var node68 = new Node(68);
var node69 = new Node(69);
var node70 = new Node(70);
var node71 = new Node(71);
var node72 = new Node(72);
var node73 = new Node(73);
var node74 = new Node(74);
var node75 = new Node(75);
var node76 = new Node(76);
var node77 = new Node(77);
var node78 = new Node(78);
var node79 = new Node(79);
var node80 = new Node(80);
var node81 = new Node(81);
var node82 = new Node(82);
var node83 = new Node(83);
var node84 = new Node(84);
var node85 = new Node(85);
var node86 = new Node(86);
var node87 = new Node(87);
var node88 = new Node(88);
var node89 = new Node(89);
var node90 = new Node(90);
var node91 = new Node(91);
var node92 = new Node(92);
var node93 = new Node(93);
var node94 = new Node(94);
var node95 = new Node(95);
var node96 = new Node(96);
var node97 = new Node(97);
var node98 = new Node(98);
var node99 = new Node(99);


node0.data.title = "This is node " + node0.id;
node1.data.title = "This is node " + node1.id;
node2.data.title = "This is node " + node2.id;
node3.data.title = "This is node " + node3.id;
node4.data.title = "This is node " + node4.id;
node5.data.title = "This is node " + node5.id;
node6.data.title = "This is node " + node6.id;
node7.data.title = "This is node " + node7.id;
node8.data.title = "This is node " + node8.id;
node9.data.title = "This is node " + node9.id;
node10.data.title = "This is node " + node10.id;
node11.data.title = "This is node " + node11.id;
node12.data.title = "This is node " + node12.id;
node13.data.title = "This is node " + node13.id;
node14.data.title = "This is node " + node14.id;
node15.data.title = "This is node " + node15.id;
node16.data.title = "This is node " + node16.id;
node17.data.title = "This is node " + node17.id;
node18.data.title = "This is node " + node18.id;
node19.data.title = "This is node " + node19.id;
node20.data.title = "This is node " + node20.id;
node21.data.title = "This is node " + node21.id;
node22.data.title = "This is node " + node22.id;
node23.data.title = "This is node " + node23.id;
node24.data.title = "This is node " + node24.id;
node25.data.title = "This is node " + node25.id;
node26.data.title = "This is node " + node26.id;
node27.data.title = "This is node " + node27.id;
node28.data.title = "This is node " + node28.id;
node29.data.title = "This is node " + node29.id;
node30.data.title = "This is node " + node30.id;
node31.data.title = "This is node " + node31.id;
node32.data.title = "This is node " + node32.id;
node33.data.title = "This is node " + node33.id;
node34.data.title = "This is node " + node34.id;
node35.data.title = "This is node " + node35.id;
node36.data.title = "This is node " + node36.id;
node37.data.title = "This is node " + node37.id;
node38.data.title = "This is node " + node38.id;
node39.data.title = "This is node " + node39.id;
node40.data.title = "This is node " + node40.id;
node41.data.title = "This is node " + node41.id;
node42.data.title = "This is node " + node42.id;
node43.data.title = "This is node " + node43.id;
node44.data.title = "This is node " + node44.id;
node45.data.title = "This is node " + node45.id;
node46.data.title = "This is node " + node46.id;
node47.data.title = "This is node " + node47.id;
node48.data.title = "This is node " + node48.id;
node49.data.title = "This is node " + node49.id;
node50.data.title = "This is node " + node50.id;
node51.data.title = "This is node " + node51.id;
node52.data.title = "This is node " + node52.id;
node53.data.title = "This is node " + node53.id;
node54.data.title = "This is node " + node54.id;
node55.data.title = "This is node " + node55.id;
node56.data.title = "This is node " + node56.id;
node57.data.title = "This is node " + node57.id;
node58.data.title = "This is node " + node58.id;
node59.data.title = "This is node " + node59.id;
node60.data.title = "This is node " + node60.id;
node61.data.title = "This is node " + node61.id;
node62.data.title = "This is node " + node62.id;
node63.data.title = "This is node " + node63.id;
node64.data.title = "This is node " + node64.id;
node65.data.title = "This is node " + node65.id;
node66.data.title = "This is node " + node66.id;
node67.data.title = "This is node " + node67.id;
node68.data.title = "This is node " + node68.id;
node69.data.title = "This is node " + node69.id;
node70.data.title = "This is node " + node70.id;
node71.data.title = "This is node " + node71.id;
node72.data.title = "This is node " + node72.id;
node73.data.title = "This is node " + node73.id;
node74.data.title = "This is node " + node74.id;
node75.data.title = "This is node " + node75.id;
node76.data.title = "This is node " + node76.id;
node77.data.title = "This is node " + node77.id;
node78.data.title = "This is node " + node78.id;
node79.data.title = "This is node " + node79.id;
node80.data.title = "This is node " + node80.id;
node81.data.title = "This is node " + node81.id;
node82.data.title = "This is node " + node82.id;
node83.data.title = "This is node " + node83.id;
node84.data.title = "This is node " + node84.id;
node85.data.title = "This is node " + node85.id;
node86.data.title = "This is node " + node86.id;
node87.data.title = "This is node " + node87.id;
node88.data.title = "This is node " + node88.id;
node89.data.title = "This is node " + node89.id;
node90.data.title = "This is node " + node90.id;
node91.data.title = "This is node " + node91.id;
node92.data.title = "This is node " + node92.id;
node93.data.title = "This is node " + node93.id;
node94.data.title = "This is node " + node94.id;
node95.data.title = "This is node " + node95.id;
node96.data.title = "This is node " + node96.id;
node97.data.title = "This is node " + node97.id;
node98.data.title = "This is node " + node98.id;
node99.data.title = "This is node " + node99.id;

graph.addNode(node0);
graph.addNode(node1);
graph.addNode(node2);
graph.addNode(node3);
graph.addNode(node4);
graph.addNode(node5);
graph.addNode(node6);
graph.addNode(node7);
graph.addNode(node8);
graph.addNode(node9);
graph.addNode(node10);
graph.addNode(node11);
graph.addNode(node12);
graph.addNode(node13);
graph.addNode(node14);
graph.addNode(node15);
graph.addNode(node16);
graph.addNode(node17);
graph.addNode(node18);
graph.addNode(node19);
graph.addNode(node20);
graph.addNode(node21);
graph.addNode(node22);
graph.addNode(node23);
graph.addNode(node24);
graph.addNode(node25);
graph.addNode(node26);
graph.addNode(node27);
graph.addNode(node28);
graph.addNode(node29);
graph.addNode(node30);
graph.addNode(node31);
graph.addNode(node32);
graph.addNode(node33);
graph.addNode(node34);
graph.addNode(node35);
graph.addNode(node36);
graph.addNode(node37);
graph.addNode(node38);
graph.addNode(node39);
graph.addNode(node40);
graph.addNode(node41);
graph.addNode(node42);
graph.addNode(node43);
graph.addNode(node44);
graph.addNode(node45);
graph.addNode(node46);
graph.addNode(node47);
graph.addNode(node48);
graph.addNode(node49);
graph.addNode(node50);
graph.addNode(node51);
graph.addNode(node52);
graph.addNode(node53);
graph.addNode(node54);
graph.addNode(node55);
graph.addNode(node56);
graph.addNode(node57);
graph.addNode(node58);
graph.addNode(node59);
graph.addNode(node60);
graph.addNode(node61);
graph.addNode(node62);
graph.addNode(node63);
graph.addNode(node64);
graph.addNode(node65);
graph.addNode(node66);
graph.addNode(node67);
graph.addNode(node68);
graph.addNode(node69);
graph.addNode(node70);
graph.addNode(node71);
graph.addNode(node72);
graph.addNode(node73);
graph.addNode(node74);
graph.addNode(node75);
graph.addNode(node76);
graph.addNode(node77);
graph.addNode(node78);
graph.addNode(node79);
graph.addNode(node80);
graph.addNode(node81);
graph.addNode(node82);
graph.addNode(node83);
graph.addNode(node84);
graph.addNode(node85);
graph.addNode(node86);
graph.addNode(node87);
graph.addNode(node88);
graph.addNode(node89);
graph.addNode(node90);
graph.addNode(node91);
graph.addNode(node92);
graph.addNode(node93);
graph.addNode(node94);
graph.addNode(node95);
graph.addNode(node96);
graph.addNode(node97);
graph.addNode(node98);
graph.addNode(node99);

drawNode(node0);
drawNode(node1);
drawNode(node2);
drawNode(node3);
drawNode(node4);
drawNode(node5);
drawNode(node6);
drawNode(node7);
drawNode(node8);
drawNode(node9);
drawNode(node10);
drawNode(node11);
drawNode(node12);
drawNode(node13);
drawNode(node14);
drawNode(node15);
drawNode(node16);
drawNode(node17);
drawNode(node18);
drawNode(node19);
drawNode(node20);
drawNode(node21);
drawNode(node22);
drawNode(node23);
drawNode(node24);
drawNode(node25);
drawNode(node26);
drawNode(node27);
drawNode(node28);
drawNode(node29);
drawNode(node30);
drawNode(node31);
drawNode(node32);
drawNode(node33);
drawNode(node34);
drawNode(node35);
drawNode(node36);
drawNode(node37);
drawNode(node38);
drawNode(node39);
drawNode(node40);
drawNode(node41);
drawNode(node42);
drawNode(node43);
drawNode(node44);
drawNode(node45);
drawNode(node46);
drawNode(node47);
drawNode(node48);
drawNode(node49);
drawNode(node50);
drawNode(node51);
drawNode(node52);
drawNode(node53);
drawNode(node54);
drawNode(node55);
drawNode(node56);
drawNode(node57);
drawNode(node58);
drawNode(node59);
drawNode(node60);
drawNode(node61);
drawNode(node62);
drawNode(node63);
drawNode(node64);
drawNode(node65);
drawNode(node66);
drawNode(node67);
drawNode(node68);
drawNode(node69);
drawNode(node70);
drawNode(node71);
drawNode(node72);
drawNode(node73);
drawNode(node74);
drawNode(node75);
drawNode(node76);
drawNode(node77);
drawNode(node78);
drawNode(node79);
drawNode(node80);
drawNode(node81);
drawNode(node82);
drawNode(node83);
drawNode(node84);
drawNode(node85);
drawNode(node86);
drawNode(node87);
drawNode(node88);
drawNode(node89);
drawNode(node90);
drawNode(node91);
drawNode(node92);
drawNode(node93);
drawNode(node94);
drawNode(node95);
drawNode(node96);
drawNode(node97);
drawNode(node98);
drawNode(node99);

graph.addEdge(node0, node76);
drawEdge(node0, node76);
graph.addEdge(node5, node57);
drawEdge(node5, node57);
graph.addEdge(node34, node46);
drawEdge(node34, node46);
graph.addEdge(node50, node84);
drawEdge(node50, node84);
graph.addEdge(node78, node86);
drawEdge(node78, node86);
graph.addEdge(node18, node45);
drawEdge(node18, node45);
graph.addEdge(node74, node94);
drawEdge(node74, node94);
graph.addEdge(node43, node63);
drawEdge(node43, node63);
graph.addEdge(node76, node88);
drawEdge(node76, node88);
graph.addEdge(node47, node93);
drawEdge(node47, node93);
graph.addEdge(node55, node82);
drawEdge(node55, node82);
graph.addEdge(node16, node84);
drawEdge(node16, node84);
graph.addEdge(node56, node75);
drawEdge(node56, node75);
graph.addEdge(node44, node86);
drawEdge(node44, node86);
graph.addEdge(node7, node98);
drawEdge(node7, node98);
graph.addEdge(node33, node95);
drawEdge(node33, node95);
graph.addEdge(node71, node78);
drawEdge(node71, node78);
graph.addEdge(node4, node5);
drawEdge(node4, node5);
graph.addEdge(node34, node85);
drawEdge(node34, node85);
graph.addEdge(node22, node48);
drawEdge(node22, node48);
graph.addEdge(node3, node40);
drawEdge(node3, node40);
graph.addEdge(node27, node39);
drawEdge(node27, node39);
graph.addEdge(node21, node37);
drawEdge(node21, node37);
graph.addEdge(node52, node67);
drawEdge(node52, node67);
graph.addEdge(node73, node93);
drawEdge(node73, node93);
graph.addEdge(node37, node44);
drawEdge(node37, node44);
graph.addEdge(node36, node55);
drawEdge(node36, node55);
graph.addEdge(node20, node82);
drawEdge(node20, node82);
graph.addEdge(node13, node13);
drawEdge(node13, node13);
graph.addEdge(node3, node11);
drawEdge(node3, node11);
graph.addEdge(node25, node58);
drawEdge(node25, node58);
graph.addEdge(node4, node12);
drawEdge(node4, node12);
graph.addEdge(node26, node49);
drawEdge(node26, node49);
graph.addEdge(node14, node84);
drawEdge(node14, node84);
graph.addEdge(node23, node50);
drawEdge(node23, node50);
graph.addEdge(node6, node14);
drawEdge(node6, node14);
graph.addEdge(node4, node42);
drawEdge(node4, node42);
graph.addEdge(node37, node68);
drawEdge(node37, node68);
graph.addEdge(node58, node59);
drawEdge(node58, node59);
graph.addEdge(node25, node70);
drawEdge(node25, node70);
graph.addEdge(node41, node43);
drawEdge(node41, node43);
graph.addEdge(node13, node82);
drawEdge(node13, node82);
graph.addEdge(node12, node41);
drawEdge(node12, node41);
graph.addEdge(node4, node94);
drawEdge(node4, node94);
graph.addEdge(node49, node52);
drawEdge(node49, node52);
graph.addEdge(node56, node89);
drawEdge(node56, node89);
graph.addEdge(node50, node63);
drawEdge(node50, node63);
graph.addEdge(node0, node5);
drawEdge(node0, node5);
graph.addEdge(node57, node99);
drawEdge(node57, node99);
graph.addEdge(node59, node85);
drawEdge(node59, node85);
graph.addEdge(node45, node90);
drawEdge(node45, node90);
graph.addEdge(node80, node98);
drawEdge(node80, node98);
graph.addEdge(node34, node65);
drawEdge(node34, node65);
graph.addEdge(node3, node60);
drawEdge(node3, node60);
graph.addEdge(node9, node81);
drawEdge(node9, node81);
graph.addEdge(node29, node81);
drawEdge(node29, node81);
graph.addEdge(node54, node91);
drawEdge(node54, node91);
graph.addEdge(node51, node71);
drawEdge(node51, node71);
graph.addEdge(node13, node37);
drawEdge(node13, node37);
graph.addEdge(node5, node79);
drawEdge(node5, node79);
graph.addEdge(node4, node99);
drawEdge(node4, node99);
graph.addEdge(node0, node28);
drawEdge(node0, node28);
graph.addEdge(node21, node86);
drawEdge(node21, node86);
graph.addEdge(node92, node99);
drawEdge(node92, node99);
graph.addEdge(node20, node27);
drawEdge(node20, node27);
graph.addEdge(node1, node66);
drawEdge(node1, node66);
graph.addEdge(node73, node78);
drawEdge(node73, node78);
graph.addEdge(node54, node56);
drawEdge(node54, node56);
graph.addEdge(node5, node72);
drawEdge(node5, node72);
graph.addEdge(node12, node53);
drawEdge(node12, node53);
graph.addEdge(node31, node82);
drawEdge(node31, node82);
graph.addEdge(node44, node58);
drawEdge(node44, node58);
graph.addEdge(node92, node92);
drawEdge(node92, node92);
graph.addEdge(node49, node56);
drawEdge(node49, node56);
graph.addEdge(node7, node92);
drawEdge(node7, node92);
graph.addEdge(node71, node72);
drawEdge(node71, node72);
graph.addEdge(node25, node55);
drawEdge(node25, node55);
graph.addEdge(node39, node99);
drawEdge(node39, node99);
graph.addEdge(node45, node76);
drawEdge(node45, node76);
graph.addEdge(node38, node42);
drawEdge(node38, node42);
graph.addEdge(node46, node51);
drawEdge(node46, node51);
graph.addEdge(node59, node89);
drawEdge(node59, node89);
graph.addEdge(node60, node73);
drawEdge(node60, node73);
graph.addEdge(node0, node69);
drawEdge(node0, node69);
graph.addEdge(node37, node42);
drawEdge(node37, node42);
graph.addEdge(node31, node91);
drawEdge(node31, node91);
graph.addEdge(node44, node49);
drawEdge(node44, node49);
graph.addEdge(node14, node14);
drawEdge(node14, node14);
graph.addEdge(node54, node97);
drawEdge(node54, node97);
graph.addEdge(node84, node95);
drawEdge(node84, node95);
graph.addEdge(node19, node72);
drawEdge(node19, node72);
graph.addEdge(node26, node63);
drawEdge(node26, node63);
graph.addEdge(node5, node15);
drawEdge(node5, node15);
graph.addEdge(node9, node68);
drawEdge(node9, node68);
graph.addEdge(node4, node20);
drawEdge(node4, node20);
graph.addEdge(node9, node46);
drawEdge(node9, node46);
graph.addEdge(node30, node35);
drawEdge(node30, node35);
graph.addEdge(node52, node84);
drawEdge(node52, node84);
graph.addEdge(node6, node56);
drawEdge(node6, node56);
graph.addEdge(node36, node56);
drawEdge(node36, node56);
graph.addEdge(node18, node55);
drawEdge(node18, node55);
graph.addEdge(node18, node70);
drawEdge(node18, node70);
graph.addEdge(node58, node81);
drawEdge(node58, node81);
graph.addEdge(node37, node97);
drawEdge(node37, node97);
graph.addEdge(node2, node5);
drawEdge(node2, node5);
graph.addEdge(node23, node69);
drawEdge(node23, node69);
graph.addEdge(node12, node83);
drawEdge(node12, node83);
graph.addEdge(node67, node73);
drawEdge(node67, node73);
graph.addEdge(node30, node95);
drawEdge(node30, node95);
graph.addEdge(node19, node86);
drawEdge(node19, node86);
graph.addEdge(node68, node75);
drawEdge(node68, node75);
graph.addEdge(node58, node88);
drawEdge(node58, node88);
graph.addEdge(node56, node72);
drawEdge(node56, node72);
graph.addEdge(node33, node90);
drawEdge(node33, node90);
graph.addEdge(node0, node29);
drawEdge(node0, node29);
graph.addEdge(node23, node66);
drawEdge(node23, node66);
graph.addEdge(node45, node81);
drawEdge(node45, node81);
graph.addEdge(node70, node91);
drawEdge(node70, node91);
graph.addEdge(node10, node86);
drawEdge(node10, node86);
graph.addEdge(node39, node66);
drawEdge(node39, node66);
graph.addEdge(node4, node32);
drawEdge(node4, node32);
graph.addEdge(node32, node32);
drawEdge(node32, node32);
graph.addEdge(node76, node96);
drawEdge(node76, node96);
graph.addEdge(node11, node52);
drawEdge(node11, node52);
graph.addEdge(node42, node58);
drawEdge(node42, node58);
graph.addEdge(node31, node92);
drawEdge(node31, node92);
graph.addEdge(node7, node64);
drawEdge(node7, node64);
graph.addEdge(node33, node83);
drawEdge(node33, node83);
graph.addEdge(node13, node97);
drawEdge(node13, node97);
graph.addEdge(node1, node44);
drawEdge(node1, node44);
graph.addEdge(node6, node11);
drawEdge(node6, node11);
graph.addEdge(node49, node97);
drawEdge(node49, node97);
graph.addEdge(node32, node39);
drawEdge(node32, node39);
graph.addEdge(node23, node47);
drawEdge(node23, node47);
graph.addEdge(node51, node87);
drawEdge(node51, node87);
graph.addEdge(node64, node83);
drawEdge(node64, node83);
graph.addEdge(node48, node54);
drawEdge(node48, node54);
graph.addEdge(node40, node83);
drawEdge(node40, node83);
graph.addEdge(node26, node61);
drawEdge(node26, node61);
graph.addEdge(node45, node93);
drawEdge(node45, node93);
graph.addEdge(node19, node22);
drawEdge(node19, node22);
graph.addEdge(node34, node66);
drawEdge(node34, node66);
graph.addEdge(node61, node90);
drawEdge(node61, node90);
graph.addEdge(node40, node46);
drawEdge(node40, node46);
graph.addEdge(node45, node95);
drawEdge(node45, node95);
graph.addEdge(node1, node86);
drawEdge(node1, node86);
graph.addEdge(node8, node55);
drawEdge(node8, node55);
graph.addEdge(node6, node62);
drawEdge(node6, node62);
graph.addEdge(node12, node37);
drawEdge(node12, node37);
graph.addEdge(node31, node66);
drawEdge(node31, node66);
graph.addEdge(node4, node96);
drawEdge(node4, node96);
graph.addEdge(node16, node70);
drawEdge(node16, node70);
graph.addEdge(node13, node40);
drawEdge(node13, node40);
graph.addEdge(node11, node30);
drawEdge(node11, node30);
graph.addEdge(node60, node99);
drawEdge(node60, node99);
graph.addEdge(node17, node98);
drawEdge(node17, node98);
graph.addEdge(node92, node96);
drawEdge(node92, node96);
graph.addEdge(node18, node94);
drawEdge(node18, node94);
graph.addEdge(node21, node51);
drawEdge(node21, node51);
graph.addEdge(node28, node40);
drawEdge(node28, node40);
graph.addEdge(node17, node21);
drawEdge(node17, node21);
graph.addEdge(node32, node43);
drawEdge(node32, node43);
graph.addEdge(node50, node87);
drawEdge(node50, node87);
graph.addEdge(node31, node75);
drawEdge(node31, node75);
graph.addEdge(node28, node95);
drawEdge(node28, node95);
graph.addEdge(node71, node85);
drawEdge(node71, node85);
graph.addEdge(node30, node93);
drawEdge(node30, node93);
graph.addEdge(node44, node63);
drawEdge(node44, node63);
graph.addEdge(node0, node16);
drawEdge(node0, node16);
graph.addEdge(node42, node91);
drawEdge(node42, node91);
graph.addEdge(node5, node85);
drawEdge(node5, node85);
graph.addEdge(node65, node97);
drawEdge(node65, node97);
graph.addEdge(node68, node83);
drawEdge(node68, node83);
graph.addEdge(node25, node50);
drawEdge(node25, node50);
graph.addEdge(node59, node68);
drawEdge(node59, node68);
graph.addEdge(node76, node98);
drawEdge(node76, node98);
graph.addEdge(node88, node92);
drawEdge(node88, node92);
graph.addEdge(node29, node64);
drawEdge(node29, node64);
graph.addEdge(node18, node39);
drawEdge(node18, node39);
graph.addEdge(node17, node58);
drawEdge(node17, node58);
graph.addEdge(node13, node52);
drawEdge(node13, node52);
graph.addEdge(node14, node44);
drawEdge(node14, node44);
graph.addEdge(node56, node81);
drawEdge(node56, node81);
graph.addEdge(node55, node98);
drawEdge(node55, node98);
graph.addEdge(node18, node80);
drawEdge(node18, node80);
graph.addEdge(node8, node93);
drawEdge(node8, node93);
graph.addEdge(node3, node46);
drawEdge(node3, node46);
graph.addEdge(node6, node9);
drawEdge(node6, node9);
graph.addEdge(node34, node73);
drawEdge(node34, node73);
graph.addEdge(node39, node83);
drawEdge(node39, node83);
graph.addEdge(node2, node67);
drawEdge(node2, node67);
graph.addEdge(node27, node73);
drawEdge(node27, node73);
graph.addEdge(node76, node77);
drawEdge(node76, node77);
graph.addEdge(node55, node93);
drawEdge(node55, node93);
graph.addEdge(node40, node85);
drawEdge(node40, node85);
graph.addEdge(node28, node97);
drawEdge(node28, node97);
graph.addEdge(node54, node93);
drawEdge(node54, node93);
graph.addEdge(node46, node62);
drawEdge(node46, node62);
graph.addEdge(node9, node72);
drawEdge(node9, node72);
graph.addEdge(node1, node59);
drawEdge(node1, node59);
graph.addEdge(node23, node72);
drawEdge(node23, node72);
graph.addEdge(node5, node21);
drawEdge(node5, node21);
graph.addEdge(node61, node88);
drawEdge(node61, node88);
graph.addEdge(node48, node80);
drawEdge(node48, node80);
graph.addEdge(node79, node88);
drawEdge(node79, node88);
graph.addEdge(node13, node38);
drawEdge(node13, node38);
graph.addEdge(node10, node29);
drawEdge(node10, node29);
graph.addEdge(node44, node66);
drawEdge(node44, node66);
graph.addEdge(node43, node86);
drawEdge(node43, node86);
graph.addEdge(node60, node91);
drawEdge(node60, node91);
graph.addEdge(node23, node65);
drawEdge(node23, node65);
graph.addEdge(node4, node31);
drawEdge(node4, node31);
graph.addEdge(node5, node30);
drawEdge(node5, node30);
graph.addEdge(node30, node46);
drawEdge(node30, node46);
graph.addEdge(node36, node69);
drawEdge(node36, node69);
graph.addEdge(node63, node79);
drawEdge(node63, node79);
graph.addEdge(node11, node93);
drawEdge(node11, node93);
graph.addEdge(node35, node40);
drawEdge(node35, node40);
graph.addEdge(node4, node67);
drawEdge(node4, node67);
graph.addEdge(node7, node54);
drawEdge(node7, node54);
graph.addEdge(node84, node90);
drawEdge(node84, node90);
graph.addEdge(node17, node89);
drawEdge(node17, node89);
graph.addEdge(node7, node93);
drawEdge(node7, node93);
graph.addEdge(node15, node45);
drawEdge(node15, node45);
graph.addEdge(node80, node95);
drawEdge(node80, node95);
graph.addEdge(node2, node44);
drawEdge(node2, node44);
graph.addEdge(node32, node36);
drawEdge(node32, node36);
graph.addEdge(node41, node94);
drawEdge(node41, node94);
graph.addEdge(node29, node36);
drawEdge(node29, node36);
graph.addEdge(node39, node84);
drawEdge(node39, node84);
graph.addEdge(node51, node82);
drawEdge(node51, node82);
graph.addEdge(node7, node47);
drawEdge(node7, node47);
graph.addEdge(node35, node55);
drawEdge(node35, node55);
graph.addEdge(node49, node88);
drawEdge(node49, node88);
graph.addEdge(node62, node93);
drawEdge(node62, node93);
graph.addEdge(node11, node14);
drawEdge(node11, node14);
graph.addEdge(node38, node58);
drawEdge(node38, node58);
graph.addEdge(node41, node83);
drawEdge(node41, node83);
graph.addEdge(node83, node93);
drawEdge(node83, node93);
graph.addEdge(node3, node10);
drawEdge(node3, node10);
graph.addEdge(node16, node98);
drawEdge(node16, node98);
graph.addEdge(node4, node13);
drawEdge(node4, node13);
graph.addEdge(node14, node85);
drawEdge(node14, node85);
graph.addEdge(node1, node32);
drawEdge(node1, node32);
graph.addEdge(node21, node45);
drawEdge(node21, node45);
graph.addEdge(node87, node89);
drawEdge(node87, node89);
graph.addEdge(node0, node91);
drawEdge(node0, node91);
graph.addEdge(node3, node54);
drawEdge(node3, node54);
graph.addEdge(node36, node81);
drawEdge(node36, node81);
graph.addEdge(node40, node49);
drawEdge(node40, node49);
graph.addEdge(node64, node87);
drawEdge(node64, node87);
graph.addEdge(node27, node97);
drawEdge(node27, node97);
graph.addEdge(node66, node85);
drawEdge(node66, node85);
graph.addEdge(node56, node90);
drawEdge(node56, node90);
graph.addEdge(node27, node30);
drawEdge(node27, node30);
graph.addEdge(node19, node52);
drawEdge(node19, node52);
graph.addEdge(node96, node96);
drawEdge(node96, node96);
graph.addEdge(node9, node78);
drawEdge(node9, node78);
graph.addEdge(node21, node54);
drawEdge(node21, node54);
graph.addEdge(node28, node55);
drawEdge(node28, node55);
graph.addEdge(node39, node74);
drawEdge(node39, node74);
graph.addEdge(node44, node74);
drawEdge(node44, node74);
graph.addEdge(node52, node82);
drawEdge(node52, node82);
graph.addEdge(node8, node59);
drawEdge(node8, node59);
graph.addEdge(node13, node74);
drawEdge(node13, node74);
graph.addEdge(node26, node82);
drawEdge(node26, node82);
graph.addEdge(node18, node23);
drawEdge(node18, node23);
graph.addEdge(node67, node70);
drawEdge(node67, node70);
graph.addEdge(node91, node92);
drawEdge(node91, node92);
graph.addEdge(node12, node21);
drawEdge(node12, node21);
graph.addEdge(node25, node61);
drawEdge(node25, node61);
graph.addEdge(node71, node82);
drawEdge(node71, node82);
graph.addEdge(node51, node56);
drawEdge(node51, node56);
graph.addEdge(node57, node77);
drawEdge(node57, node77);
graph.addEdge(node5, node28);
drawEdge(node5, node28);
graph.addEdge(node70, node90);
drawEdge(node70, node90);
graph.addEdge(node82, node96);
drawEdge(node82, node96);
graph.addEdge(node15, node87);
drawEdge(node15, node87);
graph.addEdge(node24, node69);
drawEdge(node24, node69);
graph.addEdge(node2, node77);
drawEdge(node2, node77);
graph.addEdge(node7, node48);
drawEdge(node7, node48);
graph.addEdge(node73, node90);
drawEdge(node73, node90);
graph.addEdge(node64, node91);
drawEdge(node64, node91);
graph.addEdge(node76, node91);
drawEdge(node76, node91);
graph.addEdge(node55, node75);
drawEdge(node55, node75);
graph.addEdge(node45, node58);
drawEdge(node45, node58);
graph.addEdge(node1, node17);
drawEdge(node1, node17);
graph.addEdge(node67, node85);
drawEdge(node67, node85);
graph.addEdge(node52, node58);
drawEdge(node52, node58);
graph.addEdge(node94, node97);
drawEdge(node94, node97);
graph.addEdge(node75, node98);
drawEdge(node75, node98);
graph.addEdge(node4, node52);
drawEdge(node4, node52);
graph.addEdge(node51, node84);
drawEdge(node51, node84);
graph.addEdge(node63, node92);
drawEdge(node63, node92);
graph.addEdge(node11, node42);
drawEdge(node11, node42);
graph.addEdge(node75, node94);
drawEdge(node75, node94);
graph.addEdge(node13, node48);
drawEdge(node13, node48);
graph.addEdge(node37, node51);
drawEdge(node37, node51);
graph.addEdge(node16, node78);
drawEdge(node16, node78);
graph.addEdge(node17, node80);
drawEdge(node17, node80);
graph.addEdge(node83, node95);
drawEdge(node83, node95);
graph.addEdge(node8, node65);
drawEdge(node8, node65);
graph.addEdge(node27, node49);
drawEdge(node27, node49);
graph.addEdge(node30, node30);
drawEdge(node30, node30);
graph.addEdge(node5, node40);
drawEdge(node5, node40);
graph.addEdge(node1, node87);
drawEdge(node1, node87);
graph.addEdge(node48, node93);
drawEdge(node48, node93);
graph.addEdge(node79, node95);
drawEdge(node79, node95);
graph.addEdge(node6, node57);
drawEdge(node6, node57);
graph.addEdge(node43, node46);
drawEdge(node43, node46);
graph.addEdge(node1, node99);
drawEdge(node1, node99);
graph.addEdge(node16, node69);
drawEdge(node16, node69);
graph.addEdge(node15, node23);
drawEdge(node15, node23);
graph.addEdge(node53, node99);
drawEdge(node53, node99);
graph.addEdge(node1, node5);
drawEdge(node1, node5);
graph.addEdge(node41, node71);
drawEdge(node41, node71);
graph.addEdge(node10, node66);
drawEdge(node10, node66);
graph.addEdge(node57, node74);
drawEdge(node57, node74);
graph.addEdge(node19, node28);
drawEdge(node19, node28);
graph.addEdge(node0, node84);
drawEdge(node0, node84);
graph.addEdge(node11, node66);
drawEdge(node11, node66);
graph.addEdge(node59, node76);
drawEdge(node59, node76);
graph.addEdge(node24, node90);
drawEdge(node24, node90);
graph.addEdge(node73, node74);
drawEdge(node73, node74);
graph.addEdge(node32, node42);
drawEdge(node32, node42);
graph.addEdge(node31, node34);
drawEdge(node31, node34);
graph.addEdge(node33, node43);
drawEdge(node33, node43);
graph.addEdge(node75, node76);
drawEdge(node75, node76);
graph.addEdge(node40, node58);
drawEdge(node40, node58);
graph.addEdge(node10, node63);
drawEdge(node10, node63);
graph.addEdge(node65, node86);
drawEdge(node65, node86);
graph.addEdge(node20, node99);
drawEdge(node20, node99);
graph.addEdge(node42, node48);
drawEdge(node42, node48);
graph.addEdge(node40, node64);
drawEdge(node40, node64);
graph.addEdge(node10, node25);
drawEdge(node10, node25);
graph.addEdge(node43, node61);
drawEdge(node43, node61);
graph.addEdge(node0, node53);
drawEdge(node0, node53);
graph.addEdge(node33, node89);
drawEdge(node33, node89);
graph.addEdge(node3, node38);
drawEdge(node3, node38);
graph.addEdge(node28, node38);
drawEdge(node28, node38);
graph.addEdge(node11, node81);
drawEdge(node11, node81);
graph.addEdge(node59, node59);
drawEdge(node59, node59);
graph.addEdge(node33, node44);
drawEdge(node33, node44);
graph.addEdge(node4, node79);
drawEdge(node4, node79);
graph.addEdge(node10, node38);
drawEdge(node10, node38);
graph.addEdge(node28, node85);
drawEdge(node28, node85);
graph.addEdge(node9, node11);
drawEdge(node9, node11);
graph.addEdge(node39, node40);
drawEdge(node39, node40);
graph.addEdge(node31, node95);
drawEdge(node31, node95);
graph.addEdge(node20, node80);
drawEdge(node20, node80);
graph.addEdge(node44, node53);
drawEdge(node44, node53);
graph.addEdge(node5, node50);
drawEdge(node5, node50);
graph.addEdge(node43, node67);
drawEdge(node43, node67);
graph.addEdge(node55, node99);
drawEdge(node55, node99);
graph.addEdge(node23, node48);
drawEdge(node23, node48);
graph.addEdge(node54, node54);
drawEdge(node54, node54);
graph.addEdge(node58, node61);
drawEdge(node58, node61);
graph.addEdge(node2, node66);
drawEdge(node2, node66);
graph.addEdge(node28, node56);
drawEdge(node28, node56);
graph.addEdge(node47, node97);
drawEdge(node47, node97);
graph.addEdge(node21, node26);
drawEdge(node21, node26);
graph.addEdge(node7, node86);
drawEdge(node7, node86);
graph.addEdge(node5, node98);
drawEdge(node5, node98);
graph.addEdge(node36, node70);
drawEdge(node36, node70);
graph.addEdge(node57, node93);
drawEdge(node57, node93);
graph.addEdge(node35, node77);
drawEdge(node35, node77);
graph.addEdge(node0, node57);
drawEdge(node0, node57);
graph.addEdge(node24, node38);
drawEdge(node24, node38);
graph.addEdge(node5, node12);
drawEdge(node5, node12);
graph.addEdge(node38, node99);
drawEdge(node38, node99);
graph.addEdge(node32, node80);
drawEdge(node32, node80);
graph.addEdge(node0, node95);
drawEdge(node0, node95);
graph.addEdge(node74, node99);
drawEdge(node74, node99);
graph.addEdge(node39, node73);
drawEdge(node39, node73);
graph.addEdge(node10, node40);
drawEdge(node10, node40);
graph.addEdge(node52, node87);
drawEdge(node52, node87);
graph.addEdge(node63, node71);
drawEdge(node63, node71);
graph.addEdge(node48, node95);
drawEdge(node48, node95);
graph.addEdge(node51, node69);
drawEdge(node51, node69);
graph.addEdge(node7, node62);
drawEdge(node7, node62);
graph.addEdge(node42, node55);
drawEdge(node42, node55);
graph.addEdge(node66, node81);
drawEdge(node66, node81);
graph.addEdge(node17, node73);
drawEdge(node17, node73);
graph.addEdge(node40, node97);
drawEdge(node40, node97);
graph.addEdge(node0, node48);
drawEdge(node0, node48);
graph.addEdge(node71, node81);
drawEdge(node71, node81);



    that.layout_options.width = that.layout_options.width || 2000;
    that.layout_options.height = that.layout_options.height || 2000;
    that.layout_options.iterations = that.layout_options.iterations || 100000;
    that.layout_options.layout = that.layout_options.layout || that.layout;
    graph.layout = new Layout.ForceDirected(graph, that.layout_options);
    graph.layout.init();
    info_text.nodes = "Nodes " + graph.nodes.length;
    info_text.edges = "Edges " + graph.edges.length;
  }


  /**
   *  Create a node object and add it to the scene.
   */
  function drawNode(node) {
    var draw_object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( {  color: Math.random() * 0xffffff, opacity: 0.5 } ) );

    if(that.show_labels) {
      if(node.data.title != undefined) {
        var label_object = new THREE.Label(node.data.title);
      } else {
        var label_object = new THREE.Label(node.id);
      }
      node.data.label_object = label_object;
      scene.add( node.data.label_object );
    }

    var area = 5000;
    draw_object.position.x = Math.floor(Math.random() * (area + area + 1) - area);
    draw_object.position.y = Math.floor(Math.random() * (area + area + 1) - area);

    if(that.layout === "3d") {
      draw_object.position.z = Math.floor(Math.random() * (area + area + 1) - area);
    }

    draw_object.id = node.id;
    node.data.draw_object = draw_object;
    node.position = draw_object.position;
    scene.add( node.data.draw_object );
  }


  /**
   *  Create an edge object (line) and add it to the scene.
   */
  function drawEdge(source, target) {
      material = new THREE.LineBasicMaterial({ color: 0xff0000, opacity: 1, linewidth: 0.5 });

      var tmp_geo = new THREE.Geometry();
      tmp_geo.vertices.push(source.data.draw_object.position);
      tmp_geo.vertices.push(target.data.draw_object.position);

      line = new THREE.Line( tmp_geo, material, THREE.LinePieces );
      line.scale.x = line.scale.y = line.scale.z = 1;
      line.originalScale = 1;

      geometries.push(tmp_geo);

      scene.add( line );
  }


  function animate() {
    requestAnimationFrame( animate );
    controls.update();
    render();
    if(that.show_info) {
      printInfo();
    }
  }


  function render() {
    // Generate layout if not finished
    if(!graph.layout.finished) {
      info_text.calc = "<span style='color: red'>Calculating layout...</span>";
      graph.layout.generate();
    } else {
      info_text.calc = "";
    }

    // Update position of lines (edges)
    for(var i=0; i<geometries.length; i++) {
      geometries[i].verticesNeedUpdate = true;
    }


    // Show labels if set
    // It creates the labels when this options is set during visualization
    if(that.show_labels) {
      var length = graph.nodes.length;
      for(var i=0; i<length; i++) {
        var node = graph.nodes[i];
        if(node.data.label_object != undefined) {
          node.data.label_object.position.x = node.data.draw_object.position.x;
          node.data.label_object.position.y = node.data.draw_object.position.y - 100;
          node.data.label_object.position.z = node.data.draw_object.position.z;
          node.data.label_object.lookAt(camera.position);
        } else {
          if(node.data.title != undefined) {
            var label_object = new THREE.Label(node.data.title, node.data.draw_object);
          } else {
            var label_object = new THREE.Label(node.id, node.data.draw_object);
          }
          node.data.label_object = label_object;
          scene.add( node.data.label_object );
        }
      }
    } else {
      var length = graph.nodes.length;
      for(var i=0; i<length; i++) {
        var node = graph.nodes[i];
        if(node.data.label_object != undefined) {
          scene.remove( node.data.label_object );
          node.data.label_object = undefined;
        }
      }
    }

    // render selection
    if(that.selection) {
      object_selection.render(scene, camera);
    }

    // update stats
    if(that.show_stats) {
      stats.update();
    }

    // render scene
    renderer.render( scene, camera );
  }

  /**
   *  Prints info from the attribute info_text.
   */
  function printInfo(text) {
    var str = '';
    for(var index in info_text) {
      if(str != '' && info_text[index] != '') {
        str += " - ";
      }
      str += info_text[index];
    }
    document.getElementById("graph-info").innerHTML = str;
  }

  // Generate random number
  function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  // Stop layout calculation
  this.stop_calculating = function() {
    graph.layout.stop_calculating();
  }
}
