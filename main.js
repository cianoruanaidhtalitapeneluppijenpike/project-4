//PSEUDO CODE
    //Pseudo code idea - Cian
    // Pseudo code for MVP
    //FIRST CREATE APP OBJECT
        // For Namespacing
    const app = {};
    app.apiKey = 'c29c1aea1bc9d6b87f4f2175fcbf13c4';
    app.apiId = '8423c766';
    app.apiurl = 'http://api.yummly.com/v1/api/recipes';
     
    // document ready function with init() function called within
    $(function(){
        app.init();
    });

    app.init = function(){
        console.log('this is init');
    };
    // declare initial object variables
    // api keys
    // api urls

   

    // init function declaration
        // event listener on button to call random recipe
        // listener calls recipe function

    // recipe function
        // ajax call to query Yummly api
        // randomly select recipe
        // chain .then() function to show response response on our site


// STRETCH GOALS
    //PICK A RECIPE BASED ON INGREDIENTS IN FRIDGE
    //PICK FOOD BASED ON COOKTIME ?
    //WEATHER API PICKS A FOOD BASED ON WEATHER
    //WEATHER API ASLO HAS THE TIME SO ADD IN TIME TO CRITERIA FOR FOOD CHOICE
    //OPTION FOR MOOD MUSIC TO PLAY WHILE COOKING FROM SPOTIFY API
