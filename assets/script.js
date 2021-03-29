
$(document).ready(function(){
// Populates the date in top right of page
getDateTime();
leftColumnFeatures();
// Populate left column navigation on page load
leftColumnNav();
// Populates the body on page load
popGroupLinks('dash');
popPermaLinks();

});

//==============================================================
//== OnLoad Functions ==========================================
//==============================================================

function getDateTime(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date();
  var dayName = days[d.getDay()];
  var time = dayName + " " + d.getHours() + ":" + d.getMinutes().toString().padStart(2,'0');
  $("#time").html(time);
}

function leftColumnFeatures(){
  var navFeatureTemplate = $("#dashFeatureLinks").html();
  var compiledFeatureCode = Handlebars.compile(navFeatureTemplate);
  var navFeatureResult = compiledFeatureCode(dashFeatures);
  $("#nav_feature").html(navFeatureResult);
}

function leftColumnNav(){
  var navTemplate = $("#dashNavLinks").html();
  var compiledNavCode = Handlebars.compile(navTemplate);
  var navResult = compiledNavCode(dashLinkGroups);
  $("#nav_content").html(navResult);
}

//==============================================================
//== OnClick Functions =========================================
//==============================================================
function popPermaLinks(){
  var permaTemplate = $("#dashPermaLinks").html();
  var compiledPermaCode = Handlebars.compile(permaTemplate);
  var permaResult = compiledPermaCode(dashPermaLinks);
  $("#perma_links").html(permaResult);
}

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

