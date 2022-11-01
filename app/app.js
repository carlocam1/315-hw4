import { changePageContent } from "../model/model.js";

function changeRoute(){
    changePageContent();
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();

    $(".bars").click(function(e){
        // console.log("clicked");
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        // console.log("clicked");
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
        // $(".links.active").toggleClass("active");
        $(".links").removeClass("active");
    });
}

$(document).ready(function(){
    initURLListener();
})