//======================================================================
//
//  Navigation links
//
//======================================================================
var dashGroups =  [
    {
        group_id: "Dash",
        group_label: "dash"
    },
    {
        group_id: "Admin",
        group_label: "admin"
    },
    {
        group_id:"AEM",
        group_label:"aem"
    }
]
//======================================================================
//
//  Body links
//
//======================================================================  
var dashLinks = {
    dash: [
        {
            link_label: "Dash link 1",
            link_url: "https://www.verizon.com",
            link_image: "",
            link_target: "_blank" 
        },
        {
            link_label: "Dash link 2",
            link_url: "https://www.verizon.com",
            link_image: "",
            link_target: "_blank" 
        },
        {
            link_label: "Dash link 3",
            link_url: "https://www.verizon.com",
            link_image: "",
            link_target: "_blank" 
        },
        {
            link_label: "Dash link 4",
            link_url: "https://www.verizon.com",
            link_image: "",
            link_target: "_blank" 
        }
    ],
    admin: [
        {
            link_label: "Home",
            link_url: "https://www.verizon.com",
            link_image: "",
            link_target: "_blank"
        },
        {
            link_label: "Shop",
            link_url: "https://www.verizon.com/shop",
            link_image: "",
            link_target: "_blank"
        },
        {
            link_label: "Deals",
            link_url: "https://www.verizon.com/deals",
            link_image: "",
            link_target: "_blank"
        }
    ],
    aem: [
        {
            link_label: "AEM link 1",
            link_url: "https://www.adobe.com",
            link_image: "",
            link_target: "_blank"
        },
        {
            link_label: "AEM link 2",
            link_url: "https://www.adobe.com",
            link_image: "",
            link_target: "_blank"
        }
    ]
}

$(document).ready(function(){
// Populate left column navigation
    var navTemplate = $("#dashNavLinks").html();
    var compiledNavCode = Handlebars.compile(navTemplate);
    var navResult = compiledNavCode(dashGroups);
    $("#nav_content").html(navResult);
});

// Populate body navigation based on nav click
function popGroupLinks(group_label){
    console.log(group_label);
    var bodyTemplate = $("#dashBodyLinks").html();
    var compiledBodyCode = Handlebars.compile(bodyTemplate);
    
    switch(group_label) {
        case "dash":
            var bodyResult = compiledBodyCode(dashLinks.dash);
            break;
        case "admin":
            var bodyResult = compiledBodyCode(dashLinks.admin);
            break;
        case "aem":
            var bodyResult = compiledBodyCode(dashLinks.aem);
            break;
        default:
            var bodyResult = compiledBodyCode(dashLinks.dash);
            break;
      }
    group_label = toUpperCase(group_label);
    $("h1").html(group_label + " Links");
    $("#body_content").html(bodyResult);
};
