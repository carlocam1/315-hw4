

export function changePageContent (){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
            // console.log("data " + data);
            $("#app").html(data);
        }); 

    }
    else {
        $.get(`pages/home/home.html`, function (data) {
            // console.log("data " + data);
            $("#app").html(data);
        }); 
    }
    
    // event listiners buttons
    $.get(`pages/browse/browse.html`, function () {
        
        $(".button-view").click(function(e){
            console.log("clicked view more ");
        });

        $(".button").click(function(e){
            console.log("lower button");
        });
    });

    $.get(`pages/createRecipe/createRecipe.html`, function () {
 
        $("#submit").click(function(e){
            e.preventDefault();
            let recipeName = $("#rName").val();
            let recipeDescription = $("#rDescription").val();
            let rTotalTime = $("#rTotalTime").val();
            let rSize = $("#rSize").val();
            let ingredientOne = $("#ingredientOne").val();
            let ingredientTwo = $("#ingredientTwo").val();
            let ingredientThree = $("#ingredientThree").val();
            let instructionOne = $("#instructionOne").val();
            let instructionTwo = $("#instructionTwo").val();
            let instructionThree = $("#instructionThree").val();
            let instructionFour = $("#instructionFour").val();

            console.log("Recipe Name: " + recipeName + ', '
             + "Recipe Description: " + recipeDescription + ', ' + "Recipe Total Time: " + rTotalTime + ', '
             + "Recipe Size: " + rSize + ', ' 
             + "Ingredient One: " + ingredientOne + ', '
             + "Ingredient Two: " + ingredientTwo + ', '
             + "Ingredient Three: " + ingredientThree + ', ' 
             + "Instruction One: " + instructionOne + ', ' 
             + "Instruction Two: " + instructionTwo + ', ' 
             + "Instruction Three: " + instructionThree + ', ' 
             + "Instruction four: " + instructionFour);
        });
    });

    $.get(`pages/editRecipe/editRecipe.html`, function (e) {
 
        $("#edit").click(function(e){
            e.preventDefault();

            let userObj = {
                rName: "Cookies",
                rDescription: "Spicy Dish",
                rTotalTime: "1:00",
                rSize: "Large",
                ingredientOne: "Pepper",
                ingredientTwo: "Onion",
                ingredientThree: "Tomato Sauce",
                instructionOne: "Fry Onions",
                instructionTwo: "Pour tomato sauce",
                instructionThree: "Add pepper",
                instructionFour: "Stir for 30 minutes"

            };

            console.log(userObj);
            $("#rName").val(userObj.rName);
            $("#rDescription").val(userObj.rDescription);
            $("#rTotalTime").val(userObj.rTotalTime);
            $("#rSize").val(userObj.rSize);
            $("#ingredientOne").val(userObj.ingredientOne);
            $("#ingredientTwo").val(userObj.ingredientTwo);
            $("#ingredientThree").val(userObj.ingredientThree);
            $("#instructionOne").val(userObj.instructionOne);
            $("#instructionTwo").val(userObj.instructionTwo);
            $("#instructionThree").val(userObj.instructionThree);
            $("#instructionFour").val(userObj.instructionFour);
            // console.log("Inputs " + rName + ' ' + rDescription);
        });
    });

    $.get(`pages/login/login.html`, function () {
        $("#login-submit").click(function(e){
            e.preventDefault();
            let loginEmail = $("#email").val();
            let loginPassword = $("#password").val();

            console.log("Email: " + loginEmail + ', ' + "Password: " + loginPassword);
        });

        $("#signup-submit").click(function(e){
            e.preventDefault();
            let firstName = $("#fName").val();
            let lastName = $("#lName").val();
            let signupEmail = $("#signup-email").val();
            let signupPassword = $("#signup-password").val();

            console.log("First Name: " + firstName + ', ' + "Last Name: " + lastName + ', ' + "Sign up Email: " + signupEmail + ', ' + "Sign up Password: " + signupPassword);
        });
    });
};
