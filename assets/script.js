$(document).ready(function(){
// Populate left column navigation
    var navTemplate = $("#dashNavLinks").html();
    var compiledNavCode = Handlebars.compile(navTemplate);
    var navResult = compiledNavCode(dashLinkGroups);
    $("#nav_content").html(navResult);
    popGroupLinks('notes');



    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];

    var time = dayName + " " + d.getHours() + ":" + d.getMinutes().toString().padStart(2,'0');
    $("#time").html(time);
});

// Populate body navigation based on nav click
function popGroupLinks(group_label){
    var bodyTemplate = $("#dashBodyLinks").html();
    var compiledBodyCode = Handlebars.compile(bodyTemplate);
    
    
    var bodyNotesTemplate = $("#dashBodyNotes").html();
    var compiledBodyNotesCode = Handlebars.compile(bodyNotesTemplate);

    switch(group_label) {
        case "dash": var bodyResult = compiledBodyCode(dashLinks.dash); break;
        case "admin": var bodyResult = compiledBodyCode(dashLinks.admin); break;
        case "aem": var bodyResult = compiledBodyCode(dashLinks.aem); break;
        case "notes": var bodyResult = compiledBodyNotesCode(); break;
        default: var bodyResult = compiledBodyCode(dashLinks.dash); break;
      }    
    $("h2.content").html(group_label + " Links");
    $("#body_content").html(bodyResult);
};

/*
// Populate body navigation based on nav click version 2!
function popGroupLinks2(group_label){
    var bodyTemplate = $("#dashBodyLinks").html();
    var compiledBodyCode = Handlebars.compile(bodyTemplate);   
    switch(group_label) {
        case "dash": var bodyResult = compiledBodyCode(dashLinks.dash); break;
        case "admin": var bodyResult = compiledBodyCode(dashLinks.admin); break;
        case "aem": var bodyResult = compiledBodyCode(dashLinks.aem); break;
        case "notes": var bodyResult = compiledBodyCode(); break;
        default: var bodyResult = compiledBodyCode(dashLinks.dash); break;
      }    
    $("h2").html(group_label + " Links");
    $("#body_content").html(bodyResult);
};
*/