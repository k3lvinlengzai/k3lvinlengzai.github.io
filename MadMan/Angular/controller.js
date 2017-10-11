/**
 * Created by chanwi on 11/15/2016.
 */
app.controller('ContentController_News', function ($scope) {
    $scope.news = [
        {
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Square Enix',
            'description' : 'this is the description',
            'link' : '#',
        },
        {
            'img': 'https://i.pinimg.com/736x/ce/74/35/ce7435d514171d4947f2c73557bebcda--chrissy-constanza-hair-styles.jpg',
            'title' : 'Game Spot',
            'description' : 'this is the description',
            'link' : '#',
        },
        {
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Gamerholic',
            'description' : 'Game Studio',
            'link' : '#',
        },
    ]
});

app.controller('SideBarController', function ($scope) {
    $scope.upcoming = [
        {
            'id' : '1',
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Square Enix',
            'description' : 'this is the description',
            'link' : '#',
        },
        {
            'id' : '2',
            'img': 'https://i.pinimg.com/736x/ce/74/35/ce7435d514171d4947f2c73557bebcda--chrissy-constanza-hair-styles.jpg',
            'title' : 'Game Spot',
            'description' : 'this is the description',
            'link' : '#',
        },
        {
            'id' : '3',
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Gamerholic',
            'description' : 'Game Studio',
            'link' : '#',
        },
    ]
    $scope.reviews = [
        {
            'id' : '1',
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Square Enix',
            'description' : 'this is the description',
            'link' : '#',
            'rate' : 8.9,
            'comment' : 'Good',
        },
        {
            'id' : '2',
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Square Enix',
            'description' : 'this is the description',
            'link' : '#',
            'rate' : 1,
            'comment' : 'Sucks',
        },
    ]
});


app.controller('ThumbnailController', function ($scope) {
    $scope.thumbs = [
        {
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Square Enix',
            'description' : 'this is the description',
            'link' : '#',
        },
        {
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Game Spot',
            'description' : 'this is the description',
            'link' : '#',
        },
        {
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Gamerholic',
            'description' : 'Game Studio',
            'link' : '#',
        },
        {
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Gamerholic',
            'description' : 'Game Studio',
            'link' : '#',
        },
        {
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Gamerholic',
            'description' : 'Game Studio',
            'link' : '#',
        },
        {
            'img': 'http://data.whicdn.com/images/147628795/original.jpg',
            'title' : 'Gamerholic',
            'description' : 'Game Studio',
            'link' : '#',
        },
    ]
});
