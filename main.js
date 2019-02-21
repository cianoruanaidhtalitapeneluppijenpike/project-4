//PSEUDO CODE
    //Pseudo code idea - Cian
    // Pseudo code for MVP
    //FIRST CREATE APP OBJECT
        // For Namespacing
    const app = {};
    app.apiKey = 'c29c1aea1bc9d6b87f4f2175fcbf13c4';
    app.apiId = '8423c766';
    app.apiUrl = 'http://api.yummly.com/v1/api/recipes';
    let query = "chicken"
     
    // document ready function with init() function called within
    $(function(){
        app.init();
    });

    app.init = function(){
       // declare initial object variables
        app.getRecipe(query);
    };

    app.getRecipe = function(query){
        $.ajax({
            // api urls
            url: app.apiUrl,
            method:'GET',
            dataType:'json',
            data: {
             // api keys
                _app_key: app.apiKey,
                _app_id: app.apiId,
                format:'json',
                q: query,
                maxResult: 100,
            },

        }).then(function(results){
            let responseArray = results.matches;
            let recipeArray = [];
            for(i = 0; i < 3; i++){
                let index = Math.floor(Math.random() * 100);
                recipeArray.push(responseArray[index]);           
            }
            console.log(recipeArray);     
        })
    }
    
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
