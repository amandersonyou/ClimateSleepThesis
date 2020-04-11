// create a new vue intance (root of app)
// el connects to the html div with the id matching the el's assigned id (#app)
// the data then points to what it holds to be loaded in the DOM. 
var app = new Vue({
    el: '#app',
    data: {
        mapTitle: 'USA Air Quality: Elemental Carbon',
        image: 'https://raw.githubusercontent.com/amandersonyou/ClimateSleepThesis/master/Assets/testing_img.png'
    }
})