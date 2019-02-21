//PSEUDO CODE
    //Pseudo code idea - Cian
    // Pseudo code for MVP
    //FIRST CREATE APP OBJECT
        // For Namespacing
    const app = {};
    app.apiKey = 'c29c1aea1bc9d6b87f4f2175fcbf13c4';
    app.apiId = '8423c766';
    app.apiUrl = 'http://api.yummly.com/v1/api/recipes';
     
    // document ready function with init() function called within
    $(function(){
        app.init();
    });

    // init function declaration
    app.init = function(){
       // declare initial object variables
        $('.user-input').on('submit', function(e){
            e.preventDefault();
            query = $('#search-recipe').val();
            queryType = typeof(query);
            if (query === ''){
                console.log('ENTER A INGREDIENT');
                // Add eror handeling message - no input
            } else {
                app.getRecipe(query);
                $('#search-recipe').val('');           
            }
        });
        // create event listener on "show recipes" button to call .getRecipte() function

    };

    // recipe function
            // ajax call to query Yummly api
            // randomly select recipe
            // chain .then() function to show response response on our site
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
                requirePictures: true
            },

        }).then(function(results){
            $('.gallery').empty();
            if(results.matches.length === 0) {
                // Add eror handeling message - no results
                console.log("THERE ARE NO RESULTS");
            } else {
                console.log(results);
                let responseArray = results.matches;
                let recipeArray = [];
                for(i = 0; i < 3; i++){
                    let index = Math.floor(Math.random() * 100);
                    recipeArray.push(responseArray[index]);           
                }
                app.displayRecipes(recipeArray);
            }
        });
    }
    
    // print results in the dom
    app.displayRecipes = function(array){
        array.forEach(function(item) {
            const title = item.recipeName;
            const image = item.imageUrlsBySize;
            console.log(image);
            // api returns 90px x 90px image
            // manipulate url to return a larger (700px x 700px) image than supplied by api
            const bigImage = image[90].slice(0, image[90].length -4) + "700-c";
            const ingredients = item.ingredients;
            const time = item.totalTimeInSeconds;

            $('.gallery')
                .append(`<div class="photo-box"><h2>${title}</h2><img src="${bigImage}" alt="${title}"></div>`);
        });
    
    
        
    }
    
    
        
    
    // event listener on button to call random recipe
        // listener calls recipe function

    


// STRETCH GOALS
    //PICK A RECIPE BASED ON INGREDIENTS IN FRIDGE
    //PICK FOOD BASED ON COOKTIME ?
    //WEATHER API PICKS A FOOD BASED ON WEATHER
    //WEATHER API ASLO HAS THE TIME SO ADD IN TIME TO CRITERIA FOR FOOD CHOICE
    //OPTION FOR MOOD MUSIC TO PLAY WHILE COOKING FROM SPOTIFY API
