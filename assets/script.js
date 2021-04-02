
$(document).ready(function(){
// Populates the date in top right of page
getDateTime();
// Populate left column features on page load
leftColumnFeatures();
// Populate left column navigation on page load
leftColumnNav();
// Populate left column notes list
leftColumnNotes();
// Populates the body on page load
popGroupLinks('helpful');
// Populates the body permanent links
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
  var v1 = "dashFeatureLinks";
  var v2 = dashFeatures;
  var v3 = "nav_feature";
  helperHandleBar(v1, v2, v3);
}

function leftColumnNav(){
  var v1 = "dashNavLinks";
  var v2 = dashLinkGroups;
  var v3 = "nav_content";
  helperHandleBar(v1, v2, v3);
}

function leftColumnNotes(){
  var v1 = "dashNoteList";
  var v2 = notebook;
  var v3 = "nav_note_list";
  helperHandleBar(v1, v2, v3);
}

//==============================================================
//== OnClick Functions =========================================
//==============================================================

function popPermaLinks(){
  var v1 = "dashPermaLinks";
  var v2 = dashPermaLinks;
  var v3 = "perma_links";
  helperHandleBar(v1, v2, v3);
}

function popNotes(){
  var v1 = "dashBodyNotes";
  var v2 = "";
  var v3 = "notes_content";
  var v4 = "notes";
  helperHandleBar(v1, v2, v3, v4);
}

function popGroupLinks(group_label){
    var bodyTemplate = $("#dashBodyLinks").html();
    var compiledBodyCode = Handlebars.compile(bodyTemplate);

    switch(group_label) {
        case "dash": var bodyResult = compiledBodyCode(dashLinks.dash);     
          $("h2.content").html(group_label + " Links");
          $("#body_content").html(bodyResult); 
          break;
        case "admin": var bodyResult = compiledBodyCode(dashLinks.admin);     
          $("h2.content").html(group_label + " Links");
          $("#body_content").html(bodyResult); 
          break;
        case "helpful": var bodyResult = compiledBodyCode(dashLinks.helpful);     
          $("h2.content").html(group_label + " Links");
          $("#body_content").html(bodyResult); 
          break;
        case "verizon": var bodyResult = compiledBodyCode(verizon_Links.team_projects); 
          $("h2.content").html(group_label + " Links");
          $("#body_content").html(bodyResult);
          break;
        default: var bodyResult = popNotes(); break;
      }    

};

//==============================================================
//== Helper Functions ==========================================
//==============================================================

function helperHandleBar(v1, v2, v3, v4){
  var t = $("#" + v1).html();
  var c = Handlebars.compile(t);
  var r = c(v2);
  if (v4){ $("h2." + v4).html(v4); }
  $("#" + v3).html(r);
}