function initMap() {
    const options = {
        zoom:5,
        center: {lat:37.0902, lng:-95.7129},
        //lebanon KS
        mapTypeControl: false,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.TOP_CENTER,
        },
        zoomControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
        },
        scaleControl: false,
        streetViewControl: false,
        streetViewControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP,
        },
        fullscreenControl: false,
    }
    const map = new google.maps.Map(document.getElementById('map'), options)
    setMarkers(map);
} 

const nationalParks = [
    ["Gates of the Arctic", 67.8819, -153.1861, 63],
    ["Kobuk Valley", 67.3356, -159.1243, 62],
    ["Lake Clark", 60.4127, -154.3235, 61],
    ["Isle Royale", 47.9959, -88.9093, 60],
    ["North Cascades", 48.7718, -121.2985, 59],
    ["National Park of American Samoa", -14.2583, -170.6833, 58],
    ["Wrangell-St. Elias", 61.7104, -142.9857, 57],
    ["Dry Tortugas", 24.6285, -82.8732, 56],
    ["Katmai", 58.6126, -155.0631, 55],
    ["Great Basin", 38.9300, -114.2634, 54],
    ["Virgin Islands", 18.3424, -64.7486, 53],
    ["Congaree", 33.7948, -80.7821, 52],
    ["Pinnacles", 36.4906, -121.1825, 51],
    ["Guadalupe Mountains", 31.9231, -104.8645, 50],
    ["Voyageurs", 48.4725, -92.8492, 49],
    ["Kenai Fjords", 59.8487, -150.1879, 48],
    ["Channel Islands", 34.0069, -119.7785, 47],
    ["Black Canyon of the Gunnison", 38.5754, -107.7416, 46],
    ["Carlsbad Caverns", 32.1291, -104.5539, 45],
    ["Big Bend", 29.2498, -103.2502, 44],
    ["Redwood", 41.2132, -124.0046, 43],
    ["Lassen Volcanic", 40.4977, -121.4207, 42],
    ["Great Sand Dunes", 37.7330, -105.5125, 41],
    ["Mammoth Cave", 37.1815, -86.1505, 40],
    ["Mesa Verde", 37.2309, -108.4618, 39],
    ["Denali", 63.1148, -151.1926, 38],
    ["White Sands", 32.7872, -106.3257, 37],
    ["Wind Cave", 43.5724, -103.4416, 36],
    ["Kings Canyon", 36.8879, -118.5551, 35],
    ["Petrified Forest", 35.0037, -109.7889, 34],
    ["Glacier Bay", 58.6658, -136.9002, 33],
    ["Theodore Roosevelt", 46.9790, -103.5387, 32],
    ["Crater Lake", 42.8684, -122.1685, 31],
    ["Biscayne", 25.4824, -80.2083, 30],
    ["Canyonlands", 38.2136, -109.9025, 29],
    ["Badlands", 43.8554, -102.3397, 28],
    ["Haleakala", 20.7204, -156.1552, 27],
    ["Saguaro", 32.2967, -111.1666, 26],
    ["Everglades", 25.2866, -80.8987, 25],
    ["New River Gorge", 37.8776, -81.0189, 24],
    ["Capitol Reef", 38.0877, -111.1355, 23],
    ["Sequoia", 36.4864, -118.5658, 22],
    ["Hawaii Volcanoes", 19.4194, -155.2885, 21],
    ["Shenandoah", 38.4755, -78.4535, 20],
    ["Hot Springs", 34.5217, -93.0424, 19],
    ["Mount Rainier", 46.8800, -121.7269, 18],
    ["Arches", 38.7331, -109.5925, 17],
    ["Death Valley", 36.5323, -116.9325, 16],
    ["Gateway Arch", 38.6270, -90.1855, 15],
    ["Indiana Dunes", 41.6506, -87.0708, 14],
    ["Cuyahoga Valley", 41.2808, -81.5678, 13],
    ["Bryce Canyon", 37.5930, -112.1871, 12],
    ["Joshua Tree", 33.8734, -115.9010, 11],
    ["Glacier", 48.7596, -113.7870, 10],
    ["Olympic", 47.8021, -123.6044, 9],
    ["Grand Teton", 43.7904, -110.6818, 8],
    ["Acadia", 44.3386, -68.2733, 7],
    ["Yellowstone", 44.4280, -110.5885, 6],
    ["Yosemite", 37.8651, -119.5383, 5],
    ["Zion", 37.2982, -113.0263, 4],
    ["Rocky Mountain", 40.3428, -105.6836, 3],
    ["Grand Canyon", 36.1069, -112.1129, 2],
    ["Great Smoky Mountains", 35.6131, -83.5532, 1],
  ];

  function setMarkers(map) {
    const image = {
      url:"images/tree.svg",
      size: new google.maps.Size(20, 30),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the middle of the tree at (0, 15).
      anchor: new google.maps.Point(0, 15),
    };
    for (let i = 0; i < nationalParks.length; i++) {
        const nationalPark = nationalParks[i];
        new google.maps.Marker({
          position: { lat: nationalPark[1], lng: nationalPark[2] },
          map,
          icon: image,
          title: nationalPark[0],
          zIndex: nationalPark[3],
        });
      }
    }

const clickMarker = (map) => {

}


